import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ListView = () => {
  const state = useSelector((state) => state.fetchDataFromDb);
  const { data, totalCount, iconCountPerFile } = state;

  const noOfFiles = Object.keys(data);
  return (
    <div>
      <table id="icons" className="icons-table">
        <thead className="table-head">
          <tr>
            <td>Symbol</td>
            {noOfFiles.map((fileName, idx) => (
              <td key={idx}>
                {fileName.charAt(0).toUpperCase() +
                  fileName.substr(1, fileName.length)}
              </td>
            ))}
            <td>Count of all files</td>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>Marker</td>
            {iconCountPerFile.map((el, idx) => (
              <td key={idx}>{el["marker.png"]}</td>
            ))}
            <td>{totalCount["marker.png"]}</td>
          </tr>
          <tr>
            <td>Diamond</td>
            {iconCountPerFile.map((el, idx) => (
              <td key={idx}>{el["diamond.png"]}</td>
            ))}
            <td>{totalCount["diamond.png"]}</td>
          </tr>
          <tr>
            <td>Flag</td>
            {iconCountPerFile.map((el, idx) => (
              <td key={idx}>{el["flag.png"]}</td>
            ))}
            <td>{totalCount["flag.png"]}</td>
          </tr>
          <tr>
            <td>Lock</td>
            {iconCountPerFile.map((el, idx) => (
              <td key={idx}>{el["lock.png"]}</td>
            ))}
            <td>{totalCount["lock.png"]}</td>
          </tr>
          <tr>
            <td>Light</td>
            {iconCountPerFile.map((el, idx) => (
              <td key={idx}>{el["light.png"]}</td>
            ))}
            <td>{totalCount["light.png"]}</td>
          </tr>
          <tr>
            <td>Rocket</td>
            {iconCountPerFile.map((el, idx) => (
              <td key={idx}>{el["rocket.png"]}</td>
            ))}
            <td>{totalCount["rocket.png"]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
