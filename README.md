# React Truffle Box

This box comes with everything you need to start using Truffle to write, compile, test, and deploy smart contracts, and interact with them from a React app.

## Installation

First ensure you are in an empty directory.

Run the `unbox` command using 1 of 2 ways.

```sh
# Install Truffle globally and run `truffle unbox`
$ npm install -g truffle
$ truffle unbox react
```

```sh
# Alternatively, run `truffle unbox` via npx
$ npx truffle unbox react
```

Compile & migrate solidity file.

```sh
$ cd truffle
$ truffle compile
$ truffle migrate
```

Start the react dev server.

```sh
$ cd client
$ npm start
```

From there, follow the instructions on the hosted React app. It will walk you through using Truffle and Ganache to deploy the `SimpleStorage` contract, making calls to it, and sending transactions to change the contract's state.

## FAQ

- __How do I use this with Ganache (or any other network)?__

  The Truffle project is set to deploy to Ganache by default. If you'd like to change this, it's as easy as modifying the Truffle config file! Check out [our documentation on adding network configurations](https://trufflesuite.com/docs/truffle/reference/configuration/#networks). From there, you can run `truffle migrate` pointed to another network, restart the React dev server, and see the change take place.

- __Where can I find more resources?__

  This Box is a sweet combo of [Truffle](https://trufflesuite.com) and [Webpack](https://webpack.js.org). Either one would be a great place to start!


- __불필요한 코드를 제거하는 방법은?__

  1. `react box`가 미리 작성해놓은 `/contracts/SimpleStorage.sol`, `/build/contracts/SimpleStorage.json`을 삭제합니다.
  2. 이에 해당하는 `/migration/1_deploy_simple_storage.js`도 함께 지워줍니다. 추후에 우리가 작성한 contract에 해당하는 migration 파일을 생성합니다.

- __그렇다면 새로운 contract를 만드는 방법은?__
  
  다음과 같이 작성하면 됩니다.
  ```sh
  $ cd truffle && truffle create contract "ContractName"
  ```
  이후 배포하기 전 `/migration` 폴더에 `2_deploy_contracts.js` 파일을 직접 생성하거나, `truffle create migration "ContractName"`을 통해 만들 수 있습니다. 이후 `migration` 폴더에 생성된 파일을 어떻게 배포할 것인지 작성하면 됩니다.

  Migration
  ```sh
  var ContractName = artifacts.require("./ContractName.sol");

  module.exports = function(deployer) {
    deployer.deploy(ContractName);
  };
  ```

- __배포는 어떻게 하나요?__

  Contract를 javascript에서 접근 가능하도록 `json` 파일로 변환이 필요합니다.
  ```sh
  truffle compile
  ```

  위의 compile 진행이 되면 `/client/src/contracts` 폴더에 `ContractName.json` 파일이 생성됨을 확인할 수 있습니다.
  