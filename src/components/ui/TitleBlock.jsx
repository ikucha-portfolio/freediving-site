const TitleBlock = ({ children }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-medium text-[#5a6b74] mb-10 md:mb-12">
      {children}
    </h2>
  );
};

export default TitleBlock;