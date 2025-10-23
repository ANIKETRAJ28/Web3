// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.30;

contract Sum {
  uint num;

  constructor(uint _num) {
    num = _num;
  }

  function add() public {
    num++;
  }

  function get() public view returns(uint) {
    return num;
  }
}
