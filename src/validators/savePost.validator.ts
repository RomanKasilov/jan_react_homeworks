import Joi from "joi";
import {ISavePostModel} from "../models/savePostModel";

export const savePostValidator:Joi.ObjectSchema<ISavePostModel> = Joi.object({
    userId: Joi.number().min(1).max(10).required(),
    title: Joi.string().required(),
    body: Joi.string().required()
})

