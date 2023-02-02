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
  const [currentItems, setCurrentItems] = useState([])
  const [itemsPerPage, setItemsPerPage]= useState(10)

  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);

  // const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  // setItemOffset((pageCount-1)*itemsPerPage)
  useEffect(() => {
    
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(infos.slice(itemOffset, endOffset));
 
  }, [itemOffset])
  const pageCount = Math.ceil(infos.length / itemsPerPage);
 
  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % infos.length;
    setItemOffset(newOffset);

    alert ('chidi is a goat')
  };

// const handleItemsPerPage=(Value)=>{
//   setItemsPerPage(Value)
// }

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
    setShowDetails(!showDetails);
    console.log("worled");
  };

 const handleItemsPerPage =(e)=>{
    setItemsPerPage(e.target.value)
    alert('you working?')
 }
  //get current post

  // const indexOfLastPost = currentPage + postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const CurrentPost = infos.slice(indexOfFirstPost, indexOfLastPost);

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
          <select name="" id=""  onChange={()=>{handleItemsPerPage(value)}} >
          <option value='10'>10</option>
            <option value='10'>20</option>
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
