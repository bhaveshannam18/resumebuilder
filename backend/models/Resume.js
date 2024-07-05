const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResumeSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  basicDetails: {
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    contactNumber: { type: String, default: '' },
    emailAddress: { type: String, default: '' },
  },
  education: {
    schoolName: { type: String, default: '' },
    boardName: { type: String, default: '' },
    schoolPercentage: { type: String, default: '' },
    schoolFromDate: { type: Date },
    schoolToDate: { type: Date },
    collegeName: { type: String, default: '' },
    degree: { type: String, default: '' },
    collegePercentage: { type: String, default: '' },
    collegeFromDate: { type: Date },
    collegeToDate: { type: Date },
  },
  experience: [{
    designation: { type: String, default: '' },
    companyName: { type: String, default: '' },
    fromDate: { type: Date },
    toDate: { type: Date },
    description: { type: String, default: '' },
  }],
  projects: [{
    projectName: { type: String, default: '' },
    projectLink: { type: String, default: '' },
    projectDescription: { type: String, default: '' },
  }],
  skills: {
    selectedFrontend: [{ type: String }],
    selectedBackend: [{ type: String }],
    selectedDatabase: [{ type: String }],
    selectedTools: [{ type: String }],
  },
  resumeName: { type: String, required: true },
});

module.exports = mongoose.model('Resume', ResumeSchema);
