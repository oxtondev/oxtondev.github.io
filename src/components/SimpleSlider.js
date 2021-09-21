import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CPlusPlus from '../svg/C++';
import Java from '../svg/Java';
import DotNet from '../svg/DotNet';
import NodeJS from '../svg/NodeJS';
import Python from '../svg/Python';
import Ruby from '../svg/Ruby';
import Groovy from '../svg/Groovy';
import Spring from '../svg/Spring';
import JavaScript from '../svg/JavaScript';
import ReactJS from '../svg/ReactJS';
import AngularJS from '../svg/AngularJS';
import TypeScript from '../svg/TypeScript';
import VueJS from '../svg/VueJS';
import Redux from '../svg/Redux';
import Flutter from '../svg/Flutter';
import Ionic from '../svg/Ionic';
import GraphQL from '../svg/GraphQL';
import NextJS from '../svg/NextJS';
import Kotlin from '../svg/Kotlin';
import Swift from '../svg/Swift';
import Meteor from '../svg/Meteor';

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerPadding: '60px',
    rows: 1,
    slidesPerRow: 4,
    adaptiveHeight: true,
    nextArrow: null,
    prevArrow: null
  };
  return (
    <Slider {...settings}>
      <div>
        <Java size={80} />
      </div>
      <div>
        <DotNet size={80} />
      </div>
      <div>
        <NodeJS size={80} />
      </div>
      <div>
        <Python size={80} />
      </div>
      <div>
        <CPlusPlus size={80} />
      </div>
      <div>
        <Ruby size={80} />
      </div>
      <div>
        <Spring size={80} />
      </div>
      <div>
        <JavaScript size={80} />
      </div>
      <div>
        <Meteor size={80} />
      </div>
      <div>
        <TypeScript size={80} />
      </div>
      <div>
        <GraphQL size={80} />
      </div>
      <div>
        <NextJS size={80} />
      </div>
      <div>
        <ReactJS size={80} />
      </div>
      <div>
        <AngularJS size={80} />
      </div>
      <div>
        <VueJS size={80} />
      </div>
      <div>
        <Redux size={80} />
      </div>
      <div>
        <Flutter size={80} />
      </div>
      <div>
        <Ionic size={80} />
      </div>
      <div>
        <Swift size={80} />
      </div>
      <div>
        <Kotlin size={80} />
      </div>
    </Slider>
  );
}
