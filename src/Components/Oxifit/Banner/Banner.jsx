import React from "react";

const banner =
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
const Banner = () => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover mt-2  "
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className=" ">
        <div className="md:py-24 px-7 py-20 text-white text-center font-bold ">
          <h1 className="md:text-7xl text-4xl text-green-500  my-10">
            We are Open 24/7
          </h1>
          <p className="text-lg my-4">
            We are pleased to announce that we are{" "}
          </p>
          <h1 className="my-6 md:text-4xl  text-3xl">
            OPEN 24 HOURS A DAY, 7 DAYS A WEEK
          </h1>
          <p className="my-6 text-2xl">
            Workout any day, any weather, any time!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
