import React from "react";

interface ErrorProps {
    message: string;
    onRetry?: () => void;
}

const Error: React.FC<ErrorProps> = ({ message, onRetry }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full p-4">
            <div className="text-red-500 text-2xl font-semibold mb-4">
                <p>{message}</p>
            </div>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Retry
                </button>
            )}
        </div>
    );
};

export default Error;
