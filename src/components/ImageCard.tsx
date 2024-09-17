import { FC } from "react";
import { motion } from "framer-motion"
import Image, { ImageProps } from "./Image";

interface ImageCardProps extends ImageProps {
    showPopover: () => void
}

const ImageCard: FC<ImageCardProps> = ({ title, src, showPopover, ...props }) => {
    return (
        <motion.div
            layoutId={src}
            onClick={showPopover}
            className="cursor-pointer bg-white shadow-sm border rounded-lg overflow-hidden w-full"
        >
            <Image
                {...props}
                src={src}
                className="w-full object-contain"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            </div>
        </motion.div>
    );
};

export default ImageCard;
