// backend/controllers/memberController.js
const Member = require('../models/Member');

/**
 * @route   POST /api/members
 * @desc    Add a new team member with all form fields
 */
exports.createMember = async (req, res) => {
  try {
    const {
      name, role, email, contact,
      degree, certificates, year,
      about, registerNumber
    } = req.body;

    // Basic required‐fields check
    if (!name || !role || !email || !contact || !req.file) {
      return res
        .status(400)
        .json({ error: 'Name, role, email, contact and image are required.' });
    }

    const imageFilename = req.file.filename;

    // Create with all form data
    const newMember = await Member.create({
      name,
      role,
      email,
      contact,
      degree,
      certificates,
      year,
      about,
      registerNumber,
      image: imageFilename
    });

    res.status(201).json(newMember);
  } catch (err) {
    console.error('Error in createMember:', err);
    res.status(500).json({ error: 'Server error while creating member.' });
  }
};

/**
 * @route   GET /api/members
 * @desc    Fetch all team members
 */
exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    res.json(members);
  } catch (err) {
    console.error('Error in getAllMembers:', err);
    res.status(500).json({ error: 'Server error while fetching members.' });
  }
};

/**
 * @route   GET /api/members/:id
 * @desc    Fetch a single team member by ID
 */
exports.getMemberById = async (req, res) => {
  try {
    const memberId = req.params.id;

    // Validate the ID format
    if (!memberId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid member ID format.' });
    }

    const member = await Member.findById(memberId);
    if (!member) {
      return res.status(404).json({ error: 'Member not found.' });
    }

    res.json(member);
  } catch (err) {
    console.error('Error in getMemberById:', err);
    res.status(500).json({ error: 'Server error while fetching member.' });
  }
};

