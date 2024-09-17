import { AnimatePresence, motion } from "framer-motion"
import { useGlobalStateContext } from "../../context/GlobalStateProvider"


const MobilePopover = () => {

    const { globalState: { selectedImage } } = useGlobalStateContext()

    if (!selectedImage.children) {
        return null
    }

    return <AnimatePresence>
        <motion.div
            className="fixed sm:hidden inset-0  h-screen z-50 flex items-center justify-center bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {selectedImage.children}
        </motion.div>
    </AnimatePresence>
}

export default MobilePopover