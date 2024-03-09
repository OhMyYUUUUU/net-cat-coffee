import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DNA } from "react-loader-spinner";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const notify = () => {
    if (searchValue == "") {
      toast.error("Please input value!");
    } else {
      toast.success(`Searching : ${searchValue}`);
      setSearchValue("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#F5E8DD",
        padding: "0 2rem",
        borderRadius: "5px",
        boxShadow: "3px 5px 2px 0 gray",
      }}
      className="d-flex justify-content-between align-items-center "
    >
      <div className="d-flex flex-column align-items-center header fs-3 ">
        <p
          style={{
            fontFamily: "Anta",
            fontWeight: "bolder",
            color: "#6420AA",
          }}
        >
          Welcome to{" "}
        </p>
        <span
          style={{
            fontFamily: "monospace",
            color: "#6420AA",
            fontWeight: "bolder",
          }}
        >
          NetCat Coffee
        </span>
      </div>
      <div>
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>

      <div
        style={{
          width: "290px",
          backgroundColor: "white",
          padding: "5px",
          borderRadius: "5px",
          padding: "5px 1rem",
        }}
        className="search-box d-flex justify-content-between align-items-center fs-5 "
      >
        <input
          style={{
            border: "none",
            backgroundColor: "transparent",
            outline: "none",
            color: "#6420AA",
            fontFamily: "Anta",
          }}
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleInputChange}
        />
        <span onClick={notify}>
          <i class="fa-solid fa-magnifying-glass"></i>
          <ToastContainer position="top-center" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
