const initialState = { data: {}, iconCountPerFile: [], totalCount: {} };

// data: resultObj,
//       iconCountPerFile: arrOfIconsOfFiles,
//       totalCount: totalCount,
// data = { resultObj };
// iconCountPerFile = { arrOfIconsOfFiles };
// totalCount = { totalCount };

const fetchDataFromDb = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHDATA":
      return {
        ...initialState,
        data: action.payload.data,
        iconCountPerFile: action.payload.iconCountPerFile,
        totalCount: action.payload.totalCount,
      };
    default:
      return state;
  }
};

export default fetchDataFromDb;
