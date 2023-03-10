import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SearchBox from "./Components/SearchBox";
import Pages from "./pages/Pages";
import Home from "./pages/Pages";

function App() {
  return (
    <div className=" px-[15px] max-w-[1400px] m-auto pb-[1rem]">
      <BrowserRouter>
        <SearchBox />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;

// const [movies, setMovies] = useState([]);
// const [searchValue, setSearchValue] = useState("");
// const getMovie = async () => {
//   const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=13579dab`;
//   const response = await fetch(url);
//   const responseJson = await response.json();
//   setMovies(responseJson.Search);
// };
// useEffect(() => {
//   setTimeout(() => {
//     getMovie();
//   }, 2000);
// }, [searchValue]);
// return (
//   // <div className="">
//   //   <div className="App max-w-[1100px] px-[15px] m-auto relative ">
//   //     <input
//   //       type="text"
//   //       placeholder="Search....."
//   //       onChange={(e) => setSearchValue(e.target.value)}
//   //       value={searchValue}
//   //       className="my-[1rem] outline-none rounded-sm left-[40%] relative py-[5px] px-[5px]"
//   //     />
//   //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-auto break-words">
//   //       {movies &&
//   //         movies.map((item) => {
//   //           return (
//   //             <div
//   //               key={item.imdbID}
//   //               className="flex flex-col justify-center items-center text-white capitalize"
//   //             >
//   //               <img src={item.Poster} alt="" />
//   //               <h2>{item.Title}</h2>
//   //               <div className="info flex gap-2">
//   //                 <p className="border py-[0px] px-[3px] rounded-sm">
//   //                   {item.Type}
//   //                 </p>
//   //                 :
//   //                 <p className="year ">
//   //                   <small>{item.Year}</small>
//   //                 </p>
//   //               </div>
//   //             </div>
//   //           );
//   //         })}
//   //     </div>
//   //   </div>
//   // </div>
// );
