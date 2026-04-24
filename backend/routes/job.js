const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const authMiddleware = require("../middleware/authMiddleware");

// CREATE JOB (Protected)
router.post("/create", authMiddleware, async (req, res) => {
    try {
        const { title, company, location, salary, description } = req.body;

        const job = new Job({
            title,
            company,
            location,
            salary,
            description,
            createdBy: req.user.id
        });

        await job.save();

        res.json({ msg: "Job created successfully", job });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET ALL JOBS
router.get("/", async (req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
});

module.exports = router;