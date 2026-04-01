const TwoColumn = ({ children, variant = "default" }) => {
  const gapStyle =
    variant === "wide"
      ? "gap-20"
      : "gap-8 md:gap-12";

  return (
    <div className={`grid md:grid-cols-2 items-center ${gapStyle}`}>
      {children}
    </div>
  );
};

export default TwoColumn;