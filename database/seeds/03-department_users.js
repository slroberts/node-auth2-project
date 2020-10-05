exports.seed = function (knex) {
  // Inserts seed entries
  return knex('department_users').insert([
    { department_id: '1', user_id: '1' },
    { department_id: '2', user_id: '2' },
    { department_id: '3', user_id: '3' },
  ]);
};
