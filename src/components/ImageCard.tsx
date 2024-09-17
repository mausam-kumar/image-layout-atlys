import { FC } from "react";
import { motion } from "framer-motion"
import Image, { ImageProps } from "./Image";

interface ImageCardProps extends ImageProps {
    showPopover: () => void
}

const ImageCard: FC<ImageCardProps> = ({ src, id, showPopover, ...props }) => {

    return (
        <motion.div
            layoutId={src}
            onClick={showPopover}
            className="cursor-pointer bg-white shadow-sm border rounded-lg overflow-hidden w-full"
        >
            <Image
                {...props}
                src={`https://picsum.photos/id/${id}/500/300`}
                className="w-full object-contain"
            />
        </motion.div>
    );
};

export default ImageCard;
