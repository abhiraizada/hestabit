export const fetchData = (data) => {
  return {
    type: "FETCHDATA",
    payload: data,
  };
};
