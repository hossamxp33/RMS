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
          }
    
          inventory = [...inventory, obj];
        });

        return inventory;
      }

}