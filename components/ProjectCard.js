import Skills from "./Skills"

const ProjectCard = ({project}) => {
    return (
        <div className="border border-black p-4">
            <div className="flex flex-row justify-between">
                <div>{project.name}</div>
                <div>{project.date}</div>
            </div>
            <div className="mt-2">{project.description}</div>
            <Skills skills={project.skills}/>
        </div>
    )}

export default ProjectCard    