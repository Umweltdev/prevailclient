import {
  Addchart,
  AdsClick,
  Devices,
  Label,
  QueryStats,
  SsidChart,
  Storage,
  Storefront,
} from "@mui/icons-material";
import pencil from "../assets/pencil.svg"
import timer from "../assets/timer.svg";
import circle from "../assets/circle.svg";
import img1 from "../assets/u1.png";
import img2 from "../assets/u2.png";
import img3 from "../assets/u3.png";
import img4 from "../assets/u4.png";
import img5 from "../assets/u2.png";

export const slides = [
  {
    // author: "Christopher",
    // title: "Designer Slider",
    link: "brand",
    topic: "Branding",
    description: `Our “Brand Identity Package” service is the foundation for creating a lasting impression. We collaborate closely with you to define their unique brand identity, crafting eye-catching logos and compelling marketing collateral.`,
    image:
      "https://img.freepik.com/free-photo/individuality-concept-umbrellas_23-2149125649.jpg?t=st=1711270757~exp=1711274357~hmac=51a2ec8f73178aa7293ace5ccf90ecc194e71f21c0ca878b7a67cd8e49a09f36&w=826",
  },
  {
    // author: "Christopher",
    // title: "Designer Slider",
    link: "website",
    topic: "Website Development",
    description: `Prevail's groundbreaking "Website Production & Management" service, is a strategic initiative designed to empower SMEs and local businesses with a robust online presence that not only captivates but also seamlessly engages with their target audience.`,
    image:
      "https://img.freepik.com/free-photo/laptop-smartphone-tablet-pc-table-3d-rendering_1142-38739.jpg?w=740",
  },
  {
    // author: "Christopher",
    // title: "Designer Slider",
    link: "sem",
    topic: "Search Engine Marketing",
    description: `Our "Search Engine Marketing (SEM)” service is the gateway to getting businesses in front of their ideal target audience. Our SEM service goes beyond the basics, providing a comprehensive approach around targeted advertising, SEO, performance metrics and continuous adjustment & reports."`,
    image:
      "https://img.freepik.com/premium-photo/searching-browsing-internet-data-information-networking-concept_34683-3057.jpg?w=826",
  },
  {
    // author: "Christopher",
    // title: "Designer Slider",
    link: "mpd",
    topic: "Marketing Price Displacement API",
    description:
      "The “Marketing Cost Displacement (MCD)” API is not just a tool; it is a strategic asset. By seamlessly integrating a blend of elastic pricing and yield management. SMEs and local businesses can gain the power of budget allocation in their marketing spend.",
    image:
      "https://img.freepik.com/premium-photo/minimalist-photograph-black-friday-shopping-cart-against-dark-moody-background-cart-i_891336-33737.jpg?w=740",
  },
];

// export const slidesArt = [
//   {
//     // author: "Christopher",
//     // title: "Designer Slider",
//     topic: "Empowering Local Businesses",
//     description:
//       "Recognise the struggle of local SMEs in the current economic climate. Prevail is committed to empowering these businesses, providing them with the tools and resources to compete effectively against larger enterprises.",
//     image:
//       "https://img.freepik.com/premium-photo/young-waiter-writing-diary_107420-93651.jpg?w=740",
//   },
//   {
//     // author: "Christopher",
//     // title: "Designer Slider",
//     topic: "Innovative and Accessible Technology",
//     description: `Address the gap in technology accessibility between large corporations and “small-to-medium-sized" enterprises (SMEs). Prevail will focus on bringing innovative, affordable tech solutions to local businesses, allowing them to harness automation and other advancements without the need for full-time programmers.`,
//     image:
//       "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     // author: "Christopher",
//     // title: "Designer Slider",
//     topic: "Adaptive Bussiness Strategies",
//     description: `Understand the volatility in consumer demands and behaviours. Prevail offers insights and tools to help local businesses quickly adapt to changing market conditions, ensuring they remain competitive and responsive to consumer needs.`,
//     image:
//       "https://img.freepik.com/premium-photo/concentration-determination-chess-player-strategic-match-generative-ai_697880-3743.jpg?w=740",
//   },
//   {
//     // author: "Christopher",
//     // title: "Designer Slider",
//     topic: "Market Equity and Fair Competetion",
//     description:
//       "Address the challenge of market share decline for local businesses. Prevail stands for creating a more equitable market where local businesses can compete fairly with larger enterprises, ensuring diversity and choice in the market.",
//     image:
//       "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

export const images = [
  {
    icon: (
      <Label
        sx={{
          fontSize: "5vw",
          "@media (max-width: 600px)": { fontSize: "5vw" },
        }}
      />
    ),
    smallIcon: (
      <Label
        sx={{
          fontSize: "2vw",
          color: "#884ed9",
          marginTop: "0.5vh",
          "@media (max-width: 600px)": {
            fontSize: "6vw",
          },
        }}
      />
    ),

    link: "brand",
    title: "Empowering Local Businesses",
    subTitle: `Recognise the struggle of local SMEs in the current economic climate. Prevail is committed to empowering these businesses, providing them with the tools and resources to compete effectively against larger enterprises.`,
    imgPath:
      "https://img.freepik.com/premium-photo/young-waiter-writing-diary_107420-93651.jpg?w=740",
  },
  {
    icon: (
      <Devices
        sx={{
          fontSize: "5vw",
          "@media (max-width: 600px)": { fontSize: "10vw" },
        }}
      />
    ),
    smallIcon: (
      <Devices
        sx={{
          fontSize: "2vw",
          color: "#884ed9",
          marginTop: "0.5vh",
          "@media (max-width: 600px)": {
            fontSize: "6vw",
          },
        }}
      />
    ),
    link: "website",
    title: "Innovative and Accessible Technology",
    subTitle: `Address the gap in technology accessibility between large corporations and “small-to-medium-sized" enterprises (SMEs). Prevail will focus on bringing innovative, affordable tech solutions to local businesses, allowing them to harness automation and other advancements without the need for full-time programmers.`,
    imgPath:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: (
      <AdsClick
        sx={{
          fontSize: "5vw",
          "@media (max-width: 600px)": { fontSize: "10vw" },
        }}
      />
    ),
    smallIcon: (
      <AdsClick
        sx={{
          fontSize: "2vw",
          color: "#884ed9",
          marginTop: "0.5vh",
          "@media (max-width: 600px)": {
            fontSize: "6vw",
          },
        }}
      />
    ),
    link: "sem",
    title: "Adaptive Bussiness Strategies",
    subTitle: `Understand the volatility in consumer demands and behaviours. Prevail offers insights and tools to help local businesses quickly adapt to changing market conditions, ensuring they remain competitive and responsive to consumer needs.`,
    imgPath:
      "https://img.freepik.com/premium-photo/concentration-determination-chess-player-strategic-match-generative-ai_697880-3743.jpg?w=740",
  },
  {
    icon: (
      <QueryStats
        sx={{
          fontSize: "5vw",
          "@media (max-width: 600px)": { fontSize: "10vw" },
        }}
      />
    ),
    smallIcon: (
      <QueryStats
        sx={{
          fontSize: "2vw",
          color: "#884ed9",
          marginTop: "0.5vh",
          "@media (max-width: 600px)": {
            fontSize: "6vw",
          },
        }}
      />
    ),
    link: "mpd",
    title: "Market Equity and Fair Competetion",
    subTitle: `The “Marketing Cost Displacement (MCD)” API is not just a tool; it is a"Address the challenge of market share decline for local businesses. Prevail stands for creating a more equitable market where local businesses can compete fairly with larger enterprises, ensuring diversity and choice in the market.`,
    imgPath:
      "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const OurCoreData = [
  {
    header: "Empowering Local Businesses",
    text: "At Prevail, we recognise the unique challenges that local SMEs face in the current economic climate. We are deeply committed to empowering these businesses by equipping them with the tools and resources needed to compete against larger enterprises effectively. Our tailored strategies and innovative solutions are designed to level the playing field, providing local businesses with the opportunity to thrive and grow in a highly competitive market.",
    icon: <Storefront sx={{ color: "#673AA3" }} />,
  },
  {
    header: "Innovative and Accessible Technology",
    text: "At Prevail, we recognise the unique challenges that local SMEs face in the current economic climate. We are deeply committed to empowering these businesses by equipping them with the tools and resources needed to compete against larger enterprises effectively. Our tailored strategies and innovative solutions are designed to level the playing field, providing local businesses with the opportunity to thrive and grow in a highly competitive market.",
    icon: <Storage sx={{ color: "#673AA3" }} />,
  },
  {
    header: "Adaptive Bussiness Strategies",
    text: "At Prevail, we recognise the unique challenges that local SMEs face in the current economic climate. We are deeply committed to empowering these businesses by equipping them with the tools and resources needed to compete against larger enterprises effectively. Our tailored strategies and innovative solutions are designed to level the playing field, providing local businesses with the opportunity to thrive and grow in a highly competitive market.",
    icon: <Addchart sx={{ color: "#673AA3" }} />,
  },
  {
    header: "Market Equity and Fair Competetion",
    text: "At Prevail, we recognise the unique challenges that local SMEs face in the current economic climate. We are deeply committed to empowering these businesses by equipping them with the tools and resources needed to compete against larger enterprises effectively. Our tailored strategies and innovative solutions are designed to level the playing field, providing local businesses with the opportunity to thrive and grow in a highly competitive market.",
    icon: <SsidChart sx={{ color: "#673AA3" }} />,
  },
];

export const DigitalAcelerator = [
  {
    header: "Unified Brand Presence",
    text: "Achieve a seamless and powerful brand image. We synchronise the aesthetics of your website with your brand identity and SEO strategies, ensuring every component works together to maximise your online impact.",
    icon: pencil,
  },
  {
    header: "Time & Resource Efficiency",
    text: "Consolidate your digital strategy with our integrated approach. Combining website development, branding, and marketing into one efficient package frees up your time and resources, letting you concentrate on what’s essential—your business’s growth.",
    icon: timer,
  },
  {
    header: "Strategic Synergy",
    text: "Harness the power of combined efforts. Our package melds website design, brand messaging, and targeted SEO into a unified strategy, enhancing the coherence and effectiveness of your digital presence. We deliver sustainable, impactful results that support your long-term success.",
    icon: circle,
  },
];


export const TestimonialData = [
  {
    text: "Amazing experience! The hotel staff was incredibly friendly, and the room was comfortable and clean. I will definitely stay here again.",
    author: "Okafor Smith",
    position: "Co-Founder, Heroes Digital",
    img: img1,
  },
  {
    text: "A delightful stay! The view from my room was breathtaking, and the breakfast buffet was delicious. Highly recommend this place.",
    author: "Aisha Thompson",
    position: "CEO, Green Solutions",
    img: img2,
  },
  {
    text: "The perfect getaway! The spa services were top-notch, and the location was ideal for exploring the city. I'll be back for sure.",
    author: "Carlos Martinez",
    position: "Marketing Director, Tech Innovators",
    img: img3,
  },
  {
    text: "Outstanding hospitality! The staff went above and beyond to make our stay enjoyable, and the amenities were excellent. A wonderful experience.",
    author: "Emily Johnson",
    position: "HR Manager, Creative Minds",
    img: img4,
  },
  {
    text: "An exceptional stay! The room was luxurious, and the hotel's ambiance was superb. Can't wait to return.",
    author: "David Lee",
    position: "Product Manager, Visionary Ventures",
    img: img5,
  },
];

