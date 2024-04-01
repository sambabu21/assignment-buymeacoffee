import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function EditModal({ user,setEditOpen }){
    const [editData,setEditData] = useState(
        {
            name:user.name,
            email:user.email,
            gender:user.gender,
            status:user.status,
        }   
    )
    const [errors,setErrors]=useState({})

    function handleChange(event){
        const {name,value,type,checked} = event.target
        setEditData(prevDetails=>{
            return {
                ...prevDetails,
                [name]:type==="checkbox"? checked :value 
            }
        })
    }
    
    console.log(user)

    return (
        <div className="w-screen h-screen bg-[#00000048] bg-opacity-70 z-40 flex justify-center items-center fixed inset-0">
            <div className="md:h-[492px] md:w-[648px] h-[400px] w-screen bg-white px-[50px]">
                <div className="flex  border-b pb-4 pt-[29px] justify-between items-center">
                    <h1 className="font-medium md:text-[24px] text-[16px]">Edit user</h1>
                    <FontAwesomeIcon icon={faXmark} className="md:w-6 md:h-6 cursor-pointer" onClick={()=>{setEditOpen(false)}}/>
                </div>
                <form>
                    <div className="mt-6 flex justify-between items-center">
                        <label className="font-medium md:text-[16px] text-[10px]">Creator Name</label>
                        <div>
                            <input 
                                type="text" 
                                className={`md:w-[400px] w-[200px] md:h-[48px] md:text-[16px] text-[10px] border  rounded-[4px] px-3 ${errors.name?'border-[#FF0000]':"border-[#E3DFDF]"}`}
                                onChange={handleChange}
                                value={editData.name}
                                name="name"
                            />
                            {errors.name && <div className="text-[#FF0000] text-[8px] md:text-[12px] mt-1 -mb-3">{errors.name}</div>}
                        </div>
                    </div>
                    
                    <div className="mt-6 flex justify-between items-center">
                        <label className="font-medium md:text-[16px] text-[10px]">Email</label>
                        <div>
                            <input 
                                type="email" 
                                className={`md:w-[400px] md:h-[48px] w-[200px] border md:text-[16px] text-[10px] rounded-[4px] px-3 ${errors.email?'border-[#FF0000]':"border-[#E3DFDF]"}`}
                                onChange={handleChange}
                                value={editData.email}
                                name="email"
                            />
                            {errors.email && <div className="text-[#FF0000] text-[8px] md:text-[12px] mt-1 -mb-3">{errors.email}</div>}
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                        <label className="font-medium md:text-[16px] text-[10px]">Gender</label>
                        <div>
                            <select 
                                className={`md:w-[400px] md:h-[48px] w-[200px] border md:text-[16px] text-[10px] rounded-[4px] px-3 ${errors.gender?'border-[#FF0000]':"border-[#E3DFDF]"}`} 
                                onChange={handleChange}
                                value={editData.gender}
                                name="gender"
                            >
                                <option value={null}></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {errors.gender && <div className="text-[#FF0000] text-[8px] md:text-[12px] mt-1 -mb-3">{errors.gender}</div>}
                        </div>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                        <label className="font-medium md:text-[16px] text-[10px]">Available to chat</label>
                        <div>
                            <div className=" md:w-[400px] flex gap-2">
                                <input 
                                    type="radio" 
                                    className="accent-[#9B62E0] md:w-[22px] md:h-[22px]" 
                                    name="status" 
                                    onChange={handleChange}
                                    value="active"
                                    checked={editData.status==="active"}
                                />   
                                <label className="md:text-[16px] text-[10px] font-medium">
                                    Active
                                </label>
                                <input 
                                    type="radio" 
                                    className="accent-[#9B62E0] md:w-[22px] md:h-[22px] ml-10" 
                                    name="status" 
                                    onChange={handleChange}
                                    value="inactive"
                                    checked={editData.status==="inactive"}
                                />  
                                <label className="md:text-[16px] text-[10px] font-medium">
                                    Inactive
                                </label>
                                
                            </div>
                            {errors.status && <div className="text-[#FF0000] text-[8px] md:text-[12px] mt-1 -mb-3">{errors.status}</div>}
                        </div>
                    </div>
                    <button className=" mt-10 w-[100px] h-[30px] md:w-[144px] md:h-[40px] rounded-[20px] bg-[#9B62E0] text-white md:text-[16px] text-[12px]">Save changes</button>
                </form>
            </div>
        </div>
    )
}