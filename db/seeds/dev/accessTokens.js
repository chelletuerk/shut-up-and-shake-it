exports.seed = function(knex, Promise) {
  return knex('accessTokens').del()
  .then(() => {
    return Promise.all([
      knex('accessTokens').insert({
        id: 1,
        refreshToken: "aaa",
        expiration: new Date,
        userId: 1,
      }),
      knex('accessTokens').insert({
        id: 2,
        refreshToken: "bbb",
        expiration: new Date,
        userId: 2,
      }),
      knex('accessTokens').insert({
        id: 3,
        refreshToken: "ccc",
        expiration: new Date,
        userId: 1,
      })
    ]);
  });
};
