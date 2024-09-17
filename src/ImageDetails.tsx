import useFetchImageDetails from "./hooks/useFetchImageDetails";

const ImageDetails = () => {
    const { data } = useFetchImageDetails("1")
    console.log(data)
    return <div>Image Details</div>
};

export default ImageDetails