import { context, storage, PersistentMap, ContractPromiseBatch, u128 } from "near-sdk-as";

export const FoundationsBalance = new PersistentMap<string, u128>('fb');

export const MainWallet : string = "alihandt.testnet";

@nearBindgen
export class FoundationDonate {
  
  //Get to actual balance for a foundation
  static askBalance(Foundation: string): u128 {
    if (!FoundationsBalance.contains(Foundation)) {
      FoundationsBalance.set(Foundation, u128.from(0));
      return u128.from(0);
    }
    return FoundationsBalance.getSome(Foundation) ;
  }



  //Balance update
  static addBalance(Foundation: string, Amount: u128): u128 {

    //transfer the wallet
    this.sendNEAR(Foundation, MainWallet);

    let total = u128.add(this.askBalance(Foundation), Amount);
    FoundationsBalance.set(Foundation, total);
    return total;
  }


  //Attached NEAR(S) sending wallet
  static sendNEAR(Foundation: string, address: string): bool {

    let volunteer = context.sender;
    let amountToWallet = context.attachedDeposit;

    ContractPromiseBatch.create(address).transfer(amountToWallet);
    return true;
  }


  //short(1000000000000000000000000)  => '1'
  static short(amount: u128): u128 {
    return u128.div(amount, u128.from("1000000000000000000000000"));
  }


  //long(1) => '1000000000000000000000000'
  static long(amount: u128): u128 {
    return u128.mul(u128.from("1000000000000000000000000"), u128.from(amount));
  }


  //Get method for foundations list
  static getFoundations(): Array<string> {
    let ary: Array<string> = ['UNICEF', 'WHO', 'WWF', 'TEV', 'LOSEV'];
    return ary;
  }


  //Adding the default foundations (only first call)
  static addDefaultFoundations(): void {
    this.getFoundations().forEach(e => {
      storage.set(e, 0);
    });

  }


}