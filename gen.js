const house = require('./house.json')
const fs = require("fs");
const path = require("path");

const T = `
| 序号 | 省份 | 市 |  名称 | 开发商 | 烂尾时间 | 现场照片 |
| ---- | ---- | ---- | ------ | -------- | -------- | -------- |
`;

let idx = 1;
const r = [...house].reduce((pre, cur) => {
    pre += `|  ${idx++}    |   ${cur.province} | ${cur.city}   |   ${cur.name}   |   ${cur.dev}     |     ${cur.preSale}     |    ${cur.errorTime}      |    ${cur.images}      |\r\n`
    return pre;
}, T)


fs.writeFileSync(path.join(__dirname, './docs/house/README.md'), r, {encoding: "utf-8"})