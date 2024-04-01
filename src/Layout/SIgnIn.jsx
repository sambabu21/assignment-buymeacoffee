import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


export default function SignIn({ setLogin }){
    const [details,setdetails] = useState(
        {
            username:"",
            password:"",
            
        })

    function handleChange(event){
        const {name,value,type,checked} = event.target
        setdetails(prevDetails=>{
            return {
                ...prevDetails,
                
                [name]:type==="checkbox"? checked :value 
            }
        })
    }

    function addCreator(e){
        e.preventDefault()
        console.log(details)
    }

    return (
        <div className="w-screen h-screen bg-[#00000048] bg-opacity-70 z-40 flex justify-center items-center fixed inset-0">
            <div className="md:h-[400px] md:w-[600px] w-[90vw] bg-white px-[50px] block">
                <div className="flex  border-b pb-4 pt-[29px] justify-between items-center">
                    <h1 className="font-medium md:text-[24px] text-[18px]">Sign in to your account</h1>
                    <FontAwesomeIcon icon={faXmark} className="md:w-6 md:h-6 cursor-pointer" onClick={()=>{setLogin(false)}}/>
                </div>
                <form>
                    <div className="mt-10 flex justify-between items-center gap-1">
                        <label className="font-medium md:text-[16px] text-[12px]">Username</label>
                        <input 
                            type="text" 
                            className="md:w-[400px] md:h-[48px] w-3/4 border rounded-[4px] px-3" 
                            onChange={handleChange}
                            value={details.name}
                            name="name"
                        />
                    </div>
                    <div className="mt-10 flex justify-between items-center">
                        <label className="font-medium md:text-[16px] text-[12px]">Password</label>
                        <input 
                            type="password" 
                            className="md:w-[400px] md:h-[48px] w-3/4 border rounded-[4px] px-3" 
                            onChange={handleChange}
                            value={details.email}
                            name="email"
                        />
                    </div>
                    <button className=" mt-10 mb-10 md:mb-0 md:w-[144px] md:h-[40px] w-[90px] h-[30px] rounded-[20px] bg-[#9B62E0] text-white " onClick={addCreator}>Login</button>
                </form>
            </div>
        </div>
        )
}