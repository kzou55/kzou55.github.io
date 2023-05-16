import Socials from "./Socials";

const Heading = () => {
    return (
        <div>
            <h1 className="font-bold mb-3 text-blue-300 text-5xl lg:text-7xl">
                Ken Zou
            </h1>
            <h1 className="font-bold mb-3 text-gray-300 lg:text-5xl md:text-4xl text-2xl">
                Passionate about building web applications
            </h1>
            <Socials/>
        </div>

    )
}

export default Heading