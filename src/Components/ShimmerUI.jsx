const ShimmerUi = () => {
    return (
        <div className=" w-full h-auto flex  justify-evenly bg-white mt-4">
            <div className="w-10/12 flex flex-wrap gap-5 justify-evenly">
            {
                Array(16).fill("").map((e,index) => (
                    <div key={index} className="animate-pulse w-[250px] h-[250px] bg-gray-300"> 
                        <div className="img w-[249px] h-[150px] bg-gray-200"> </div>
                        <div className="flex p-2 w-full gap-2 items-center flex-wrap space-y-1" >
                            <div className="w-7 h-7 border rounded-full bg-gray-200">  </div>
                            <div className="w-10/12 h-3 bg-gray-200 rounded-md"> </div>
                            <div className="w-full h-3 bg-gray-200 rounded-lg"> </div>
                            <div className="w-full h-3 bg-gray-200 rounded-lg"> </div>
                        </div>  
                    </div>

                ))
            }

            </div>
        </div>
    )
}
export default ShimmerUi;