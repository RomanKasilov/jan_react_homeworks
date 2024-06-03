import Joi from "joi";

export const formValidator = Joi.object({
    username: Joi.string().pattern(/^\w+$/).messages({'string.pattern.base': 'letters characters only'}),
    // password: Joi.string().pattern(/^@\$\w+$/).messages({'string.pattern.base': 'digital symbols only'})
})