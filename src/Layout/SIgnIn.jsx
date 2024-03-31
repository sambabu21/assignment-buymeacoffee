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
            <div className="h-[400px] w-[600px] bg-white px-[50px] block">
                <div className="flex  border-b pb-4 pt-[29px] justify-between items-center">
                    <h1 className="font-medium text-[24px]">Sign in to your account</h1>
                    <FontAwesomeIcon icon={faXmark} className="w-6 h-6 cursor-pointer" onClick={()=>{setLogin(false)}}/>
                </div>
                <form>
                    <div className="mt-10 flex justify-between items-center">
                        <label className="font-medium text-[16px]">Username</label>
                        <input 
                            type="text" 
                            className="w-[400px] h-[48px] border rounded-[4px] px-3" 
                            onChange={handleChange}
                            value={details.name}
                            name="name"
                        />
                    </div>
                    <div className="mt-10 flex justify-between items-center">
                        <label className="font-medium text-[16px]">Password</label>
                        <input 
                            type="password" 
                            className="w-[400px] h-[48px] border rounded-[4px] px-3" 
                            onChange={handleChange}
                            value={details.email}
                            name="email"
                        />
                    </div>
                    <button className=" mt-10 w-[144px] h-[40px] rounded-[20px] bg-[#9B62E0] text-white " onClick={addCreator}>Login</button>
                </form>
            </div>
        </div>
        )
}