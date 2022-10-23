import jsonp from "common/js/jsonp";
import { commonParams, options } from "./config";

// 利用jsonp抓取数据
export function getRecommend() {
  const url =
    "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
  const data = Object.assign({}, commonParams, {
    platform: "h5",
    uni: 0,
    needNewCode: 1
  });
  return jsonp(url, data, options);
}

export function getDiscList() {
  //const url ='https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg'
  const url ='https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  //const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg?'
  const data = Object.assign({}, commonParams, {
    // platform: "yqq",
    // hostUin: 0,
    // sin: 0,
    // ein: 29,
    // sortId: 5,
    // needNewCode: 0,
    // categoryId: 10000000,
    // rnd: Math.random()
    format: 'jsonp',
    tpl: 'v12',
    page: 'other',
    rnd: 0,
    g_tk: new Date().getTime(),
    loginUin: 0,
    hostUin: 0,
    inCharset: 'utf8',
    outCharset: 'GB2312',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0


  });
  return jsonp(url, data, options);

}
