import { useState } from "react";
import { NavLink } from "react-router-dom";
import SignIn from "./SIgnIn";

export default function Header(){
    const [login,setLogin] = useState(false)
    
    return (
        <div className="w-full h-[71px] flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center" to="/">
            <NavLink className="flex justify-center items-center ml-6 gap-1">
                <span className="w-[28px] h-[28px] bg-[#222222] rounded-full"></span>
                <span className="w-[18px] h-[18px] bg-[#9B62E0] rounded-full"></span>
            </NavLink>
            <div className="flex gap-9 ml-12 font-light">
                <NavLink 
                    to="/"
                    className="text-sm font-normal text-[#222222] hover:font-medium"
                >Home
                </NavLink>
                <NavLink
                    to="/features"
                    className="text-sm font-normal text-[#222222] hover:font-medium"
                 >Features
                 </NavLink>
                <NavLink
                    to="/users"
                    className="text-sm font-normal text-[#222222] hover:font-medium"
                 >Explore creators
                 </NavLink>
                <NavLink
                    to="/"
                    className="text-sm font-normal text-[#222222] hover:font-medium"
                >FAQ
                </NavLink>
            </div>
        </div>
        <div className="flex gap-9 mr-4 items-center">
            <div >
                <label for="search" class="sr-only">Search creator</label>
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="h-5 w-5 text-gray-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                    </svg>
                    </div>
                    <input id="search" name="search" class="w-[290px] h-10 rounded-full border border-gray-300 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Search creators" type="search" />
                </div>
                </div>
                <button className="font-medium text-[#222222]" onClick={()=>setLogin(true)}>Sign in</button>
                <button className="w-[90px] px-2 py-3 bg-[#9B62E0] font-medium text-white text-[16px] rounded-full hover:bg-[#8F50DB] hover:text-[17px]">Sign Up</button>
            </div>  
            { login ? <SignIn setLogin={setLogin}/>:null}  
        </div>
    )
}