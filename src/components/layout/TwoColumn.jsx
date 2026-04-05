const TwoColumn = ({ children, variant = "default" }) => {
  const style =
  variant === "compact"
    ? "gap-6 md:gap-8 items-start"
    : "gap-12 md:gap-16 items-start";
  return (
    <div className={`grid md:grid-cols-2 ${style}`}>
      {children}
    </div>
  );
};

export default TwoColumn;