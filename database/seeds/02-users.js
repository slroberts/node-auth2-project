exports.seed = function (knex) {
  // Inserts seed entries
  return knex('users').insert([
    { id: 1, username: 'User1', password: 'password' },
    { id: 2, username: 'User2', password: 'password2' },
    { id: 3, username: 'User3', password: 'password3' },
  ]);
};
