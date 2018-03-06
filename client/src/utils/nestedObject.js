export default(nestedObj, pathArray) => {
  return pathArray.reduce((obj, key) => (obj && obj[key] !== undefined)
    ? obj[key]
    : null, nestedObj);
};