import originalJsonp from "jsonp";

export default function jsonp(url, data, options) {
  url += url.indexOf("?") < 0 ? "?" : "&" + pramas(data);
  return new Promise((resolve, reject) => {
    originalJsonp(url, options, (error, data) => {
      if (!error) {
        resolve(data);
      } else {
        reject(error);
      }
    });
  });
}

function pramas(data) {
  let url = "";
  for (let i in data) {
    let value = (data[i] = data[i] === undefined ? "" : data[i]);
    // url += `&${i}=${data[i]}`;
    url += "&" + i + "=" + value;
  }
  return url ? url.substring(1) : "";
}
