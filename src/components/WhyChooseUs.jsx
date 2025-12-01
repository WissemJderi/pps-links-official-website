import { whyChooseUsParagraphs } from "./utils/data";
import HorizontalRule from "./utils/HorizontalRule";
import Title from "./utils/Title";

const WhyChooseUs = () => {
  const companyAdvList = whyChooseUsParagraphs.map((paragraph, i) => {
    return (
      <div key={i} className="flex flex-col gap-4 sm:gap-10 text-center">
        <p>{i + 1 + `- ` + `${paragraph}`}</p>
        {i !== whyChooseUsParagraphs.length - 1 && (
          <HorizontalRule color={"063726"} />
        )}
      </div>
    );
  });
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-title"
      className="flex flex-col gap-12 mt-20"
    >
      <Title id="why-title" text="Pourquoi choisir PPS Links" />
      <div className="flex flex-col gap-3 text-black text-center font-medium bg-[#D9D9D9] py-15 px-5">
        {companyAdvList}
      </div>
    </section>
  );
};

export default WhyChooseUs;
