import React, { useState, useEffect } from "react";
import "./SelectedCategory.css";

function SelectedCategory({ selectedNames, setSelectedNames }) {
  const [error, setError] = useState(false);

  const deselectCategory = (index) => {
    const updatedCategories = [...selectedNames];

    updatedCategories[index].isSelected = !updatedCategories[index].isSelected;
    updatedCategories.splice(index, 1);

    setSelectedNames(updatedCategories);
  };

  useEffect(() => {
    if (selectedNames.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
    const selectedCategoryNames = selectedNames.map(
      (category) => category.label
    );
    localStorage.setItem(
      "selectedCategoryNames",
      JSON.stringify(selectedCategoryNames)
    );
  }, [selectedNames]);

  return (
    <div className="names">
      {selectedNames && selectedNames.length > 0 ? (
        selectedNames.map((category, index) => (
          <div className="selected-name">
            <p key={index}>{category.label}</p>
            <button
              onClick={() => deselectCategory(index)}
              className="delete-button"
            >
              X
            </button>
          </div>
        ))
      ) : (
        <p></p>
      )}
      {error && (
        <p
          className="error-message"
          style={{
            fontSize: "20px",
            color: "red",
            marginTop: "100px",
            textAlign: "left",
            display: "flex",
            justifyContent: "left",
            marginRight: "40px",
          }}
        >
          Please select at least 3 categories.
        </p>
      )}
    </div>
  );
}

export default SelectedCategory;
