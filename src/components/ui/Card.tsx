import { SECURE_IMAGE_BASE_URL } from "../../utils/constants";

interface CardProps {
  title: string;
  image: string;
  release_date: string;
  onClick: () => void;
  blur: boolean;
}

const Card = ({ title, image, release_date, onClick, blur }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-lg overflow-hidden shadow-lg w-full h-full cursor-pointer hover:border-orange-500 hover:border-2 transition-opacity duration-300 ${
        blur ? "opacity-20" : "opacity-100"
      }`}
    >
      <img
        src={`${SECURE_IMAGE_BASE_URL}/w220_and_h330_face/${image}`}
        alt={title}
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950 via-zinc-900 to-transparent p-2 leading-none hover:opacity-0 transition-opacity duration-300">
        <h2 className="text-base font-medium text-white">{title}</h2>
        <span className="text-xs text-white opacity-70">{release_date}</span>
      </div>
    </div>
  );
};
export default Card;
