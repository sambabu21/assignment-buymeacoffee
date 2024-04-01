import { faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  useState } from "react"
import AddModal from "./AddModal"
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import DeleteModal from "./DeleteModal"
import Loader from "../Loader"
import { toast } from "sonner"
import EditModal from "./EditModal"

export default function ManageUser(){
    const [open,setOpen] = useState(false)
    const [deleteOpen,setDeleteOpen] = useState(false)
    const ITEMS_PER_PAGE=7
    const [editUserData,setEditUserData] = useState({})
    const [editOpen,setEditOpen] = useState(false)

    const  fetchCreators =({ pageParam = 1 }) => {
        return fetch(`https://gorest.co.in/public/v2/users?page=${pageParam}&per_page=${ITEMS_PER_PAGE}`).then(res=>res.json())
       
      };

    const { data:users,fetchNextPage,isLoading } = useInfiniteQuery({
        queryKey:["creatorsdata"],
        queryFn:fetchCreators,
        getNextPageParam: (_, pages) => pages.length + 1,
    })

    //function run on edit btn click
    const editUser = (user) =>{
        setEditUserData(user)
        setEditOpen(true)
    }

    //function run on edit btn click
    const deleteUser=(user)=>{
        setDeleteOpen(true)
        setEditUserData(user)
    }
    

    return (
        <div className=" md:px-[132px] flex flex-col justify-center items-center">
            <div className="flex w-full justify-between items-center mt-10">
                <h1 className="pl-8 md:pl-0 font-medium md:text-[24px]">Manage creators</h1>
                <button className="mr-8 md:mr-0 p-2 md:p-0 md:w-[185px] md:h-[40px] bg-[#9B62E0] rounded-[20px] text-white font-medium md:text-[16px] text-[12px]" onClick={()=>{setOpen(true)}}>+ Add a new creator</button>
            </div>
            {
                isLoading?<Loader /> :
                <>
                <table className="md:w-full border border-[#E3D7D7] mt-10 mb-20">
                <tr>
                    <th className="md:py-5 font-normal md:text-[18px] text-[8px] text-[#717171]  md:text-left pl-2 md:pl-10">Name</th>
                    <th className="md:py-5 font-normal md:text-[18px] text-[8px] text-[#717171] border md:border-0 md:text-left pl-[2px] md:pl-10 ">Email</th>
                    <th className="md:py-5 font-normal md:text-[18px] text-[8px] text-[#717171] border md:border-0 md:text-left md:pl-10">Gender</th>
                    <th className="md:py-5 font-normal md:text-[18px] text-[8px] text-[#717171] border md:border-0 md:text-left pl-[2px] md:pl-10">Available for chat </th>
                    <th className="md:py-5 font-normal md:text-[18px] text-[8px] text-[#717171] pr-2 md:pr-10 -pl-2">Action</th>
                </tr>
                {
                    users?.pages?.map((page)=>{
                        return <>
                            {
                                page.map((creator,index)=>{
                                    return (<tr className="border" key={index}>
                                                <th  className="md:py-5 font-normal text-[10px] md:text-[18px] md:text-left pl-2  md:pl-10 w-[15%] md:w-1/5">{creator.name}</th>
                                                <th  className="md:py-5 font-normal text-[10px] md:text-[18px] md:text-left border md:border-0 pl-[2px] md:pl-10 md:w-1/3">{creator.email}</th>
                                                <th  className="md:py-5 font-normal text-[10px] md:text-[18px] md:text-left border md:border-0  md:pl-10">{creator.gender}</th>
                                                <th  className={`md:py-5s font-medium text-[8px] md:text-[18px] md:text-left px-[1px] border md:border-0 md:pl-10 capitalize ${creator.status==="active"?"text-[#4C9A2A]":"text-[#FF0000]"}`}>{creator.status}</th>
                                                <th className="flex gap-2 md:gap-10 md:justify-center items-center px-1 md:py-5 md:pr-10 py-2">
                                                    <button className="bg-[#EBEBEB] font-medium text-[8px] md:text-[18px] md:w-[70px] md:h-[36px] rounded-[20px] flex items-center justify-center" onClick={()=>editUser(creator)}>Edit</button>
                                                    <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer w-3 h-3 md:w-4 md:h-4" onClick={()=>deleteUser(creator)}/>
                                                </th>
                                            </tr>)
                                })
                            }
                        </>
                    })
                }
            </table>
            <button className="mx-auto w-[124px] flex mb-20 p-3 px-4 bg-[#22222215] rounded-[32px] text-[14px] font-medium justify-center" onClick={fetchNextPage}>Load More ⌵ </button>
            {open? <AddModal setOpen={setOpen}/>:null}
            { editOpen ? <EditModal user={editUserData} setEditOpen={setEditOpen}/>:null }
            { deleteOpen ? <DeleteModal user={editUserData} setDeleteOpen={setDeleteOpen}/>:null }
            </>
            }
        </div>
    )
}