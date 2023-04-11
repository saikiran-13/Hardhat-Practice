async function main(){
    const accounts = await hre.ethers.getSigners();
    let index = 1;
    for (const account of accounts) {
        console.log(`Address${index}:${account.address}`);
        index+=1;
      }
}
main().catch(Error =>{
    console.error(Error)
    process.exitCode = 1
})
