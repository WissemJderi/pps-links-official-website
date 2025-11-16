const HorizontalRule = ({ color = "ffffff" }) => {
  return (
    <hr
      className={`w-40 font-bold border-t rounded-4xl border-[#${color}] my-2 self-center`}
    />
  );
};

export default HorizontalRule;
