const Footer = () => {
  const currentYear = new Date().getFullYear();
  const titleStyle = "font-semibold";
  const labelStyle = "font-semibold";
  return (
    <footer className="p-10 flex flex-col gap-4">
      <h1 className="text-3xl text-white font-semibold">PPS Links</h1>
      <section className="flex flex-row gap-2 justify-between border-b border-white py-4">
        <div className="flex flex-col text-[#D9D9D9] text-sm">
          <p>
            <span className={`${labelStyle}`}>Addresse:</span> Kalaa Sghira,
            Sousse
          </p>
          <p>
            <span className={`${labelStyle}`}>Téléphone:</span> +216 00 000 000
          </p>
          <p>
            <span className={`${labelStyle}`}>Email:</span> contact@ppslinks.com
          </p>
        </div>
        <div className="flex flex-col text-[#D9D9D9] text-sm">
          <p className={`${titleStyle}`}>Liens rapides</p>
          <p>🏠 Accueil</p>
          <p>🧾 À propos</p>
          <p>🛍️ Produits</p>
          <p>🛠️ Services</p>
          <p>📞Contact</p>
        </div>
        <div className="flex flex-col text-[#D9D9D9] text-sm">
          <p className={`${titleStyle}`}>Suivez-nous</p>
          <p>🌐 Facebook</p>
          <p>📷 Instagram</p>
          <p>💼 LinkedIn</p>
        </div>
      </section>
      <section className="text-[#D9D9D9] text-xs text-center">
        <p>© {currentYear} PPS Links. Tous droits réservés.</p>
        <p>Conçu par PPS Links.</p>
      </section>
    </footer>
  );
};

export default Footer;
