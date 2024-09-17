import useFetchImageList from "./hooks/useFetchImageList";

const ImageGrid = () => {
    const { data } = useFetchImageList()
    console.log(data)
    return <div>
        Image Grid
    </div>
};

export default ImageGrid