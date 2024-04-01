import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { toast } from "sonner"

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

    //function to run on edit btn click
    const editCreator = (e) =>{
        console.log(editData)
        e.preventDefault()
        const isValid=validate(editData)
        if(isValid){
            mutate(editData)
        }
        
    }
  //funtion to edit creators and update the list of creators to show the changes made
  const queryClient = useQueryClient()
  const {mutate,isPending} = useMutation({
      mutationFn:(editUserData)=>{
         
          return fetch(`https://gorest.co.in/public/v2/users/${user.id}`,{
              method:"PUT",
              headers:{
                  "Authorization": "Bearer e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb",
                  "Content-Type":"application/json"
              },
              body:JSON.stringify(editUserData)
              }).then(res=>res.json())
      },
      onSuccess: (response) => {
        console.log(response)
        queryClient.setQueryData(["creatorsdata"],(oldData)=>({
              pages:oldData.pages.map(page=>page.map(user=>user.id===response.id ? {...response} : user)),
              pageParams:oldData.pageParams,
        }))
          toast.success(
              `User ${response.name}'s data was updated succesfully `
            );
          setEditOpen(false)   
      },
      onError: (error) => {
          const errorData = error.response.data[0];
          const errorMessage = `${errorData.field} ${errorData.message}`;
          toast.error(errorMessage)
      },
      
  })

    
    //function to validate the form inputs
    const validate=(formData)=>{
        const internalErrors={}
        if(formData.name===""){
            internalErrors.name="Name is required"
        }
        if(formData.email===""){
            internalErrors.email="Email is required"
        }else if( !/^[A-Z0-9.%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(formData.email)){
            internalErrors.email="Enter a valid email"
        }

        if(formData.gender==="" || formData.gender===null){
            internalErrors.gender="Choose any option"
        }
        if(formData.status===""){
            internalErrors.status="Choose any option"
        }
        //validate if data entered is in correct format and all required fields have been entered
        if(internalErrors.name || internalErrors.email || internalErrors.gender || internalErrors.status){
            setErrors(internalErrors)
            return false
        }else{
            setErrors({})
            return true
        }
    }

    return (
        <div className="w-screen h-screen bg-[#00000048] bg-opacity-70 z-40 flex justify-center items-center fixed inset-y-0">
            <div className="md:h-[492px] md:w-[648px] h-[350px] w-screen bg-white px-[50px] ">
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
                    <button className=" mt-10 w-[100px] h-[30px] md:w-[144px] md:h-[40px] rounded-[20px] bg-[#9B62E0] text-white md:text-[16px] text-[12px]" onClick={editCreator}>{isPending?"Saving...":"Save changes"}</button>
                </form>
            </div>
        </div>
    )
}