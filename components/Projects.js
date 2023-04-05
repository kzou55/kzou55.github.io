import projects from "@/misc/Projects"
import ProjectCard from "./ProjectCard"

const Projects = () => {

    return (
        <div>
            <h1>My Projects</h1>
            <div className="grid grid-cols-3 gap-5">
                {projects.map((p) => (
                    <ProjectCard project={p}/>
                ))}
            </div>
        </div>
    )

}

export default Projects


