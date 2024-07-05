const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');


router.post('/createResume', async (req, res) => {
    const resume = new Resume({
      user_id: req.body.user_id,
      basicDetails: req.body.basicDetails,
      education: req.body.education,
      experience: req.body.experience,
      projects: req.body.projects,
      skills: req.body.skills,
      resumeName: req.body.resumeName
    });
  
    try {
      const newResume = await resume.save();
      res.status(201).json(newResume);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  //For all Resumes of particular Users
  router.get('/user/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const resumes = await Resume.find({ user_id: userId });
      res.json(resumes);
    } catch (error) {
      console.error('Error fetching resumes:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  //For Single Resume
  router.get('/:resumeId/download', async (req, res) => {
    try {
      const resumeId = req.params.resumeId;
      const resume = await Resume.findById(resumeId);
      
      if (!resume) {
        return res.status(404).json({ message: 'Resume not found' });
      }
  
      res.json(resume);
    } catch (error) {
      console.error('Error fetching resume:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.delete('/:resumeId', async (req, res) => {
    try {
        const resumeId = req.params.resumeId;
        const deletedResume = await Resume.findByIdAndDelete(resumeId);

        if (!deletedResume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        res.json({ message: 'Resume deleted successfully' });
    } catch (error) {
        console.error('Error deleting resume:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//Update Resume
router.put('/:resumeId', async (req, res) => {
  try {
    const { resumeId } = req.params;
    const {
      user_id,
      basicDetails,
      education,
      experience,
      projects,
      skills,
      resumeName
    } = req.body;

    const updatedResume = await Resume.findByIdAndUpdate(
      resumeId,
      {
        user_id,
        basicDetails,
        education,
        experience,
        projects,
        skills,
        resumeName
      },
      { new: true } // This option returns the updated document
    );

    if (!updatedResume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    res.status(200).json(updatedResume);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;