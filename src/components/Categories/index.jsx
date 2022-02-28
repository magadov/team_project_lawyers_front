import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../redux/features/categories";

const Category = () => {
  const categories = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        "..."
      ) : (
        <ul>
          {categories.map((category) => {
            return (
              <li key={category._id}>
                {category.name}
              </li>
              )
          })}
        </ul>
      )}
    </div>
  );
};

export default Category;
