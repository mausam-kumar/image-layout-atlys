import { FC } from "react";
import { motion } from "framer-motion"
import Image, { ImageProps } from "./Image";

interface ImageCardProps extends ImageProps {
    showPopover: () => void
}

const ImageCard: FC<ImageCardProps> = ({ src, id, showPopover, ...props }) => {

    return (
        <>
            <motion.div
                layoutId={src}
                onClick={showPopover}
                transition={{ duration: 0.2 }}
                className="cursor-pointer md:hidden bg-white shadow-sm border rounded-lg overflow-hidden w-full"
            >
                <Image
                    {...props}
                    src={`https://picsum.photos/id/${id}/500/300`}
                    className="w-full object-contain"
                />
            </motion.div>
            <motion.div
                onClick={showPopover}
                className="cursor-pointer hidden md:block hover:scale-105 hover:shadow hover:border transition-transform duration-200 bg-white shadow-sm border rounded-lg overflow-hidden w-full"
            >
                <Image
                    {...props}
                    src={`https://picsum.photos/id/${id}/500/300`}
                    className="w-full object-contain"
                />
            </motion.div>
        </>
    );
};

export default ImageCard;
