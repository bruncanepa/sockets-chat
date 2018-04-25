export default function (delay = 1000) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
};