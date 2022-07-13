const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, './test.txt'), {encoding: 'utf-8'})
const words = content.split("\n")

const r = words.reduce((pre, cur) => {
    const defaultConfig = {
        "name": "",
        "pos": "",
        "province": "",
        "city": "",
        "dev": "",
        "preSale": "",
        "errorTime": ""
    }

    const [province, city, name] = cur.split(" ");
    const config = Object.assign(defaultConfig, {province, city, name})
    pre.push(config);
    return pre;
}, [])

fs.writeFileSync(path.join(__dirname, 'house.json'), JSON.stringify(r))