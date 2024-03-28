import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Feature1img from "../../Images/Feature-image-mask.png"
import Feature1mask from "../../Images/Feature-1-img.png"
import Feature1sup1 from "../../Images/Feature-1-support-1.png"
import Feature1emo from "../../Images/Feature-1-emoji.png"
import Feature2img from "../../Images/Feature-2-img.png"
import feature3img from "../../Images/Feature-3-img.png"
import feature3sup1 from "../../Images/Feature-3-sup-1.png"
import feature3map from "../../Images/Maps.png"

export default function FeaturePage(){
    return (
        <div className="flex flex-col w-full">
            {/* feature1 */}
            <div className="flex justify-center items-center my-40 ">
                <div className="w-1/2  flex flex-col justify-between items-start ml-[197px] gap-5">
                    <FontAwesomeIcon icon={faFaceSmile}  className="w-[30px] h-[30px] text-[#9B62E0]"/>
                    <h2 className="font-semibold text-[55px] w-[444px] leading-[70px] text-[#222222]">Express yourself freely</h2>
                    <p className="text-[18px] font-normal leading-[32px] w-[444px] text-[#222222]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className="text-[#9B62E0] text-[18px] font-medium">Learn more →</button>
                </div>
                <div className="w-1/2 ">
                    <div className="w-[452px] h-[341px] bg-[#FAF4FF] rounded-[31px] relative ">
                        <img src={Feature1img} className="drop-shadow-lg"/>
                        <img src={Feature1mask} className="absolute bottom-6 right-5"/>
                        <img src={Feature1sup1} className="absolute -bottom-4 -left-[100px]"/>
                        <div className="w-[191px] h-[47px] bg-white rounded-[28.5px] border flex justify-center items-center drop-shadow-md absolute top-10 -left-20">
                            <img src={Feature1emo} />
                        </div>
                    </div>
                    
                </div>
            </div>
            
            {/* feature2 */}
            <div className="flex mb-40 mt-20 gap-10">
                    <div className="w-1/2  ml-[150px]">
                        <div className=" flex items-center justify-center">
                            <img src={Feature2img} className="mr-[100px]"/>
                        </div>
                </div>
                <div className="w-1/2  flex flex-col justify-between items-start  gap-5 ">
                            <div className="w-[29px] h-[29px] rounded-full border border-[#9B62E0] flex justify-center items-center">
                                <div className="w-[21px] h-[21px] bg-[#9B62E0] rounded-full "></div>
                            </div>
                            <h2 className="font-semibold text-[55px] w-[444px] leading-[70px] text-[#222222]">Create and Share</h2>
                            <p className="text-[18px] font-normal leading-[32px] w-[444px] text-[#222222]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <button className="text-[#9B62E0] text-[18px] font-medium">Learn more →</button>
                </div>
            </div>
            {/* feature3 */}
            <div className="flex justify-center items-center mt-20 mb-40">
                <div className="w-1/2 flex flex-col justify-between items-start ml-[197px] gap-5">
                    <FontAwesomeIcon icon={faLocationDot}  className="w-[30px] h-[30px] text-[#9B62E0]"/>
                    <h2 className="font-semibold text-[55px] w-[444px] leading-[70px] text-[#222222]">Share live location</h2>
                    <p className="text-[18px] font-normal leading-[32px] w-[444px] text-[#222222]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className="text-[#9B62E0] text-[18px] font-medium">Learn more →</button>
                </div>
                <div className="w-1/2 ">
                <div className="w-[452px] h-[341px] bg-[#FAF4FF] rounded-[31px] relative border">
                        <img src={feature3img} className="drop-shadow-lg w-full h-[400px] absolute bottom-0"/>
                        <img src={feature3sup1} className="absolute -bottom-[120px] -left-[120px] drop-shadow-xl"/>
                        <img src={feature3map} className="absolute top-10 -right-16 drop-shadow-lg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}