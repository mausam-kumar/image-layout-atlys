import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { BASE_URL, LIMIT } from "../constant";
import { Image } from "../type";

interface IGetImageResponse {
    images: Image[] | null;
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
    const uniqueIds = useMemo(() => new Set<string>(), []);

    useEffect(() => {
        const source = axios.CancelToken.source();
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get<Image[]>(
                    `${BASE_URL}/v2/list?page=${currentPage}&limit=${LIMIT}`, {
                    cancelToken: source.token,
                }
                );
                const newItems = response.data.filter((item) => !uniqueIds.has(item.id));
                newItems.forEach((item) => uniqueIds.add(item.id));
                setData(prevData => [...(prevData || []), ...newItems]);
                setError(null)
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

        return () => {
            source.cancel()
        }
    }, [currentPage, uniqueIds]);

    const loadMore = () => {
        if (!isLoading && hasMore) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    return {
        images: data,
        isLoading,
        error,
        currentPage,
        loadMore,
    };
};

export default useFetchImageList;
