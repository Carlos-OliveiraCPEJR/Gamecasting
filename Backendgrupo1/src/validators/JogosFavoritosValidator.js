const {celebrate, Segments, Joi} = require("celebrate");
const { update } = require('../controllers/JogosFavoritosController');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({user_id: Joi.string().required(),jogo_id: Joi.string().required(),})
    }),

    getByUserId: celebrate({
        [Segments.PARAMS]: Joi.object().keys({user_id: Joi.string().required(),})
    }),

    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({user_id: Joi.string().required(),jogo_id: Joi.string().required(),})
    }),

};