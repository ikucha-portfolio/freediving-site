export default function Section({ children }) {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-8">
        {children}
      </div>
    </section>
  );
}