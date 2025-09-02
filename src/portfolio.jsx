import React, { useEffect, useState } from "react";
import './portfolio.css';
import img from './img/ava.jpg'

import khoa from './img/Khoa.png'
import timetable from './img/projects/timetable.png';
import portfolio from './img/projects/portfolio.png';

import Khoa0 from './img/Khoa_pixel/2.png';
import Khoa1 from './img/Khoa_pixel/3.png';       
import Khoa2 from './img/Khoa_pixel/4.png';


import { data } from "./data";
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

    const [currentSection, setCurrentSection] = useState("");
    return (
       <div className="portfolio">
            <div className="top-bar">
                <div className="title">
                    Khoa/Michael()
                </div>
                <div className="link-bar">
                    <ul>
                        <li>Resume</li>
                        <li>Github</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
            </div>
            <div className="web">
                <div className="photo">
                    <h3 className="web-header">ID CARD</h3>
                    <div className="image-container" style={{position: 'relative'}}>
                        {/* <img src={khoaImages[currentKhoa]} alt="Khoa" className="khoa"/> */}
                        <img src={khoa} alt="Khoa" className="khoa"/>
                        <div className="id-information">
                            <div className="info-heading">Name</div>
                            <div className="info">Khoa, Tran Viet (or Michael)</div>
                            
                            <div className="info-heading">LOCATION</div>
                            <div className="info">Singapore</div>
                            
                            <div className="info-heading">STATUS</div>
                            <div className="info">Active</div>

                            <div className="info-heading">TITLE</div>
                            <div className="subtitle"></div>
                        </div>
                    </div>
                </div>
                <div className="nav-bar">
                    <h3 className="web-header">Terminal</h3>
                    <ul>
                        {Object.keys(data).map((section, index) => (
                            <li key={index} onClick={() => setCurrentSection(section)} className ={currentSection == section ? 'current-section' : ''}>{section}</li>
                        ))}
                    </ul>
                    <div className="content-section">
                        <h3 className="content-title">Khoa@portfolio: ~$ npm run <mark>{currentSection}</mark></h3>
                        {data[currentSection]}
                    </div>
                    <div className="terminal">
                        <input type="text" className="run-terminal" value = {currentSection}
                        onChange={(e) => {
                            setCurrentSection(e.target.value);
                        }}/>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Portfolio;