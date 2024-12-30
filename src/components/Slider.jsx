import React from "react";

export default function Slider() {
  // slider action
  React.useEffect(() => {
    const carousel = document.querySelector(".carousel");

    let currdeg = 0;
    let autoplayInterval;

    // Rotate function
    function rotate(direction) {
      if (direction === "n") {
        currdeg -= 60;
      } else if (direction === "p") {
        currdeg += 60;
      }
      carousel.style.transform = `rotateY(${currdeg}deg)`;
    }
    // Autoplay function
    function startAutoplay() {
      autoplayInterval = setInterval(() => {
        rotate("n");
      }, 4000);
    }
    // init autoplay function
    startAutoplay();
  }, []);

  return (
    <>
      <div className="w-full slide-wrap mt-10 h-[500px] ">
        <div className="container">
          <div className="carousel">
            {/* single  */}
            <div className="item a">
              <img src="/p1.jpg" alt="" />
            </div>
            {/* single  */}
            <div className="item b">
              <img src="/p2.jpg" alt="" />
            </div>
            {/* single  */}
            <div className="item c">
              <img src="/p3.jpg" alt="" />
            </div>
            {/* single  */}
            <div className="item d">
              <img src="/p1.jpg" alt="" />
            </div>
            {/* single  */}
            <div className="item e">
              <img src="/p2.jpg" alt="" />
            </div>
            {/* single  */}
            <div className="item f">
              <img src="/p3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* description  */}
      <div className="w-full pl-5 pr-5 md:w-[60%] m-auto">
        <p className=" text-[#11162E] text-[20px]">
          Bij GMK Dakonderhoud combineren we vakmanschap met passie voor daken.
          Onze specialisten zijn deskundig in het aanbrengen en onderhouden van
          diverse soorten dakbedekkingen, waaronder dakpannen, bitumen en EPDM.
          Of het nu gaat om dakisolatie, dakreiniging of het repareren van
          lekkages, wij behandelen elke klus met de hoogste zorg en aandacht.
        </p>
        <p className="mt-6 text-[#11162E] text-[20px]">
          Onze focus ligt op kwaliteit en duurzaamheid, zodat uw dak niet alleen
          functioneel is, maar ook esthetisch aantrekkelijk. Klanten waarderen
          onze snelle service en professionele oplossingen. Bekijk onze
          projecten en ontdek hoe wij uw dak kunnen transformeren met de juiste
          materialen en technieken voor een langdurige bescherming.
        </p>
      </div>
      {/* big image  */}
      <div>
        <img
          className="w-full object-contain mt-14"
          src="/big-title-2.svg"
          alt="title"
        />
      </div>
    </>
  );
}
