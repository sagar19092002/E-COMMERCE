import React, { FC } from "react";
import { Reviews } from "@/components/Reviews";

interface ReviewsPageProps {
  reviews: { [key: string]: number };
  date: string;
  title: string;
  className?: string;
  feedBack: string;
  userName: string;
  rating: number;
  description: string;
}

const ReviewsPage: FC<ReviewsPageProps> = ({
  date,
  title,
  className,
  feedBack,
  userName,
  rating,
  description,
  reviews,
}) => {
  return (
    <div className="flex flex-row">
      <Reviews />
      <div>Objects.</div>
    </div>
  );
};

export default ReviewsPage;
