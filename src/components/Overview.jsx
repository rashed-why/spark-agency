export default function Overview() {
  return (
    <div className="relative overflow-hidden mt-14">
      <img className="w-full object-contain" src="/big-title.svg" alt="title" />
      <div className="flex justify-between flex-wrap lg:flex-nowrap mt-[50px]">
        {/* text  */}
        <div className="lg:pl-[120px] pr-5 lg:pr-0 pl-[20px] w:full lg:w-[40%]">
          <p className=" text-[20px] leading-[24px] mb-5">
            Wij zijn gespecialiseerd in Dak reparaties, -renovaties en
            -onderhoud.Dak lekkage? Spoedaanvragen? Dan bent u bij ons aan het
            juiste adres. Onze 24 uursservice zorgt ervoor dat wij u altijd op
            korte termijn een oplossing kunnen bieden. Wij brengen de
            verwachtingen van onze klanten in kaart en geven een duurzame
            passende oplossing voor uw klus. Dit wordt mogelijk gemaakt door
            onze vakmensen die jarenlang ervaring hebben. De specialisaties zijn
            o.a. het leveren en aanbrengen van Bitumen, Epdm en pannen daken.
            Maar ook het vernieuwen van lood en zink.
          </p>
          <p className=" text-[20px] leading-[24px] mb-5">
            Goed om te weten; Het materiaal dat wij gebruiken behoort tot deA
            klasse producten, dit zorgt voor een perfect eindresultaat. Het doel
            is u zo snel en goed mogelijk te helpen.Wij leggen de lat hoog en
            streven naar het beste eindresultaat. Hiervoor hebben wij uw hulp
            nodig; transparantie, goede communicatie en duidelijke afspraken.
            Heeft u vragen of wilt u meer informatie? Wij staan klaar om u
            verder te helpen. Dakonderhoud GMK uw specialist voor alle klussen
            in en rondom uw huis.
          </p>
          {/* bottom logos */}
          <div className=" flex gap-5 mt-[50px] mb-[50px]">
            <img src="/icon1.svg" className=" h-[30px] md:h-auto" alt="icon" />
            <img src="/icon2.svg" className=" h-[30px] md:h-auto" alt="icon" />
            <img src="/icon3.svg" className=" h-[30px] md:h-auto" alt="icon" />
          </div>
        </div>

        {/* images */}
        <div className="lg:w-[45%] w-full flex flex-wrap p-0 lg:pr-[50px] content-baseline ">
          {/* single */}
          <div className="relative w-[50%] overflow-hidden">
            <div className="pt-[calc(255/400*100%)] overflow-hidden relative">
              <img
                className="absolute object-cover inset-0 h-full w-full"
                src="/g1.jpg"
                alt=""
              />
            </div>
          </div>
          {/* single */}
          <div className="relative w-[50%] overflow-hidden">
            <div className="pt-[calc(255/400*100%)] overflow-hidden relative">
              <img
                className="absolute object-cover inset-0 h-full w-full"
                src="/g2.jpg"
                alt=""
              />
            </div>
          </div>
          {/* single */}
          <div className="relative w-[50%] overflow-hidden">
            <div className="pt-[calc(255/400*100%)] overflow-hidden relative">
              <img
                className="absolute object-cover inset-0 h-full w-full"
                src="/g3.jpg"
                alt=""
              />
            </div>
          </div>
          {/* single */}
          <div className="relative w-[50%] overflow-hidden ">
            <div className="pt-[calc(255/400*100%)] overflow-hidden relative">
              <img
                className="absolute object-cover inset-0 h-full w-full"
                src="/g4.jpg"
                alt=""
              />
            </div>
          </div>
          {/* single */}
          <div className="relative w-[50%] overflow-hidden">
            <div className="pt-[calc(255/400*100%)] overflow-hidden relative">
              <img
                className="absolute object-cover inset-0 h-full w-full"
                src="/g1.jpg"
                alt=""
              />
            </div>
          </div>
          {/* single */}
          <div className="relative w-[50%] overflow-hidden">
            <div className="pt-[calc(255/400*100%)] overflow-hidden relative">
              <img
                className="absolute object-cover inset-0 h-full w-full"
                src="/g6.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
