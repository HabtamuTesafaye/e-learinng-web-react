import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBook, FaUsers, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';
import CountUp from 'react-countup'; // Import CountUp component
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer
import '../../assets/css/Statistics.css';

const statistics = [
  { label: 'Courses Available', value: 120, suffix: '+', icon: <FaBook size={50} /> },
  { label: 'Active Users', value: 5000, suffix: '+', icon: <FaUsers size={50} /> },
  { label: 'Certified Instructors', value: 200, suffix: '+', icon: <FaChalkboardTeacher size={50} /> },
  { label: 'Certificates Issued', value: 1500, suffix: '+', icon: <FaCertificate size={50} /> },
];

const Statistics = () => {
  // useInView to track if the section is visible
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the count-up animation only once
    threshold: 0.3,    // Trigger when 30% of the component is visible
  });

  return (
    <section className="statistics" ref={ref}>
      <Container>
        <h2 className="text-center">Our Statistics</h2>
        <Row>
          {statistics.map((stat, index) => (
            <Col md={3} key={index} className="text-center">
              {stat.icon}
              <h3>
                {inView ? (
                  <CountUp
                    end={stat.value}   // Use the numeric value directly
                    duration={2.5}     // Duration of the count-up animation
                    separator=","      // Add comma as thousand separator
                  />
                ) : (
                  '0' // Show 0 if not in view
                )}
                {stat.suffix}         {/* Add the suffix like "+" after the number */}
              </h3>
              <p>{stat.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Statistics;
