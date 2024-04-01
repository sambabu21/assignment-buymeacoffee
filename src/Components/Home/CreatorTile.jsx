export default function CreatorTile({ name,status,gender }){

    const imageUrl=`https://xsgames.co/randomusers/avatar.php?g=${gender}&name=${name}`

    return(
        <div className="w-[150px] md:min-w-[268px] md:w-full max-w-[268px] h-[250px] md:h-[360px] flex flex-col justify-end items-center gap-4 relative hover:border hover:border-gray-200 ">
            <img src={imageUrl} className="absolute w-full h-full object-cover -z-10 "/>
            <h1 className="text-white font-black md:text-[28px] pb-5 text-center">{name}</h1>
            <div className="bg-white rounded-[6px] absolute top-4 right-4  p-[2px] flex justify-around items-center gap-2 px-[4px]">
                <span className={`w-[9px] h-[9px] rounded-full ${status==="active"?"bg-[#4C9A2A]":"bg-[#FF0000]"}`}></span>
                <p className="text-[12px] font-medium capitalize">{status}</p>
            </div>
            
        </div>
    )
}