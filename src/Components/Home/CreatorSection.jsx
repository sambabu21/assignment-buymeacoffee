import { useEffect,useState } from "react"
import Carousel from "./Carousel"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import getData from "../../Api"

export default function CreatorSection(){
    // const [creators,setCreators]=useState([])

    // useEffect(()=>{
    //     fetch("https://gorest.co.in/public/v2/users")
    //         .then(res=>res.json())
    //         .then(data=>setCreators(data))
    // },[])

    
    // const queryClient= useQueryClient()

    const {data,error,isLoading} = useQuery({queryKey:['creators'],queryFn: getData})


    return (
        <div className="bg-[#a873e810] flex flex-col pb-20">
            <h1 className="text-[55px] font-semibold mt-20 mx-auto">Around 5M+ creators</h1>
            <p className="text-[18px] font-normal w-[444px] text-center leading-[32px] mt-4 mb-20 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</p>
            {   
	            isLoading ? <div>Loading...</div>:
                <Carousel creators={data}/>
            }
        </div>
    )
}