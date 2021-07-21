export class CostHelper {

    constructor() {}

    costObject(data: any[]) {
      let costs: any = [];
  
      data.forEach(val => {
        let obj = {
          name: (Boolean(val["name"])) ? val["name"] : '',
          totalSum: (val["itemreceipes"].length > 0) ? (val["itemreceipes"].map(val => parseFloat(val["totalcost"])).reduce((prev, next) => prev + next)) / val["amount"] * parseFloat(val["NetPrice"]): 0,
          category: (Boolean(val["category"])) ? val["category"]["name"] : '',
          consumption: (val["itemreceipes"].length > 0) ? (val["itemreceipes"].map(val => parseFloat(val["totalcost"])).reduce((prev, next) => prev + next)) / val["amount"] : 0,
          consumptionBefore: (val["itemreceipes"].length > 0) ? ((val["itemreceipes"].map(val => parseFloat(val["totalcost"])).reduce((prev, next) => prev + next)) / val["amount"]) / parseFloat(val["NetPercantage"]) : 0,
          totalCost: (val["itemreceipes"].length > 0) ? val["itemreceipes"].map(val => parseFloat(val["totalcost"])).reduce((prev, next) => prev + next): 0,
        }
  
        costs = [...costs, obj];
      });
  
      return costs;    
    }

}