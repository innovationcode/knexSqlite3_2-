//Command `knex migrate:make flower` will create this file
/*Using Migrations

Our database and server is setup! But we still don't have any tables or schema structure in our database. Knex has some really cool tools for this.

Within our terminal, in our root folder, we will run the command: 
knex migrate:make blog.

Now within file structure, we will see a new folder called migrations. This folder will hold the blueprints for our database structure and there can be as many blueprint files as we would like. Each file will be named with an arbitrary number associated with it. This is some Knex magic that enables the files in this folder to interact with our javascript code. */

exports.up = function(knex, Promise) {
    //make changes to database
    return knex.schema.createTable('flower', function(table) {
        table.increments();
        table.string('name', 255);
        table.blob('pic');
        table.timestamps(true, true);
    })
  
};

exports.down = function(knex, Promise) {
    //rollback/ undo new changes
    return knex.schema.dropTableIfExists('flower')
};
