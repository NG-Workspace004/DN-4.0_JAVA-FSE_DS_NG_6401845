import React from 'react';

const courses = [
  { id: 1, cname: 'Angular', date: '4/5/2021' },
  { id: 2, cname: 'React', date: '6/3/20201' }
];

function CourseDetails() {
  // Conditional rendering using map with ternary operator
  const coursedet = (
    <ul>
      {courses.map(course =>
        course ? (
          <div key={course.id}>
            <h3>{course.cname}</h3>
            <p>{course.date}</p>
          </div>
        ) : null
      )}
    </ul>
  );

  return (
    <div style={{ borderRight: '3px solid green', paddingRight: '40px' }}>
      <h1>Course Details</h1>
      {coursedet}
    </div>
  );
}

export default CourseDetails;
