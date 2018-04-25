const users = [
  {
    userId: 1,
    name: 'Bruno'
  }, {
    userId: 2,
    name: 'Derek'
  }, {
    userId: 3,
    name: 'Luis'
  }
];

let nextUser = 0;

const get = async(request, response) => {
  const user = users[nextUser];
  nextUser = nextUser == users.length - 1 ? 0 : nextUser + 1; 
  response.send(user);
};

module.exports = (router) => {
  router.get('/', get);
  return router;
};