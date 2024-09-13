import React, { useState, useEffect, useMemo } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CourseCard from './CourseCard';

// Import course images
import Algebra from '../assets/images/algebra.jpg';
import Biology from '../assets/images/biology.jpg';
import DataScience from '../assets/images/dataScience.jpg';
import Economics from '../assets/images/economics.jpg';
import GraphicsDesign from '../assets/images/graphics.jpg';
import History from '../assets/images/history.jpg';
import Marketing from '../assets/images/marketing.jpg';
import Psychology from '../assets/images/psychology.jpg';

// Main component to render all course cards
const Courses = () => {
  // Use useMemo to memoize the courses data
  const allCourses = useMemo(() => [
    {
      title: 'Algebra',
      image: Algebra,
      description: 'Learn the fundamentals of algebra, including variables, equations, and functions.',
      subject: 'Math',
      year: '2023',
      major: 'Science',
    },
    {
      title: 'Biology',
      image: Biology,
      description: 'Explore the science of life, including genetics, ecosystems, and cell biology.',
      subject: 'Science',
      year: '2022',
      major: 'Science',
    },
    {
      title: 'Data Science',
      image: DataScience,
      description: 'Understand the basics of data analysis, machine learning, and big data processing.',
      subject: 'Technology',
      year: '2021',
      major: 'Tech',
    },
    {
      title: 'Economics',
      image: Economics,
      description: 'Study the principles of micro and macroeconomics, including supply and demand.',
      subject: 'Economics',
      year: '2023',
      major: 'Business',
    },
    {
      title: 'Graphic Design',
      image: GraphicsDesign,
      description: 'Master the art of visual communication through typography, layout, and branding.',
      subject: 'Arts',
      year: '2020',
      major: 'Design',
    },
    {
      title: 'History',
      image: History,
      description: 'Delve into the past and study key events, civilizations, and historical figures.',
      subject: 'History',
      year: '2019',
      major: 'Humanities',
    },
    {
      title: 'Marketing',
      image: Marketing,
      description: 'Learn marketing strategies, consumer behavior, and brand development.',
      subject: 'Business',
      year: '2022',
      major: 'Business',
    },
    {
      title: 'Psychology',
      image: Psychology,
      description: 'Understand human behavior, cognition, and emotions through psychological theories.',
      subject: 'Science',
      year: '2021',
      major: 'Humanities',
    },
  ], []); // Memoize the courses data

  // State to manage filters
  const [filters, setFilters] = useState({
    subject: [],
    year: [],
    major: [],
  });

  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  // Function to handle checkbox changes
  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (checked) {
        updatedFilters[name] = [...updatedFilters[name], value];
      } else {
        updatedFilters[name] = updatedFilters[name].filter((item) => item !== value);
      }
      return updatedFilters;
    });
  };

  // Filter courses when filters are updated
  useEffect(() => {
    let updatedCourses = allCourses;

    // Apply filtering logic
    if (filters.subject.length) {
      updatedCourses = updatedCourses.filter((course) => filters.subject.includes(course.subject));
    }
    if (filters.year.length) {
      updatedCourses = updatedCourses.filter((course) => filters.year.includes(course.year));
    }
    if (filters.major.length) {
      updatedCourses = updatedCourses.filter((course) => filters.major.includes(course.major));
    }

    setFilteredCourses(updatedCourses);
  }, [filters, allCourses]); // Depend only on filters and memoized allCourses

  // Extract unique filter options
  const subjects = [...new Set(allCourses.map((course) => course.subject))];
  const years = [...new Set(allCourses.map((course) => course.year))];
  const majors = [...new Set(allCourses.map((course) => course.major))];

  return (
    <Container>
      <Row className="my-5">
        <Col md={3}>
          <h2>Filter Courses</h2>
          <Form>
            {/* Subject Filters */}
            <Form.Group controlId="filterSubject">
              <Form.Label>Subject</Form.Label>
              {subjects.map((subject) => (
                <Form.Check
                  key={subject}
                  type="checkbox"
                  label={subject}
                  name="subject"
                  value={subject}
                  checked={filters.subject.includes(subject)}
                  onChange={handleFilterChange}
                />
              ))}
            </Form.Group>

            {/* Year Filters */}
            <Form.Group controlId="filterYear" className="my-3">
              <Form.Label>Year</Form.Label>
              {years.map((year) => (
                <Form.Check
                  key={year}
                  type="checkbox"
                  label={year}
                  name="year"
                  value={year}
                  checked={filters.year.includes(year)}
                  onChange={handleFilterChange}
                />
              ))}
            </Form.Group>

            {/* Major Filters */}
            <Form.Group controlId="filterMajor">
              <Form.Label>Major</Form.Label>
              {majors.map((major) => (
                <Form.Check
                  key={major}
                  type="checkbox"
                  label={major}
                  name="major"
                  value={major}
                  checked={filters.major.includes(major)}
                  onChange={handleFilterChange}
                />
              ))}
            </Form.Group>

            <Button
              variant="primary"
              className="mt-3"
              onClick={() => setFilters({ subject: [], year: [], major: [] })}
            >
              Clear Filters
            </Button>
          </Form>
        </Col>

        <Col md={9}>
          <h2>My Courses ({filteredCourses.length})</h2>
          <Row>
            {filteredCourses.map((course, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="d-flex justify-content-center">
                <CourseCard
                  title={course.title}
                  image={course.image}
                  description={course.description}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
