import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import {
  profile2,
  profile3,
  profile4,
  profile5,
  panel,
  turbine,
  batteries,
  member1,
  member2,
  member3,
  member4,
  solarWater,
  gser,
  heatpump,
  chimneys
} from "./assets";

export const navTabs = [
  { name: "Home", id: "header" },
  { name: "About Us", id: "about" },
  { name: "Services", id: "services" },
  { name: "Team", id: "team" },
  { name: "Project", id: "project" },
  { name: "Clients", id: "testimonial" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "contact" },
];

export const services = [
  {
    name: "Solar Water Heaters",
    image: solarWater,
    description: `Supreme Solar Products builds a variety of Solar Water Heaters by adopting different types of advanced and latest technologies that are industry-relevant. The different types of Solar Water Heaters are Glass Lined Solar Water Heater, ETC Solar Water Heater, and FPC Solar Water Heater. The primary and most important technology derivable and objective of the Solar Water Heaters is to make every sun ray count – convert every sun ray into useful energy.`,
  },
  {
    name: "Chimneys",
    image: chimneys,
    description: `Supreme Flames Kitchen Chimneys imbibe the best technology and are designed to suit Indian kitchen conditions . Be it in performance, reliability or safety our kitchen chimneys working in the kitchen gives to a fresh breeze. With our feature rich and stunningly beautiful kitchen chimneys, we are redefining the way you cook. Our products have captured the heart of the customers, but we continue to push the boundaries of innovation to bring your imagination to life.`,
  },
  {
    name: "Heat Pumps",
    image: heatpump,
    description: `A Heat Pump is a device that uses a small amount of energy available in the atmosphere to move heat from one location to another which is energy-efficient and affordable. The new generation of heat pumps can deliver heat even in extreme conditions, with advanced systems rated as low as 30 degrees below zero.
These can also be connected to the hot water storage tanks of existing water heating systems. Particularly when connected to solar water heating systems, huge energy savings can be achieved. The heat pump can be utilized either as the main source for water heating or as a backup system without disturbing the running condition of the existing one.`,
  },
  {
    name: "Electric Geysers",
    image: gser,
    description: `Supreme Power Water Heaters today are known for high-quality energy-efficient products. Going forward with this commitment it has introduced state of the art New Generation Electric Water Heaters. Enameled heating element provides better protection and longer life. Enameled coated glass lined inner tank that gives corrosion resistance, high pressure withstanding capacity and high energy efficiency`,
  },
];

export const teams = [
  {
    name: "Hemanth BG",
    title: "Technician",
    profile: "https://tinyurl.com/2kvajc79",
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Keerthy Prasad",
    title: "Technician",
    profile: "https://tinyurl.com/3yeyj62x",
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "TP Barath",
    title: "Technician",
    profile: "https://tinyurl.com/3zak5hsj",
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Justice KC Hegde",
    title: "Technician",
    profile: "https://tinyurl.com/4umvzy9v",
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
];

export const projects = [
  {
    title: "Solar system massive installation",
    image:
      "https://shorturl.at/JjdPd",
    category: "Solar Panel",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
  {
    title: "Empowering Communities: Solar Solutions for a Sustainable Future",
    image:
      "https://shorturl.at/FDYW0",
    category: "Solar Panel",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
  // {
  //   title: "Harvesting Sunshine: The Green Energy Initiative Project",
  //   image: "https://www.biscaynetimes.com/downloads/2317/download/6.jpg",
  //   category: "Solar Panel",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  //   Magni debitis expedita dolor`,
  // },
  {
    title: "CROWN Chimneys: Where Elegance Meets Performance",
    image:
      "https://tinyurl.com/yc49y7zm",
    category: "Chimneys",
    description: `Experience the perfect blend of sophisticated design and cutting-edge technology. Our chimneys deliver unmatched efficiency, ensuring a clean and stylish living space tailored for modern homes.`,
  },
  {
    title: "FLORA: Where Freshness Meets Elegance",
    image:
      "https://tinyurl.com/3cspzcbw",
    category: "Chimneys",
    description: `nspired by nature, FLORA chimneys bring freshness to your kitchen with eco-friendly technology and graceful designs that complement modern living.`},
  {
    title: "EXPO: Showcasing Excellence in Chimney Innovation",
    image:
      "https://shorturl.at/iiVOC",
    category: "Chimneys",
    description: `Discover cutting-edge chimney solutions that blend functionality, design, and performance. EXPO sets the standard for modern ventilation systems built to impress.`
   },
  {
    title: "FIGO: The Future of Intelligent Chimney Solutions",
    image:
      "https://tinyurl.com/3xfjvskf",
    category: "Chimneys",
    description: `Smart, sleek, and efficient—FIGO redefines chimney technology with advanced features and modern aesthetics, elevating your living experience.`,
  },
  {
    title: "Heat Pumps: Efficient Climate Control for Every Season",
    image:
      "https://tinyurl.com/p7rkyajn",
    category: "Heat Pumps",
    description: `Revolutionize your home's heating and cooling with advanced heat pump technology. Energy-efficient, eco-friendly, and designed for year-round comfort.`,
  },
  {
    title: "Supreme Power Water Heater 25L: Unmatched Efficiency, Maximum Comfort",
    image:
      "https://tinyurl.com/4m29xr2m",
    category: "Electric Geysers",
    description: `Experience reliable hot water with the Supreme Power Water Heater. With a 25L capacity, advanced safety features, and energy-efficient performance, it's perfect for modern households.`},
  {
    title: "Supreme Power Water Heater 15L: Compact Efficiency, Superior Comfort",
    image:
      "https://tinyurl.com/4m29xr2m",
    category: "Electric Geysers",
    description: `Enjoy instant hot water with the Supreme Power 15L Water Heater. Designed for convenience, it combines energy efficiency and safety in a compact size, perfect for smaller spaces.`},
];

export const faq = [
  {
    title: "How do heat pumps work?",
    description: `
      Heat pumps transfer heat from the outside air or ground into your home, providing both heating and cooling. They work by using refrigerant that absorbs heat from the air or ground and moves it indoors. In the winter, heat pumps provide warmth by extracting heat from the outside, and in the summer, they work as an air conditioner, removing heat from inside.
    `,
  },
  {
    title: "What are the benefits of using a Supreme Power Water Heater?",
    description: `
      Supreme Power Water Heaters offer efficient and reliable performance with quick heating capabilities. With energy-saving features and advanced safety technology, they ensure hot water availability when you need it while reducing energy consumption and lowering utility bills.
    `,
  },
  {
    title: "How much energy does a heat pump save compared to traditional heating systems?",
    description: `
      Heat pumps are significantly more energy-efficient than traditional heating systems. They can reduce energy consumption by up to 50%, as they transfer heat rather than generate it, making them a more sustainable choice for both heating and cooling your home.
    `,
  },
  {
    title: "Can I use a water heater during power outages?",
    description: `
      Most water heaters will not work during a power outage unless they are connected to an alternative power source, like a backup generator or solar panel system. To ensure continuous hot water, consider pairing your water heater with a backup power solution.
    `,
  },
  {
    title: "What is the lifespan of a heat pump or water heater?",
    description: `
      A typical heat pump can last around 10-15 years with regular maintenance, while a quality water heater can last 8-12 years depending on usage and maintenance. Proper care, such as regular inspections and cleaning, can help extend the lifespan of both appliances.
    `,
  },
  {
    title: "Are heat pumps environmentally friendly?",
    description: `
      Yes, heat pumps are considered eco-friendly as they use renewable energy sources like ambient air or ground heat, significantly reducing the carbon footprint. They are a green alternative to traditional heating and cooling systems, making them an ideal choice for environmentally-conscious homeowners.
    `,
  },
  {
    title: "Do I need to perform maintenance on my water heater or heat pump?",
    description: `
      Both water heaters and heat pumps require minimal maintenance. For water heaters, periodic flushing to remove sediment buildup and annual inspections are recommended. For heat pumps, regular cleaning of the filters and checking the refrigerant levels ensures optimal performance and longevity.
    `,
  },
];

export const testimonial = [
  {
    image: profile2,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`,
  },
  {
    image: profile3,
    name: "Emmanuel Joseph",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    image: profile4,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`,
  },
  {
    image: profile5,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];

export const contacts = [
  {
    name: "Email",
    value: "enquiry@supremesolar.in",
    icon: <MdOutlineAlternateEmail />,
  },
  {
    name: "Phone Number",
    value: "+91 8494905311",
    icon: <IoCallOutline />,
  },
  {
    name: "Address",
    value: "No-687, 1st & 2nd Floor, 3rd A Cross Road, Opp. Seshadripuram College, MIG Sector A, Yelahanka Satellite Town, 3rd Stage Extension,Yelahanka, Bengaluru, Karnataka-560064",
    icon: <IoLocationOutline />,
  },
];

export const footer = [
  {
    name: "Explore",
    routes: [
      { name: "Home", id: "header" },
      { name: "About Us", id: "about" },
      { name: "Services", id: "services" },
      { name: "Team", id: "team" },
      { name: "Project", id: "project" },
      { name: "Clients", id: "testimonial" },
      { name: "FAQ", id: "faq" },
      { name: "Contact", id: "contact" },
    ],
  },
  {
    name: "Gallery",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ],
  },
];
