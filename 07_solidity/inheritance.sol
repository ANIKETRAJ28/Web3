// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.30;

contract Inheritance {
  address owner;
  address payable recipient;
  uint lastvisited;
  uint tenYears;

  constructor(address payable _recipient) {
    owner = msg.sender;
    lastvisited = block.timestamp;
    recipient = _recipient;
    tenYears = 10;
  }

  modifier ownerOnly() {
    require(msg.sender == owner);
    _;
  }

  modifier recipientOnly() {
    require(msg.sender == recipient);
    _;
  }

  function deposit() public payable ownerOnly {
    lastvisited = block.timestamp;
  }

  function ping() public {
    lastvisited = block.timestamp;
  }

  function claim() external recipientOnly {
    require(lastvisited < block.timestamp - tenYears);
    payable(recipient).transfer(address(this).balance);
  }
}