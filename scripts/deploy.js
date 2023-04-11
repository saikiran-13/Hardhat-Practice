// const {hre} = require('hardhat')

async function main(){
    Arithmetic = await ethers.getContractFactory('Arithmetic')
    Arithmetic = await Arithmetic.deploy()
    console.log("deployed Address :",Arithmetic.address)
}
main().catch((Error)=>{
    console.error(Error)
})