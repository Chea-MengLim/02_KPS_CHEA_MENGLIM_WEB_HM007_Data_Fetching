import React from "react";
import Link from "next/link"
const CardDetailComponent = ({ movie }) => {
  
  // round number of stars to display
  const starNum = Math.round(movie.rating);

  const inputDate = new Date(movie.posted_at);
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedDate = inputDate.toLocaleString('en-US', options).replace(/,/g, '');
  return (
    <div className="bg-red-800 pt-24 pb-10 flex justify-between h-screen relative">
      <div className="relative w-[67%]">
        <div className="relative  w-[80%] h-[80%]">
          <img
            className="w-full h-full  ml-5 opacity-80"
            // check default image
            src={
              movie.image != ""
                ? movie.image
                : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
            }
            alt="image"
          />
          <Link href={"/"} scroll={false}>
          <div className="cursor-pointer absolute center bottom-20 text-black  py-2 px-3 rounded-xl bg-white flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
            <span>Back to Home</span>
          </div>
          </Link>
        </div>
      </div>
      <div className="text-white absolute left-[61%]">
        <section>
          <p className=" text-xl font-bold"> {movie.director} </p>
          <p className="opacity-90 text-sm">{movie.runtime} minutes</p>
          <i className="opacity-90 text-sm"> {movie.genre} </i>

          <div className="flex">
            {/* dynamic star number, convert number to array and then use map method to loop each star */}
            {[...Array(starNum)].map((_, i) => (
              <div key={i}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="orange"
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 w-[480px] ">
          <h1 className="text-xl font-bold">
            {movie.movie_title} ({movie.released_year}){" "}
          </h1>
          <p className="text-justify">{movie.description}</p>
        </section>

        <section className="mt-20 opacity-90 text-sm">{formattedDate}</section>
      </div>
    </div>
  );
};

export default CardDetailComponent;
