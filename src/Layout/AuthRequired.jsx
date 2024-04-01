import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { LoginContext } from "../App";

export default function AuthRequired(){
    const {loginFailed,setLoginFailed} = useContext(LoginContext)

    
    if(loginFailed){
        return <div className="w-screen flex justify-center"> 
            <h1 className="text-2xl font-medium mt-20">You have to sign in to view this page.</h1>
        </div>
    }
    return <Outlet />
}