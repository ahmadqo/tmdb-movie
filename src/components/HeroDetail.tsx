import { SECURE_IMAGE_BASE_URL } from "../utils/constants";

interface HeroProps {
  bgImage: string;
  posterImage: string;
}

const HeroDetail = ({ bgImage, posterImage }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative h-[730px] justify-center bg-cover bg-center px-8 xl:px-[160px] transition-all duration-300 ease-in-out"
      style={
        bgImage
          ? {
              backgroundImage: `url('${SECURE_IMAGE_BASE_URL}/original${bgImage}')`,
            }
          : {}
      }
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="flex justify-center items-center w-full h-full lg:pt-10">
        <img
          src={`${SECURE_IMAGE_BASE_URL}/original${bgImage}`}
          alt="banner"
          className="rounded-3xl max-h-[550px] w-fit z-10 xs-hidden sm:hidden md:block"
        />
        <img
          src={`${SECURE_IMAGE_BASE_URL}/original${posterImage}`}
          alt="banner"
          className="rounded-3xl max-h-[600px] w-fit z-10 xs:block sm:block md:hidden"
        />
      </div>
    </section>
  );
};

export default HeroDetail;
