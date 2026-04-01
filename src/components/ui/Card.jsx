import { Link } from "react-router-dom";

const Card = ({ title, description, variant = "default" }) => {

  const baseStyle =
    "border border-gray-100 transition duration-300 cursor-pointer";

  const variantStyle =
    variant === "home"
      ? "bg-white/70 p-10 space-y-6 hover:shadow-lg hover:-translate-y-1"
      : "bg-white p-6 space-y-4";

  return (
    <Link to="/course" className="block">
      <div className={`${baseStyle} ${variantStyle}`}>

        <h3 className="text-lg font-light text-[#5a6b74]">
          {title}
        </h3>

        <p className="text-sm text-[#7a8a94] leading-[2]">
          {description}
        </p>

        {variant === "home" && (
          <div className="text-xs text-gray-400 tracking-widest flex items-center gap-2">
            Learn More <span>›</span>
          </div>
        )}

      </div>
    </Link>
  );
};

export default Card;