export default function (callback) {
  return function () {
    return new Promise(function (resolve) {
      resolve(callback());
    })
  };
};