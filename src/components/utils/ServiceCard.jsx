const ServiceCard = ({ title, icon: Icon, description }) => {
  return (
    <article className="bg-[#D9D9D9] flex flex-col items-center gap-6 justify-between p-6 rounded-lg">
      <h1 className="text-3xl sm:text-2xl text-black text-center font-medium">
        {title}
      </h1>
      <Icon size="80" aria-hidden="true" />
      <p className="text-sm font-medium text-center">{description}</p>
    </article>
  );
};

export default ServiceCard;
