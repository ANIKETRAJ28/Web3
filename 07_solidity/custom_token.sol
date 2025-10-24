// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.30;

contract Custom_Token {
  string public name = "CustomToken";
  uint public supply = 0;
  address owner;
  mapping(address => uint) public balances;
  mapping(address => mapping(address => uint)) public allowances;

  constructor() {
    owner = msg.sender;
  }

  modifier ownerOnly() {
    require(msg.sender == owner);
    _;
  }

  function mint(uint _amount) public ownerOnly {
    balances[owner] += _amount;
    supply += _amount;
  }

  function mintTo(address _to, uint _amount) public ownerOnly {
    balances[_to] += _amount;
    supply += _amount;
  }

  function transfer(address _to, uint _amount) public {
    require(balances[msg.sender] >= _amount, "Not enough balance");
    balances[msg.sender] -= _amount;
    balances[_to] += _amount;
  }

  function burn(uint _amount) public {
    require(balances[msg.sender] >= _amount, "Not enough balance");
    balances[msg.sender] -= _amount;
    supply -= _amount;
  }

  function approve(address _spender, uint _amount) public returns(bool) {
    allowances[msg.sender][_spender] = _amount;
    return true;
  }

  function transferFrom(address _from, address _to, uint _amount) public returns(bool) {
    require(allowances[_from][msg.sender] >= _amount);
    require(balances[_from] >= _amount);
    allowances[_from][msg.sender] -= _amount;
    balances[_to] += _amount;
    balances[_from] -= _amount;
    return true;
  }
}