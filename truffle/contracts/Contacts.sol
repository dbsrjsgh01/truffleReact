// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Contacts {
    uint public count = 0;

    struct Contact {
        uint id;
        string name;
        string phone;
    }

    constructor() {
        createContact('Geonho Yoon', '01039945649');
    }

    mapping (uint => Contact) public contacts;

    function createContact(string memory _name, string memory _phone) public {
        count++;
        contacts[count] = Contact(count, _name, _phone);
    }
}