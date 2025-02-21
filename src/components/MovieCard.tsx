import React from "react";

const MovieCard = ({ image }: { image: string }) => {
  return (
    <div className="px-3 py-5 hover:scale-110 w-48 rounded-2xl h-auto">
      <img alt="poster " src={image} />
    </div>
  );
};

export default MovieCard;
