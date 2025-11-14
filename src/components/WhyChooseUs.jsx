import { whyChooseUsParagraphs } from "./utils/data";
import Title from "./utils/Title";

const WhyChooseUs = () => {
  const companyAdvList = whyChooseUsParagraphs.map((paragraph, i) => {
    return (
      <div key={i} className="flex flex-col gap-4 text-center">
        <p>{i + 1 + `- ` + `${paragraph}`}</p>
        {i !== whyChooseUsParagraphs.length - 1 && (
          <hr className="text-black w-40 font-bold border-t-2 border-[#063726] my-2 self-center" />
        )}
      </div>
    );
  });
  return (
    <div className="flex flex-col gap-12">
      <Title text="Pourquoi choisir PPS Links" />
      <section className="flex flex-col gap-3 text-black text-center font-medium bg-[#D9D9D9] py-15 px-5">
        {companyAdvList}
      </section>
    </div>
  );
};

export default WhyChooseUs;
