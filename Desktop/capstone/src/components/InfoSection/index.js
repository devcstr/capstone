import React from 'react'
import { ButtonR } from '../ButtonElements';
import { 
InfoContainer,
InfoWrapper,
InfoRow,
Column1,
TextWrapper,
TopLine,
Heading,
Subtitle,
BtnWrap,
Column2, 
Img,
ImgWrap } from './InfoElements'


function InfoSection({ lightBg, id, imgStart, Topline, lightText, headLine, darktext, description, buttonLabel, img, alt, primary, dark, dark2 }) {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{Topline}</TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <Subtitle darktext={darktext}>{description}</Subtitle>
                    <BtnWrap>
                        <ButtonR to="/signin"
                        smooth='true'
                        duration={500}
                        spy='true'
                        exact='true'
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1: 0}
                        dark2={dark2 ? 1: 0}
                        >
                        {buttonLabel}
                        </ButtonR>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection