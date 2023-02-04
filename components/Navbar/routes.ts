import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

type Route = {
   id: string;
   href: string;
   label: string;
};

export const routeNames: Route[] = [
   {
      id: 'home',
      href: '/',
      label: 'Home',
   },
   {
      id: 'about',
      href: '#about',
      label: 'About',
   },
   {
      id: 'contact',
      href: '#contact',
      label: 'Contact',
   },
];

export const socialIconLinks = [
   {
      id: 'linkedIn',
      icon: FaLinkedinIn,
   },
   {
      id: 'github',
      icon: FaGithub,
   },
   {
      id: 'email',
      icon: AiOutlineMail,
   },
];
