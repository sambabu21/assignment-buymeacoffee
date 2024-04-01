import CreatorTile from "./CreatorTile"

export default function Carousel({ creators }){


    return <div className="flex md:gap-8 gap-4 overflow-x-hidden ">
        <div className="flex slide-track md:gap-8 gap-4">
            {
                creators.map((creator)=>{
                    return <CreatorTile 
                                name={creator.name} 
                                status={creator.status} 
                                key={creator.id} 
                                gender={creator.gender}
                            />
                    
                })
            }
            </div>
            <div className="flex slide-track md:gap-8 gap-4">
            {
                creators.map((creator)=>{
                    return <CreatorTile 
                                name={creator.name} 
                                status={creator.status} 
                                key={creator.id} 
                                gender={creator.gender}
                            />
                    
                })
            }
            </div>
        </div>
    
}