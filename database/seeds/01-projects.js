
exports.seed = function(knex) {
  return knex('projects').insert([
    { id: 1 , name: 'Wampus Revival' , description:'the hunt is on'},
    { id: 2 , name: 'Hell Bin', description:'last place a file wants to go' },
    { id: 3 , name: 'Eat!' , description:'consume or be consumed'},
    { id: 4 , name: 'Dragon Slayers' , description:'yall already know'},
    { id: 5 , name: 'New beat tape', description:'bumps' },
    { id: 6 , name: 'systems-dot-wav', description:'generic vaperwave' },
  ]);
};
