const TitleBlock = ({ children, center = false }) => {
  return (
    <h2 className={`text-3xl md:text-[32px] font-light tracking-[0.05em] text-[#5a6b74] leading-[1.4] ${center ? "text-center" : ""}`}>
      {children}
    </h2>
  );
};

export default TitleBlock;