    import React from 'react';
    import './Project.css';
    import ProjectCard from '../Cards/projectCard.tsx'
    import ProjectData from '../../project.json'

    const Project: React.FC = () => {
    return (
        <section id="project" className="project-section">
        <div className='project-container'>
            <h1 className='project-header'>Project</h1>
            <div className='project-card-container'>
                {ProjectData.projects.map((project) => (
                    <ProjectCard
                    key={project.id}
                    title={project.title}
                    category={project.category}
                    image={project.image}
                    technologies={project.technologies}
                    />
                ))}
            </div>
        </div>
        </section>
    );
    };

    export default Project;