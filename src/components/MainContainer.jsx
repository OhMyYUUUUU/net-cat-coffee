import React from "react";


const MainContainer = () => {
  return (
    <div
      style={{
        margin: "4rem 2rem",
        // backgroundColor: "black",
      }}
      className="d-flex justify-content-center align-items-center gap-4"
    >
      <div
        style={{
          width: "20px",
          height: "350px",
          backgroundColor: "#6420AA",
        }}
      ></div>
      <div>
        <p
          style={{
            fontFamily: "Madimi One",
            fontWeight: 400,
          }}
          className="fs-2"
        >
          Coffee does more than boost your energy. A few daily cups of coffee
          may also lower your risk of type 2 diabetes and depression, support
          weight management, and help you live a longer life.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-outline-danger fs-4">Buy Now</button>
          <button className="btn btn-outline-primary fs-4">More Info</button>
        </div>
      </div>

      <div className="img">
        <img
          style={{
            // width: "00px",
            height: "350px",
          }}
          src="https://majestycoffee.com/cdn/shop/articles/coffee_cup2_800x.jpg?v=1683531671"
          alt=""
        />
      </div>
    </div>
  );
};

export default MainContainer;
