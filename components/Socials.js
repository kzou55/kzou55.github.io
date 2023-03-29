import socials from "@/misc/Socials"

const Socials = () => {
    return (
        <div className="flex flex-row gap-5">
            {socials.map((social) => (
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                </a>
                ))
            }

        </div>
    )

}

export default Socials