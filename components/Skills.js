const Skills = ({skills}) => {
    return (
        <div className="flex flex-wrap flex-row gap-3 mt-5">
            {skills.map(
                (skill, index) => 
                    <div key={index} className="border border-gray-600 rounded-lg p-2 text-sm">
                        {skill}
                    </div>)}
        </div>
    )
}

export default Skills