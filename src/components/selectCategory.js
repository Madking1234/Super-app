import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./selectCategory.css";
import SelectedCategory from "../pages/SelectedCategory";
import DisplayCategory from "../pages/DisplayCategory";
import ActionImage from "./assets/Action.png";
import DramaImage from "./assets/Drama.png";
import RomanceImage from "./assets/Romance.png";
import ThrillerImage from "./assets/Thriller.png";
import WesternImage from "./assets/Western.png";
import HorrorImage from "./assets/Horror.png";
import FantasyImage from "./assets/Fantasy.png";
import MusicImage from "./assets/Music.png";
import FictionImage from "./assets/Fiction.png";

function SelectCategory() {
  const defaultCategory = [
    {
      label: "Action",
      value: "Action",
      imageUrl: ActionImage,
      isSelected: false,
      backgroundColour: "rgba(255, 82, 9, 1)",
    },
    {
      label: "Drama",
      value: "Drama",
      imageUrl: DramaImage,
      isSelected: false,
      backgroundColour: "rgba(215, 164, 255, 1)",
    },
    {
      label: "Romance",
      value: "Romance",
      imageUrl: RomanceImage,
      isSelected: false,
      backgroundColour: "rgba(20, 138, 8, 1)",
    },
    {
      label: "Thriller",
      value: "Thriller",
      imageUrl: ThrillerImage,
      isSelected: false,
      backgroundColour: "rgba(132, 194, 255, 1)",
    },
    {
      label: "Western",
      value: "Western",
      imageUrl: WesternImage,
      isSelected: false,
      backgroundColour: "rgba(144, 37, 0, 1)",
    },
    {
      label: "Horror",
      value: "Horror",
      imageUrl: HorrorImage,
      isSelected: false,
      backgroundColour: "rgba(115, 88, 255, 1)",
    },
    {
      label: "Fantasy",
      value: "Fantasy",
      imageUrl: FantasyImage,
      isSelected: false,
      backgroundColour: "rgba(255, 74, 222, 1)",
    },
    {
      label: "Music",
      value: "Music",
      imageUrl: MusicImage,
      isSelected: false,
      backgroundColour: "rgba(230, 30, 50, 1)",
    },
    {
      label: "Fiction",
      value: "Fiction",
      imageUrl: FictionImage,
      isSelected: false,
      backgroundColour: "rgba(108, 208, 97, 1)",
    },
  ];
  const [selectedNames, setSelectedNames] = useState([]);
  const [categories, setCategories] = useState(defaultCategory);

  const toggleCategorySelection = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].isSelected = !updatedCategories[index].isSelected;
    setCategories(updatedCategories);
    const selectedCategories = updatedCategories.filter(
      (category) => category.isSelected
    );
    setSelectedNames(selectedCategories);
  };

  const navigate = useNavigate();

  const nextPage = (e) => {
    e.preventDefault();
    if (selectedNames.length < 3) {
      // If less than 3 categories are selected, do nothing and display an error in SelectedCategory component.
    } else {
      navigate("/Main"); // Navigate to the next page.
    }
  };

  return (
    <div className="CategoryPage">
      <div className="sub-category">
        <p className="app-name">Super app</p>
        <div className="simple-text">
          <p>Choose your entertainment category</p>
          <div className="choosed-category">
            <SelectedCategory
              selectedNames={selectedNames}
              setSelectedNames={setSelectedNames}
              nextPage={nextPage}
            />
          </div>
        </div>
      </div>
      <div className="selectCategory">
        <DisplayCategory
          defaultCategory={categories}
          toggleCategorySelection={toggleCategorySelection}
        />
        <button
          className="next-page"
          value="submit"
          type="submit"
          onClick={nextPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default SelectCategory;
