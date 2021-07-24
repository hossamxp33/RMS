export class OrdersHelper {

    constructor() {}
    
    shapeOrderObject(data: any[]) {
      let orders: any = [];
  
      data.forEach(val => {
        let obj = {
          id: val["id"],
          total: val["total"],
          service: val["service"],
          taxes: val["taxes"],
          typeorder: val["typeorder"],
          platform: (Boolean(val["platform"])) ? val["platform"]["name"] : '',
          marketer: (Boolean(val["marketer"])) ? val["marketer"]["name"] : '',
          order_status: val["order_status"],
          address: (Boolean(val["user"])) ? val["user"]["address"] : '',
          modified: val["modified"],
          orderdetails: val["orderdetails"],
        }
  
        orders = [...orders, obj];
      });
  
      return orders;    
    }

  createDetails(orders: any[]) {
    const details = orders.map(val => {
      return {
        id: val["id"],
        item: val["item"]["name"],
        itemamount: val["itemamount"],
        itemtotal: val["itemtotal"],
        modified: val["modified"],
      }
    });

    return details;
  }

}