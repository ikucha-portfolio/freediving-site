const InfoCard = ({ children }) => {
  return (
    <div className="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-lg space-y-4">
      {children}
    </div>
  );
};

export default InfoCard;