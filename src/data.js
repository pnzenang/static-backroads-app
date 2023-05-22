import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';

import {
  FaTwitter,
  FaFacebook,
  FaSquarespace,
  FaSocks,
  FaTree,
  FaWallet
} from 'react-icons/fa';
export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' }
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://twitter.com',
    icon: <FaTwitter style={{ fontSize: '1.5em' }} />
  },
  {
    id: 2,
    href: 'https://Facebook.com',
    icon: <FaFacebook style={{ fontSize: '1.5em' }} />
  },
  {
    id: 3,
    href: 'http://Google.com',
    icon: <FaSquarespace style={{ fontSize: '1.5em' }} />
  }
];

export const services = [
  {
    id: 1,
    icon: <FaWallet style={{ fontSize: '2em' }} />,
    title: 'saving money',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.`
  },
  {
    id: 2,
    icon: <FaTree style={{ fontSize: '2em' }} />,
    title: 'saving money',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.`
  },
  {
    id: 3,
    icon: <FaSocks style={{ fontSize: '2em' }} />,
    title: 'saving money',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.`
  }
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2022',
    title: 'Tibet Adventure',
    info: '',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: 'china',
    duration: 6,
    cost: 2200
  },

  {
    id: 2,
    image: tour2,
    date: 'august 26th, 2022',
    title: 'Berlin Adventure',
    info: '',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: 'Germany',
    duration: 6,
    cost: 2500
  },
  {
    id: 3,
    image: tour3,
    date: 'august 26th, 2022',
    title: 'Tibet Adventure',
    info: '',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: 'china',
    duration: 6,
    cost: 2000
  },
  {
    id: 4,
    image: tour4,
    date: 'august 26th, 2022',
    title: 'Paris Adventure',
    info: '',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: 'France',
    duration: 6,
    cost: 2700
  },
  {
    id: 5,
    image: tour5,
    date: 'august 26th, 2022',
    title: 'Barcelona Adventure',
    info: '',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: 'spain',
    duration: 6,
    cost: 2800
  },
  {
    id: 6,
    image: tour6,
    date: 'august 26th, 2022',
    title: 'Venise Adventure',
    info: '',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: 'Italy',
    duration: 6,
    cost: 3000
  }
];
