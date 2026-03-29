const Button = ({ children }) => {
  return (
    <button className="px-6 py-3 rounded-md border border-[#cbd5da] text-sm text-[#5a6b74] hover:bg-white/80 hover:border-[#aebcc3] transition">
      {children}
    </button>
  );
};

export default Button;