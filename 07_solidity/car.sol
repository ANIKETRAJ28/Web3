// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.8.0 < 0.9.0;

import "./Vehicle.sol";

contract Car is Vehicle {
  uint public numberOfDoors;

  constructor(string memory _brand, uint _numberOfDoors) Vehicle(_brand) {
    numberOfDoors = _numberOfDoors;
  }

  function description() public pure override returns(string memory) {
    return "This is the car";
  }
}