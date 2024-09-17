import useFetchImageList from "../hooks/useFetchImageList";
import Error from "./Error";
import ImageCard from "./ImageCard";
import Loader from "./Loader";

const CardGrid = () => {
    const { images, isLoading, error } = useFetchImageList()

    if (isLoading || !images) {
        return <Loader />
    }

    if (error) {
        return <Error message="Error while fetching images." />
    }

    return (
        <div
            className="grid masonry-2-col break-inside grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 border"
        >
            {images.map(({ download_url, id, author, height, width }) => (
                <ImageCard
                    key={id}
                    src={download_url}
                    title={author}
                    alt={author}
                    width={width}
                    height={height}
                    loading="eager"
                />
            ))}
        </div>
    );
};

export default CardGrid;
