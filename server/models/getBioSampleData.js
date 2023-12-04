const pool = require('../config/db');

async function getBioSampleData(biosample, userEmail) {
    const query = 'SELECT biosample,bioproject,drr,email FROM biosample WHERE biosample = $1 AND email = $2';
    try {
        const { rows } = await pool.query(query, [biosample, userEmail]);
        return rows;
    } catch (error) {
        console.error('Error executing BioSample query', error.stack);
        throw error;
    }
}

module.exports = getBioSampleData;