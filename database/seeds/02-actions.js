exports.seed = function(knex) {
  return knex('actions').insert([
    { act_id: 1 , action_description:'run in the woods', notes: 'generic note'},
    { act_id: 2 ,  action_description:'clean this computer', notes: 'generic note',},
    { act_id: 3 ,  action_description:'consume', notes: 'generic note'},
    { act_id: 4 ,  action_description:'yall already know', notes: 'generic note'},
    { act_id: 5 ,  action_description:'jump' , notes: 'generic note'},
    { act_id: 6 ,  action_description:'become one', notes: 'generic note' },
  ]);
};