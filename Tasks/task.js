//positional arguments,optional parameters,type validations
//Only override the optional parameters by using run/runSuper to do this use:override after task name and 
const {types} = require("hardhat/config")
module.exports = task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .addParam("name","Name of the person")
  .addOptionalParam("age","Info about the age",21,types.int)//otherwise provide the value in string format
  .setAction(async (taskArgs,hre) => {
    const balance = await ethers.provider.getBalance(taskArgs.account);
    const name = await taskArgs.name;
    console.log("original",ethers.utils.formatEther(balance), "ETH");
    console.log("original",name ,taskArgs.age)
  });
 
  //overriding the task
  module.exports = task("balance:override", "Overriden task")
  .addParam("account", "The account's address")
  .addParam("name","Name of the person")
  .addOptionalParam("age","Info about the age",30,types.int)//otherwise provide the value in string format
  .setAction(async (taskArgs,hre) => {
    await hre.run("balance", { account: taskArgs.account, name: taskArgs.name, age: taskArgs.age });//This will call the original one and overrides it
    await hre.run('MinorTask',{luckynumber:"12"})
    const balance = await ethers.provider.getBalance(taskArgs.account);
    const name = await taskArgs.name;
    console.log("override",ethers.utils.formatEther(balance), "ETH");
    console.log("override",name ,taskArgs.age+1)

  });
  
  module.exports = subtask('MinorTask',"This is a minor task")//You cannot call this directly from the CLI and u should use it in the task somewhere
  .addParam("luckynumber","Takes the lucky number")
  .setAction(async(taskArgs)=>{
    console.log(taskArgs.luckynumber,typeof(taskArgs.luckynumber))
  })