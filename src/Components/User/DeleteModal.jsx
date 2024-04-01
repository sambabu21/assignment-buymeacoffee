import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function DeleteModal( {setDeleteOpen,id }){
    console.log(id)
    return (
        <div className="w-screen h-screen bg-[#00000048] bg-opacity-70 z-40 flex justify-center items-center fixed inset-0">
            <div className="h-[492px] w-[648px] bg-white px-[50px]">
                <div className="flex  border-b pb-4 pt-[29px] justify-between items-center">
                    <h1 className="font-medium text-[24px]">Add a new creator</h1>
                    <FontAwesomeIcon icon={faXmark} className="w-6 h-6 cursor-pointer" onClick={()=>{setDeleteOpen(false)}}/>
                </div>
                
            </div>
        </div>
        ) 
}