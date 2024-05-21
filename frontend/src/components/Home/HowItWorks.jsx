import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How MedConnect Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
               
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Volunteer / Create Opportunity</p>
              <p>
                
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Volunteer / Recruit Suitable Volunteers</p>
              <p>

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
