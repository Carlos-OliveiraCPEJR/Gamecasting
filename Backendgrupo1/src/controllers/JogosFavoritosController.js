const { create, getById } = require("../models/JogosFavoritosModel");
const JogosFavoritosModel = require ("../models/JogosFavoritosModel");

module.exports = {
    async create(request, response) {
        try {
            const newJogoFavorito = request.body;
            const result = await RelationModel.create(newJogoFavorito);
            return response.status(200).json({result});

        } catch (error) {
            console.warn("JogosFavoritos create failed: ", error);
            return response.status(400).json({ notification: "Internal server erros while trying to create JogosFavoritos" });
        }
    },

    async getByUserId(request, response) {
        try {

            const {user_id} = request.params;
            const result = await JogosFavoritosModel.getByUserId({user_id});
            return response.status(200).json({result});

        } catch (error) {
            console.warn("JogoFavorito get failed: ", error);

            return response.status(500).json({notification: "Internal server erros while trying to get JogoFavorito",});
        }
    },

    async delete(request, response) {
        try {
            const {user_id, jogo_id} = request.params;
            const result = await JogosFavoritosModel.deleteByUserIdByJogo({user_id, jogo_id});

            if (result === 0) {
                return response.status(400).json({ notification: "user_id or jogo_id not found" });
            }

            return response.status(200).json({ notification: "JogoFavorito deleted sucessfully" });

        } catch (error) {
            console.warn("JogoFavorito delete failed: ", error);

            return response.status(500).json({ notification: "Internal server erros while trying to delete JogoFavorito" });
        }
    }
}