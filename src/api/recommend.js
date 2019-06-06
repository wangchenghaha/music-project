import jsonp from "assets/js/jsonp.js";
import { commonParams, options } from "api/config.js";
export function getRecommend() {
  let url =
    "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
  let data = Object.assign({}, commonParams, {
    uin: 0,
    platform: "h5",
    needNewCode: 1
  });
  return jsonp(url, data, options);
}
