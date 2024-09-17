import { useGlobalStateContext } from "../context/GlobalStateProvider";
import useFetchImageList from "../hooks/useFetchImageList";
import ImageCardDetails from "./CardDetails";
import Error from "./Error";
import ImageCard from "./ImageCard";
import Loader from "./Loader";
import MobilePopover from "./popover/MobilePopover";

const CardGrid = () => {
    const { images, isLoading, error } = useFetchImageList()
    const { showPopover } = useGlobalStateContext()

    if (isLoading || !images) {
        return <Loader />
    }

    if (error) {
        return <Error message="Error while fetching images." />
    }

    return (
        <>
            <div
                className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2"
            >
                {images.map((image) => {
                    const { download_url, id, author, height, width } = image
                    return <ImageCard
                        key={id}
                        src={download_url}
                        title={author}
                        alt={author}
                        width={width}
                        height={height}
                        loading="eager"
                        showPopover={() => showPopover({
                            children: <ImageCardDetails {...image} />,
                            key: download_url
                        })}
                    />
                }
                )}
            </div>
            <MobilePopover />
        </>
    );
};

export default CardGrid;
