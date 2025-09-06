import timetable from './img/projects/timetable.png';
import portfolio from './img/projects/portfolio.png';

import node from './img/skills/node.png';
import react from './img/skills/react.png';
import python from './img/skills/python.png';
import mongodb from './img/skills/mongodb.png'; 
import express from './img/skills/express.png';
import github from './img/skills/github.png';   
import openai from './img/skills/open ai api.png';

import fintech from './img/experience/NUS_fintech.jpg'
import vnya from './img/CCAs/VNYA.jpg'

import resume from './img/Tran Viet Khoa Resume.pdf'
import orbital_document from './img/Tran Viet Khoa Orbital.pdf'
const projects = [
    {
        title: "NUS Schedule Boss",
        description: (
            <>
                <mark>🗓 An intelligent scheduling assistant</mark> designed for NUS students, combining academic modules and personal commitments in one platform. With features like smart timetable, <mark>AI-powered chatbot</mark>, and module reviews, it helps students optimize their schedules, avoid conflicts, and achieve better work-life balance. This is my <mark>Orbital project</mark> where I achieved <mark>Apollo</mark> level. {' '}
                <a className = 'certi' href="https://credentials.nus.edu.sg/4111a54e-db0e-4c01-8abf-2a5bb6d8684a#acc.SIp5eU7l" target="_blank" rel="noopener noreferrer">
                    View certification📌
                </a>
            </>
        ),
        image: timetable,
        liveLink: "https://michael-coding06.github.io/NUS-ScheduleBoss/",
        codeLink: "https://github.com/Michael-coding06/NUS-ScheduleBoss.git",
        techStacks: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Supabase', 'Python', 'OpenAI API']
    },
    {
        title: "My Portfolio",
        description: (
            <>
            <mark>👨‍💻A portfolio website</mark> showcasing my skills, projects, and passion in programming. It also serves as a digital diary where I share my growth journey, insights, and experiences on the path to becoming a seasoned programmer.
            </>
        ),
        image: portfolio,
        liveLink: "https://michael-coding06.github.io/portfolio/",
        codeLink: "https://github.com/Michael-coding06/portfolio.git",
        techStacks: ['React.js']
    },
];

const techStacks = {
    'Frontend': ['React.js', 'Next.js', 'HTML', 'CSS', 'JavaScript'],
    'Backend': ['Node.js', 'Express.js', 'Python', 'MongoDB', 'MySQL'],
    'Tools': ['Git', 'GitHub', 'Render'],
    'APIs and ML Libraries': ['OpenAI API', 'Reddit API', 'TensorFlow', 'Pytorch', 'Keras', 'Pandas', 'Numpy', 'Matplotlib'],
    'Programming Languages': ['Python', 'C++', 'Java'],
    'Speaking Languages': ['English - Fluent', 'Vietnamese - Native', 'Mandarin - Intermediate']
}
export const onButtonClick = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "Tran Viet Khoa Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }; 

const onButtonClick_orbital = () => {
        const link = document.createElement("a");
        link.href = orbital_document;
        link.download = "Orbital_document.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }; 
export const data = {
    "About": (
        <div>
            <span className="text-secondary">{`{`}</span>
            <div>
                <p>I've been captivated by programming since secondary school, where I first developed skills in <mark>website development</mark>. During my first academic semester, the power of cutting-edge AI deeply inspired me, leading me to explore machine learning techniques and libraries like <mark>PyTorch</mark> and <mark>TensorFlow</mark>. In semester 2, I discovered Agentic AI and instantly fell in love with it.</p>
                <p>Over the summer, I immersed myself in my <mark>NUS Orbital</mark> project and managed to integrate a <mark>chat bot</mark> with some cool tools into my website.</p>
                <p>I recently created a new GitHub account dedicated to showcasing only projects that truly reflect who I am. Although there aren't many projects there yet, I'm committed to continuously building and demonstrating my skills and knowledge through them.</p>
            </div>
            <span className="text-secondary">{`}`}</span>
        </div>
    ),
    "Skills": (
        <div>
            <span className="text-secondary">{`{`}</span>
            <div className="skills-section">
                <div className='text'>
                    <p>I thrive in chaos. I excel at breaking enormous problems into manageable tasks and completing them step by step. The more<mark> expectations and requirements</mark> I receive, the harder I <mark>push myself</mark> to excel. I'm always seeking opportunities to test my skills and knowledge, growing into a new, improved version of myself.</p>
                    <p className='quote'>"Humble enough to know my role is replaceable, but confident enough to know it'll take 4 people." ~ omw to embodying this.</p>
                    <div className='tech-stacks'>
                        {Object.entries(techStacks).map(([category, skills]) => (
                            <div key={category} className="tech-category">
                                <h4>{category}:</h4>
                                <div className='tech-items'>
                                    {skills.map((skill) => (
                                        <span key={skill} className="tech-item">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="floating-skills">
                    <img src={react} alt="React" className="floating-icon" />
                    <img src={github} alt="GitHub" className="floating-icon" />
                    <img src={node} alt="Node.js" className="floating-icon" />
                    <img src={openai} alt="OpenAI API" className="floating-icon" />
                    <img src={python} alt="Python" className="floating-icon" />
                    <img src={mongodb} alt="MongoDB" className="floating-icon" />
                    <img src={express} alt="Express" className="floating-icon" />
                </div>
            </div>
            <span className="text-secondary">{`}`}</span>
        </div>
    ),
    "Projects": (
        <div className='projects-container'> 
            <div className='projects-header'>
                <span className="text-secondary">{`{`}</span>
                <h3 className='quote'>"Talk is cheap, show me the code"</h3>
            </div>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-item" data-title={project.title}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h3 className="project-title" data-text={project.title}>{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-links">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                                    Live Demo
                                </a>
                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="code-link">
                                    View Code
                                </a>
                                {project.title == "NUS Schedule Boss" && <a className='live-link' onClick={onButtonClick_orbital}>
                                    View document
                                    </a>
                                }
                            </div>
                            <div className="tech-stack-grid">
                                {project.techStacks.map((tech, index) => (
                                    <span className="tech-name">{tech}~</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <span className="text-secondary">{`}`}</span>
        </div>
    ),
    "Experience": (
        <div className='experience-container'>
            <span className="text-secondary">{`{`}</span>
            <div className="experience">
                <div className='experience-image'>
                    <img src={fintech} alt="NUS Fintech Society" />
                </div>
                <div className='experience-content'>
                    <h3 className = 'role-title'>
                        Machine Learning Trainee
                        <span className='work-place'>@ NUS Fintech Society</span>
                    </h3>
                    <div className='duration'>August 2025 - Present</div>
                    <div className='experience-detail'>
                        <p className='detail-item'><mark>🗡</mark> 
                            Attending <mark>weekly training lectures </mark> covering foundational and advanced Machine Learning concepts, including EDA, feature engineering, and model evaluation.
                        </p> 
                        <p className='detail-item'><mark>🗡</mark> 
                            Gaining practical experience in supervised learning, unsupervised learning, and deep learning through <mark> hands-on labs.</mark>
                        </p> 
                        <p className='detail-item'><mark>🗡</mark> 
                            Participating in <mark>bi-weekly presentations</mark> with Training Heads to reinforce understanding of key algorithms and libraries.
                        </p>
                        <p className='detail-item'><mark>🗡</mark> 
                            <mark>Deliver a capstone project</mark> at semesters’ end.
                        </p>
                    </div>
                </div>
                
            </div>
            <span className="text-secondary">{`}`}</span>
        </div>
    ),
    "Co-curricular Activities": (
        <div className='experience-container'>
            <span className="text-secondary">{`{`}</span>
            <div className="experience">
                <div className='experience-image'>
                    <img src={vnya} alt="NUS Fintech Society" />
                </div>
                <div className='experience-content'>
                    <h3 className = 'role-title'>
                        Web Developer & Logistics
                        <span className='work-place'>@ Vietnamese Youth Alliance in Singapore (VNYA)</span>
                    </h3>
                    <div className='duration'>Oct 2024 - Sep 2025</div>
                    <div className='experience-detail'>
                        <p className='detail-item'><mark>🗡</mark> <mark>Led</mark> “Singapore Study Dream 2024” seminar <mark>(150+ attendees)</mark>, partnering with <mark>8 top universities</mark> and connecting 50 mentees with 40 mentors. </p>
                        <p className='detail-item'><mark>🗡</mark> <mark>Coordinated Career Fair 2025 logistics</mark>, engaging 100+ Vietnamese students in Singapore.</p>
                        <p className='detail-item'><mark>🗡</mark> Built user-friendly <mark>landing pages</mark> for major events, improving participant engagement and streamlining event coordination processes.  {' '}
                            <a className = 'certi' href="https://vnya-sg.org/en/" target="_blank" rel="noopener noreferrer">
                                Visit Website📌
                            </a>
                        </p>
                    </div>
                </div>
                
            </div>
            <span className="text-secondary">{`}`}</span>
        </div>
    ),
}

