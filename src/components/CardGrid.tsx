import { useGlobalStateContext } from "../context/GlobalStateProvider";
import useFetchImageList from "../hooks/useFetchImageList";
import ImageCardDetails from "./CardDetails";
import Error from "./Error";
import ImageCard from "./ImageCard";
import Loader from "./Loader";
import MobilePopover from "./popover/MobilePopover";

const CardGrid = () => {
    const { images, error, loadMore, isLoading } = useFetchImageList()
    const { showPopover } = useGlobalStateContext()

    const endOfPageRef = (endPage: HTMLDivElement | null) => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        }, { threshold: 0.3 });
        if (endPage) observer.observe(endPage);
    };

    if (error) {
        return <Error message="Error while fetching images." />
    }

    return (
        <>
            <div
                className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
            >
                {images?.map((image) => {
                    const { download_url, id, author } = image
                    return <ImageCard
                        key={id}
                        src={download_url}
                        title={author}
                        alt={author}
                        id={id}
                        height={300}
                        width={500}
                        loading="eager"
                        showPopover={() => showPopover({
                            children: <ImageCardDetails {...image} />,
                            key: download_url
                        })}
                    />
                }
                )}
            </div>
            <div className="h-16" ref={endOfPageRef} />
            <div className="mt-2">
                {isLoading && <Loader />}
            </div>
            <MobilePopover />
        </>
    );
};

export default CardGrid;
