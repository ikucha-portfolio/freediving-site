import { Link } from "react-router-dom";

const Card = ({ title, description, variant = "default" }) => {
  const baseStyle = "transition duration-300 cursor-pointer";

  const variantStyle =
    variant === "home"
      ? `
        p-8
        bg-white/70
        border border-[#e5e0d8]
        rounded-none
        hover:bg-white
        hover:shadow-md
      `
      : `
        p-6
        border-b border-[#e5e0d8]
      `;

  return (
    <Link to="/course" className="block h-full">
      <div className={`${baseStyle} ${variantStyle} h-full`}>

        <h3 className="text-[18px] font-light text-[#6b7c85]">
          {title}
        </h3>

        <p className="text-[14px] text-[#8fa0a8] leading-[1.8] mt-3">
          {description}
        </p>

        {variant === "home" && (
          <div className="text-[12px] text-[#aab6bd] tracking-[0.15em] mt-6">
            Learn More →
          </div>
        )}

      </div>
    </Link>
  );
};

export default Card;