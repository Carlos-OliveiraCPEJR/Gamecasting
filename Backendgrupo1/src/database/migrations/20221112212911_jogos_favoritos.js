/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("jogos_favoritos", function (table) {
        table.string("user_id").notNullable();
        table.string("jogo_id").notNullable();
        table.foreign("user_id").references("user_id").inTable("user").onDelete("cascade");
        table.foreign("jogo_id").references("jogo_id").inTable("jogo").onDelete("cascade");
     });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("jogos_favoritos");
  
};
