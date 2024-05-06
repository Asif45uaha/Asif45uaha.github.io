import { MdKeyboardDoubleArrowUp } from "react-icons/md";




const ScrollUp = () => {
    const handleScrollUP = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className="p-2 rounded-full cursor-pointer bg-gray-300">
            <MdKeyboardDoubleArrowUp onClick={handleScrollUP} size={25} color="black" />
        </div>
    )
}
export default ScrollUp