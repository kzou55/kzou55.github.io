import projects from "@/misc/Projects"
import ProjectCard from "./ProjectCard"

const Projects = () => {

    return (
        <div>
            <h1 className="mb-5 flex font-bold text-2xl justify-center">My Projects</h1>
            <div className="grid md:grid-cols-3 gap-5">
                {projects.map((p) => (
                    <ProjectCard project={p}/>
                ))}
            </div>
        </div>
    )

}

export default Projects


