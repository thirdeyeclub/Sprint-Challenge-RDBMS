// welcome to the projects table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
        //id
        tbl.increments('project_id');
        // name
        tbl.string('name', 255).notNullable().unique();
        //description
        tbl.string('description', 255).notNullable();
        //
        tbl.string('completed').defaultTo('false')
    })
    };
    
    exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
    };
