import Image from "next/image";
const ArrowList_TD = ({tittle,des})=>{
    return(
        <div className="flex flex-row gap-5 items-center">
        <Image src={"arrow.svg"} alt={"not found"} width={30} height={30}/>
        <div>
            <h2 className="text-lg font-bold">{tittle}</h2>
            <p className="text-gray-700 text-justify">{des}</p>
        </div>
    </div>
    );
}
export default ArrowList_TD;