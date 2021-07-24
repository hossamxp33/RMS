export class ItemsHelper {

    constructor() {}

    ItemsObject(data: any[]) {
      let items: any = [];
  
      data.forEach(val => {
        let obj = {
          id: val["id"],
          name: val["name"],
          price: val["price"],
          photo: val["photo"],
          modified: val["modified"],
        }
  
        items = [...items, obj];
      });
  
      return items;    
    }

}