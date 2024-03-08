import { Typography } from "@mui/material";
import ComponentOne from "../ReusedComponents/ComponentOne";
import TextImageComponent from "../ReusedComponents/TextImageComponent";
import "./assets/services.css";
import ImageTextComponent from "../ReusedComponents/ImageTextComponent";

const gradient = "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)";

const SectionThree = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "5vh 0",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "4vw",
          fontWeight: "900",
          color: "#884ed9",
          "@media (max-width: 600px)": {
            textAlign: "center",
            fontSize: "7vw",
            fontWeight: "900",
            color: "#884ed9",
          },
        }}
      >
        Services
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          fontSize: "1.8vw",
          width: "70vw",
          margin: "0 auto",
          color: "#884ed9",
          "@media (max-width: 600px)": {
            textAlign: "center",
            fontSize: "4vw",
            width: "95vw",
          },
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
        voluptatem natus error a sequi cupiditate reprehenderit eos repellat
        excepturi deserunt officiis incidunt perferendis tenetur, nihil est
        illum minus dignissimos reiciendis! Amet doloremque atque natus
        dignissimos hic maiores repellat? Illum, accusantium!
      </Typography>
      <span className="lineSpanServices"></span>
      <TextImageComponent
        text={`The term "digital landscape" refers to the entire digital
environment where your brand operates. This includes various online platforms, digital
trends, consumer behaviour online, and the evolution of digital marketing strategies. It
is essential to understand the digital landscape to develop effective marketing strategies
that are relevant and impactful."`}
        imageUrl="https://img.freepik.com/free-vector/mobile-marketing-isometric-style_23-2148896785.jpg?w=740&t=st=1709546732~exp=1709547332~hmac=7e5bc9c9c68482eeeaf27332ec134e630874d2ab6980986cbdd83e11bbea7eef"
        textHeader={`Digital Landscape`}
      />
      <ImageTextComponent
        text={`Brand awareness strategies are to introduce your brand and its products or services to your target audience. The goal is to create a long-lasting impression in the minds of potential customers so that when they are ready to make a purchase, they think of your brand. This can be achieved by implementing various digital marketing tactics such as content marketing, improving website aesthetics, optimising search engines, running social media campaigns, and more`}
        imageUrl="https://img.freepik.com/free-vector/black-friday-concept-illustration_114360-3657.jpg?t=st=1709546732~exp=1709547332~hmac=319db392e478baf935b04c88bcf2cd707a52453857f78d5ebee1d798f1b047e1"
        textHeader={`Brand Awareness`}
      />
      <TextImageComponent
        text={`To succeed in the market, it is essential to research and understand your competitors strategies, strengths, weaknesses, and market positioning. Examining your competitors can aid you in identifying market gaps, learning from their successes or mistakes, and differentiating your brand. This analysis can inform your marketing strategies, product development, and overall business strategy.`}
        imageUrl="https://img.freepik.com/free-vector/remote-team-concept-illustration_114360-4867.jpg"
        textHeader={`Competitor Analysis`}
      />
      <ImageTextComponent
        text={`When we talk about digital marketing, the term keyword ranking refers to the position of your website on search engine results pages (SERPs) for specific keywords. Having a high keyword ranking can lead to organic traffic being directed to your site, improve visibility, and enhance brand credibility. SEO (Search Engine Optimisation) strategies such as optimising website content, building backlinks, and improving site speed are used to improve keyword rankings.`}
        imageUrl="https://img.freepik.com/free-vector/sales-representative-abstract-concept_335657-3002.jpg?w=826&t=st=1709558703~exp=1709559303~hmac=38e332c3ddffe1914be70b960a5074eca6781a9ca11da9ebe7194df7cd19412a"
        textHeader={`Keyword Ranking `}
      />
      <TextImageComponent
        text={`To succeed in the market, it is essential to research and understand your competitors' strategies, strengths, weaknesses, and market positioning. Examining your competitors can aid you in identifying market gaps, learning from their successes or mistakes, and differentiating your brand. This analysis can inform your marketing strategies, product development, and overall business strategy.`}
        imageUrl="https://img.freepik.com/premium-vector/delivery-market-place-flat-design-vector_398346-45.jpg?w=740"
        textHeader={`Targeted Advertising`}
      />
      <ImageTextComponent
        text={`This is a strategy where you direct your advertising efforts to a specific audience based on demographics, interests, behaviour, or other criteria. The objective of this approach is to spend your marketing budget more efficiently by reaching people who are more likely to be interested in your products or services. By doing this, you can achieve better results and maximise your return on investment.`}
        imageUrl="https://img.freepik.com/free-vector/business-vision-concept-illustration_114360-7130.jpg?t=st=1709636427~exp=1709640027~hmac=2b6ecff1761ee8beaf2b222c8b83cbbe397fa0c77f20592e29284388e35e66e6&w=740"
        textHeader={`Higher Visibility`}
      />
      <TextImageComponent
        text={`To succeed in the market, it is essential to research and understand your competitors' strategies, strengths, weaknesses, and market positioning. Examining your competitors can aid you in identifying market gaps, learning from their successes or mistakes, and differentiating your brand. This analysis can inform your marketing strategies, product development, and overall business strategy.`}
        imageUrl="https://img.freepik.com/free-vector/pull-request-concept-illustration_114360-5591.jpg?t=st=1709636313~exp=1709639913~hmac=800813f05e66ee464bd1f1f3bbf99c219ea39eaf096452f2415f6eff0bba1daf&w=740"
        textHeader={`Optimisation`}
      />
      <ImageTextComponent
        text={`This involves collecting and analysing data to evaluate the performance of your digital marketing activities. Reporting provides valuable insights into what is working and what is not, enabling you to make informed decisions to improve your marketing strategies. Reports can cover various metrics, including website traffic, conversion rates, social media engagement, and ROI (Return on Investment).`}
        imageUrl="https://img.freepik.com/premium-vector/office-workers-are-studying-infographic-analysis-evolutionary-scale-flat-vector_566886-576.jpg?w=740"
        textHeader={`Reporting`}
      />
    </div>
  );
};

export default SectionThree;
