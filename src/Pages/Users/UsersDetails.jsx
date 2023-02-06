import React from "react";
import filterButt from "../../assets/filter-results-button.png";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../Dashboard/components/Loader";
import moment from "moment/moment";
// import Pagination from "./Pagination";
import ReactPaginate from "react-paginate";
import { BiDotsVertical } from "react-icons/bi";
import ViewDetailsModal from "./ViewDetailsModal";
// import { Value } from "sass";
// import { usePagination, DOTS } from './usePagination';
// import Moment from "react-moment";

export default function UsersDetails() {
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(true);

  const [currentItems, setCurrentItems] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedPage, setSelectedPage] = useState(1);

  const [itemOffset, setItemOffset] = useState(0);

  async function fetchInfo() {
    const res = await axios.get(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );

    let response = res.data;
    setInfos(response);
    updateCurrentItems(response);
    setLoading(false);
  }

//   Here we are updating the current set of items rendered on the page 
  function updateCurrentItems(r) {
    const endOffset = itemOffset + itemsPerPage;   // The last item here is equal to first item + number of items on a page
    setCurrentItems(r.slice(itemOffset, endOffset));  // here we are setting the currentItems to the pack of items from 0 to the endoffset
    console.log({endOffset, itemOffset, itemsPerPage})
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleItemsPerPage = (e) => {
    setItemsPerPage(parseInt(e)); // here we are simply handling the number of items that show at a time, onchangeof the select
  };

  const pageCount = Math.ceil(infos.length / itemsPerPage);  //   here, we are calculating the number of pages to be generated. This is based the length of the array divided by items showing at a time.


// The function below take care of the change in page number. When you click on 5, the set of numbers for that page will show
  const handlePageClick = (event) => {
    setSelectedPage(event.selected);
    // below, newoffset is equated to the remainder of (page number you have selected * itemsPerPage) 
    const newOffset = (selectedPage * itemsPerPage) % infos.length;
    setItemOffset(newOffset); //we will set itemsoffset to newoffset
    updateCurrentItems(infos)
  };

  const options = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    updateCurrentItems(infos); //for everytime we have a change of currentItems, the page reloads.
  }, [itemsPerPage]);

  //   handle selected page change
//   useEffect(() => {
//     const newOffset = (selectedPage * itemsPerPage) % infos.length;
//     setItemOffset(newOffset);
//   }, [selectedPage]);

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
              {currentItems.map((info, id) => {
                const { orgName, email, userName, phoneNumber, createdAt } =
                  info;

                infos.find((info) => {
                  id == info.id ? <ViewDetailsModal /> : null;
                });
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
                    <BiDotsVertical
                      onClick={() => {
                        options(id);
                      }}
                    />

                    {/* <ViewDetailsModal/> */}
                    {showDetails ? null : <ViewDetailsModal />}
                  </tr>
                );
              })}
              <div className="paginate">
                <div className="showing">
                  <p>Showing</p>
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      handleItemsPerPage(e.target.value);
                    }}
                  >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </select>
                  <p>out of 100</p>
                </div>

                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="<"
                  renderOnZeroPageCount={null}
                  className="pagination"
                  pageClassName="page-num"
                  previousLinkClassName="page-num"
                  nextLinkCLassName="page-num"
                  nextClassName="page-num"
                  activeLinkClassName="active"
                  disabledClassName="disable-pagination"
                />
              </div>
            </div>
          )}
        </tbody>
      </table>

      {/* 
      <div>
        <p>Showing</p> 
        <select defaultValue={10} name="" id="" onChange={(e)=>{handleItemsPerPage(e.target.value)}}> 
        <option value="10">10</option>
        <option value="20">20 </option>
        <option value="20">30 </option>
        <option value="20">40 </option>
        <option value="20">50 </option>
        <option value="20">60 </option>
        <option value="20">70 </option>
        <option value="20">80 </option>
        <option value="20">90 </option>
        <option value="20">100 </option>
      </select>
      </div>
 */}

      {/* <Pagination postsPerPage={postsPerPage} totalPosts={infos.length} /> */}
    </div>
  );
}
