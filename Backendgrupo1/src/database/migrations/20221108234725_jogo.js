/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("jogo", function (table) {
       table.string("jogo_id").primary().notNullable();
       table.string("jogo_nome").notNullable();
       table.string("categoria").notNullable();  
       table.string("thumbnail").notNullable();  
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("jogo");
};
