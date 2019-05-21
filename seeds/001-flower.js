
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flower').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('flower').insert([
        { name: 'Rose',
          pic : 'https://www.azernews.az/media/pictures/rose2.jpg',
          count : 10 },
        { name: 'Lily',
          pic : 'https://i.ytimg.com/vi/EOm7rgRVeik/maxresdefault.jpg',
          count : 10 },
        
      ]);
    });
};
