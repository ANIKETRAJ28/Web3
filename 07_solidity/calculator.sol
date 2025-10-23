// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.8.0 <0.9.0;

contract Sum {
  uint num = 0;
  // uint32 biggerNumber = 10;
  // int negNumer = -500000000;
  constructor(uint _num) {
    num = _num;
  }

  function add(uint _val) public {
    num += _val;
  }

  function subtract(uint _val) public {
    num -= _val;
  }

  function multiply(uint _val) public {
    num *= _val;
  }

  function divide(uint _val) public {
    require(_val != 0, "Value cannot be 0");
    num /= _val;
  }

  function get() public view returns (uint) {
    return num;
  }
}