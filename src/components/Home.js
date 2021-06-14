import React, { useState, useEffect } from "react";
import ListView from "../components/ListView";
import GridView from "../components/GridView";
import { useDispatch } from "react-redux";
import { fetchData } from "../actions/fetchData";

const Home = ({ data }) => {
  const [toggleView, setView] = useState(true);

  const dispatch = useDispatch();

  let resultObj = {};

  for (let i in data) {
    const icons = {
      "diamond.png": 0,
      "rocket.png": 0,
      "flag.png": 0,
      "marker.png": 0,
      "light.png": 0,
      "lock.png": 0,
    };
    if (!resultObj.hasOwnProperty(data[i].file_name)) {
      resultObj[data[i].file_name] = {
        ...icons,
      };
    }

    resultObj[data[i].file_name][data[i].title_symbol] =
      resultObj[data[i].file_name][data[i].title_symbol] + data[i].actual_count;
  }

  const totalCount = {
    "diamond.png": 0,
    "rocket.png": 0,
    "flag.png": 0,
    "marker.png": 0,
    "light.png": 0,
    "lock.png": 0,
  };
  let arrOfIconsOfFiles = [];
  for (let [key, value] of Object.entries(resultObj)) {
    arrOfIconsOfFiles.push(value);
  }

  arrOfIconsOfFiles.forEach((file) => {
    for (let [key, value] of Object.entries(file)) {
      if (totalCount[key]) {
        totalCount[key] += value;
      } else {
        totalCount[key] = value;
      }
    }
  });

  dispatch(
    fetchData({
      data: resultObj,
      iconCountPerFile: arrOfIconsOfFiles,
      totalCount: totalCount,
    })
  );
  const toggleHandler = () => {
    return setView(!toggleView);
  };
  return (
    <div className="home">
      <h1>Welcome to Hestabit</h1>
      {/* {data.map((el, idx) => (
        <h5 key={idx}>{el.file_name}</h5>
      ))} */}

      <button className="btn" onClick={() => toggleHandler()}>
        Change View
      </button>
      {toggleView ? <ListView /> : <GridView />}
    </div>
  );
};

export default Home;
