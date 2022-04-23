# What will the project do for the user?
Volunteers can donate to foundations by NEAR


# How are you using the features of NEAR Protocol?
All storage and transactions belong to NEAR Protocol. 
Payment (as NEAR) transfers from volunteer's wallet to our safe wallet. 


# Attention! [only first run] you should add the default foundations (UNICEF,WHO,WWF,TEV,LOSEV)
Near call $CONTRACT addFoundations--accountId <YOUR_ACCOUNT>.testnet 


# Which foundations accept the donation
Near View  $CONTRACT getFoundationsList --accountId <YOUR_ACCOUNT>.testnet 


# How can make a donation
Near call $CONTRACT addDonation --accountId <YOUR_ACCOUNT>.testnet --args '{"Foundation": "<FOUNDATION_NAME>"}' --deposit <NEAR_AMOUNT> 

Thanks! Doğukan Diragan (Hodl Hodlsson)

