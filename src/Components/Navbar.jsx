import { useState } from 'react';
import './Navbar.css';





const Navbar = () => {

    const [bar1,setBar1] = useState('');
    const [bar2,setBar2] = useState('');
    const [bar3,setBar3] = useState('');
    const [barArea,setBarArea] = useState('');
    const [nav,setNav] = useState('');


    const [stick,setStick] = useState('');


    const BarClicked = () =>{
        bar1 === '' ? setBar1('bar1') : setBar1('');
        bar2 === '' ? setBar2('bar2') : setBar2('');
        bar3 === '' ? setBar3('bar3') : setBar3('');
        barArea === '' ? setBarArea('barArea') : setBarArea('');
        nav === '' ? setNav('ShowNavBar') : setNav('');
    }

    const handleScroll = () => {
        if (window.scrollY >= 500) {
            setStick('stickmenu')
        }else{
            setStick('')
        }
      };
  
      window.addEventListener('scroll', handleScroll);

    return (
        <div className={`Navbar ${stick}`}>
            <div className="NavbarInner">
                <div className="NavbarLeft">
                    <span className="logo">Rana <span>RR</span></span>
                </div>
                <div className="NavbarRight">
                    <ul className={`navBarItems ${nav}`}>
                        <li>                            
                            <a onClick={BarClicked} href="/#">About Me</a>
                            <a onClick={BarClicked} href="#projects">Projects</a>
                            <a onClick={BarClicked} href="#skills">My Skills</a>
                            <a onClick={BarClicked} href="#client">Clients</a>
                            <a onClick={BarClicked} href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div className="hireAndBar">
                        <a href='https://www.freelancer.com/hireme/ranarr122' rel="noreferrer" target={'_blank'} className='HireMeBtn'>Hire Me</a>
                        <div className={`barIcon d-md-none ${barArea}`} onClick={BarClicked}>
                            <div className={`bars ${bar1}`}></div>
                            <div className={`bars ${bar2}`}></div>
                            <div className={`bars ${bar3}`}></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Navbar
