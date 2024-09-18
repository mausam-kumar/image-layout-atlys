import { useGlobalStateContext } from "../../context/GlobalStateProvider";
import MobilePopover from "./MobilePopover";
import CardGrid from "../CardGrid";
import { useEffect, useState } from "react";

const PopoverWrapper = () => {
    const { globalState: { selectedImage } } = useGlobalStateContext()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (selectedImage.children) {
            setWidth(400)
        } else {
            setWidth(0)
        }
    }, [selectedImage.children])

    return <>
        <div className="hidden md:block h-screen">
            <div className="flex w-full space-x-2">
                <div className="w-full overflow-y-scroll h-screen no-scrollbar">
                    <CardGrid />
                </div>
                <div style={{ width }} className="sticky top-0 w-full transition-all duration-200 overflow-hidden">
                    {selectedImage.children &&
                        <div className="p-2 bg-white border shadow-lg h-full">
                            {selectedImage.children}
                        </div>
                    }
                </div>
            </div>
        </div>
        <div className="md:hidden">
            <CardGrid />
            <MobilePopover />
        </div>
    </>
};

export default PopoverWrapper