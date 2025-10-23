// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.30;

contract ENS {
  mapping(address => string) users;

  constructor() {}

  function signup(string memory _name) public {
    users[msg.sender] = _name;
  }

  function getName() public view returns(string memory) {
    return users[msg.sender];
  }
}