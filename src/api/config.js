// url所拼接的data参数 有固定的传参 抽出一个此文件
export const commonParams = {
  g_tk: 5381,
  inCharset: "utf-8",
  outCharset: "utf-8",
  notice: 0,
  format: "jsonp"
};

export const options = {
  param: "jsonpCallback"
};

export const ERR_OK = 0;
