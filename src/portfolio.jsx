import React, { useEffect, useState } from "react";
import './portfolio.css';
import khoa from './img/Khoa.png'
import resume from './img/Tran Viet Khoa Resume_final.pdf'
import { data } from "./data";
const Portfolio = () => {
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
    const [currentSection, setCurrentSection] = useState("");
    const onButtonClick = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "Tran Viet Khoa Resume_final.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }; 
    return (
       <div className="portfolio">
            <div className="top-bar">
                <div className="title">
                    Khoa/Michael()
                </div>
                <div className="link-bar">
                    <ul>
                        <li onClick={onButtonClick}>Resume</li>
                        <li><a href="https://github.com/Michael-coding06" target="_blank">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/khoatranviet/">Linkedin</a></li>
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