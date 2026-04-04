const Container = ({ children, size = "default" }) => {
  const sizeStyle =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
      ? "max-w-6xl"
      : "max-w-4xl";

  return (
    <div className={`${sizeStyle} mx-auto px-6 md:px-8`}>
      {children}
    </div>
  );
};

export default Container;