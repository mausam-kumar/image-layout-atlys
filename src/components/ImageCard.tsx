import { FC } from "react";
import Image, { ImageProps } from "./Image";

const ImageCard: FC<ImageProps> = ({ title, ...props }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
            <Image
                {...props}
                className="w-full object-contain"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            </div>
        </div>
    );
};

export default ImageCard;
