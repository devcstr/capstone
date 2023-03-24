import React, { useState } from 'react'
import Video from '../../video/video.mp4'
import { Button } from '../ButtonElements'
import { 
HeroContainer, 
HeroBg, 
VideoBg,
HeroContent,
HeroH1,
HeroP,
HeroBtnWrapper,
ArrowForward,
ArrowRight
 } from './HeroElements'

function Hero() {
    const [ hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>WELCOME</HeroH1>
            <HeroP>
                Welcome to SariSariPay where you can find the fastest money transfer in the market
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup' 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true'
                offset={-80}
                >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero