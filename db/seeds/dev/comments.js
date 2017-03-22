exports.seed = function(knex, Promise) {
  return knex('comments').del()
  .then(() => {
    return Promise.all([
      knex('comments').insert({
        body: "Like a virgin touched for the thirty-first time",
        songKickVenueId: "10",
        userId: 1,
      }),
      knex('comments').insert({
        body: "I like big butts in a can of limes",
        songKickVenueId: "11",
        userId: 3,
      }),
      knex('comments').insert({
        body: "Might as well face it, you're a dick with a glove",
        songKickVenueId: "12",
        userId: 5,
      }),
      knex('comments').insert({
        body: "This is the dawning of the Age of Asparugus, Asparugus",
        songKickVenueId: "12",
        userId: 2,
      }),
      knex('comments').insert({
        body: "See that girl, watch her scream, kicking the dancing queen",
        songKickVenueId: "12",
        userId: 1,
      }),
      knex('comments').insert({
        body: "The algebra has a devil for a sidekick eeeeeeeeee...",
        songKickVenueId: "10",
        userId: 1,
      }),
      knex('comments').insert({
        body: "Ah, Ah, Ah, Ah, Steak and a Knife, Steak and a Knife",
        songKickVenueId: "11",
        userId: 3,
      }),
      knex('comments').insert({
        body: "Jean Ebert, I believe you can get me throught the niiiiiiight",
        songKickVenueId: "12",
        userId: 5,
      }),
      knex('comments').insert({
        body: "Hold me closer, Tony Danza",
        songKickVenueId: "12",
        userId: 2,
      }),
      knex('comments').insert({
        body: "Let’s pee in the corner, let’s pee in the spotlight",
        songKickVenueId: "12",
        userId: 1,
      }),
      knex('comments').insert({
        body: "I’ll never leave your pizza burnin",
        songKickVenueId: "10",
        userId: 1,
      }),
      knex('comments').insert({
        body: "You make me feel like a rash on a woman",
        songKickVenueId: "11",
        userId: 3,
      }),
      knex('comments').insert({
        body: "Dirty deeds and they’re done with sheep",
        songKickVenueId: "12",
        userId: 5,
      }),
      knex('comments').insert({
        body: "Cos I’m shaving off my muff for you",
        songKickVenueId: "12",
        userId: 2,
      }),
      knex('comments').insert({
        body: "Scuse me while I kiss this guy",
        songKickVenueId: "12",
        userId: 1,
      }),
      knex('comments').insert({
        body: "The sheep don't like it, rockin' the cat box",
        songKickVenueId: "10",
        userId: 1,
      }),
      knex('comments').insert({
        body: "There's a bathroom on the right",
        songKickVenueId: "11",
        userId: 3,
      }),
      knex('comments').insert({
        body: "I Remove Umbilicals",
        songKickVenueId: "12",
        userId: 5,
      }),
      knex('comments').insert({
        body: "Like a cheese stick, like a cheese stick",
        songKickVenueId: "12",
        userId: 2,
      }),
      knex('comments').insert({
        body: "We built this city on logs and coal",
        songKickVenueId: "12",
        userId: 1,
      }),
      knex('comments').insert({
        body: "Bring me a Tylenol",
        songKickVenueId: "10",
        userId: 1,
      }),
      knex('comments').insert({
        body: "Got my first real sex dream, I was 5 at the time",
        songKickVenueId: "11",
        userId: 3,
      }),
      knex('comments').insert({
        body: "My love runs cold, anus is the center hole",
        songKickVenueId: "12",
        userId: 5,
      }),
      knex('comments').insert({
        body: "My pony plays the mamba",
        songKickVenueId: "12",
        userId: 2,
      }),
      knex('comments').insert({
        body: "Scuse me I'm a business guy",
        songKickVenueId: "12",
        userId: 1,
      }),
      knex('comments').insert({
        body: "I just wanna extradite your kids",
        songKickVenueId: "10",
        userId: 1,
      }),
      knex('comments').insert({
        body: "She's mighty mighty, built like a mastodon",
        songKickVenueId: "11",
        userId: 3,
      }),
      knex('comments').insert({
        body: "You look like Medusa with Hair-Rollers in the night",
        songKickVenueId: "12",
        userId: 5,
      }),
      knex('comments').insert({
        body: "I'll never leave your pizza burning",
        songKickVenueId: "12",
        userId: 2,
      }),
      knex('comments').insert({
        body: "I never wanna dance again, guilty penis got no rhythm",
        songKickVenueId: "12",
        userId: 1,
      })
    ]);
  });
};
