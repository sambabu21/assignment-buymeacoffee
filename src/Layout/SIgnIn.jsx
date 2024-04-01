import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useContext, useState } from "react"
import { LoginContext } from "../App"
import { toast } from "sonner"


export default function SignIn({ setLogin }){
    const {loginFailed,setLoginFailed} = useContext(LoginContext)
    const [error,setError] = useState(false)
    const [cred,setCred] = useState(
        {
            username:"",
            password:"",
            
        })

    const dummyAdmin = {
        username:"BMACADMIN",
        password:"admin@123"
    }    

    function handleChange(event){
        const {name,value,type,checked} = event.target
        setCred(prevDetails=>{
            return {
                ...prevDetails,
                
                [name]:type==="checkbox"? checked :value 
            }
        })
    }

    const checkValidity = (credentials) => {
        if(credentials.username===dummyAdmin.username && credentials.password===dummyAdmin.password){
            console.log("Authenticated")
            setLoginFailed(false)
            setError(false)
            setLogin(false)
            toast.success("Welcome Back!")
        }else{
            setLoginFailed(true)
            setError(true)
            console.log("Auth failed")
        }
    }

    function login(e){
        e.preventDefault()
        checkValidity(cred)
        
    }

    return (
        <div className="w-screen h-screen bg-[#00000048] bg-opacity-70 z-40 flex justify-center items-center fixed inset-0">
            <div className="md:h-[400px] md:w-[600px] w-full bg-white px-[50px] block ">
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
                            value={cred.username}
                            name="username"
                        />
                    </div>
                    <div className="mt-10 flex justify-between items-center">
                        <label className="font-medium md:text-[16px] text-[12px]">Password</label>
                        <input 
                            type="password" 
                            className="md:w-[400px] md:h-[48px] w-3/4 border rounded-[4px] px-3" 
                            onChange={handleChange}
                            value={cred.email}
                            name="password"
                        />
                    </div>
                    {error?<div className="text-[12px] text-[#]">Invalid username or password</div> : null }
                    <button className=" mt-10 mb-10 md:mb-0 md:w-[144px] md:h-[40px] w-[90px] h-[30px] rounded-[20px] bg-[#9B62E0] text-white " onClick={login}>Login</button>
                </form>
            </div>
        </div>
        )
}