
import Image from 'next/image'
import profilePic from '../public/assets/profilepic.jpg'

const About = () => {
    return (
        <div className='flex flex-col md:flex-row mt-10'>
            <Image src={profilePic} alt="" className="lg:w-80 lg:h-80 w-60 h-60 sm:w-80 sm:h-80 m-auto mt-0 mb-0 object-cover"/>
            <div className='m-auto lg:ps-10 lg:pe-10 ps-5 pe-5'>
                <h1 className="font-bold xl:text-3xl text-xl lg:mt-0 mt-3 mb-5">About Me</h1>
                <p className="mt-2 mb-3 xl:text-base text-sm">
                    Hello, I am Ken Zou. I recently graduated from Northeastern University in December 2022 with a bachelor’s degree in Computer Science. 
                </p> 
                <p className="mb-3 xl:text-base text-sm">
                    Through classes, clubs and co-ops, I have gained experience in software development as well as in web development. This includes being proficient in programming languages such as Java, Python, JavaScript and SQL and having a strong foundation in object oriented design.
                    
                My last professional experience was as a Software QA Automation Engineer Co-op at Wellframe, where I primarily wrote automation tests to ensure the functionality of their mobile and web applications.
                </p>
                <p className="mb-3 xl:text-base text-sm">
                    Outside of school, I'm often either listening to music, watching sports or playing video games. In fact, I'm currently relearning how to play the piano. 
                </p>
                <p className='mb-3 xl:text-base text-sm'>
                    I am currently seeking an entry level software engineer role. If you are interested in contacting me, you can reach out to me through my email.
                </p>
            </div>
        </div>

    )
}

export default About