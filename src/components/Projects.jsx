import React from 'react';
import '../App.css';
import unicornImg from '../assets/UNICORN.PNG';
import webAccessibleImg from '../assets/web accessible design.png';
import mealPlannerImg from '../assets/Meal_planner.png';
import weatherImg from '../assets/weather.png';

const Projects = () => {
  return (
    <div className='container-xl' id="projects">
    <section className="Projects p-5 m-1 fs-4  border border-primary-subtle  rounded-2">
    <h2 className="intro fs-2 fw-bold d-flex justify-content-center">My Projects</h2>

    <div id="carouselExample" className="carousel slide w-100" data-bs-ride="carousel">
    <div className="carousel-inner">

      {/* Project 1 */}
      <div className="carousel-item active" id='project-grid'>
        <div className="Project fst-normal border-primary-subtle text-center">
          <img
            src={unicornImg}
            className="d-block mx-auto p-3 img-fluid"
            alt="Birthday Card Project"
          />
          <h4>Birthday Card</h4>
          <p>Birthday card project using HTML, CSS</p>
          <button type="button" className="btn btn-primary">
            View Project
          </button>
        </div>
      </div>

      {/* Project 2 */}
      <div className="carousel-item" id='project-grid'>
        <div className="Project fst-normal p-2 m-3 text-center border-primary-subtle">
          <img
            src={ webAccessibleImg}
            className="d-block mx-auto p-3 img-fluid"
            alt="Accessible Web Design"
          />
          <h4>Accessible Web Design</h4>
          <p>
            I created an accessible design company website using HTML and CSS.
          </p>
          <button type="button" className="btn btn-primary">
            View Project
          </button>
        </div>
      </div>

      {/* Project 3 */}
      <div className="carousel-item" id='project-grid'>
        <div className="Project p-2 m-2 text-center">
          <img
            src={mealPlannerImg}
            className="d-block mx-auto p-3 img-fluid"
            alt="Meal Planner App"
          />
          <h4>Meal Planner App</h4>
          <p>Created a Meal Planner App using HTML, CSS, and JavaScript.</p>
          <button type="button" className="btn btn-primary">
            View Project
          </button>
        </div>
      </div>
      {/* Project 4 */}
      <div className='carousel-item'>
        <div className="Project p-2 m-2 text-center">
          <img
            src={weatherImg}
            className="weather d-block mx-auto p-3 img-thumbnail"
            alt="weather project App"
          />
          <h4>Weather App</h4>
          <p>Created a Weather App using React and JavaScript.</p>
          <button type="button" className="btn btn-primary">
            View Project
          </button>
          </div>
        </div>
      </div>

    {/* Carousel Controls */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon"></span>
    </button>

    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
        <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    </section>
      
</div>
  )
}

export default Projects
