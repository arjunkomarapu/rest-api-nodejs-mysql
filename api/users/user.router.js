const { createUser } = require('./user.controller');
const { getUsers, getUserByUserId, updateUser, deleteUser } = require('./user.service');
const { createUser, getUsers, getUserByUserId, updateUser, deleteUser } = require('./user.controller');
const router = require('express').Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserByUserId);
router.patch("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;

