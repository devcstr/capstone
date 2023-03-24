import axios from 'axios';
import { useEffect, useState } from 'react'
import Footer from '../Footer';
import Hero from '../Hero';
import InfoSection from '../InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../InfoSection/Data';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';
import { 
Nav,
NavbarContainer,
NavLogo, 
MobileIcon, 
NavMenu, 
NavItem, 
NavLinks,
NavBtn,
NavBtnName,
} from '../Navbar/NavbarElements';

import Services from '../Services';
import Sidebar from '../Sidebar';



export const Success = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen) 
    }

    const [scrollNav,setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80 ) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect (() => {
        window.addEventListener('scroll', changeNav)
    }, [] );

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    const[name,setName] = useState ();
    // const[title,setTitle] = useState ();
    // const[description,setDescription] = useState ();

    useEffect( () => {
        // console.log('here');

        axios({
            method : 'GET',
            url: 'http://localhost:8000/api/user/'+ localStorage.getItem('email'),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
            // console.log("response",response)
            setName(response.data.user.name)
        }).catch(error => {
            // console.log("error",error);
        })
        // (async () => {
        //     const {data} = await axios.get({
        //     baseUrl: 'http://localhost:8000/api/user/'+ localStorage.getItem('email'),
        //     headers : {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        // });

       // console.log(data);

//            setName(data.name);
        //})();

    }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get('http://localhost:8000/api/service/1');
    //         setTitle(response.data.service.title);
    //         setDescription(response.data.service.description);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    //     fetchData();
    //   }, []);


    

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    SariSariPay
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        to="about" 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >
                        About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true'
                        offset={-80}
                        >Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnName to="/">Welcome {name}</NavBtnName>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    <Hero />
    <InfoSection {...homeObjOne} />
    <InfoSection {...homeObjTwo} />
    <Services />
    <InfoSection {...homeObjThree} />
    <Footer />
    </>
  )
}


export default Success;