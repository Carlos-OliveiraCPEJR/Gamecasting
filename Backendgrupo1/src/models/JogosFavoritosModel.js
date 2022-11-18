const jogo = require ("./JogoModel");
const connection = require ("../database/connection");

module.exports = {
    async create(jogos_favoritos) {
        
        const result = await connection("jogos_favoritos").insert(jogos_favoritos);
        return result;
    },

    async getById({jogo_id, user_id}){
        const result = await connection("jogos_favoritos").where({jogo_id, user_id}).select("*").first();
        return result;
    },

    async getByUserId({user_id}){
        const result = await connection("jogos_favoritos").join("jogo","jogo.jogo_id", "=", "jogos_favoritos.jogo_id").where({"jogos_favoritos.user_id":user_id}).select("jogo.*");
        return result; 
    },

    async deleteByUserIdByJogo({user_id,jogo_id}){
        const result = await connection("relation").where({user_id,jogo_id}).delete();
        return result;
    }
}