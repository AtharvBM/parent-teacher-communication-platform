const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  class: { type: String, required: true },
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  attendance: [{
    date: Date,
    status: { type: String, enum: ['present', 'absent', 'late'] }
  }],
  grades: [{
    subject: String,
    score: Number,
    maxScore: Number,
    date: Date,
    testType: String
  }],
  behavior: [{
    date: Date,
    type: { type: String, enum: ['positive', 'negative', 'neutral'] },
    description: String,
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }],
  assignments: [{
    subject: String,
    title: String,
    dueDate: Date,
    submitted: Boolean,
    grade: Number
  }]
});

module.exports = mongoose.model('Student', studentSchema);
