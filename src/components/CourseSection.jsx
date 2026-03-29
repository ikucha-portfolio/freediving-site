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
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-16 mt-32`}>

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

        <div className="bg-white border border-gray-100 p-6 space-y-4 w-full max-w-[380px]">

          <div>
            <p className="text-xs text-gray-400 mb-1">期間</p>
            <p className="text-sm text-[#5a6b74]">{duration}</p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-1">受講条件</p>
            <p className="text-sm text-[#5a6b74]">{condition}</p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-1">料金</p>
            <p className="text-lg font-light text-[#5a6b74]">{price}</p>
          </div>

        </div>

        <button className="text-xs border border-gray-400 px-5 py-2.5 text-[#5a6b74] hover:bg-black hover:text-white transition">
          お問い合わせ
        </button>

      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full max-w-[400px] aspect-[3/4] object-cover rounded-sm"
        />
      </div>

    </div>
  );
}

export default CourseSection;