
# Donatations Near

It is a project that Volunteers can make to donation by using NEAR.  You can send NEAR from your wallet to Charity/Foundation's Wallet (For example; UNICEF, WHO, WWF). It's fast and without any tax. 


# Cloning the project
After cloning the project please run 
    yarn
    npm i near-sdk-as
    npm i near-cli

in order to install all of the necessary packages for the project to run correctly.


## Building and Deploying the contract
The contract is located in under the ***contract/assembly*** folders, after editing the contract you can run

    yarn build:release
in order to build the contract and get the ***.wasm*** file , if you want to build and deploy the contract at the same time, you can run 

    yarn deploy-contract
This will create a test account and deploy the contract into it.

after the contract is deployed, it is necessary to run the following command in the terminal in order to be able to run the contract


    set CONTRACT=ACCOUNT_ID
where the **ACCOUNT_ID** will be returned after the contract deployment


 
**Attention! [only first run] you should add the default foundations (UNICEF,WHO,WWF,TEV,LOSEV)**
`near call $CONTRACT addFoundations --accountId <YOUR_ACCOUNT>.testnet `
 

**Example Foundations List call:** 
`near view  $CONTRACT getFoundationsList --accountId <YOUR_ACCOUNT>.testnet `


**Example donation call:**

`near call $CONTRACT addDonation --accountId <YOUR_ACCOUNT>.testnet --args '{"Foundation": "<FOUNDATION_NAME>"}' --deposit $DEPOSIT_AMOUNT`


Thanks! Doğukan Diragan (Hodl Hodlsson)

