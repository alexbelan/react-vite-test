import { useEffect, useRef, useState } from "react"

export const useHover = () => {
    const ref = useRef(null)
    const [hovered, setHovered] = useState(false)

    const handleMouseOver = () => setHovered(true);
    const handleMouseOut = () => setHovered(false);

    useEffect(() => {
        const node = ref.current

        if(node) {
            node.addEventListener('mouseover', handleMouseOver)
            node.addEventListener('mouseout', handleMouseOut)

            return () => {
                node.removeEventListener('mouseover', handleMouseOver)
                node.removeEventListener('mouseout', handleMouseOut)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        ref,
        hovered,
    }
}