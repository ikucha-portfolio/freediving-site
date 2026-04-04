const TitleBlock = ({ children, center = false }) => {
  return (
    <h2 className={`text-3xl md:text-[32px] font-light tracking-[0.05em] text-[#8a9aa3] leading-[1.4] mb-8 ${center ? "text-center" : ""}`}>
      {children}
    </h2>
  );
};