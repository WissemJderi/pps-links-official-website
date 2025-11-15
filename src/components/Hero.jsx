import bg from "../assets/containers.jpg";
const Hero = () => {
  return (
    <div
      className="relative w-full h-full bg-black/85"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col gap-6 justify-between text-white text-xl p-10">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-medium">PPS Links</h1>
          <h1 className="text-3xl">
            Fournisseur de produits industriels et alimentaires de qualité
          </h1>
        </div>
        <div className="flex flex-row gap-4 items-center justify-around font-bold">
          <button className="bg-[#0b5e41] border border-[#0b5e41] text-sm px-4 py-2">
            Demander Un Devis
          </button>
          <button className="border  text-sm px-4 py-2">
            Découvrir Nos Produits
          </button>
        </div>
      </div>
      {/* <img src={Containers} alt="" className="w-full h-full object-cover" /> */}
      {/* <div className="absolute inset-0 bg-black/85"></div> */}
      <div className="flex flex-col gap-6 justify-between text-white text-xl p-10"></div>
    </div>
  );
};

export default Hero;
