import { services } from "./utils/data";
import ServiceCard from "./utils/ServiceCard";
import Title from "./utils/Title";

const Services = () => {
  const serviceList = services.map((service) => {
    return (
      <ServiceCard
        key={service.title}
        title={service.title}
        icon={service.icon}
        description={service.description}
      />
    );
  });
  return (
    <div
      id="services"
      className="my-20 p-10 md:px-50 lg:px-60 flex flex-col gap-12"
    >
      <Title text={"Nos services"} />
      <ul className="flex flex-col gap-12">{serviceList}</ul>
    </div>
  );
};

export default Services;
