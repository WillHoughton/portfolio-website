exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('contact').insert([
        { id: 1, firstName: 'will', lastName: 'houghton', email: 'will.houghton2000@gmail.com', phoneNumber: '020 407 98943', subject: 'friend', message: 'well hello there.'  }
      ]);
});
};
