import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-between items-center gap-6">
      <div>
        <Image src="/Logo.png" alt="Mammothzy logo" width={250} height={96} />
      </div>
      <div>
        <p className="text-16px text-[#6B6B6B] font-inter font-regular">
          Marketplace for searching, filtering and instantly booking team
          activities
        </p>
      </div>
      <div className=" flex justify-around ">
        <ul className="list-none flex  items-center gap-2">
          <li>
            <i className="fa-brands fa-facebook w-6 h-6"></i>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/sarthak_singh_10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram w-6 h-6"></i>
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/sarthaksingh10/"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin w-6 h-6"> </i>
            </Link>
          </li>
          <li>
            <i className="fa-regular fa-envelope w-6 h-6"></i>
          </li>
        </ul>
      </div>
      <div className="border-[#E9E9EB] border-b w-[1200px]"></div>
      <div>
        <p className="text-[16px] text-[#6B6B6B] font-inter font-normal">
          Copyright © 2024
        </p>
      </div>
    </div>
  );
}
