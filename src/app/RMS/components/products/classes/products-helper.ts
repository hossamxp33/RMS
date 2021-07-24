export class ProductsHelper {

    constructor() {}

    productsObject(data: any[]) {
      let products: any = [];
  
      data.forEach(val => {
        let obj = {
          id: val["id"],
          name: val["name"],
          price: val["price"],
          amount: val["amount"],
          sumdata: val["sumdata"],
          supplier: (Boolean(val["supplier"])) ? val["supplier"]["name"] : '',
          address: (Boolean(val["supplier"])) ? val["supplier"]["address"] : '',
          phone: (Boolean(val["supplier"])) ? val["supplier"]["phone"] : '',
          modified: val["modified"],
        }
  
        products = [...products, obj];
      });
  
      return products;    
    }

}