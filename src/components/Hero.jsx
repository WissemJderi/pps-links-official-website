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
      <div className="relative z-10 flex flex-col gap-10 justify-between items-center text-white text-xl p-10 sm:p-40 ">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl sm:text-5xl font-medium">PPS Links</h1>
          <h1 className="text-3xl sm:text-2xl">
            Fournisseur de produits industriels et alimentaires de qualité
          </h1>
        </div>
        <div className="flex flex-row gap-4 sm:gap-12 items-center justify-around sm:font-semibold font-bold">
          <button className="bg-[#0b5e41] border border-[#0b5e41] sm:text-lg text-sm px-4 py-2 cursor-pointer">
            Demander Un Devis
          </button>
          <button
            onClick={() => {
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border  text-sm px-4 py-2 cursor-pointer sm:text-lg "
          >
            Découvrir Nos Produits
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-between text-white text-xl p-10"></div>
    </div>
  );
};

export default Hero;
