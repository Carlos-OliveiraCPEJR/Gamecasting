const { celebrate, Segments, Joi } = require("celebrate");
const { update } = require('../controllers/JogoController');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({jogo_nome: Joi.string().required(),thumbnail: Joi.string().required(),categoria: Joi.string().required(),}),
        [Segments.HEADERS]: Joi.object().keys({authorization: Joi.string().required(),}).unknown(),
    }), 

    getAll: celebrate({
        [Segments.PARAMS]: Joi.object().keys({})
    }),

    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({jogo_id: Joi.string().required(),})
    }),

    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({jogo_id: Joi.string().required(),}),

        [Segments.BODY]: Joi.object().keys({jogo_nome: Joi.string().optional(),thumbnail: Joi.string().optional(),categoria: Joi.string().optional(),}).min(1),
    }),

    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({jogo_id: Joi.string().required(),})
    }),

};