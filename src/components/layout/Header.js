import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import { PopupButton } from '@typeform/embed-react'

const Header = () => (
  <header className="sticky top-0 bg-white shadow" style={{ zIndex: 999, top: 0, width: '100%' }}>
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-24 mr-3">
          <LogoIcon />
        </div>
        {/* OXTON */}
      </div>
      <div className="flex mt-4 sm:mt-0">
        {/* <AnchorLink className="px-4" href="#features">
          Expertise
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Tecnologias
        </AnchorLink>
        <AnchorLink className="px-4" href="#about">
          Quem somos
        </AnchorLink> */}
        {/* <AnchorLink className="px-4" href="#testimonials"> */}
        {/*  Testimonials */}
        {/* </AnchorLink> */}
      </div>
      <div className="hidden md:block">
      <PopupButton id="rSwChAXp" style={{ fontSize: 20 }} className="fale-conosco-button">
        <Button className="text-sm">Fale conosco</Button>
      </PopupButton>
      </div>
    </div>
  </header>
);

export default Header;
