// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.30;

interface ISum {
  function add() external;
  function get() external view returns(uint);
}

contract Interface {
  constructor() {}

  function proxyAdd() public {
    ISum(0xd9145CCE52D386f254917e481eB44e9943F39138).add();
  }

  function proxyGet() public view returns(uint) {
    uint value =  ISum(0xd9145CCE52D386f254917e481eB44e9943F39138).get();
    return  value;
  }
}