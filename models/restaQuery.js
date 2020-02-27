const db = require('./config');

// adjust for DB variables

// class executiveList {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     static async getAll() {
//       try {
//         const res = await db.any(`SELECT * from ceos;`);
//         return res;
//       } catch (error) {
//         console.error('ERROR: ', error);
//       }
//     }
//     static async getById(id) {
//       try {
//         const res = await db.any(`SELECT * from ceos WHERE id = ${id};`);
//         return res;
//       } catch (error) {
//         console.error('ERROR: ', error);
//       }
//     }
//   }

//   module.exports = executiveList;
