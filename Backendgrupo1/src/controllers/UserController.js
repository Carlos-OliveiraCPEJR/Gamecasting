const { getAll } = require("../models/UserModel");
const UserModel = require ("../models/UserModel");
const Firebase = require ("../utils/Firebase");
const user = require("../models/UserModel");
const { deleteById } = require("../models/JogoModel");

module.exports = {
    async create (request, response){
        try{
            console.log(request.body);
            const user = request.body;

            const uid = await Firebase.createNewUser(user.email, user.senha);

            delete user.senha;
            user.firebase_id = uid;

            const result = await UserModel.create(user);
            return response.status(200).json({ user_id: result });

        } 
        catch (error) {

            console.warn("User create failed: ", error);
            return response.status(500).json({ notification: "Internal server erros while trying to create User" });
        }
    },

    async getById (request, response){
        try{
        
        const { user_id } = request.params;
        const result = await UserModel.getById(user_id);

        return response.status(200).json(result);
    } 
        catch (error) {
        console.warn("User get failed: ", error);

        return response.status(500).json({
            notification: "Internal server erros while trying to get User",
        });
    }
    },

    async update (request, response){
        try{
            const {plano} = request.params;
            const user = request.body;
            await UserModel.updateByPlano(plano, user);

            return response.status(200).json({notification: "User updated sucessfully"});

        } 
        catch (error) {
            console.warn("User update failed: ", error);

            return response.status(500).json({notification: "Internal server erros while trying to update User"});
        }
    },

    async deleteById (request, response){
        try{
            const {user_id} = request.params;

            const result = await UserModel.deleteById(user_id);

            if(result === 0){
                return response.status(400).json({notification: "user_id not found"});
            }

            return response.status(200).json({notification: "User deleted sucessfully"});

        }
        catch(error){
            console.warn("User delete failed:", error);
            return response.status(500).json({notification: "internal server error while trying to delete User"});

        }
    },

    async getAll(request, response) {
        try {
            const result = await UserModel.getAll();

            return response.status(200).json(result);
        } 
        catch (error) {
            console.warn("User get failed: ", error);

            return response.status(500).json({
                notification: "Internal server erros while trying to get User",
            });
        }
    }
}