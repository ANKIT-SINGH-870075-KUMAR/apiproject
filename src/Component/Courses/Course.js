import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Course = () => {
    async function fetchCourse() {
        const response = await fetch('https://mocki.io/v1/99ae5020-5618-465d-991d-1864c8ac9290');
        const json = await response.json();
        return json;
    }

    const [Courses, SetCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const json = await fetchCourse();
            SetCourses(json);
        };
        fetchCourses();
    }, []);

    const courseCards = Courses.map((course) => {
        return (
            <tr>
                <th scope="row">{`${course.id}`}</th>
                <td>{`${course.name}`}</td>
                <td>{`${course.instructor}`}</td>
                <td>{`${course.description}`}</td>
                <td><Link to={{ pathname: `/Course/:${course.id}` }} state={{ course }} className="btn btn-primary">Course Details</Link></td>
            </tr>
        );
    });


    return (
        <>
            <h1 className='card-title my-2'>Online Course</h1>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Instructor</th>
                        <th scope="col">description</th>
                        <th scope="col">Course Details</th>
                    </tr>
                </thead>
                <tbody>
                {courseCards}
                </tbody>
            </table>
        </>
    )
}

export default Course;