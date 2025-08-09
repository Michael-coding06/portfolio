import React, { useEffect, useState } from "react";
import './portfolio.css';
import img from './img/ava.jpg'
import node from './img/skills/node.png';
import react from './img/skills/react.png';
import python from './img/skills/python.png';
import mongodb from './img/skills/mongodb.png'; 
import express from './img/skills/express.png';
import github from './img/skills/github.png';   
import openai from './img/skills/open ai api.png';

import timetable from './img/projects/timetable.png';
import portfolio from './img/projects/portfolio.png';

import Khoa0 from './img/Khoa_pixel/2.png';
import Khoa1 from './img/Khoa_pixel/3.png';       
import Khoa2 from './img/Khoa_pixel/4.png';
const Portfolio = () => {
    const [typing, setTyping] = useState(true);
    const [currentProject, setCurrentProject] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const [currentKhoa, setCurrentKhoa] = useState(0);
    const khoaImages = [Khoa1, Khoa2, Khoa0];
    useEffect(() => {
        const khoaInterval = setInterval(() => {
            setCurrentKhoa((prev) => (prev + 1) % khoaImages.length);
        }, 500);

        return () => clearInterval(khoaInterval);
    }, []);
    const projects = [
        {
            title: "NUS Schedule Boss",
            description: `An intelligent scheduling tool for NUS students to ogranize their modules and personal commitments, leveraging OpenAI API to optimize timetable management.`,
            image: timetable,
            liveLink: "https://michael-coding06.github.io/NUS-ScheduleBoss/",
            codeLink: "https://github.com/Michael-coding06/NUS-ScheduleBoss.git"
        },
        {
            title: "My Portfolio",
            description: "My diary documenting my growth and experiences on the path to becoming a seasoned programmer.",
            image: portfolio,
            liveLink: "https://michael-coding06.github.io/portfolio/",
            codeLink: "https://github.com/Michael-coding06/portfolio.git"
        },
    ];
    const navigateProject = (direction) => {
        if (isSliding) return;
        setIsSliding(true);
        setTimeout(() => {
            if (direction === 'next') {
                setCurrentProject((prev) => (prev + 1) % projects.length);
            } else {
                setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
            }
            setIsSliding(false);
        }, 150);
    };
    const typeWriter = async () => {
        const list_of_text = [
            "Or Just Michael",
            'AI Agent Whisperer',
            "404 Problem Solver",
            'Stack Overflow Searcher',
            '3 Language Polyglot',
        ]
        const element = document.querySelector('.subtitle');
        element.textContent = '';
        while(true) {
            for(let j = 0; j < list_of_text.length; j++){
                let text = list_of_text[j]
                for (let i = 0; i <= text.length; i++) {
                    if (i === text.length) {
                        element.textContent = text + '|';
                    } else {
                        element.textContent = text.substring(0, i) + '|';
                    }
                    await new Promise(resolve => setTimeout(resolve, 60));
                }
                
                await new Promise(resolve => setTimeout(resolve, 400));
                for (let i = text.length; i >= 0; i--) {
                    element.textContent = text.substring(0, i) + '|';
                    await new Promise(resolve => setTimeout(resolve, 30));
                }
                await new Promise(resolve => setTimeout(resolve, 200));
            }
        }
    }
    useEffect(() => {
        typeWriter();
    }, []);
    const handleScroll = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        const targetSection = document.getElementById(sectionId);
        const sectionElement = targetSection.querySelector('.section-header');
        TextScramble(sectionId, sectionElement);
    };
    const TextScramble = (word, element) => {
        const chars = '!<>-_\\/[]{}—69810+=+*^?#________';
        let position = 0;
        const animate = () => {
            let currentText = '';
            for (let i = 0; i < position; i++) {
                currentText += word[i];
            }
            if (position < word.length) {
                for (let i = 0; i < word.length - position; i++) {
                    currentText += chars[Math.floor(Math.random() * chars.length)];
                }
            }
            if(element) {
                element.textContent = currentText;
            }
            if(Math.random() < 0.1) {
                position++;
            }
            if(position <= word.length) {
                requestAnimationFrame(() => animate());
            }
            
        };
        animate();
    }
    const textTyping = async(text, element) => {
        if(!typing) { return }
        element.innerHTML = '';
        for (let i = 0; i <= text.length; i++) {
            if (i === text.length) {
                element.innerHTML = text.replace(/,/g, ',<br/>');
            } else {
                const displayText = text.substring(0, i).replace(/,/g, ',<br/>');
                element.innerHTML = displayText + '|';
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    };
    return (
       <div className="portfolio">
            <div className="header">
                <nav>
                    <ul>
                        <li onClick={() => {
                            handleScroll('About');
                        }}>ABOUT</li>
                        <li onClick={() => {
                            handleScroll('Skills');
                        }}>SKILLS</li>
                        <li onClick={() => {
                            handleScroll('Projects');
                        }}>PROJECTS</li>
                        <li onClick={() => {
                            handleScroll('Work');
                        }}>WORK</li>
                    </ul>
                </nav>
                <section>
                    <div className="header-content">
                        <div className="header-text">Khoa, Tran Viet</div>
                        <div className="subtitle"></div>
                        <p>Agentic AI enthusiast with full-stack skills to turn ideas into real-world products. Driven to explore, build, and (occasionally) debug by speed-scrolling Stack Overflow.</p> 
                        <div className="button-group">
                            <a target = "_blank" href="https://www.linkedin.com/in/khoatranviet/" className="btn">My Linkedin</a>
                            <a target = "_blank" href="https://github.com/Michael-coding06" className="btn">My Github</a>
                        </div>
                    </div>

                    <img src={khoaImages[currentKhoa]} alt="Khoa" className="khoa"/>
                </section>
            </div>
            <section className="section-part" id = 'About'>
                <header>
                    <div className="section-header" onMouseEnter={(e) => TextScramble('About', e.target)}>About</div>
                    <span className="text-secondary">{`{`}</span>
                </header>
                <div>
                    <p>I’ve been captivated by programming since secondary school, where I first developed skills in website development. During my first academic semester, the power of cutting-edge AI deeply inspired me, leading me to explore machine learning techniques and libraries like PyTorch and TensorFlow. In semester 2, I discovered Agentic AI and instantly fell in love with it.</p>
                    <p>Over the summer, I immersed myself in my NUS Orbital project and managed to integrate a chat bot into my website.</p>
                    <p>I recently created a new GitHub account dedicated to showcasing only projects that truly reflect who I am. Although there aren’t many projects there yet, I’m committed to continuously building and demonstrating my skills and knowledge through them. </p>
                    <img src={img} alt="Khoa Tran Viet" className="profile-image" />
                </div>
                <span className="text-secondary">{`}`}</span>
            </section>
            <section className="section-part" id = 'Skills'>
                <header>
                    <div className="section-header" onMouseEnter={(e) => TextScramble('Skills', e.target)}>Skills</div>
                    <span className="text-secondary">{`{`}</span>
                </header>
                <div className="skills-section">
                    <p>I thrive in chaos. I excel at breaking enormous problems into manageable tasks and completing them step by step. The more expectations and requirements I receive, the harder I push myself to excel. I’m always seeking opportunities to test my skills and knowledge, growing into a new, improved version of myself. </p>
                    <p>My self-directed learning approach empowers me to quickly graph and adapt to new technologies autonomously, encompassing full-stack development, machine learning, and agent AI. </p>    
                    <p><i>I’m well aware that my role is replaceable, that’s why I’m working to be indispensable.</i></p>
                    <div className="floating-skills">
                        <img src= {react} alt="React" className="floating-icon" />
                        <img src= {github} alt="GitHub" className="floating-icon" />
                        <img src= {node} alt="Node.js" className="floating-icon" />
                        <img src= {openai} alt="OpenAI API" className="floating-icon" />
                        <img src= {python} alt="Python" className="floating-icon" />
                        <img src= {mongodb} alt="MongoDB" className="floating-icon" />
                        <img src = {express} alt="Express" className="floating-icon" />
                    </div>
                </div>
                <span className="text-secondary">{`}`}</span>
            </section>
            <section className="section-part">
                <div className="quote">
                    <h3 onMouseEnter={(e) => {
                        textTyping(' "TALK IS CHEAP, SHOW ME THE CODE" ', e.target);
                        setTyping(false);
                    }}>"TALK IS CHEAP, <br/> SHOW ME THE CODE" </h3>
                    <p>- Linus Torvalds -</p>
                </div>
            </section>
            <section className="section-part" id = 'Projects'>
                <header>
                    <div className="section-header" onMouseEnter={(e) => TextScramble('Projects', e.target)}>Projects</div>
                    <span className="text-secondary">{`{`}</span>
                </header>
                <div className="project-list">
                    <p>Projects being baked . . . 🍞 ☕</p>
                    <div className="project-items">
                        <button className="project-navigation prev" onClick={() => navigateProject('prev')} disabled={isSliding}>
                        </button>
                        {/* <div className="project-container"> */}
                            <ol className={`project-slider ${isSliding ? 'sliding' : ''}`}>
                                <li className="project-info">
                                    <img src={projects[currentProject].image} alt={projects[currentProject].title} className="project-item" />
                                    <div className="project-details">
                                        <h4>{projects[currentProject].title}</h4>
                                        <p>{projects[currentProject].description}</p>
                                        <div className="project-links">
                                            <a target = "_blank" href={projects[currentProject].liveLink} className="btn">View Project</a>
                                            <a target = "_blank" href={projects[currentProject].codeLink} className="btn">View Code</a>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        {/* </div> */}
                        <button className="project-navigation next" onClick={() => navigateProject('next')} disabled={isSliding}>
                        </button>
                    </div>
                </div>
                <span className="text-secondary">{`}`}</span>
            </section>
            <section className="section-part" id = 'Work'>
                <header>
                    <div className="section-header" onMouseEnter={(e) => TextScramble('Work', e.target)}>Work</div>
                    <span className="text-secondary">{`{`}</span>
                </header>
                <div className="work">
                    <p>
                        I’m currently looking for opportunities to bring my skills into a real-world setting. I’m fully dedicated to leveling up my abilities and building meaningful projects. I’ve always been learning and preparing to take my first step into the professional world.
                    </p>
                    <p>
                        If you’re looking for a passionate and dedicated programmer, I’d be grateful for the chance to bring value to your project … and maybe turn this section into an actual job story… 🥲
                    </p>
                </div>
                <span className="text-secondary">{`}`}</span>
            </section>
        </div>
    )
}
export default Portfolio;