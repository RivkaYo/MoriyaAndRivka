import apiRequest from "./requestApi";

const addItem = async (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = { id, checked: false, item };
  const listItems = [...items, myNewItem];
  setItems(listItems);

  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(myNewItem),
  };
  const result = await apiRequest(API_URL, postOptions);
  if (result) setFetchError(result);
};
