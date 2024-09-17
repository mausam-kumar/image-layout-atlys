import { Image } from '../type';
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constant";

interface IFetchImageDetails {
    data: Image | null;
    isLoading: boolean;
    error: string | null;
}

const useFetchImageDetails = (imageId: string): IFetchImageDetails => {
    const [data, setData] = useState<Image | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get<Image>(`${BASE_URL}/id/${imageId}/info`);
                setData(response.data);
            } catch {
                setError("Failed to fetch image details.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [imageId]);

    return {
        data,
        isLoading,
        error,
    };
};

export default useFetchImageDetails;
