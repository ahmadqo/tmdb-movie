import { SECURE_IMAGE_BASE_URL } from "../../utils/constants";
import Start from "./Start";

interface CardProps {
  title: string;
  image: string;
  release_date: string;
  onClick: () => void;
  blur: boolean;
  vote_average?: number;
}

const Card = ({
  title,
  image,
  release_date,
  onClick,
  blur,
  vote_average = 0,
}: CardProps) => {
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
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "/no-images.png";
        }}
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950 via-zinc-900 to-transparent p-2 leading-none hover:opacity-0 transition-opacity duration-300">
        <h2 className="text-base font-medium text-white">{title}</h2>
        <div className="flex items-center justify-between">
          <div className="text-xs text-white opacity-70">{release_date}</div>
          {vote_average && (
            <div className="text-xs text-white flex items-center gap-1 opacity-70">
              {Number(vote_average).toFixed(1)}
              <Start size={4} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
