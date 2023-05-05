const sqliteConnection = require('../../sqlite');

const createUsers = require('./createUsers');

async function migrationsRun() {
  const schemas = [
    createUsers
  ].join(''); // para juntar todas elas
  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error));

}
module.exports = migrationsRun;