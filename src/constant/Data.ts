import Logo from "../assets/images/logo.svg";
import HomePageImg from "../assets/images/illustration-intro.png";
import StayProductive from "../assets/images/illustration-stay-productive.png";
import BgCurvyDesktop from "../assets/images/bg-curvy-desktop.svg";
import BgCurvyMobile from "../assets/images/bg-curvy-mobile.svg";
//icons
import QuoteIcon from "../assets/images/bg-quotes.png";
import AccessAnyIcon from "../assets/images/icon-access-anywhere.svg";
import AnyfileIcon from "../assets/images/icon-any-file.svg";
import ArrowIcon from "../assets/images/icon-arrow.svg";
import ColabIcon from "../assets/images/icon-collaboration.svg";
import EmailIcon from "../assets/images/icon-email.svg";
import LocationIcon from "../assets/images/icon-location.svg";
import PhoneIcon from "../assets/images/icon-phone.svg";
import SecurityIcon from "../assets/images/icon-security.svg";
//profiles
import Profile1 from "../assets/images/profile-1.jpg";
import Profile2 from "../assets/images/profile-2.jpg";
import Profile3 from "../assets/images/profile-3.jpg";
//types
import type {
  FeatureListType,
  NavabarListType,
  ProfileListType,
} from "./DataType";

export const images = {
  Logo,
  HomePageImg,
  StayProductive,
  BgCurvyDesktop,
  BgCurvyMobile,
  QuoteIcon,
  AccessAnyIcon,
  AnyfileIcon,
  ArrowIcon,
  ColabIcon,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  SecurityIcon,
};

export const NavbarLists: NavabarListType[] = [
  { id: 1, title: "Features" },
  { id: 2, title: "Team" },
  { id: 3, title: "Sign In" },
];

export const FeatureLists: FeatureListType[] = [
  {
    id: 1,
    title: "Access your files, anywhere",
    desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    icon: images.AccessAnyIcon,
    alt: "access anywhere icon",
  },
  {
    id: 2,
    title: "Security you can trust",
    desc: "2-factor authentication are just a couple of the scurity features we allow to help secure your files and content.",
    icon: images.SecurityIcon,
    alt: "security icon",
  },  
  {
    id: 3,
    title: "Real-time collaboration",
    desc: "Securely share files and folders with friends, family and colleagues for live collaboration. No email required.",
    icon: images.ColabIcon,
    alt: "collaboration icon",
  },
  {
    id: 4,
    title: "Store any type of file",
    desc: "Store any type of file securely and access them anytime through the My Files dashboard. Your files, your way.",
    icon: images.AnyfileIcon,
    alt: "any file icon",
  }
];

export const ProfileList: ProfileListType[] = [
  {
    id: 1,
    info: "Fylo has improved our team’s workflow by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Satish Patel",
    desc: "Founder & CEO, Huddle",
    img: Profile1,
  },
  {
    id: 2,
    name: "Bruce McKenzie",
    info: "Fylo has improved our team’s workflow by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    desc: "Founder & CEO, Huddle",
    img: Profile2,
  },
  {
    id: 3,
    name: "Iva Boyd",
    info: "Fylo has improved our team’s workflow by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    desc: "Founder & CEO, Huddle",
    img: Profile3,
  },
];
