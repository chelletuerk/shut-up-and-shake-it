exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(() => {
    return Promise.all([
      knex('users').insert({
        id: 1,
        email: "kellykapowski.com",
        password: "bleep"
      }),
      knex('users').insert({
        id: 2,
        email: "acslater@gmail.com",
        password: "bloop",
      })
    ]);
  });
};
