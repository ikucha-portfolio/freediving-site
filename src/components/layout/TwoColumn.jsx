const TwoColumn = ({ children, variant = "default" }) => {
  const style =
    variant === "compact"
      ? "gap-12 items-start"
      : "gap-24 items-start";

  return (
    <div className={`grid md:grid-cols-2 ${style}`}>
      {children}
    </div>
  );
};

export default TwoColumn;