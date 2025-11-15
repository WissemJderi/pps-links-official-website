const HorizontalRule = ({ color }) => {
  return (
    <hr
      className={`text-black w-40 font-bold border-t-2 rounded-4xl border-${color} my-2 self-center`}
      // gray-600
    />
  );
};

export default HorizontalRule;
