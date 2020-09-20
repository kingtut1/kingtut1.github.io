import React from 'react';
import {Media} from 'react-bootstrap';

class ResumePage extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <p> Resume </p>
                <p> Education </p>
                <p> Nova Southeastern University </p>
                <p> Bachelor of Science in Computer Science and Minor in Mathematics</p>
                <p> GPA: 3.67 </p>
                <p> Additional Skills </p>
                <p> Certifications: Adobe Photoshop, AutoDesk Inventor, AutoDesk AutoCAD, MTA 98-361 </p>
                <p> Skills: C#, C++, Java, Python, HTML, Javascript, CSS, Git, React, Typescript, Swift, SQL</p>
                <p> Professional Experience </p>
                <ul className="list-unstyled">
                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="holder.js/64x64"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>New Technologist Intern</h5>
                            <p> Microsoft/Cyborg Mobile </p>
                            <ul>
                                <li>Explored product management and software engineering practices under Microsoft PM and SWE mentors while learning React, Typescript, and Git</li>
                                <li>Developed a web app that gives teachers the ability to better understand the students in their classrooms </li>
                            </ul>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="holder.js/64x64"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>Software Engineering Intern</h5>
                            <p> Ryder Systems Inc </p>
                            <ul>
                                <li> Team member of Ryder Enterprise Solutions Team “Ryder Fuel” </li>
                                <li> Created APIs for an internal application in C# to use on our mobile application </li>
                                <li> Created website highlighting company’s internal progress and statistics about Dev Ops</li>
                                <li> Prototyped application features using JustInMind</li>
                                <li> Created a chatbot that allows customers to search for truck information for Ryder in a Hackathon using the BotFramework</li>
                            </ul>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="holder.js/64x64"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>Student Researcher</h5>
                            <p> Nova Southeastern University</p>
                            <ul>
                                <li>Created program to analyze NASDAQ trading day information and create a limit order book for a given stock obtained from NASDAQ’s ITCH-spec v.50 using Python  </li>
                                <li>Created program to read data from excel sheet and generate a template to be read into canvas to create online tests using Python</li>
                                <li>Optimized program to finish in 20ish minutes from 3ish hours</li>
                            </ul>
                        </Media.Body>
                    </Media>
                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="holder.js/64x64"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>STEM Intern</h5>
                            <p> Code Explorers </p>
                            <ul>
                                <li>Taught students ages 6-14 how to code, engineering principles and game development </li>
                                <li>Managed students in a classroom setting to complete tasks by the deadline</li>
                                <li>Able to articulate advance concepts to youths in a manner they can grasp </li>
                            </ul>
                        </Media.Body>
                    </Media>
                </ul>
                <p> Leadership Experience </p>
                <ul className="list-unstyled">
                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="holder.js/64x64"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>President</h5>
                            <p> Association for Computing Machinery </p>
                            <ul>
                                <li>Organized events for ACM members ranging from programming competitions to events to expose students to new technologies</li>
                                <li>Facilitated partnerships with other clubs to collaborate on events and find opportunities for Computer Science/IT majors</li>
                            </ul>
                        </Media.Body>
                    </Media>
                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="holder.js/64x64"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>Software Lead/Member</h5>
                            <p> First Robotics Competition Team </p>
                            <ul>
                                <li>Designed and developed subsystems to complete the challenge for the robot in C++ </li>
                                <li>Coordinated with electrical, mechanical, and software students/mentors to complete tasks</li>
                                <li>Worked with vision processing (OpenCV w/ python) to track objects on the field and created autonomous movement for the robot</li>
                            </ul>
                        </Media.Body>
                    </Media>
                </ul>

            </div>
        )
    }
}

export default ResumePage;