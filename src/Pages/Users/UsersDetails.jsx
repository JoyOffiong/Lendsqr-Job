import React from "react";
import filterButt from "../../assets/filter-results-button.png";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../Dashboard/components/Loader";
import moment from "moment/moment";
import { BiDotsVertical } from "react-icons/bi";
import ViewDetailsModal from "./ViewDetailsModal";

import { usePagination, DOTS } from './usePagination';
// import Moment from "react-moment";

export default function UsersDetails() {
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(true);

  async function fetchInfo() {
    const res = await axios.get(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );

    let response = res.data;
    setInfos(response);
    setLoading(false);
    console.log(response);
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  const options = () => {
  setShowDetails(!showDetails)
    console.log("worled");
  };

  return (
    <div className="userDetails">
      <table>
        <tbody>
          <tr className="tableHeadingWrap">
            <th>
              <span>ORGANIZATION</span>
              <img src={filterButt} alt="" />
            </th>
            <th>
              <span>USERNAME</span>
              <img src={filterButt} alt="" />
            </th>
            <th>
              <span>EMAIL</span>
              <img src={filterButt} alt="" />
            </th>
            <th>
              <span>PHONE NUMBER</span>
              <img src={filterButt} alt="" />
            </th>
            <th>
              <span>DATE JOINED</span>
              <img src={filterButt} alt="" />
            </th>
            <th>
              <span>STATUS</span>
              <img src={filterButt} alt="" />
            </th>
          </tr>

          {loading ? (
            <Loader></Loader>
          ) : (
            <div>
              {infos.map((info, id) => {
                const { orgName, email, userName, phoneNumber, createdAt} = info;

                infos.filter((info)=>{id === info.id? (<ViewDetailsModal />) : null
                })

                return (
                  <tr className="details" key={id}>
                    <td>{orgName}</td>
                    <td>{userName}</td>
                    <td>{email}</td>
                    <td>{phoneNumber}</td>
                    <td>
                      {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                    </td>
                    <td className="status"> Inactive</td>
                    <BiDotsVertical onClick={()=>{options(id)}}/>

                    <ViewDetailsModal/>
                     {/* {showDetails ? ( 
                     null
                     ) : (
                      <ViewDetailsModal />
                    )}  */}
                  </tr>
                );
              })}
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
}
