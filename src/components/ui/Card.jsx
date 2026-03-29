const Card = ({ children }) => {
  return (
    <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg hover:bg-white/60 transition">
      {children}
    </div>
  );
};

export default Card;