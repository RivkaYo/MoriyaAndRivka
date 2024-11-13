import apiRequest from "./requestApi";

const handleUpdate = async (id) => {
  const listItems = items.map((item) =>
    item.id === id ? { ...item, Updateed: !item.Updateed } : item
  );
  setItems(listItems);

  const myItem = listItems.filter((item) => item.id === id);
  const updateOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Updateed: myItem[0].Updateed }),
  };
  const reqUrl = `${API_URL}/${id}`;
  const result = await apiRequest(reqUrl, updateOptions);
  if (result) setFetchError(result);
};
