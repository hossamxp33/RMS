export class CostHelper {

    constructor() {}

    costObject(data: any[]) {
      let costs: any = [];
      data.forEach(val => {
        let obj = {
          name: (Boolean(val["name"])) ? val["name"] : '',
          totalSum: (val["itemreceipes"].length > 0) ? (val["itemreceipes"].map(val => parseFloat(val["totalcost"])).reduce((prev, next) => prev + next)) /   ((Boolean(val["amount"])) ? val["amount"] : 1) *  ((Boolean(parseFloat(val["NetPrice"]))) ? parseFloat(val["NetPrice"]) : 1)  : 0,
          category: (Boolean(val["category"])) ? val["category"]["name"] : '',
          consumption: (val["itemreceipes"].length > 0) ? (val["itemreceipes"].map(val => parseFloat(val["totalcost"])).reduce((prev, next) => prev + next)) / ((Boolean(val["amount"])) ? val["amount"] : 1) : 0,
          consumptionBefore: (val["itemreceipes"].length > 0) ? ((val["itemreceipes"].map(val => parseFloat(val["totalcost"])).reduce((prev, next) => prev + next)) / ((Boolean(val["amount"])) ? val["amount"] : 1)) / ((Boolean(parseFloat(val["NetPercantage"]))) ? parseFloat(val["NetPercantage"]) : 1) : 0,
          /*totalCost: (val["itemreceipes"].length > 0) ? val["itemreceipes"].map(val => parseFloat(val["totalcost"])).reduce((prev, next) => prev + next): 0,*/
          units: (Boolean(val["unit"])) ? val["unit"]["name"] : '',
          modified: val["modified"],
          itemreceipes: val["itemreceipes"]
        }
  
        costs = [...costs, obj];
      });
  
      return costs;    
    }

  createRecipes(receipes: any[]) {
    console.log(receipes)
    const rec = receipes.map(val => {
      return {
        id: val["id"],
        name: val["item"]["name"],
        amount: val["amount"],
        sum: val["sum"],
        totalcost: val["totalcost"],
        unit: val["unit"],
      }
    });

    return rec;
  }

}