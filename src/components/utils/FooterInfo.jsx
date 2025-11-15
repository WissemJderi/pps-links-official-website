const FooterInfo = ({ label, info, icon }) => {
  const labelStyle = "font-medium";
  return (
    <p className="flex flex-col items-center gap-4">
      {icon}
      <span>
        <span className={`${labelStyle}`}>{label}:</span> {info}
      </span>
    </p>
  );
};

export default FooterInfo;
