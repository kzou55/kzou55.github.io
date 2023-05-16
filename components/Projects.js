import projects from "@/misc/Projects"
import ProjectCard from "./ProjectCard"

const Projects = () => {

    return (
        <div>
            <h1 className="mb-5 flex font-bold text-2xl justify-center text-white">My Projects</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {projects.map((p, index) => (
                    <ProjectCard key={index} project={p}/>
                ))}
            </div>
        </div>
    )

}

export default Projects


