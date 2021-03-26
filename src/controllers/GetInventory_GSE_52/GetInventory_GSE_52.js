const database = require('../../fakeDatabase');

module.exports = {
  async show(request, response) {
    return response.json(database.data);
  },
};
