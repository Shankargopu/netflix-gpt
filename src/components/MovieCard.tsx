import React from "react";

const MovieCard = ({ image }: { image: string }) => {
  // console.log(image)
  if (!image) return null;
  return (
    <div className="px-3 py-5 hover:scale-110 w-30 md:w-48 rounded-2xl h-auto">
      <img alt="poster" src={image} />
    </div>
  );
};

export default MovieCard;
