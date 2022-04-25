#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable" && exit 1
[ -z "$OWNER" ] || echo "Found it! \$OWNER is set to [ $OWNER ]"

echo
echo
echo ---------------------------------------------------------
echo "Step 1: We should add the default foundations just before the deployment"
echo
echo ---------------------------------------------------------
echo
echo

near call $CONTRACT addFoundations --accountId <YOUR_ACCOUNT>.testnet

echo
echo
echo ---------------------------------------------------------
echo "Step 2: We can get the foundation list"
echo ---------------------------------------------------------
echo

near view  $CONTRACT getFoundationsList --accountId <YOUR_ACCOUNT>.testnet 


echo
echo
echo ---------------------------------------------------------
echo "Step 3: You can make to donation by using NEAR"
echo ---------------------------------------------------------
echo
echo

near call $CONTRACT addDonation --accountId <YOUR_ACCOUNT>.testnet --args '{"Foundation": "<FOUNDATION_NAME>"}' --deposit $DEPOSIT_AMOUNT