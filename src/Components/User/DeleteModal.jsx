import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export default function DeleteModal( {user,setDeleteOpen }){
    

    //function run on delete confirmation
    const confirmDelete = (id) =>{
        mutate(id)
        setDeleteOpen(false)
    }

    const queryClient = useQueryClient()

    //api call to be made on delete user click
    const {mutate} = useMutation({
        mutationFn:(userId)=>{
            return (fetch(`https://gorest.co.in/public/v2/users/${userId}`,{
                method:"DELETE",
                headers:{
                    "Authorization": "Bearer e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb",
                    "Content-Type":"application/json"
                },
            }),userId)
        },
        onSuccess:(response) => {
            toast.success( `User with ID:${response} has been deleted successfully`)
            queryClient.setQueryData(["creatorsdata"],(oldData)=>({
                pages:oldData.pages.map(page=>page.filter(user=>user.id!==response)),
                pageParams:oldData.pageParams,
            }))
        },
        onError:(error) => {
            const errorData = error.response.data[0];
            const errorMessage = `${errorData.field} ${errorData.message}`;
            toast.error(error)
        },
       
    })

    return (
        <div className="w-screen h-screen bg-[#00000048] bg-opacity-70 z-40 flex justify-center items-center fixed inset-0">
            <div className="md:h-[200px]  md:w-[500px] p-[20px] bg-white  flex flex-col justify-center items-center gap-4 md:gap-10">
                <div className="flex  justify-between items-center gap-10">
                    <h1 className="font-medium md:text-[20px] text-[15px]">Are you sure you want to delete</h1>
                    <FontAwesomeIcon icon={faXmark} className="md:w-6 md:h-6 cursor-pointer" onClick={()=>{setDeleteOpen(false)}}/>
                </div>
                <div className="flex gap-3">
                    <button className="bg-[#9B62E0] hover:bg-[#774bac] w-[70px]  md:w-[100px] h-[40px] rounded-full text-white text-[14px] md:text-[16px]" onClick={()=>confirmDelete(user.id)}>Confirm</button>
                    <button className="border w-[70px]  md:w-[100px] h-[40px] rounded-full text-[14px] md:text-[16px]" onClick={()=>{setDeleteOpen(false)}}>Cancel</button>
                </div>                
            </div>
        </div>
        ) 
}