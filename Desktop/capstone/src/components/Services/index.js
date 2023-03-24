import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-4.svg'
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP } from './ServicesElements'


function Services() {
    const[title,setTitle] = useState ();
    const[description,setDescription] = useState ();
    const[title2,setTitle2] = useState ();
    const[description2,setDescription2] = useState ();
    const[title3,setTitle3] = useState ();
    const[description3,setDescription3] = useState ();
        
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8000/api/service/1');
            setTitle(response.data.service.title);
            setDescription(response.data.service.description);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8000/api/service/2');
            setTitle2(response.data.service.title);
            setDescription2(response.data.service.description);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8000/api/service/3');
            setTitle3(response.data.service.title);
            setDescription3(response.data.service.description);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
      
    


  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>{title}</ServicesH2>
                <ServicesP>{description}</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>{title2}</ServicesH2>
                <ServicesP>{description2}</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>{title3}</ServicesH2>
                <ServicesP>{description3}</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services