// welcome to the actions table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
        //id
        tbl.increments();
        //description
        tbl.string('action_description', 255).notNullable();
        //notes
        tbl.string('notes',500 );
        //flag here
        tbl.string('completed').defaultTo('false');
    })
    };
    
    exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
    };

