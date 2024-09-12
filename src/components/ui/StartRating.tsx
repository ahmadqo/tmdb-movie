interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  const fullStars = Math.floor(rating / 2); // Count of full stars
  const halfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = maxRating - fullStars - (halfStar ? 1 : 0); // Empty stars

  return (
    <div className="flex items-center z-10 mt-6">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-orange-500"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>
        ))}

      {halfStar && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5 text-orange-300 shadow-lg"
        >
          <path d="M12 17.27l6.18 3.25-1.64-7.03 5.46-4.73-7.13-.61L12 2v15.27zM12 2L9.13 8.14 2 8.75l5.46 4.73-1.64 7.03L12 17.27V2z" />
        </svg>
      )}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"
            />
          </svg>
        ))}
    </div>
  );
};

export default StarRating;
