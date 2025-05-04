import React from "react";
import { FaEye, FaStar, FaShareAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    
  } = news;
  const formattedDate=new Date(news.author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md mb-6 ">
      <div className="card-body space-y-2">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={author?.img}
              alt={author?.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{author?.name}</p>
              <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
          <CiBookmark size={18} className=" cursor-pointer" />
          <FaShareAlt className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Title */}
        <h2 className="card-title font-2xl">{title}</h2>

        {/* Image */}
        <figure className="rounded-lg">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </figure>

        {/* Details */}
        <p className="text-sm text-gray-600">
          {details.slice(0, 400)}...
          <span className="text-orange-600 font-semibold cursor-pointer"> Read More</span>
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center border-t pt-3 text-sm text-gray-600">
          <div className="flex items-center text-orange-500 gap-1">
            {[...Array(rating?.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-2 text-gray-800">{rating?.number}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>

        {/* Badge */}
        {/* {others?.is_trending && ( */}
        {/* //   <div className="badge badge-warning w-fit">{rating?.badge}</div> */}
        {/* // )} */}
      </div>
    </div>
  );
};

export default NewsCard;
