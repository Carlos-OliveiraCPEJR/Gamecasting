const { create, getById } = require("../models/JogoModel");
const JogoModel = require ("../models/JogoModel");

module.exports = {
    async getAll(request, response) {
        try {
            const result = await JogoModel.getAll();
    
            return response.status(200).json(result);
        } catch (error) {
            console.warn("Jogo get failed: ", error);
    
            return response.status(500).json({
                notification: "Internal server erros while trying to get Jogo",
            });
        }
    },
    
    async create(request, response) {
        try {
            const newJogo = request.body;
            const result = await JogoModel.create(newJogo);
            return response.status(200).json({jogo_id: result});
    
        } catch (error) {
            console.warn("Jogo create failed: ", error);
            return response.status(400).json({notification: "Internal server erros while trying to create Jogo"});
        }
    },
    
    async getById(request, response) {
        try {
            const {jogo_id} = request.params;
            const result = await connection("exercise").where({jogo_id}).select("*");
    
            return response.status(200).json({result});
        } catch (error) {
            console.warn("Jogo get failed: ", error);
    
            return response.status(500).json({
                notification: "Internal server erros while trying to get Jogo",
            });
        }
    },
    
    async update(request, response) {
        try {
            const {jogo_id} = request.params;
            const newJogo = request.body;
    
            await JogoModel.updateById(jogo_id, newJogo);
    
            return response.status(200).json({ notification: "Jogo updated sucessfully" });
    
        } catch (error) {
            console.warn("Jogo update failed: ", error);
    
            return response.status(500).json({notification: "Internal server erros while trying to update Jogo"});
        }
    },
    
    async delete(request, response) {
        try {
            const {jogo_id} = request.params;

            const result = await JogoModel.deleteById(jogo_id);

            if(result === 0){
                return response.status(400).json({notification: "jogo_id not found"});
            }

            return response.status(200).json({notification: "Jogo deleted sucessfully"});

        }
        catch(error){
            console.warn("Jogo delete failed:", error);
            return response.status(500).json({notification: "internal server error while trying to delete Jogo"});
        }
    },
    };
