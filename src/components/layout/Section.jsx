export default function Section({ children, variant = "default" }) {
  let padding = "";

  if (variant === "compact") {
    padding = "py-16 md:py-20";
  } else if (variant === "large") {
    padding = "py-48";
  } else {
    padding = "py-40";
  }

  return (
    <section className={`w-full ${padding}`}>
      {children}
    </section>
  );
}