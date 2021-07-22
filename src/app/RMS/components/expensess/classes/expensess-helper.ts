export class ExpensessHelper {

    constructor() {}

    shapeExpensData(data: any[]) {
        let expensess: any = [];

        data.forEach(val => {
          let obj = {
            id: val["id"],
            category: (Boolean(val["category"])) ? val["category"]["name"] : '',
            product: (Boolean(val["product"])) ? val["product"]["name"] : '',
            totalproduct: val["totalproduct"],
            lastpayments: val["lastpayments"],
            unpayment: val["unpayment"],
          }
    
          expensess = [...expensess, obj];
        });

        return expensess;
    }

}