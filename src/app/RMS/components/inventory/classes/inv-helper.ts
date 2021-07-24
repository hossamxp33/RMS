export class InvHelper {

    constructor() {}

    shapeInvData(data: any[]) {
        let inventory: any = [];

        data.forEach(val => {
          let obj = {
            id: val["id"],
            category: (Boolean(val["category"])) ? val["category"]["name"] : '',
            name: (Boolean(val["name"])) ? val["name"] : '',
            price: val["price"],
            TotalCountOfProduct: val["TotalCountOfProduct"],
            TotalCountOfWithdrawalOfProduct: val["TotalCountOfWithdrawalOfProduct"],
            TotalCreditOfProduct: val["TotalCreditOfProduct"],
            TotalWithdrawalOfProduct: val["TotalWithdrawalOfProduct"],
            TotalCountOfstockOfProduct: val["TotalCountOfstockOfProduct"],
            TotalstockOfProduct: val["TotalstockOfProduct"],
            stores: val["stores"]
          }
    
          inventory = [...inventory, obj];
        });

        return inventory;
    }

    createStores(stores: any[]) {
      console.log(stores)
      const s = stores.map(val => {
        return {
          id: val["id"],
          amount: val["amount"],
          price: val["price"],  
          modified: val['modified']        
        }
      });

      return s;
    }

}