import Image from "next/image";
const ArrowList = ({ description }) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <Image src={"arrow.svg"} alt={"-"} width={25} height={25} />
      <p className="md:text-lg text-base">{description}</p>
    </div>
  );
};

export default ArrowList;
