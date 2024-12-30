import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

export default function Banner() {
  // register gsap plugins
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

  // horizontal scroll  action
  useGSAP(() => {
    const Slides = gsap.utils.toArray(".slide");
    gsap.to(Slides, {
      xPercent: -100 * (Slides?.length - 1),
      scrollTrigger: {
        trigger: ".banner",
        pin: true,
        scrub: 2,
        ease: "power1.out",
      },
    });
  }, []);

  return (
    <>
      <div className="w-full relative overflow-hidden banner flex">
        {/* 1st full screen slide  */}
        <div className="slide min-w-[100vw] relative h-screen overflow-hidden">
          {/* logo */}
          <div className="relative z-10 md:pt-[60px] md:pl-[60px] pl-[20px] pt-[20px]">
            <img className="md:h-[60px] h-10" src="/logo.svg" alt="logo" />
          </div>
          {/* banner image */}
          <img
            className=" absolute w-full h-full inset-0 object-cover"
            src="/slide1.jpg"
            alt="slide"
          />
          {/* image text items */}
          <div className=" absolute inset-0 m-x-0 flex h-[250px] z-10 w-full m-auto pl-8 pr-14 gap-3">
            {/* line */}
            <div className=" absolute h-[1px] bg-white inset-0 z-10 m-auto "></div>
            {/* single item  */}
            <div className="sm:min-w-[50%] md:min-w-[33.33%] xl:min-w-[22%] min-w-[100%]  relative flex even:self-end odd:self-start before:content-[''] before:absolute before:h-3 before:w-28 before:bg-white before:top-[-28px] before:right-0">
              <div className="flex align-center justify-self-end bg-white rounded-[20px] overflow-hidden h-[97px] w-full justify-end">
                <div className="px-4 py-3 pl-7 text-right">
                  <h4 className="text-xl font-medium text-black ">
                    Fermin vargas
                  </h4>
                  <p className=" text-[16px] text-[#78858F] leading-[25.5px] ">
                    Construction <br /> manager
                  </p>
                </div>
                <div>
                  <img
                    className=" h-[97px] w-[107px] object-cover "
                    src="/avatar.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* single item  */}
            <div className="sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[22%] min-w-[100%] relative flex even:self-end odd:self-start before:content-[''] before:absolute before:h-3 before:w-28 before:bg-white before:bottom-[-28px] before:right-0">
              <div className="flex align-center justify-self-end bg-white rounded-[20px] overflow-hidden h-[97px] w-full justify-end">
                <div className="px-4 py-3 pl-7 text-right">
                  <h4 className="text-xl font-medium text-black ">
                    Fermin vargas
                  </h4>
                  <p className=" text-[16px] text-[#78858F] leading-[25.5px] ">
                    Construction <br /> manager
                  </p>
                </div>
                <div>
                  <img
                    className=" h-[97px] w-[107px] object-cover "
                    src="/avatar.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* single item  */}
            <div className="sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[22%] min-w-[100%]  relative flex even:self-end odd:self-start before:content-[''] before:absolute before:h-3 before:w-28 before:bg-white before:top-[-28px] before:right-0">
              <div className="flex align-center justify-self-end bg-white rounded-[20px] overflow-hidden h-[97px] w-full justify-end">
                <div className="px-4 py-3 pl-7 text-right">
                  <h4 className="text-xl font-medium text-black ">
                    Fermin vargas
                  </h4>
                  <p className=" text-[16px] text-[#78858F] leading-[25.5px] ">
                    Construction <br /> manager
                  </p>
                </div>
                <div>
                  <img
                    className=" h-[97px] w-[107px] object-cover "
                    src="/avatar.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* single item  */}
            <div className="sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[22%] min-w-[100%] relative flex even:self-end odd:self-start before:content-[''] before:absolute before:h-3 before:w-28 before:bg-white before:bottom-[-28px] before:right-0">
              <div className="flex align-center justify-self-end bg-white rounded-[20px] overflow-hidden h-[97px] w-full justify-end">
                <div className="px-4 py-3 pl-7 text-right">
                  <h4 className="text-xl font-medium text-black ">
                    Fermin vargas
                  </h4>
                  <p className=" text-[16px] text-[#78858F] leading-[25.5px] ">
                    Construction <br /> manager
                  </p>
                </div>
                <div>
                  <img
                    className=" h-[97px] w-[107px] object-cover "
                    src="/avatar.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* bottom logos */}
          <div className="absolute bottom-0 flex justify-center gap-5 pl-8 pb-5">
            <img src="/icon1.svg" className=" h-[30px] md:h-auto" alt="icon" />
            <img src="/icon2.svg" className=" h-[30px] md:h-auto" alt="icon" />
            <img src="/icon3.svg" className=" h-[30px] md:h-auto" alt="icon" />
          </div>

          <img
            className=" absolute right-[-35px] md:right-[-100px] bottom-[50px] z-10 md:h-[100px] h-[30px]"
            src="/msg.svg"
            alt="msg"
          />
        </div>

        {/* 2nd full screen slide  */}
        <div className="slide min-w-[100vw] relative h-screen overflow-hidden">
          {/* logo */}
          <div className="relative z-10 md:pt-[60px] md:pl-[60px] pl-[20px] pt-[20px]">
            <img className="md:h-[60px] h-10" src="/logo.svg" alt="logo" />
          </div>
          {/* banner image */}
          <img
            className=" absolute w-full h-full inset-0 object-cover"
            src="/slide2.png"
            alt="slide"
          />

          <div className=" absolute h-full w-full flex z-10 inset-0 flex-wrap items-end md:pl-[60px] pl-[20px] lg:pr-20 pr-5 md-[pr-60px]">
            <div className="h-fit min:w-[100%] lg:w-[55%] lg:pb-24 pb-9">
              <h2 className=" text-[#F9F6F2] text-[35px] lg:text-[64px] font-title leading-[35px] lg:leading-[64px] lg:mb-7 mb-4 ">
                Wij bieden een <br /> duurzame en passende <br /> oplossing voor
                uw klus.
              </h2>
              <p className="text-[20px] text-[#E7E7E7] leading-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link
                to="#"
                className=" mt-4 lg:mt-0 lg:absolute right-[60px] bottom-24 flex w-[283px] h-[47px] bg-[#1677FF] text-white rounded-[20px] items-center justify-center"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>

        {/* 3rd full screen slide  */}
        <div className="slide min-w-[100vw] relative h-screen overflow-hidden">
          {/* logo */}
          <div className="relative z-10 md:pt-[60px] md:pr-[50px] pr-[20px] pt-[20px]">
            <img
              className="md:h-[60px] h-10 ml-auto"
              src="/logo-v2.svg"
              alt="logo"
            />
          </div>
          {/* banner image */}
          <img
            className=" absolute w-full h-full inset-0 object-cover"
            src="/slide3.png"
            alt="slide"
          />

          <div className=" absolute h-full w-full flex z-10 inset-0 flex-wrap items-center md:pl-[60px] pl-[20px] lg:pr-20 pr-5 md-[pr-60px]">
            <div className="h-fit min:w-[100%] lg:w-[55%] mt-9  ml-auto text-right">
              <h2 className=" text-[#F9F6F2] text-[35px] lg:text-[64px] font-title leading-[35px] lg:leading-[64px] lg:mb-7 mb-4 ">
                Wij bieden een <br /> duurzame en passende <br /> oplossing voor
                uw klus.
              </h2>
              <p className="text-[20px] text-[#E7E7E7] leading-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link
                to="#"
                className=" mt-7 ml-auto flex w-[283px] h-[47px] bg-[#1677FF] text-white rounded-[20px] items-center justify-center"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>

        {/* 4th full screen slide  */}
        <div className="slide min-w-[100vw] relative h-screen overflow-hidden">
          {/* logo */}
          <div className="relative z-10 md:pt-[60px] md:pl-[60px] pl-[20px] pt-[20px]">
            <img className="md:h-[60px] h-10" src="/logo.svg" alt="logo" />
          </div>
          {/* banner image */}
          <img
            className=" absolute w-full h-full inset-0 object-cover"
            src="/slide4.png"
            alt="slide"
          />

          <div className=" absolute h-full w-full flex z-10 inset-0 flex-wrap items-center md:pl-[60px] pl-[20px] lg:pr-20 pr-5 md-[pr-60px]">
            <div className="h-fit min:w-[100%] lg:w-[55%] mt-9  ml-auto text-right">
              <h2 className=" text-[#F9F6F2] text-[35px] lg:text-[64px] font-title leading-[35px] lg:leading-[64px] lg:mb-7 mb-4 ">
                Wij bieden een <br /> duurzame en passende <br /> oplossing voor
                uw klus.
              </h2>
              <p className="text-[20px] text-[#E7E7E7] leading-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link
                to="#"
                className=" mt-7 ml-auto flex w-[283px] h-[47px] bg-[#1677FF] text-white rounded-[20px] items-center justify-center"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>

        {/* 5th full screen slide  */}
        <div className="slide min-w-[100vw] relative h-screen overflow-hidden">
          {/* logo */}
          <div className="relative z-20 md:pt-[60px] md:pl-[60px] md:pr-[60px] pl-[20px] pr-[20px] pt-[20px] w-full flex justify-between items-center">
            <img className="md:h-[60px] h-10" src="/logo.svg" alt="logo" />
            <ul className="xl:flex hidden">
              <li>
                <Link
                  className="text-[#F9F6F2] text-[16px] leading-[20px] font-title mr-14"
                  to="#"
                >
                  Diensten
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#F9F6F2] text-[16px] leading-[20px] font-title mr-14"
                  to="#"
                >
                  {" "}
                  Over Ons{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#F9F6F2] text-[16px] leading-[20px] font-title "
                  to="#"
                >
                  {" "}
                  Contact{" "}
                </Link>
              </li>
            </ul>
            <Link className="text-[#E7E7E7] hidden lg:flex" to={"#"}>
              Spoed? Bel 020 1234567 of klik hier | Chat{" "}
            </Link>
          </div>
          {/* banner image */}
          <img
            className=" absolute w-full h-full inset-0 object-cover"
            src="/slide5.png"
            alt="slide"
          />

          <div className=" absolute h-full w-full flex z-10 inset-0 flex-wrap items-center md:pl-[60px] pl-[20px] lg:pr-20 pr-5 md-[pr-60px]">
            <div className="h-fit flex lg:flex-nowrap flex-wrap min:w-[100%] mt-12 lg:gap-[5%] ">
              <h2 className=" text-[#F9F6F2] text-[35px] lg:text-[64px] font-title leading-[35px] lg:leading-[64px] lg:mb-7 mb-4 w-full lg:w-[45%]">
                Wij bieden een <br /> duurzame en passende <br /> oplossing voor
                uw klus.
              </h2>
              <div className="lg:w-[45%] w-full">
                <h4 className=" text-[25px] font-[600] text-white mb-2">
                  Uw adres
                </h4>

                <p className="text-[20px] text-[#E7E7E7] leading-[24px]">
                  Via uw adres kunnen we openbare en vrij verkrijgbare
                  informatie, bijv. kadaster-gegevens en satelliet beelden,
                  gebruiken om een optimaal beeld te vormen van uw dak.
                </p>
                <input
                  className="w-full h-[40px] mt-2 pl-4 pr-4 rounded-lg placeholder-[#B3B3B3] mb-[50px]"
                  type="text"
                  placeholder="Singel 63 1012VD Amsterdam"
                />
                <button
                  type="submit"
                  className="ml-auto flex w-[283px] h-[47px] bg-[#1677FF] text-white rounded-[20px] items-center justify-center"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6th full screen slide  */}
        <div className="slide min-w-[100vw] relative h-screen overflow-hidden">
          {/* logo */}
          <div className="relative z-20 md:pt-[60px] md:pl-[60px] md:pr-[60px] pl-[20px] pr-[20px] pt-[20px] w-full flex justify-between items-center">
            <img className="md:h-[60px] h-10" src="/logo.svg" alt="logo" />
          </div>
          {/* banner image */}
          <img
            className=" absolute w-full h-full inset-0 object-cover"
            src="/slide6.png"
            alt="slide"
          />

          <div className=" absolute h-full w-full flex z-10 inset-0 flex-wrap items-end md:pl-[60px] pl-[20px] lg:pr-20 pr-5 md-[pr-60px]">
            <div className="h-fit flex lg:flex-nowrap flex-wrap min:w-[100%] mt-12 justify-between  pb-[40px] lg:pb-[90px] ">
              <h2 className=" text-[#F9F6F2] text-[35px] lg:text-[64px] font-title leading-[35px] lg:leading-[64px] w-full lg:w-[40%]">
                Wij bieden een <br /> duurzame en passende <br /> oplossing voor
                uw klus.
              </h2>
              <div className="lg:w-[45%] w-full flex flex-wrap justify-end ">
                <p className="text-[20px] text-[#E7E7E7] leading-[24px] mb-[28px] text-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>

                <Link
                  to="#"
                  className="ml-auto flex w-[283px] h-[47px] bg-[#1677FF] text-white rounded-[20px] items-center justify-center"
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 7th full screen slide  */}
        <div className="slide min-w-[100vw] relative h-screen overflow-hidden">
          {/* logo */}
          <div className="relative z-20 md:pt-[60px] md:pl-[60px] md:pr-[60px] pl-[20px] pr-[20px] pt-[20px] w-full flex justify-between items-center">
            <img className="md:h-[60px] h-10" src="/logo.svg" alt="logo" />
          </div>
          {/* banner image */}
          <img
            className=" absolute w-full h-full inset-0 object-cover"
            src="/slide7.png"
            alt="slide"
          />

          <div className=" absolute h-full w-full flex z-10 inset-0 flex-wrap items-end md:pl-[60px] pl-[20px] lg:pr-20 pr-5 md-[pr-60px]">
            <div className="h-fit flex lg:flex-nowrap flex-wrap min:w-[100%] mt-12 justify-between  pb-[40px] lg:pb-[90px] ">
              <h2 className=" text-[#F9F6F2] text-[35px] lg:text-[64px] font-title leading-[35px] lg:leading-[64px] w-full lg:w-[40%]">
                Wij bieden een <br /> duurzame en passende <br /> oplossing voor
                uw klus.
              </h2>
              <div className="lg:w-[45%] w-full flex flex-wrap justify-end ">
                <p className="text-[20px] text-[#E7E7E7] leading-[24px] mb-[28px] text-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>

                <Link
                  to="#"
                  className="ml-auto flex w-[283px] h-[47px] bg-[#1677FF] text-white rounded-[20px] items-center justify-center"
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* last full screen slide  */}
        <div className="slide min-w-[100vw] relative h-screen overflow-hidden">
          {/* logo */}
          <div className="relative z-20 md:pt-[60px] md:pl-[60px] md:pr-[60px] pl-[20px] pr-[20px] pt-[20px] w-full flex justify-between items-center">
            <img className="md:h-[60px] h-10" src="/logo.svg" alt="logo" />
          </div>
          {/* banner image */}
          <img
            className=" absolute w-full h-full inset-0 object-cover"
            src="/slide8.png"
            alt="slide"
          />

          <div className=" absolute h-full w-full flex z-10 inset-0 flex-wrap items-center md:pl-[60px] pl-[20px] lg:pr-20 pr-5 md-[pr-60px] lg:w-[60%]">
            <div className="h-fit flex lg:flex-nowrap flex-wrap min:w-[100%] mt-12  ">
              <div className=" w-full pl-2 pr-2  lg:pl-16">
                <h4 className=" text-[25px] font-[600] text-white mb-2">
                  Uw adres
                </h4>

                <p className="text-[20px] text-[#E7E7E7] leading-[24px]">
                  Via uw adres kunnen we openbare en vrij verkrijgbare
                  informatie, bijv. kadaster-gegevens en satelliet beelden,
                  gebruiken om een optimaal beeld te vormen van uw dak.
                </p>
                <input
                  className="w-full h-[40px] mt-2 pl-4 pr-4 rounded-lg placeholder-[#B3B3B3] mb-[50px]"
                  type="text"
                  placeholder="Singel 63 1012VD Amsterdam"
                />
              </div>
            </div>
          </div>

          {/* form area */}
          <div className=" absolute z-30 lg:flex right-0 top-0 bg-white w-[40%] bottom-0 hidden flex-wrap items-center ">
            <div className="w-full">
              <h3 className="text-[#11162E] text-[48px] font-title text-center leading-[60px] mb-[30px]">
                Vraag hieronder <br /> een offerte op
              </h3>
              <form className="w-[70%] m-auto border border-[#D9D9D9] p-6 rounded-xl">
                <label
                  htmlFor="name"
                  className="mb-2 flex text-[#1E1E1E] tracking-[1px]"
                >
                  Name
                </label>
                <input
                  className="w-full border h-10 rounded-md p-4 placeholder-[#B3B3B3] mb-6"
                  type="text"
                  id="name"
                  placeholder="Value"
                />
                <label
                  className="mb-2 flex text-[#1E1E1E] tracking-[1px]"
                  htmlFor="surname "
                >
                  Surname
                </label>
                <input
                  className="w-full border h-10 rounded-md p-4 placeholder-[#B3B3B3] mb-6"
                  type="text"
                  id="surname"
                  placeholder="Value"
                />
                <label
                  className="mb-2 flex text-[#1E1E1E] tracking-[1px]"
                  htmlFor="surname "
                >
                  Email
                </label>
                <input
                  className="w-full border h-10 rounded-md p-4 placeholder-[#B3B3B3] mb-6"
                  type="email"
                  placeholder="Value"
                />
                <label
                  className="mb-2 flex text-[#1E1E1E] tracking-[1px]"
                  htmlFor="Message"
                >
                  {" "}
                  Message
                </label>
                <textarea
                  className="w-full border h-10 rounded-md p-4 h-[80px] placeholder-[#B3B3B3] mb-6"
                  type="text"
                  id="Message"
                  placeholder="Value"
                />
                <button
                  type="submit"
                  className=" flex w-full bg-[#11162E] text-[#F5F5F5] font-[700] h-10 rounded-lg items-center justify-center cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
