import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../Data';
import './SingleCourse.css'
const SingelCourse = () => {
  const { courseId } = useParams();
  const courseIdFromParams = courseId.split('/').pop();
  const dataItem = data.find((elem) => elem.id === parseInt(courseIdFromParams));
  return (
    <div className="single-course">
      <div className="single-course-poster">
        <img src={dataItem.image} alt="" />
      </div>
      <div className="single-course-description">
        <h1 className='course-name'>Course-{dataItem.name}</h1>
        <h2 className='course-fees'>Price : {dataItem.fees}</h2>
        <div className="single-course-description-about">{dataItem.desc}</div>
        <h3 className='course-level'>Level : {dataItem.level}</h3>
        <h3 className='course-duration'>Duration : {dataItem.duration}</h3>
        <h3 className='course-format'>Format : {dataItem.format}</h3>
        <h3 className='course-rating'>Rating : {dataItem.rating}</h3>
        <h2 className='course-certification'>Certification : {dataItem.certification}</h2>
      </div>
    </div>
  );
};

export default SingelCourse;
