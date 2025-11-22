import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-screen h-[97px] border-b border-[#E9E9EB] ">
      <div className=" max-w-[1248px] mx-auto w-full h-full flex items-center justify-between px-[18px]">
        <div className="flex items-center">
          <Image src="/Logo.png" alt="Mammothzy Logo" width={195} height={75} />
        </div>

        <div className="flex items-center gap-2">
          <i className="fa-solid fa-circle-user text-[36px] "></i>
          <p className="text-[16px] font-inter font-semibold">Profile</p>
        </div>
      </div>
    </div>
  );
}
