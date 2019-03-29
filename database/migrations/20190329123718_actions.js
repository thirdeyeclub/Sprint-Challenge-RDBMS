// welcome to the actions table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
        //id
        tbl.increments('act_id');
        //description
        tbl.string('action_description', 255).notNullable();
        //notes
        tbl.string('notes',500 );
        //flag here
        tbl.string('completed').defaultTo('false');
        //a foreign key
        tbl.integer('project_id')
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    };
    
    exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
    };

