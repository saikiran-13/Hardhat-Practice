
/** @type import('hardhat/config').HardhatUserConfig */
require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()
require('./Tasks/Account.js')
require('./Tasks/task.js')
require('./Tasks/new_task.js')
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const POLYGON_MUMBAI_API_KEY = process.env.POLYGON_MUMBAI_API_KEY
const WALLET_ADDRESS_PRIVATE_KEY = process.env.WALLET_ADDRESS_PRIVATE_KEY
module.exports = {
  solidity: "0.8.18",
  networks:{
    polygon_mumbai:{
      url:`${ALCHEMY_API_KEY}`,
      accounts:[`${WALLET_ADDRESS_PRIVATE_KEY}`]
    }
},
etherscan:{
  apiKey:`${POLYGON_MUMBAI_API_KEY}`
}

};

