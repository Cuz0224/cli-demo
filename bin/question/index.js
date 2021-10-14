import inquirer from "inquirer"
import middleware from "./middleware.js"
import packageName from './packageName.js'
import port from './port.js'

export default () => {
  return inquirer.prompt([
    /* Pass your questions in here */
    packageName(),
    port(),
    middleware()
  ])
}
