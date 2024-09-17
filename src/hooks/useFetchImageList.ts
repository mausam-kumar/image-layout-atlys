import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, LIMIT } from "../constant";
import { Image } from "../type";

interface IGetImageResponse {
    data: Image[] | null;
    isLoading: boolean;
    error: string | null;
    currentPage: number;
    loadMore: () => void;
}

const useFetchImageList = (): IGetImageResponse => {
    const [data, setData] = useState<Image[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get<Image[]>(
                    `${BASE_URL}/v2/list?page=${currentPage}&limit=${LIMIT}`
                );
                setData((prevData) => [...(prevData || []), ...response.data]);

                if (response.data.length < LIMIT) {
                    setHasMore(false);
                }
            } catch {
                setError("Error fetching images. Please try again.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [currentPage]);

    const loadMore = () => {
        if (!isLoading && hasMore) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    return {
        data,
        isLoading,
        error,
        currentPage,
        loadMore,
    };
};

export default useFetchImageList;
