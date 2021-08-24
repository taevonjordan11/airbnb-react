import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      {/* Change banner Image */}
      <Image
        src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60de46e85a3503e096446fdb%2F0x0.jpg"
        layout="fill"
        objectPosition="cover"
      />

      <div className="absolute top-1/2 w-full text-center text-white">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>

        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm Flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
