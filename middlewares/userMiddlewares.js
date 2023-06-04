const Joi = require("joi");

const userScoreSchema = Joi.object({
    Nickname: Joi.string().max(16).required(),
    Scores: Joi.number().required(),
  });


  function validateUserScoreSchema (req, res, next) {
    const { error } = userScoreSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  }

  module.exports ={
    validateUserScoreSchema,
  }