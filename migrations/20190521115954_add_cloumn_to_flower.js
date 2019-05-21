
exports.up = function(knex, Promise) {
    return knex.schema.table('flower', function(table) {
        table.integer('count') //count name column will get added to flower table..
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('flower', function(table) {
        table.dropColumn('count'); //this will drop the column name count created....
    })
};
