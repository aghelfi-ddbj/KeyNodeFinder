const express = require('express');
const router = express.Router();
const getBioSampleData = require("../models/getBioSampleData");

router.get('/:biosample', async (req, res) => {
    try {
        const biosample = req.params.biosample;
        const userEmail = req.user;
        const data = await getBioSampleData(biosample, userEmail);
        res.json(data);
    } catch (error) {
        console.error('Error fetching BioSample data:', error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
