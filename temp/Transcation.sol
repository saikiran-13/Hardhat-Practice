// SPDX-License-Identifier: MIT

pragma solidity >=0.8.18 <0.9.0;
contract Bank{
address public owner;
mapping(address=>uint) public balances;


constructor(){
    owner = msg.sender;
}

function contractBalance() public view returns(uint){
    require(msg.sender==owner,"Only owner can check the balance");
    return address(this).balance;
}


function transferEther(address payable _from,address payable _to,uint _amount) public payable{
    if(balances[_from]<_amount){
        balances[_from]=0;
    }
    else{
    balances[_from]-=_amount;
    }

    balances[_to]+=_amount;
    payable(_to).transfer(_amount);
}

}