import Skills from "./Skills"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({project}) => {
    if (project.link) {
        return (
            <a className="border border-gray-600 rounded-lg p-4 hover:border-slate-300 text-gray-300" href={project.link}>
                <div className="flex flex-row justify-between">
                    <div className="font-bold text-white">{project.name}</div>
                    <div>{project.date}</div>
                </div>
                <div className="mt-2">{project.description}</div>
                <Skills skills={project.skills}/>
                <div className="text-sm mt-5">
                    <FontAwesomeIcon icon={faLink} className="mt-3"/>
                    &nbsp;See Project
                </div>
            </a>
        )
    }
    else {
        return (
            <div className="border border-gray-600 rounded-lg p-4 text-gray-300">
                <div className="flex flex-row justify-between">
                    <div className="font-bold text-white">{project.name}</div>
                    <div>{project.date}</div>
                </div>
                <div className="mt-2">{project.description}</div>
                <Skills skills={project.skills}/>
                <div className="text-sm mt-5">
                    <FontAwesomeIcon icon={faLink} className="mt-3"/>
                    &nbsp;Available upon request
                </div>
            </div>
            )
        }
}

export default ProjectCard    