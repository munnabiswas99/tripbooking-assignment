import React from "react";
import casa from "../../assets/partners/casa.png";
import egyptair from "../../assets/partners/egyptair.png";
import cubana from "../../assets/partners/cubana.png";
import delta from "../../assets/partners/delta.png";
import ata from "../../assets/partners/ata.png";
import westjet from "../../assets/partners/westjet.png";
import abx from "../../assets/partners/abx.png";

const Partners = () => {
  return (
<div className="mx-auto px-20 border flex gap-5 bg-[#E4E6E8] pt-30">
  
  <div className="mb-6 flex-1">
    <h2 className="text-xl font-semibold text-black">Trusted by</h2>
    <p className="text-gray-500 text-sm">
      We are a trusted partner of airlines, payment gateways,
      and travel services around the world.
    </p>
  </div>

  <div className="flex-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
    <img src={casa} className="mx-auto opacity-70" />
    <img src={egyptair} className="mx-auto opacity-70" />
    <img src={cubana} className="mx-auto opacity-70" />
    <img src={delta} className="mx-auto opacity-70" />
    <img src={ata} className="mx-auto opacity-70" />
    <img src={westjet} className="mx-auto opacity-70" />
    <img src={abx} className="mx-auto opacity-70" />
  </div>
</div>
  );
};

export default Partners;
