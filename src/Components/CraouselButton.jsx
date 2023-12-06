const CraouselButton = ({length}) =>{
    return (
        <div className="flex gap-5 justify-center">
            {
                Array(length).fill("").map(()=> (
                    <div className="h-[4px] w-8 bg-gray-500"></div>
                ))
            }
        </div>
    )
}   
export default CraouselButton;
