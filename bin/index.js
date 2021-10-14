#! /usr/bin/env node
//* 用 node 执行脚本

import fs from 'fs'
import execa from 'execa'
import createIndexTemplate from './createIndexTemplate.js'
import createPackageTemplate from './createPackageTemplate.js';
import question from './question/index.js'
import { createConfig } from './config.js';


// * esm 允许顶层使用 await
const answer = await question()

const config = createConfig(answer)


fs.mkdirSync(getRootPath());
fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(config))
fs.writeFileSync(`${getRootPath()}/package.json`, createPackageTemplate(config))

execa("yarn", {
  cwd: getRootPath(), //*指定路径
  stdio:[2, 2, 2] //*打印子进程的输入输出流
})

function getRootPath() {
  return './hei'
}

