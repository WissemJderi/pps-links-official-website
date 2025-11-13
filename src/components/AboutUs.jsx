import Title from "./utils/Title";

const AboutUs = () => {
  return (
    <div className="p-10 flex flex-col gap-12">
      <Title text={"A Propos De Nous"} />
      <section className="flex flex-col gap-3 text-gray-200 text-left">
        <p>
          PPS Links est une entreprise spécialisée dans la distribution de
          produits destinés aux secteurs alimentaire, automobile et industriel.
        </p>
        <p>
          Nous proposons une large gamme d’articles — des emballages plastiques
          alimentaires aux pièces et accessoires industriels, en passant par les
          huiles et produits automobiles.
        </p>
        <p>
          Notre mission est simple : fournir des produits de qualité, fiables et
          adaptés aux besoins variés de nos clients, tout en offrant un service
          rapide et professionnel.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
