exports.seed = function(knex) {
  return knex('projects').insert([
    { project_id: 1 , name: 'Wampus Revival' , description:'the hunt is on'},
    { project_id: 2 , name: 'Hell Bin', description:'last place a file wants to go' },
    { project_id: 3 , name: 'Eat!' , description:'consume or be consumed'},
    { project_id: 4 , name: 'Dragon Slayers' , description:'yall already know'},
    { project_id: 5 , name: 'New beat tape', description:'bumps' },
    { project_id: 6 , name: 'systems-dot-wav', description:'generic vaperwave' },
  ]);
};
