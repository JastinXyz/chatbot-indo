const axios = require('axios')
const chalk = require('chalk')
const userAgents = require('./tools/user-agents.json')
const message = async(msg) => {
    if(!msg) throw new Error(chalk.bgRed('[INVALID USAGE]') + ' Tulis juga message/text yang di sampaikan ke bot agar bot merespon!!\n' + chalk.bgRed('[READ THE README.MD]') + chalk.magenta(' https://github.com/JastinXyz/chatbot-indo#readme'))
    const get = await axios(`https://chatbot-indo.herokuapp.com/get/${msg}`, {
    headers: {
        "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
    }
    })
    const res = get.data;
    return res;
}
module.exports = message;
