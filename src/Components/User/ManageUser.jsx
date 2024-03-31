// import { useQuery } from "@tanstack/react-query"
// import getData from "../../Api"
import { faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import AddModal from "./AddModal"
import { useInfiniteQuery } from "@tanstack/react-query"

export default function ManageUser(){
    const [open,setOpen] = useState(false)

    const ITEMS_PER_PAGE=7

    const  fetchCreators =({ pageParam = 1 }) => {
        return fetch(`https://gorest.co.in/public/v2/users?page=${pageParam}&per_page=${ITEMS_PER_PAGE}`).then(res=>res.json())
       
      };

    const { data:users,fetchNextPage,isLoading } = useInfiniteQuery({
        queryKey:["creatorsdata"],
        queryFn:fetchCreators,
        getNextPageParam: (_, pages) => pages.length + 1,
    })

    return (
        <div className="px-[132px]">
            <div className="flex w-full justify-between mt-10">
                <h1 className="font-medium text-[24px]">Manage creators</h1>
                <button className="w-[185px] h-[40px] bg-[#9B62E0] rounded-[20px] text-white font-medium text-[16px]" onClick={()=>{setOpen(true)}}>+ Add a new creator</button>
            </div>
            <table className="w-full border border-[#E3D7D7] mt-10 mb-20">
                <tr>
                    <th className="py-5 font-normal text-[18px] text-[#717171]  text-left pl-10">Name</th>
                    <th className="py-5 font-normal text-[18px] text-[#717171] text-left pl-10 ">Email</th>
                    <th className="py-5 font-normal text-[18px] text-[#717171] text-left pl-10">Gender</th>
                    <th className="py-5 font-normal text-[18px] text-[#717171] text-left pl-10">Available for chat </th>
                    <th className="py-5 font-normal text-[18px] text-[#717171] pr-10">Action</th>
                </tr>
                {
                    isLoading?<div>Loading data...</div> :
                    users?.pages?.map((page)=>{
                        return <>
                            {
                                page.map((creator,index)=>{
                                    return (<tr className="border" key={index}>
                                                <th  className="py-5 font-normal text-[18px] text-left  pl-10 w-1/5">{creator.name}</th>
                                                <th  className="py-5 font-normal text-[18px] text-left pl-10  w-1/3">{creator.email}</th>
                                                <th  className="py-5 font-normal text-[18px] text-left pl-10">{creator.gender}</th>
                                                <th  className={`py-5 font-medium text-[18px] text-left pl-10 capitalize ${creator.status==="active"?"text-[#4C9A2A]":"text-[#FF0000]"}`}>{creator.status}</th>
                                                <th className="flex justify-between items-center py-5 pr-10">
                                                    <button className="bg-[#EBEBEB] font-medium text-[18px] w-[70px] h-[36px] rounded-[20px] flex items-center justify-center">Edit</button>
                                                    <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer"/>
                                                </th>
                                            </tr>)
                                })
                            }
                        </>
                    })
                }
            </table>
            <button className="mx-auto w-[124px] flex mb-20 p-3 px-4 bg-[#22222215] rounded-[32px] text-[14px] font-medium justify-center" onClick={()=>fetchNextPage()}>Load More ⌵ </button>
            {open? <AddModal setOpen={setOpen}/>:null}
        </div>
    )
}