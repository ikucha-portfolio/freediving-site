import { Link } from "react-router-dom";

function CourseSection({
  title,
  description1,
  description2,
  duration,
  condition,
  price,
  image,
  reverse = false,
}) {
  return (
    <div
      className={`
        flex flex-col 
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"} 
        items-start 
        gap-16 
        mt-32
      `}
    >
      {/* テキスト */}
      <div className="w-full md:w-1/2 max-w-[420px] mx-auto md:mx-0 space-y-8">

        <h3 className="text-xl font-light text-[#5a6b74]">
          {title}
        </h3>

        <p className="text-sm text-[#7a8a94] leading-[2]">
          {description1}
        </p>

        <p className="text-sm text-[#7a8a94] leading-[2]">
          {description2}
        </p>

        {/* CTA（統一版） */}
        <Link
          to="/contact"
          className="
            inline-block

            px-8 py-2.5
            text-[12px]
            tracking-[0.25em]

            text-[#5a6b74]
            border border-[#cfd8dc]

            transition-all duration-300

            hover:bg-[#f0f4f6]
            hover:border-[#5a6b74]
          "
        >
          CONTACT
        </Link>

      </div>

      {/* 画像 */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full max-w-[400px] aspect-[3/4] object-cover"
        />
      </div>

    </div>
  );
}

export default CourseSection;