import Skills from "./Skills"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({project}) => {
    if (project.link) {
        return (
            <a className="border border-black rounded-lg p-4 hover:border-slate-300" href={project.link}>
                <div className="flex flex-row justify-between">
                    <div className="font-bold">{project.name}</div>
                    <div>{project.date}</div>
                </div>
                <div className="mt-2">{project.description}</div>
                <Skills skills={project.skills}/>
                <div className="text-sm">
                    <FontAwesomeIcon icon={faLink} className="mt-3"/>
                    &nbsp;See Project
                </div>
            </a>
        )
    }
    else {
        return (
            <div className="border border-black rounded-lg p-4">
                <div className="flex flex-row justify-between">
                    <div className="font-bold">{project.name}</div>
                    <div>{project.date}</div>
                </div>
                <div className="mt-2">{project.description}</div>
                <Skills skills={project.skills}/>
            </div>
            )
        }
}

export default ProjectCard    