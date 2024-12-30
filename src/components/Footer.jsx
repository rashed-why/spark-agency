import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* footer top  */}
      <div className="w-full flex-wrap md:flex-nowrap mt-[300px] md:mt-[600px] flex justify-between overflow-hidden">
        <div className=" w-full md:w-[48%] ">
          <img src="/big-title-4.svg" alt="" />
        </div>
        <div className="w-full md:w-[42%] mt-14 md:mt-0">
          <img className="ml-auto" src="/big-title-3.svg" alt="" />
        </div>
      </div>

      {/* footer bottom  */}
      <div className="flex justify-between flex-wrap lg:flex-nowrap  border-t pt-5 border-[#11162E] mt-5 pl-5 pr-5 mb-9">
        <div className="w-full sm:w-[50%] lg:w-[auto] mb-5 ">
          <p className="text-[20px]">
            GMK Dakonderhoud B.V. <br /> Leidsekade 57 1016 CX Amsterdam
          </p>
        </div>
        <div className="w-full sm:w-[50%] lg:w-[auto] mb-5">
          <p className="text-[20px]">info@dakonderhoudgmk.nl</p>
          <p className="text-[20px]">(020) 26 12 257</p>
        </div>
        <div className=" w-full sm:w-[50%] lg:w-[auto] mb-5">
          <Link className="text-[20px] block" to="#">
            Privacy verklaring
          </Link>
          <Link className="text-[20px] block" to="#">
            Algemene Voorwaarden
          </Link>
        </div>
        <div className="w-full sm:w-[50%] lg:w-[auto]">
          <p className="text-[20px]">(C) MMXXIV GMK Dakonderhoud B.V.</p>
          <p className="text-[20px]">Concept by Nakatori Amsterdam</p>
        </div>
      </div>
    </>
  );
}
