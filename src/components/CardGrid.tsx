/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from "react";
import { useGlobalStateContext } from "../context/GlobalStateProvider";
import useFetchImageList from "../hooks/useFetchImageList";
import ImageCardDetails from "./CardDetails";
import ImageCard from "./ImageCard";
import Loader from "./Loader";
import MobilePopover from "./popover/MobilePopover";

const CardGrid = () => {
    const { images, error, loadMore, isLoading } = useFetchImageList()
    const { showPopover } = useGlobalStateContext()

    const observer = useRef<any>(null);

    const endOfPageRef = useCallback((endPage: HTMLDivElement | null) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        });
        if (endPage) observer.current.observe(endPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    if (error) {
        return <Loader />
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
            {!isLoading && <div className="h-2" ref={endOfPageRef} />}
            <div className="mt-2">
                {isLoading && <Loader />}
            </div>
            <MobilePopover />
        </>
    );
};

export default CardGrid;
