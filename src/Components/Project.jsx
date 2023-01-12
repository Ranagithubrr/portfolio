import React, { useState } from 'react';
import './Project.css';
import ProjectData from '../Data/ProjectData.json';
import './Project.css';
import { motion } from 'framer-motion';
const Project = () => {
    console.log(ProjectData);
    const [all, setAll] = useState('activeBtn');
    const [react, setReact] = useState('');
    const [full, setFull] = useState('');
    const [ui, setUi] = useState('');


    const [projects, setProjects] = useState(ProjectData);
    const FilterAllButtonClicked = () => {
        setProjects(ProjectData);
        setReact('');
        setFull('');
        setUi('');
    }

    const FilterButtonClicked = (btn) => {
        switch (btn) {
            case 'all':
                setAll('activeBtn');
                setReact('');
                setFull('');
                setUi('');
                break;
            case 'react':
                setAll('');
                setReact('activeBtn');
                setFull('');
                setUi('');
                break;
            case 'fullstack':
                setAll('');
                setReact('');
                setFull('activeBtn');
                setUi('');
                break;
            case 'ui':
                setAll('');
                setReact('');
                setFull('');
                setUi('activeBtn');
                break;
            default:
                setAll('activeBtn');
        }

        const hatchbackCar = ProjectData.filter((item) => item.type === btn);
        setProjects(hatchbackCar);
        console.log(projects);
    }

    return (
        <section id="projects">
            <div className='Project mt-5'>
                <h2>My Projects</h2>
                <div className="projectFilters mt-4">
                    <div className="filterButton text-center" >
                        <button onClick={() => FilterAllButtonClicked('all')} className={all}>All</button>
                        <button onClick={() => FilterButtonClicked('react')} className={react}>React</button>
                        <button onClick={() => FilterButtonClicked('fullstack')} className={full}>Full Stack</button>
                        <button onClick={() => FilterButtonClicked('ui')} className={ui}>UI</button>
                    </div>
                </div>
                <motion.div layout className="row mt-3 d-flex">
                    {
                        projects.map((ele) => {
                            return (
                                <motion.div
                                    className="col-12 col-md-6 col-lg-4 mt-4">
                                    <div className="ProjectsCard">
                                        <div className="ProjectOverlay">
                                        </div>
                                        <div className="buttons">
                                            <a href={ele.livelink} target='_blank' className='liveLink'>Live Demo</a>
                                            <a href={ele.githublink} target='_blank' className='githubLink'>Github Repo</a>
                                        </div>
                                        <img src={ele.img} alt="not-found" className='img-fluid' />
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default Project
