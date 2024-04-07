import { AdsClick, Devices, Label, QueryStats } from "@mui/icons-material";

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
