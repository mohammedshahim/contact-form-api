const express = require("express");
const {
  addNewForm,
  updateForm,
  deleteForm,
  getAllForms,
} = require("../controllers/form");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(getAllForms)
  .post(addNewForm)
  .put(updateForm)
  .delete(deleteForm);

module.exports = router;
