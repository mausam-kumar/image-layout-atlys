import { motion } from "framer-motion"
import { FC } from "react";
import { Image as ImageProps } from "../type";
import Image from "./Image";
import { useGlobalStateContext } from "../context/GlobalStateProvider";


const ImageCardDetails: FC<ImageProps> = ({ download_url, author, height, width, id }) => {
    const { hidePopover } = useGlobalStateContext()

    return (
        <div className="bg-white h-screen relative rounded-lg overflow-hidden w-full pt-10">
            <motion.div
                layoutId={download_url}
                className="cursor-pointer p-4 rounded shadow"
            >
                <Image
                    title={author}
                    id={id}
                    height={height}
                    width={width}
                    src={download_url}
                    className="w-full object-contain"
                />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900">{author}</h2>
                </div>
                <button onClick={hidePopover} className="absolute top-4 right-4 pb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10l4 4m0 -4l-4 4" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /></svg>
                </button>
            </motion.div>
        </div>
    );
};

export default ImageCardDetails;
