import React from 'react';
import './Skills.css';
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {



    return (
        <section id="skills">
            <h3>My Top Skills </h3>
            <span className='confidencs'>(Confidence Level)</span>
            <div className="row skillsLists">
                <div className="col-12 col-md-6">
                    <div>
                        <span><b>HTML</b></span>
                        <ProgressBar
                            completed={90}
                            baseBgColor="#e0dcdc"
                            labelColor="#ffffff"
                            transitionDuration="1s"
                            animateOnRender="true"
                            dir="auto"
                            isLabelVisible={false}
                            height='10px'
                            bgColor='#00CF5D'
                        />
                    </div>
                    <div className='my-3'>
                        <span><b>CSS</b></span>
                        <ProgressBar
                            completed={80}
                            baseBgColor="#e0dcdc"
                            labelColor="#ffffff"
                            transitionDuration="1s"
                            animateOnRender="true"
                            dir="auto"
                            isLabelVisible={false}
                            height='10px'
                            bgColor='#00CF5D'

                        />
                    </div>
                    <div className='my-3'>
                        <span><b>BOOTSTRAP</b></span>
                        <ProgressBar
                            completed={95}
                            baseBgColor="#e0dcdc"
                            labelColor="#ffffff"
                            transitionDuration="1s"
                            animateOnRender="true"
                            dir="auto"
                            isLabelVisible={false}
                            height='10px'
                            bgColor='#00CF5D'
                        />
                    </div>
                    <div className='my-3'>
                        <span><b>TAILWIND</b></span>
                        <ProgressBar
                            completed={80}
                            baseBgColor="#e0dcdc"
                            labelColor="#ffffff"
                            transitionDuration="1s"
                            animateOnRender="true"
                            dir="auto"
                            isLabelVisible={false}
                            height='10px'
                            bgColor='#00CF5D'
                        />
                    </div>
                    <div className='my-3'>
                        <span><b>MATERIAL UI</b></span>
                        <ProgressBar
                            completed={70}
                            baseBgColor="#e0dcdc"
                            labelColor="#ffffff"
                            transitionDuration="1s"
                            animateOnRender="true"
                            dir="auto"
                            isLabelVisible={false}
                            height='10px'
                            bgColor='#00CF5D'
                        />
                    </div>
                    <div className='my-3'>
                        <span><b>UI DESIGN</b></span>
                        <ProgressBar
                            completed={40}
                            baseBgColor="#e0dcdc"                            
                            labelColor="#ffffff"
                            transitionDuration="1s"
                            animateOnRender="true"
                            dir="auto"
                            isLabelVisible={false}
                            height='10px'
                            bgColor='#00CF5D'                         
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className=''>
                        <span><b>JAVASCRIPT</b></span>
                        <ProgressBar
                            completed={70}
                            baseBgColor="#e0dcdc"
                            labelColor="#ffffff"
                            transitionDuration="1s"
                            animateOnRender="true"
                            dir="auto"
                            isLabelVisible={false}
                            height='10px'
                            bgColor='#00CF5D'
                        />
                    </div>
                    <div className='my-3'>
                        <span><b>REACT JS</b></span>
                        <ProgressBar
                            completed={80}
                            baseBgColor="#e0dcdc"
                            labelColor="#ffffff"
                            transitionDuration="1s"
                            animateOnRender="true"
                            dir="auto"
                            isLabelVisible={false}
                            height='10px'
                            bgColor='#00CF5D'
                        />
                    </div>
                    <div className='my-3'>
                        <span><b>NEXT JS</b></span>
                        <ProgressBar
                            completed={80}
                            baseBgColor="#e0dcdc"
                            labelColor="#ffffff"
                            transitionDuration="1s"
                            animateOnRender="true"
                            dir="auto"
                            isLabelVisible={false}
                            height='10px'
                            bgColor='#00CF5D'
                        />
                    </div>
                    <div className='my-3'>
                        <span><b>NODE + EXPRESS JS</b></span>
                        <ProgressBar
                            completed={50}
                            baseBgColor="#e0dcdc"
                            labelColor="#ffffff"
                            transitionDuration="1s"
                            animateOnRender="true"
                            dir="auto"
                            isLabelVisible={false}
                            height='10px'
                            bgColor='#00CF5D'
                        />
                    </div>
                    <div className='my-3'>
                        <span><b>MONGO DB</b></span>
                        <ProgressBar
                            completed={60}
                            baseBgColor="#e0dcdc"
                            labelColor="#ffffff"
                            transitionDuration="1s"
                            animateOnRender="true"
                            dir="auto"
                            isLabelVisible={false}
                            height='10px'
                            bgColor='#00CF5D'
                        />
                    </div>
                    <div className='my-3'>
                        <span><b>FIREBASE</b></span>
                        <ProgressBar
                            completed={60}
                            baseBgColor="#e0dcdc"
                            labelColor="#ffffff"
                            transitionDuration="1s"
                            animateOnRender="true"
                            dir="auto"
                            isLabelVisible={false}
                            height='10px'
                            bgColor='#00CF5D'
                        />
                    </div>
                </div>
            </div>           
        </section>
    );
};

export default Skills;