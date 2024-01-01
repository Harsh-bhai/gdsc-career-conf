import Image from "next/image";
const ArrowList = ({des})=>{
    return(
        <div className="flex flex-row gap-5 items-center">
            <Image src={"arrow.svg"} alt={"not found"} width={30} height={30}/>
            <p className="text-sm">{des}</p>
        </div>
    )
}

export default ArrowList;