import { Link } from "react-router-dom";

const Card = ({ title, description, variant = "default" }) => {

  const baseStyle =
    "transition duration-300 cursor-pointer";

  const variantStyle =
  variant === "home"
    ? `
      p-8
      bg-white/70
      border border-[#e5e0d8]
      rounded-none
      hover:bg-white
      transition
    `
    : `
      p-6
      border-b border-[#e5e0d8]
    `;

  return (
    <Link to="/course" className="block">
      <div className={`${baseStyle} ${variantStyle}`}>

        <h3 className="text-lg font-light text-[#5a6b74]">
          {title}
        </h3>

        <p className="text-sm text-[#7a8a94] leading-[1.9] mt-2">
          {description}
        </p>

        {variant === "home" && (
          <div className="text-xs text-gray-400 tracking-widest mt-4">
            Learn More →
          </div>
        )}

      </div>
    </Link>
  );
};

export default Card;