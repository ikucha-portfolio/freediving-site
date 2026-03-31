const TwoColumn = ({ children, variant = "default" }) => {
  const gapStyle =
    variant === "wide"
      ? "gap-24"
      : "gap-12 md:gap-16";

  return (
    <div className={`grid md:grid-cols-2 items-center ${gapStyle}`}>
      {children}
    </div>
  );
};

export default TwoColumn;