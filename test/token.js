const {expect} = require('chai')

describe('Token contract',async function (){
    let Token;
    let initialSupply = 10000;
    let Tokensupply;

    before(async ()=>{
        Token = await ethers.getContractFactory('CreateToken')
        Token = await Token.deploy(initialSupply)
        await Token.deployed()
        Tokensupply = await Token.intialSupply()
    })

    describe('Token contract',()=>{

        it('Intial Supply should be greater than zero',async ()=>{
            expect(Tokensupply.toNumber()).to.greaterThan(0);
            expect(Tokensupply.toNumber()).to.equal(10000)
        })

        it('Owner should contain the inital supply',async ()=>{

            const [owner] = await ethers.getSigners()
            const ownerBalance = await Token.balanceOf(owner.address)
            expect(Tokensupply).to.equal(initialSupply)
            expect(ownerBalance).to.equal(initialSupply*10**2)
        })
    })
})