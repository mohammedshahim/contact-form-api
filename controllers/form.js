const Form = require("../models/form");

/**
 * @desc    Get all forms
 * @route   GET /api/v1/form
 * @access  Public
 */
exports.getAllForms = async (req, res, next) => {
  const forms = await Form.find().sort({ createdAt: -1 });

  let msg = "Forms fetched successfully";
  return res.json({ success: true, message: msg, data: forms });
};

/**
 * @desc    Create a new form
 * @route   POST /api/v1/form
 * @access  Public
 */
exports.addNewForm = async (req, res, next) => {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  // Check all fields are filled
  if (!firstName || !lastName || !email || !phone || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: "Please enter all fields",
    });
  }

  const form = await Form.create(req.body);

  let msg = "Contact form submitted successfully";
  return res.json({ success: true, message: msg, data: form });
};

/**
 * @desc    Update a form
 * @route   PUT /api/v1/form
 * @access  Public
 */
exports.updateForm = async (req, res, next) => {
  const { formId } = req.query;

  if (!formId) {
    return res.status(400).json({
      success: false,
      error: "Please pass form id with data to update",
    });
  }

  const form = await Form.findByIdAndUpdate(
    formId,
    { ...req.body },
    { new: true }
  );

  let msg = "Form updated successfully";
  return res.json({ success: true, message: msg, data: form });
};

/**
 * @desc    Delete a form
 * @route   DELETE /api/v1/form
 * @access  Public
 */
exports.deleteForm = async (req, res, next) => {
  const { formId } = req.query;

  // Check all fields are filled
  if (!formId) {
    return res.status(400).json({
      success: false,
      error: "Please pass form id",
    });
  }

  // Delete form from database
  const form = await Form.findByIdAndDelete(formId);

  // Check form get deleted
  if (!form) {
    return res.status(404).json({
      success: false,
      error: "Form not found",
    });
  }

  let msg = "Form deleted successfully";
  return res.json({ success: true, message: msg });
};
