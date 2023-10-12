import "./DisplayCategory.css";
import React from "react";

function DisplayCategory({ defaultCategory, toggleCategorySelection }) {
  return (
    <div className="category-box">
      {defaultCategory.map((category, index) => (
        <div
          className="boxes"
          style={{
            backgroundColor: category.backgroundColour,
            border: category.isSelected ? "4px solid green" : " ",
          }}
          onClick={() => toggleCategorySelection(index)}
          key={index}
        >
          <p>{category.value}</p>
          <img src={category.imageUrl} alt="images" id="images" />
        </div>
      ))}
    </div>
  );
}

export default DisplayCategory;
