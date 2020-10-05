exports.seed = function (knex) {
  // Inserts seed entries
  return knex('departments').insert([
    { name: 'Front-end' },
    { name: 'Back-end' },
    { name: 'UI/UX' },
  ]);
};
