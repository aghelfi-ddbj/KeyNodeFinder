import React, { useState } from 'react';
import axios from 'axios';

const Protected = ({ token }) => {
    const [bioSample, setBioSample] = useState('');
    const [data, setData] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const config = { headers: { Authorization: `Bearer ${token}` } };
        try {
            const response = await axios.get(`http://localhost:5001/biosample/${bioSample}`, config);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={bioSample}
                    onChange={(e) => setBioSample(e.target.value)}
                    placeholder="Enter BioSample"
                />
                <button type="submit">Search</button>
            </form>

            {data && data.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>BioSample</th>
                            <th>BioProject</th>
                            <th>DRR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.email}</td>
                                <td>{item.biosample}</td>
                                <td>{item.bioproject}</td>
                                <td>{item.drr}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {data && data.length === 0 && (
                <div>No data available</div>
            )}
        </div>
    );
};

export default Protected;
