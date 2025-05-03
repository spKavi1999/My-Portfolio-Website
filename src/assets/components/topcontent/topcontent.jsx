import React from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './topcontent.css';

import toppic from '../../toppic.jfif';

const topcontent = () => {
  return (
    <div className='topcontent d-flex flex-row'>
      {/* Image Section */}
      <div className=' flex-1 w-50 topcontent_image '>
        <img src={toppic} alt="Professional Animation" />
      </div>

      {/* Content Section */}
      <div className=' flex-1 w-50 topcontent_container'>
        <h1>Kavi Sakkaravarthi</h1>
        <p>I am a front end developer.</p>
        <p className='topcontent_summary mt-1 mb-1'>
          I am a passionate and detail-oriented developer with a strong foundation in front-end technologies like HTML, CSS, JavaScript, React, and Bootstrap. I enjoy building interactive, responsive web applications that provide great user experiences.
        </p>
        <p className='topcontent_summary mt-1'>
          Continuously learning and adapting to the latest trends, I thrive in collaborative environments where I can grow my technical and creative skills. I am excited to take on new challenges and build impactful projects that leave a lasting impression.
        </p>
        
        {/* Updated Download CV Button */}
        <a href="/Kavi_Sakkaravarthi_Resume2025.pdf" download>
          <button className='topcontent_downloadbutton'>Download CV</button>
        </a>

        <Link to='projects' smooth={true} duration={200} offset={-100}>
          <button className='topcontent_workbutton'>My Work</button>
        </Link>
      </div>
    </div>
  );
}

export default topcontent;
