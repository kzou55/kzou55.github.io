import Socials from "./Socials";

const About = () => {
    return (
        <div>
            <h1 className="font-bold text-7xl mb-3">Ken Zou</h1>
            <h1 className="font-bold text-7xl mb-3">Passionate about building web applications</h1>
            <Socials/>
            <h1 className="font-bold text-3xl mt-10">About Me</h1>
            <p className="mt-2 mb-3">
                Hello, I am Ken Zou. I recently graduated from Northeastern University in December 2022 with a bachelor’s degree in Computer Science. 
            </p> 
            <p className="mb-3">
                Through classes, clubs and co-ops, I have gained experience in software development as well as in web development. This includes being proficient in programming languages such as Java, Python, JavaScript and SQL and having a strong foundation in object oriented design.
                
            My last professional experience was as a Software QA Automation Engineer Co-op at Wellframe, where I primarily wrote automation tests to ensure the functionality of their mobile and web applications.
            </p>
            <p className="mb-3">
                Outside of school, I'm often either listening to music, watching sports or playing video games. In fact, I'm currently relearning how to play the piano. 
            </p>
            <p>
                I am currently seeking an entry level software engineer role. If you are interested in contacting me, you can reach out to me at kzou55@gmail.com.
            </p>
        </div>

    )
}

export default About