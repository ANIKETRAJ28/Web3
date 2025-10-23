// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.30;

contract ENS {
  struct Person {
    string name;
    uint age;
    address addr;
  }
  Person[] Users;
  constructor() {}

  function addUser(string memory _name, uint _age) public {
    Person memory newPerson = Person(_name, _age, msg.sender);
    Users.push(newPerson);
  }

  function getUsers() public view returns(Person[] memory) {
    return  Users;
  }
}