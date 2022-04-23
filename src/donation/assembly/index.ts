import { FoundationDonate } from "./model";
import { context, storage , u128 } from "near-sdk-as";
 


export function addDonation(Foundation: string) : string {

    //Checking the is foundation exist
    let isExist = storage.getString(Foundation);
    assert(isExist, "Sorry, you haven't send NEAR to "+ Foundation + " yet!");

    //Is donation over the minimum amount
    let Amount = FoundationDonate.short(context.attachedDeposit);
    assert( Amount >= u128.from(1), "Minimum donation limit is 1 NEAR");

  
    let total = FoundationDonate.addBalance(Foundation, Amount);
   
    
    return "Dear "+ context.sender + ", "+Foundation + " is Doing More With Your Support! They have "  
    + total.toString() + " Nears Now, THANK YOU!";

}

 
//Adding the default foundations (only first call)
export function addFoundations() : string {
   FoundationDonate.addDefaultFoundations();
   return "Default Foundations Added!"
  }


//Asking which foundations have already added
export function getFoundationsList() : string {
  assert(storage.contains("UNICEF"),"There isn't any added foundation")
  return FoundationDonate.getFoundations().map<string>( f=> f.toString()).join(' ')
}
