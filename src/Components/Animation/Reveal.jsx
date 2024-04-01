import { motion,useAnimation,useInView } from "framer-motion"
import { useRef,useEffect } from "react"

export default function Reveal({ children,delay=0.25 }){
    const ref =useRef(null)
    const isInView = useInView(ref,{once:true})
    const mainControls=useAnimation()

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
    },[isInView])

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden:{opacity:0,y:75},
                visible:{opacity:1,y:0}
            }}

            initial="hidden"
            animate={mainControls}
            transition={{duration:0.7,delay}}
            style={{width:"100%"}}
        >
            {children}
        </motion.div>
    )
}