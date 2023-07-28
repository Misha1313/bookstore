import Joi from "joi"

export const CraeteBookSchema = Joi.object({
    name: Joi.string().required(),
    author: Joi.string().required(),
    price: Joi.number().required()
})