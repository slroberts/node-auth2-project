exports.seed = function (knex) {
  // Inserts seed entries
  return knex('departments').insert([
    { id: 1, name: 'Front-end' },
    { id: 2, name: 'Back-end' },
    { id: 3, name: 'UI/UX' },
  ]);
};
