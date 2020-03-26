import React, { useState, useEffect } from 'react';

const people1 = [
    {
        "city": "Fush\u00eb-Muhurr",
        "company": "Yadel",
        "email": "iorton0@imdb.com",
        "firstName": "Ingaberg",
        "grades": [
            "78",
            "100",
            "92",
            "86",
            "89",
            "88",
            "91",
            "87"
        ],
        "id": "1",
        "lastName": "Orton",
        "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg",
        "skill": "Oracle"
    },
    {
        "city": "Sanghan",
        "company": "Avamm",
        "email": "cboards1@weibo.com",
        "firstName": "Clarke",
        "grades": [
            "75",
            "89",
            "95",
            "93",
            "99",
            "82",
            "89",
            "76"
        ],
        "id": "2",
        "lastName": "Boards",
        "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasautreprehenderit.jpg",
        "skill": "Sports"
    }
];

const FilterTest = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };
    useEffect(() => {
        const results = people1.filter(person =>
            person.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log(results);
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <div>
            <input
                type="text"
                placeholder="filter Test"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                {searchResults.map(item => (
                    <li>{item.lastName}</li>
                ))}
            </ul>
        </div>
    );
}

export default FilterTest;