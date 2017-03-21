exports.seed = function(knex, Promise) {
  return knex('favorites').del()
  .then(() => {
    return Promise.all([
      knex('favorites').insert({
        id: 1,
        rating: 1,
        songKickVenueId: "10",
        userId: 1,
      }),
      knex('favorites').insert({
        id: 2,
        rating: 2,
        songKickVenueId: "11",
        userId: 2,
      }),
      knex('favorites').insert({
        id: 3,
        rating: 3,
        songKickVenueId: "12",
        userId: 1,
      })
    ]);
  });
};
