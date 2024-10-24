import React from 'react'
import examplePDF from '../assets/princeinternshipcertificate.pdf'; // Adjusting the path to go up one directory


function About() {
    return (
        <div name='About' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>About</h1>
                <p>Hello! 👋 I'm Prince Kumar  a passionate Web developer with a keen eye for MERN Stack . With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression.</p>
                <br />
                <h1 className='text-green-600 font-semibold text-xl'>Education & Training</h1>
                <span>[Degree-Btech IT] , [Institution-Hi-tech institute of engineering and technology] , [Year 2021-2025] <br /> [Certification-MERN Stack] , [Institution-Tutedude] , [Year-2024]</span>
                <br /><br />

                <h1 className='text-green-600 font-semibold text-xl'>Skills & Expertise</h1>
                <span>
                    Proficient in [Programming Languages] Experienced with [Software Tools/Technologies]
                     Strong grasp of [Design Principles/Concepts] Excellent problem-solving skills Effective Communicator and
                     collaborator
                </span>
                <br /><br />

                <h1 className='text-green-600 font-semibold text-xl'>Professional Experience</h1>
                <span>
                    [Web Developer Intern], [CodeAlpha], [Aug2024 - sept2024] 
                    <ul class="list-disc pl-5">
                        <li>Developed and optimized responsive web applications using HTML, CSS, and JavaScript to enhance user experience.</li>
                        <li>Built and deployed three key projects: Image Gallery, Personal Portfolio, and Music Player, incorporating dynamic
                        features to improve interactivity.</li>
                        <li>Acquired practical experience in identifying and fixing UI/UX issues. <a class="text-blue-500 hover:text-blue-700" href={examplePDF} target='_blank'>Certificate</a></li>
                    </ul>
                    {/* [Job Title], [Company/Organization], [Dates] [Brief description of responsibilities and achievements]
                    [Freelance/Contract Work], [Client/Organization], [Dates][Brief  description of projects and contributions] */}
                </span>
                <br /><br />

                <h1 className='text-green-600 font-semibold text-xl'>Achievements & Awards</h1>
                <span>
                    {/* [Award/Recognition],[Organization/Institution],[year][Achievement],[Organization/Platform],[Year] */}
                    CERTIFICATE :- <a href="https://www.c-sharpcorner.com/certification/certificate/gcnifiuw" target='_blank' className='underline font-semibold'>C# Corner</a> - Web Development
                </span><br />
                <span>
                    CERTIFICATE :- <a href="https://www.c-sharpcorner.com/certification/certificate/vtxamwcl" target='_blank' className='underline font-semibold'>C# Corner</a> -  Python-Beginner Level Certification
                </span><br />
                <span>
                    {/* [Award/Recognition],[Organization/Institution],[year][Achievement],[Organization/Platform],[Year] */}
                    CERTIFICATE :- <a href="https://unstop.com/certificate-preview/3d7feaed-d8cb-4e1a-840c-9d981559956b" target='_blank' className='underline font-semibold'>FlipkartGrid</a> - Unstop Quiz 
                </span><br />
                <span>
                    CERTIFICATE :- <a href="https://www.linkedin.com/posts/prince-kumar-0b525b280_i-just-completed-accenture-uks-developer-activity-7242201209858629632-D0tK?utm_source=share&utm_medium=member_desktop" target='_blank' className='underline font-semibold'>Accenture UK Developer and Technology Virtual Experience Programme on Forage</a>
                </span><br />
                <br /><br />

                <h1 className='text-green-600 font-semibold text-xl'>Mission Statement</h1>
                <span>
                    My mission is to leverage my skills and creativity to deliver innovative solutions that exceed client expectations and contribute
                    positivity to the digital landscape.I am committed to continuous learning and growth always
                    seeking new challenges and opportunities to expand my horizons.
                </span>
            </div>
        </div>
    )
}

export default About