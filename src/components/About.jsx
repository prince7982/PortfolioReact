import React from 'react'

function About() {
    return (
        <div name='About' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>About</h1>
                <p>Hello! 👋 I'm Prince Kumar  a passionate Web developer with a keen eye for MERN Stack . With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression.</p>
                <br />
                <h1 className='text-green-600 font-semibold text-xl'>Education & Training</h1>
                <span>[Degree-Btech IT] , [Institution-Hi-tech institute of engineering and technology] , [Year-2025] <br /> [Certification-MERN Stack] , [Institution-Tutedude] , [Year-2024]</span>
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
                    [Job Title], [Company/Organization], [Dates] [Brief description of responsibilities and achievements]
                    [Job Title], [Company/Organization], [Dates] [Brief description of responsibilities and achievements]
                    [Freelance/Contract Work], [Client/Organization], [Dates][Brief  description of projects and contributions]
                </span>
                <br /><br />

                <h1 className='text-green-600 font-semibold text-xl'>Achievements & Awards</h1>
                <span>
                    {/* [Award/Recognition],[Organization/Institution],[year][Achievement],[Organization/Platform],[Year] */}
                    CERTIFICATE :- <a href="https://www.c-sharpcorner.com/certification/certificate/gcnifiuw" target='_blank' className='underline font-semibold'>C# Corner</a> - Web Development
                </span><br />
                <span>
                    {/* [Award/Recognition],[Organization/Institution],[year][Achievement],[Organization/Platform],[Year] */}
                    CERTIFICATE :- <a href="https://unstop.com/certificate-preview/3d7feaed-d8cb-4e1a-840c-9d981559956b" target='_blank' className='underline font-semibold'>FlipkartGrid</a> - Unstop Quiz 
                </span>
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