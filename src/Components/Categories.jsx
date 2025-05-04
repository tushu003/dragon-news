import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h1 className="font-bold">All Category</h1>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={"ml-4 bg-base-100 font-semibold text-[#9F9F9F] border-none hover:bg-base-200"}
        to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
