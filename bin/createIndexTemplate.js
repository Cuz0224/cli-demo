import ejs from 'ejs'
import fs from 'fs'
import path from 'path'
import prettier from 'prettier'
import {fileURLToPath} from 'url'

export default (config) => {
  const __dirname = fileURLToPath(import.meta.url) //*当前文件夹的位置， ecm 之后__dirname 会没有，需要用 fileURLToPath 工具函数再次获取
  const indexTemplate = fs.readFileSync(path.resolve(__dirname, '../template/index.ejs'));

  const code =  ejs.render(indexTemplate.toString(), {
    middleware: config.middleware,
  })

  return prettier.format(code, {parser:'babel'})
}