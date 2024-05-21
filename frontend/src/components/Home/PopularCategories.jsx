import React from "react";


const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Cardiology",
      subTitle: "305 Open Positions"
    },
    {
      id: 2,
      title: "Dermatology",
      subTitle: "500 Open Positions"
    },
    {
      id: 3,
      title: "Emergency Medicine",
      subTitle: "200 Open Positions"
    },
    {
      id: 4,
      title: "Family Medicine",
      subTitle: "1000+ Open Postions"
    },
    {
      id: 5,
      title: "Pathology",
      subTitle: "150 Open Positions"
    },
    {
      id: 6,
      title: "Forensic Pathology",
      subTitle: "867 Open Positions"
    },
    {
      id: 7,
      title: "Hospital Medicine",
      subTitle: "50 Open Positions"
    },
    {
      id: 8,
      title: "Neurology",
      subTitle: "80 Open Positions"
    },
  ];
  return (
    <div className="categories">
      <h3>POPULAR CATEGORIES</h3>
      <div className="banner">
        {categories.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="text">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;
