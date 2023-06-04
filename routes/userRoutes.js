const express = require('express');
const { getUserById, getAllUsers, CreateNewUser } = require('../controllers/userControllers');
const { validateUserScoreSchema } = require('../middlewares/userMiddlewares');
const router = express.Router();

router.post("/user", getUserById);
router.get("/scoreboard", getAllUsers);
router.post("/newscore", validateUserScoreSchema, CreateNewUser);

module.exports = router;
