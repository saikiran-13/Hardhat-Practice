const { task, extendEnvironment } = require("hardhat/config")

task('Settimeout',"Delays the program for given seconds",async function (taskArgs,hre) {

  setTimeout(async ()=>{
     console.log("Delaying the function for 5 seconds")
 },5000) 

 const [owner] = await hre.ethers.getSigners()
 console.log(owner.address)

 return new Promise((resolve,reject)=>{
    if(resolve){
        console.log("resolved")
    }
    else{
        console.log("rejected")
    }
 })
})

task('Nothing',"Does nothing",async (taskArgs,hre)=>{
    console.log("Do nothing")
})

extendEnvironment((hre)=>{
    hre.greeting = "Hello Guys, welcome to the Hardhat :)"
})

task('start',async (taskArgs,hre)=>{
    console.log(hre.greeting)
})
module.exports = {}