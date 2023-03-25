const getData = async (url) => {
  const apiBasicData = await fetch(url);
  const jsonFormat = apiBasicData.json();
  return jsonFormat;
}

const mainAPI = getData('');
const secondaryAPI = getData('');

export { mainAPI, secondaryAPI };