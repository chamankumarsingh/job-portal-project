const express = require("express");
const router = express.Router();
const Application = require("../models/Application");
const authMiddleware = require("../middleware/authMiddleware");


// ================= APPLY JOB =================
router.post("/apply/:jobId", authMiddleware, async (req, res) => {
    try {
        const application = new Application({
            user: req.user.id,
            job: req.params.jobId
        });

        await application.save();

        res.json({ msg: "Applied successfully" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// ================= GET MY APPLICATIONS =================
router.get("/my", authMiddleware, async (req, res) => {
    try {
        const applications = await Application.find({ user: req.user.id })
            .populate("job");   // job details bhi laega

        res.json(applications);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;