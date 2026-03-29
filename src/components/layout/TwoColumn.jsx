const TwoColumn = ({ children }) => {
  return (
    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      {children}
    </div>
  );
};

export default TwoColumn;