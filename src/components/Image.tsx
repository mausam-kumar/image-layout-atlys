import React, { useState } from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    placeholderColor?: string;
}

const Image: React.FC<ImageProps> = ({
    placeholderColor = "#f4f4f5",
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setHasError(true);

    return (
        <div
            className="relative overflow-hidden bg-gray-100"
            style={{
                backgroundColor: placeholderColor,
            }}
        >
            {!hasError && (
                <img
                    onLoad={handleLoad}
                    onError={handleError}
                    height="auto"
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"
                        }`}
                    {...props}
                />
            )}

            {!isLoaded && !hasError && (
                <div
                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-gray-500"
                    style={{ backgroundColor: placeholderColor }}
                >
                    Loading...
                </div>
            )}

            {hasError && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-red-500">
                    Failed to load image.
                </div>
            )}
        </div>
    );
};

export default Image;
