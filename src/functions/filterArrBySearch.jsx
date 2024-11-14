import { useState } from "react";

export default function filterArrBySearch(searchText, arr) {
  //   useEffect(() => {
  //   if (!todos) return <p>Loading...</p>;
  const filteredArr = arr.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchText.toLowerCase()) ||
      todo.id.toString().includes(searchText)
  );
  //   }, [searchText]);
  return filteredArr;
}
