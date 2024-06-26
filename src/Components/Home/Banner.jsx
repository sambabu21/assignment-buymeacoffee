import BannerImg1 from "../../Images/Banner-img-1.png"
import BannerImg2 from "../../Images/Banner-img-2.png"
import GiftImg from "../../Images/Giftbox.png"
import avatar from "../../Images/Banner-avatar.png"
import {motion} from "framer-motion"

export default function Banner(){
    return (
        <div className="w-full flex flex-col items-center relative overflow-hidden">
            <motion.h1 
                initial={{y:50,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:1}}
                className="text-[#222222] font-semibold text-4xl md:text-6xl text-center leading-[50px] md:leading-[70px] mt-14">Stay close to your<br></br><span className="text-[#9B62E0]"> favorite people.</span></motion.h1>
            <motion.div 
                initial={{y:50,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:1,delay:0.5}}
                className="mt-14 md:w-[600px] md:h-[80px]  flex rounded-full items-center justify-between relative">
                <input placeholder="Enter your phone number"  className="flex text-sm md:text-md md:ml-10 rounded-full w-1/2 m-2"/>
                <button className="md:w-[167px] md:h-[67px] w-[80px] bg-[#222222] text-white font-semibold rounded-full mr-2 my-2 md:my-0 text-[14px] md:text-[18px] p-2 md:p-0">Get started</button>
                <div className="absolute w-full h-full rounded-full border inset-0 shadow-[0px_4px_20px_0px_#00000009] cursor-pointer -z-10"></div>
            </motion.div>
            <motion.div 
                initial={{y:50,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:1,delay:1}}
                className="relative  w-full mb-10">
                <img src={BannerImg1} className="my-14 mx-auto drop-shadow-3xl"/>
                <img src={BannerImg2} className="absolute top-[170px] md:top-[120px] right-1/2 w-[200px]  md:w-[450px] md:h-[230px] "/>
                <div className="flex gap-2 md:gap-5 absolute top-1/2 right-[10px] md:right-[435px] z-20 ">
                    <div className="md:w-[180px] md:h-[164px] w-[100px] h-[80px] flex flex-col justify-center items-center relative bg-white rounded-l-[22px] rounded-b-[22px] drop-shadow-xl">
                        <img src={GiftImg} className="w-3 md:w-6"/>
                        <h2 className="text-[#222222] font-medium text-[10px] md:text-[18px] text-center mx-7 leading-[10px] md:leading-5 my-1 md:my-3">You received a Gift</h2>
                        <span className="bg-[#9b62e018] text-[#9B62E0] text-[8px] md:text-[12px] font-medium p-1 md:p-2 rounded-full">View gift</span>
                        <div className="w-full h-full drop-shadow-md absolute inset-0"></div>
                    </div>
                    <img src={avatar} className="w-[30px] h-[30px] md:w-[63px] md:h-[63px] bg-[#AAC6F1] rounded-full"/>
                </div>
            </motion.div>
            <div className="-z-10 absolute w-[250px] h-[200px] bg-[#b2e5603f] rounded-full bottom-20 left-[250px] backdrop:blur-lg shadow-[0px_0px_100px_100px_#b2e5603f] overflow-hidden"></div>
            <div className="-z-10 absolute w-[250px] h-[250px] bg-[#b2e5603f] rounded-full bottom-10 right-[140px] backdrop:blur-lg shadow-[0px_0px_100px_120px_#b2e5603f]"></div>
            <div className="-z-10 absolute w-[500px] h-[500px] bg-[#a873e83f] rounded-full -bottom-80  backdrop:blur-lg shadow-[0px_0px_100px_120px_#a873e83f] overflow-clip"></div>
        </div>
    )
}