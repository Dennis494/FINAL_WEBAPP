import React from "react";



const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "St. Benard Medical Center",
      location: "Street 10 Karachi, Kano",
      openPositions: 10,
    
    },
    {
      id: 2,
      title: "OurLady of Apostles Medical Center",
      location: "Street 10 Karachi, Lagos",
      openPositions: 5,
     
    },
    {
      id: 3,
      title: "Veritas Clinic",
      location: "Veritas University Abuja",
      openPositions: 20,
     
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>PRIMARY HEALTH CENTERS</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
