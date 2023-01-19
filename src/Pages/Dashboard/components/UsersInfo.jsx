import React from "react";
import icon1 from "../../../assets/icon (2).png";
import icon2 from "../../../assets/icon (3).png";
import icon3 from "../../../assets/icon (4).png";
import icon4 from "../../../assets/icon (5).png";

export default function UsersInfo() {
  const usersType = [
    {
      img: icon1,
      user: "USERS",
      figure: "2,453",
    },
    {
        img: icon2,
        user: "ATIVE USERS",
        figure: "2,453",
      },
      {
        img: icon3,
        user: "USERS WITH LOANS",
        figure: "12,453",
      },
      {
        img: icon4,
        user: "USERS WITH SAVINGS",
        figure: "102,453",
      },
  ];

  return (
    <div className="userInformation">

        <h3 className="UserTitle" >Users</h3>
   

      <div className="userInfoCard">
        {usersType.map((usersType, index)=>{
            const {img, user, figure} = usersType
            return(
                <div className="card" key={index}>
                <img src={img} alt="" />
                <div>
                  <p>{user}</p>
                  <h3>{figure}</h3>
                </div>
              </div>
            )
        })}

       


      </div>
    </div>
  );
}
