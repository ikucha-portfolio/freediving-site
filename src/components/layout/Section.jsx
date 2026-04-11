export default function Section({ children, variant = "default", className = "" }) {
  let padding = "";

  if (variant === "compact") {
    padding = "py-12 md:py-16";
  } else if (variant === "large") {
    padding = "py-24 md:py-32";
  } else {
    padding = "py-16 md:py-24";
  }

  return (
    <section className={`w-full ${padding} ${className}`}>
      {children}
    </section>
  );
}