export class ExpensessHelper {

    constructor() {}

    shapeExpensData(data: any[]) {
        let expensess: any = [];
        data.forEach(val => {
          let obj = {
            id: val["id"],
            category: (Boolean(val["category"])) ? val["category"]["name"] : '',            
            product: (Boolean(val["product"])) ? val["product"]["name"] : '',
            expenses_category: (Boolean(val["expenses_category"])) ? val["expenses_category"]["name"] : '',
            totalproduct: val["totalproduct"],
            lastpayments: val["lastpayments"],
            unpayment: val["unpayment"],
            modified: val["modified"],
          }
    
          expensess = [...expensess, obj];
        });

        return expensess;
    }

}