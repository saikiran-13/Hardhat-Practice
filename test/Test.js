const {expect} = require('chai')
const { ethers } = require('hardhat')

let Arithmetic;

before(async ()=>{
    const {owner} = ethers.getSigners()
    Arithmetic = await ethers.getContractFactory('Arithmetic')
    Arithmetic = await Arithmetic.deploy()
    console.log(Arithmetic.address)
})

describe("Addition",function(){

    it('verifying datatype of elements and result',async () =>{
        await Arithmetic.add(2,3)
        const result = await Arithmetic.arr(0)
        expect(result.toNumber()).to.be.a('Number')
        expect(result).to.equal(5)
    })
})


describe("Subtraction",function(){

    it('verifying datatype of elements and result',async () =>{
        await Arithmetic.subtract(5,3)
        const result = await Arithmetic.arr(1)
        expect(result.toNumber()).to.be.a('Number')
        expect(result).to.equal(2)
    })
})

describe("Multiplication",function(){

    it('verifying datatype of elements and result',async () =>{
        await Arithmetic.multiply(5,3)
        const result = await Arithmetic.arr(2)
        expect(result.toNumber()).to.be.a('Number')
        expect(result).to.equal(15)
    })
})


describe("Divison",function(){

    it('verifying datatype of elements and result',async () =>{
        await Arithmetic.divide(5,5)
        const result = await Arithmetic.arr(3)
        expect(result.toNumber()).to.be.a('Number')
        expect(result).to.equal(1)
    })
})