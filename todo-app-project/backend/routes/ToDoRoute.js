const { Router } = require("express");

const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController");
console.log(getToDo)
const router = Router();

router.get("/", getToDo);

router.post("/save", saveToDo);

router.post("/update", updateToDo);

router.post("/delete", deleteToDo);

module.exports = router;
