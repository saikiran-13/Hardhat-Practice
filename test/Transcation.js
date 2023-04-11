// const {expect} = require('chai')
// const web3 = require('web3')
// const { ethers } = require('hardhat')

// describe('Transcation contract',function (){
//     let Transcation;

//     before(async ()=>{
//         const transcation = await ethers.getContractFactory('Bank')
//         Transcation = await transcation.deploy()
//     })

//     // const result = await web3.eth.sendTransaction({
//     //     from: accounts[0],
//     //     to: contractInstance.address,
//     //     value: web3.utils.toWei("1", "ether")
//     // });
//     // const value = await contractInstance.getMsgValue();
//     // const expectedValue = web3.utils.toWei("1", "ether");
//     it('Ether transfered successfully',async ()=>{
//         const [owner,add1,add2] = await ethers.getSigners()
//         const valueToSend = web3.utils.toWei("1", "ether");
//         await Transcation.connect(owner).transferEther(owner.address,add1.address,valueToSend)
//         let ownerBalance = await Transcation.balances[owner.address];
//         console.log(ownerBalance);
//         let add1Balance = await Transcation.balances[add1.address];
//         console.log(add1Balance);
//         expect(ownerBalance).to.equal(add1Balance)
//         expect(ownerBalance).to.equal(1)
//     })


//     it('Check Total Balance',async ()=>{
//         let balance = await Transcation.contractBalance();
//         console.log(balance);
//         expect(balance.toNumber()).to.equal(10)

//     })

// })