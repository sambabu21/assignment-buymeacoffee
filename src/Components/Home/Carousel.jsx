import CreatorTile from "./CreatorTile"

export default function Carousel({ creators }){

    console.log(creators)

    return <div className="flex gap-8  overflow-x-hidden">
        <div className="flex slide-track gap-8">
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
            <div className="flex slide-track gap-8">
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