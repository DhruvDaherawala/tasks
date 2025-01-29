import React from "react";

const About = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
      
      <p className="text-lg mb-4 text-gray-700">
        Hi, I'm <span className="font-semibold">Dhruv Daherawala</span>, a passionate 
        <span className="text-blue-600 font-semibold"> Python/Django Developer</span> and 
        <span className="text-green-600 font-semibold"> AI/ML Enthusiast</span> with hands-on experience in 
        <span className="font-semibold"> web development, software engineering, and artificial intelligence</span>.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">Experience</h3>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>
          <span className="font-semibold text-blue-700">Software Developer Engineer Intern (Team Leader) at Bluestock</span>  
          <br />Developed a <span className="font-semibold">Django-based web application</span> and 
          <span className="font-semibold"> REST API</span> for public information.
        </li>
        <li>
          <span className="font-semibold text-blue-700">Artificial Intelligence Intern at Internship Studio</span>  
          <br />Implemented <span className="font-semibold">PCA for face recognition</span> using 
          <span className="font-semibold"> ANN algorithms</span>, handling 
          <span className="font-semibold"> data preprocessing, training, and testing</span>.
        </li>
        <li>
          <span className="font-semibold text-blue-700">Application Development Intern at CreArt Solution</span>  
          <br />Collaborated on <span className="font-semibold">Android app development</span> using 
          <span className="font-semibold"> Android Studio and Java</span>.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">Skills & Interests</h3>
      <p className="text-lg mb-4 text-gray-700">
        <span className="font-semibold">Languages & Frameworks:</span> Python, Django, React, Java, Tailwind CSS  
        <br /><span className="font-semibold">AI/ML:</span> Data Analytics, ANN, PCA, Model Training  
        <br /><span className="font-semibold">Other Skills:</span> Web Development, API Integration, Software Engineering  
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">Current Goals</h3>
      <p className="text-lg mb-4 text-gray-700">
        I am actively seeking a <span className="font-semibold">Python/Django Developer</span> or 
        <span className="font-semibold"> AI/ML Engineer</span> role where I can apply my expertise and continue learning. 
        My aim is to contribute to impactful projects while expanding my knowledge in 
        <span className="font-semibold"> software development and machine learning</span>.
      </p>
    </div>
  );
};

export default About;
