//save and delete bookmarks in local storage
export const handleBookmark = (
  data,
  dataType,
  setIsBoomarked,
  renderBookmark
) => {
  let storedData = window.localStorage[dataType]
    ? window.localStorage[dataType].split(",")
    : [];

  if (!storedData.includes(data.id.toString())) {
    storedData.push(data.id);
    window.localStorage[dataType] = storedData;
    setIsBoomarked(true);
  } else {
    let newData = storedData.filter((id) => id != data.id);
    window.localStorage[dataType] = newData;
    setIsBoomarked(false);
  }

  //reload only the bookmark page if item is deleted
  if (renderBookmark) window.location.reload();
};
