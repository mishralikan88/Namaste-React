export function filterData(searchText, allRestaurants) {
  console.log("Search Text = ", searchText);
  console.log("All restaurants", allRestaurants);
  const filteredData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}
