exports.seed = function(knex, Promise) {
  return knex('comments').del()
  .then(() => {
    return Promise.all([
      knex('comments').insert({
        id: 1,
        body: "Sometimes....at night....I sleep....and cry a little",
        songKickVenueId: "10",
        userId: 1,
      }),
      knex('comments').insert({
        id: 2,
        body: "yesterday I ate an entire watermelon",
        songKickVenueId: "11",
        userId: 2,
      }),
      knex('comments').insert({
        id: 3,
        body: "beep boop bah teee dah",
        songKickVenueId: "12",
        userId: 1,
      })
    ]);
  });
};
