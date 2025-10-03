import React from 'react';

interface ProjectCardProps {
    title : string;
    category: string;
    image: string;
    technologies: string[];
}

const ProjectCard : React.FC<ProjectCardProps> = ({
    title,
    category,
    image,
    technologies
}) => {
    return (
        <div className= "project-card">
            <img src={image} alt={title} className="project-image"/>
            <div className="project-info">
                <span className="project-categoty">{category}</span>
                <h3 className='project-title'>{title}</h3>
                <div className="project-tech">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag"> {tech} </span>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;