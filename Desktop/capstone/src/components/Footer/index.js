import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { 
FooterContainer, 
FooterWrap, 
FooterLinksContainer, 
FooterLinksWrapper, 
FooterLinkItems, 
FooterLinkTitle, 
FooterLink,
SocialMedia,
SocialMediaWrap,
SocialLogo,
WebsiteRights,
SocialIcons,
SocialIconLink } from './FooterElements'

function Footer() {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle></FooterLinkTitle>
                            <FooterLink to="/signin">About Us</FooterLink>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                     </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle></FooterLinkTitle>
                            <FooterLink to="/signin">About Us</FooterLink>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                     </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle></FooterLinkTitle>
                            <FooterLink to="/signin">About Us</FooterLink>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                     </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle></FooterLinkTitle>
                            <FooterLink to="/signin">About Us</FooterLink>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                     </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        SariSariPay
                    </SocialLogo>
                    <WebsiteRights>SariSariPay &copy; 2023</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="//twitter.com/cstrgls" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
     </FooterContainer>
  )
}

export default Footer