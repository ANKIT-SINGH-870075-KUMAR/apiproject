import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    async function fetchStudent() {
        const response = await fetch('https://mocki.io/v1/237ab6ab-3254-4128-9467-92ffb8e3ff24');
        const json1 = await response.json();
        return json1;
    }
    const [Students, SetStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const json1 = await fetchStudent();
            SetStudents(json1);
        };
        fetchStudents();
    }, []);

    const StudentCards = Students.map((student) => {
        return (
            <>
            <tr>
                <th scope="row">{`${student.id}`}</th>
                <td><img src={student.image} style={{ width: "3rem", height: "3rem"}} className="card-img-top" alt="..." /></td>
                <td>{`${student.name}`}</td>
                <td>{`${student.email}`}</td>
                <td><Link to={{pathname: `/Studentadmin/:${student.name}`}} state={{student}} className="btn btn-primary">{`${student.name} - Dashboard`}</Link></td>
            </tr>
            </>
        );
    });
    return (
        <>
            <h1 className='card-title my-2'>Students</h1>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Student's Photo</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Student Dashboard</th>
                    </tr>
                </thead>
                <tbody>
                {StudentCards}
                </tbody>
            </table>
        </>
    )
}

export default User;