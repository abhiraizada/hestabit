import React from "react";
import { useSelector } from "react-redux";

const GridView = () => {
  const totalCount = useSelector((state) => state.fetchDataFromDb.totalCount);

  return (
    <div class="grid-container">
      <div class="grid">
        <div class="block " style={{ flexGrow: totalCount["marker.png"] }}>
          Marker
        </div>
        <div class="block " style={{ flexGrow: totalCount["diamond.png"] }}>
          Daimond
        </div>
        <div class="block " style={{ flexGrow: totalCount["flag.png"] }}>
          Flag
        </div>
      </div>
      <div class="grid">
        <div class="block" style={{ flexGrow: totalCount["lock.png"] }}>
          Lock
        </div>
        <div class="block" style={{ flexGrow: totalCount["light.png"] }}>
          Light
        </div>
        <div class="block" style={{ flexGrow: totalCount["rocket.png"] }}>
          Rocket
        </div>
      </div>
    </div>
  );
};

export default GridView;
