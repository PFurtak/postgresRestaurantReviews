const db = require('./config');

class restaList {
  constructor(name, address, category) {
    this.name = name;
    this.year = address;
    this.category = category;
  }
  static async getAll() {
    try {
      const res = await db.any(`SELECT * from restaurantv2;`);
      console.log(res);
      return res;
    } catch (error) {
      console.error('ERROR: ', error);
    }
  }
  static async getById(id) {
    try {
      const res = await db.any(`SELECT * from restaurantv2 WHERE id = ${id};`);
      return res;
    } catch (error) {
      console.error('ERROR: ', error);
    }
  }
}

module.exports = restaList;
