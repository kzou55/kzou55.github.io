const Skills = ({skills}) => {
    return (
        <div className="flex flex-wrap flex-row gap-3 mt-3">
            {skills.map(
                (skill) => 
                    <div className="border border-black rounded-lg p-2 text-sm">
                        {skill}
                    </div>)}
        </div>
    )
}

export default Skills