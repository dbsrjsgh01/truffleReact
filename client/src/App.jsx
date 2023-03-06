import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { CONTACT_ADDRESS, CONTACT_ABI } from "./config";

function App() {
  const [account, setAccount] = useState('');
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);

      // Instantiate smart contract using ABI and address
      const contactList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);

      const counter = await contactList.methods.count().call();
      for (var i = 1; i <= counter; i++) {
        const contact = await contactList.methods.contacts(i).call();
        setContacts((contacts) => [...contacts, contact]);
      }
    }

    load();
  }, []);

  return (
    // <EthProvider>
    // </EthProvider>
      <div id="App">
        <div className="container">
          Your account is : { account }
          <h1>Contacts</h1>
          <ul>
            {
              Object.keys(contacts).map((contact, index) => (
                <li key={`${contacts[index].name}-${index}`}>
                  <h4>{contacts[index].name}</h4>
                  <span><b>Phone: </b>{contacts[index].phone}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
  );
}

export default App;
