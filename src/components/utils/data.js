import { FaBoxesStacked, FaTruck } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

export const products = [
  // Emballages alimentaires
  [
    {
      title: "Boîte Alimentaire 500ml",
      img: "https://images.unsplash.com/photo-1562571708-527276a391ac?q=80&w=1470&auto=format&fit=crop",
      description:
        "Contenant alimentaire en plastique rigide, parfait pour repas individuels. Résistant à la chaleur et au froid.",
    },
    {
      title: "Boîte Alimentaire 750ml",
      img: "https://images.unsplash.com/photo-1667499745120-f9bcef8f584e?q=80&w=761&auto=format&fit=crop",
      description:
        "Boîte polyvalente pour stockage et livraison de plats. Hermétique et adaptée au contact alimentaire.",
    },
    {
      title: "Boîte Alimentaire 1000ml",
      img: "https://images.unsplash.com/photo-1668838289210-e7665d947145?q=80&w=1630&auto=format&fit=crop",
      description:
        "Grand contenant idéal pour plats familiaux ou préparations en grande quantité. Durable et réutilisable.",
    },
  ],

  // Produits automobiles
  [
    {
      title: "Huile Moteur 5W30 Synthétique",
      img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Huile de haute performance pour protéger le moteur et optimiser la consommation de carburant.",
    },
    {
      title: "Nettoyant Vitres Auto",
      img: "https://images.unsplash.com/photo-1624884269715-70759892cd29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Produit professionnel pour nettoyer les vitres sans traces et améliorer la visibilité.",
    },
    {
      title: "Shampooing Carrosserie",
      img: "https://images.unsplash.com/photo-1703609438732-2fad53e62a4b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwc2hhbXBvb3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Shampooing concentré pour lavage manuel de voitures, laisse une finition brillante.",
    },
  ],

  // Fournitures industrielles
  [
    {
      title: "Ruban Adhésif Industriel",
      img: "https://images.unsplash.com/photo-1705484154110-8d5415643b37?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Ruban ultra-résistant conçu pour emballages lourds, réparations et applications industrielles.",
    },
    {
      title: "Gants de Protection en Nitrile",
      img: "https://images.unsplash.com/photo-1665492133710-2bac71d3c14f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Gants de sécurité résistants aux produits chimiques, parfaits pour ateliers et usines.",
    },
    {
      title: "Lubrifiant Industriel Multi-Usage",
      img: "https://images.unsplash.com/photo-1746014995485-e8a698f39804?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      description:
        "Lubrifiant professionnel pour réduire la friction, prévenir la rouille et prolonger la durée des machines.",
    },
  ],
];

export const services = [
  {
    title: "Vente en gros et au détail",
    icon: FaBoxesStacked,
    description: "Fourniture flexible pour entreprises et particuliers.",
  },
  {
    title: "Commandes sur mesure",
    icon: IoSettings,
    description: "Nous adaptons nos produits à vos besoins spécifiques.",
  },
  {
    title: "Livraison rapide",
    icon: FaTruck,
    description: "Réseau logistique efficace pour assurer des délais courts.",
  },
];

export const whyChooseUsParagraphs = [
  "Large gamme de produits — Un seul partenaire pour plusieurs secteurs.",
  "Qualité garantie — Sélection rigoureuse de fournisseurs et de matériaux.",
  "Prix compétitifs — Meilleur rapport qualité-prix du marché.",
  "Service client réactif — Réponses rapides et suivi personnalisé.",
  "Fiabilité et professionnalisme — Des années d’expérience au service de nos clients.",
];
