import BannerImg1 from "../../Images/Banner-img-1.png"
import BannerImg2 from "../../Images/Banner-img-2.png"
import GiftImg from "../../Images/Giftbox.png"
import avatar from "../../Images/Banner-avatar.png"

export default function Banner(){
    return (
        <div className="w-full flex flex-col items-center relative overflow-hidden">
            <h1 className="text-[#222222] font-semibold text-6xl text-center leading-[70px] mt-14">Stay close to your<br></br><span className="text-[#9B62E0]"> favorite people.</span></h1>
            <div className="mt-14 w-[600px] h-[80px]  flex rounded-full items-center justify-between relative">
                <input placeholder="Enter your phone number"  className="flex text-md ml-10 rounded-full w-1/2 m-2"/>
                <button className="w-[167px] h-[67px] bg-[#222222] text-white font-semibold rounded-full mr-2">Get started</button>
                <div className="absolute w-full h-full rounded-full border inset-0 shadow-[0px_4px_20px_0px_#00000009] cursor-pointer -z-10"></div>
            </div>
            <div className="relative  w-full mb-10">
                <img src={BannerImg1} className="my-14 mx-auto drop-shadow-3xl"/>
                <img src={BannerImg2} className="absolute top-[120px] right-1/2 w-[450px] h-[230px] "/>
                <div className="flex gap-5 absolute top-1/2 right-[435px] z-20 ">
                    <div className="w-[180px] h-[164px]  flex flex-col justify-center items-center relative bg-white rounded-l-[22px] rounded-b-[22px] drop-shadow-xl">
                        <img src={GiftImg}/>
                        <h2 className="text-[#222222] font-medium text-[18px] text-center mx-7 leading-5 my-3">You received a Gift</h2>
                        <span className="bg-[#9b62e018] text-[#9B62E0] text-[12px] font-medium p-2 rounded-full">View gift</span>
                        <div className="w-full h-full drop-shadow-md absolute inset-0"></div>
                    </div>
                    <img src={avatar} className="w-[63px] h-[63px] bg-[#AAC6F1] rounded-full"/>
                </div>
            </div>
            <div className="-z-10 absolute w-[250px] h-[200px] bg-[#b2e5603f] rounded-full bottom-20 left-[250px] backdrop:blur-lg shadow-[0px_0px_100px_100px_#b2e5603f] overflow-hidden"></div>
            <div className="-z-10 absolute w-[250px] h-[250px] bg-[#b2e5603f] rounded-full bottom-10 right-[140px] backdrop:blur-lg shadow-[0px_0px_100px_120px_#b2e5603f]"></div>
            <div className="-z-10 absolute w-[500px] h-[500px] bg-[#a873e83f] rounded-full -bottom-80  backdrop:blur-lg shadow-[0px_0px_100px_120px_#a873e83f] overflow-clip"></div>
        </div>
    )
}