import React, { FC } from "react";

interface StarRatingProps {
  rating: number; // The rating value from 0 to 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating); // Round to nearest integer

  return (
    <div className="star-rating flex">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={index < filledStars ? "text-black" : "text-gray-300"}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

interface ProductReviewsProps {
  date: string;
  title: string;
  className?: string;
  feedBack: string;
  userName: string;
  rating: number;
  description: string;
}

export const ProductReviews: FC<ProductReviewsProps> = ({
  date,
  description,
  title,
  feedBack,
  userName,
  className,
  rating,
}) => {
  return (
    <div className={`p-4 border rounded-md ${className}`}>
      <div className="flex justify-between items-center">
      <StarRating rating={rating} />
        <div className="text-gray-500 text-sm">{date}</div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-gray-700 font-medium">{userName}</div>
      </div>
      <div className="mt-2 text-black w-[80%]">{description}</div>
      <div className="mt-4 text-black">{feedBack}</div>
    </div>
  );
};

export default ProductReviews;
