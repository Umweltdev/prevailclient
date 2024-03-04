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
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "3vw",
          fontWeight: "900",
          color: "#884ed9",
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
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
        voluptatem natus error a sequi cupiditate reprehenderit eos repellat
        excepturi deserunt officiis incidunt perferendis tenetur, nihil est
        illum minus dignissimos reiciendis! Amet doloremque atque natus
        dignissimos hic maiores repellat? Illum, accusantium!
      </Typography>
      <TextImageComponent
        text="Understand the volatility in consumer demands and behaviours. Prevail offers insights and tools to help local businesses quickly adapt to changing market conditions, ensuring they remain competitive and responsive to consumer needs. Address the gap in technology accessibility between large corporations and small-to-medium-sized enterprises (SMEs). Prevail will focus on bringing innovative, affordable tech solutions to local businesses, allowing them to harness automation and other advancements without the need for full-time programmers. reiciendis! Amet doloremque atque natus
        dignissimos hic maiores repellat? Illum, accusantium! ensuring they remain competitive and responsive to consumer needs. Address the gap in technology accessibility between large corporations and small-to-medium-sized enterprises (SMEs)."
        imageUrl="https://img.freepik.com/free-vector/mobile-marketing-isometric-style_23-2148896785.jpg?w=740&t=st=1709546732~exp=1709547332~hmac=7e5bc9c9c68482eeeaf27332ec134e630874d2ab6980986cbdd83e11bbea7eef"
      />
      <ImageTextComponent
        text="Understand the volatility in consumer demands and behaviours. Prevail offers insights and tools to help local businesses quickly adapt to changing market conditions, ensuring they remain competitive and responsive to consumer needs. Address the gap in technology accessibility between large corporations and small-to-medium-sized enterprises (SMEs). Prevail will focus on bringing innovative, affordable tech solutions to local businesses, allowing them to harness automation and other advancements without the need for full-time programmers. ensuring they remain competitive and responsive to consumer needs"
        imageUrl="https://img.freepik.com/free-vector/black-friday-concept-illustration_114360-3657.jpg?t=st=1709546732~exp=1709547332~hmac=319db392e478baf935b04c88bcf2cd707a52453857f78d5ebee1d798f1b047e1"
      />
      <TextImageComponent
        text="Understand the volatility in consumer demands and behaviours. Prevail offers insights and tools to help local businesses quickly adapt to changing market conditions, ensuring they remain competitive and responsive to consumer needs. Address the gap in technology accessibility between large corporations and small-to-medium-sized enterprises (SMEs). Prevail will focus on bringing innovative, affordable tech solutions to local businesses, allowing them to harness automation and other advancements without the need for full-time programmers."
        imageUrl="https://img.freepik.com/free-vector/remote-team-concept-illustration_114360-4867.jpg"
      />
      <ImageTextComponent
        text="Prevail offers insights and tools to help local businesses quickly adapt to changing market conditions, ensuring they remain competitive and responsive to consumer needs. Address the gap in technology accessibility between large corporations and small-to-medium-sized enterprises (SMEs). Prevail will focus on bringing innovative, affordable tech solutions to local businesses, allowing them to harness automation and other advancements without the need for full-time programmers. ensuring they remain competitive and responsive to consumer needs"
        imageUrl="https://img.freepik.com/free-vector/sales-representative-abstract-concept_335657-3002.jpg?w=826&t=st=1709558703~exp=1709559303~hmac=38e332c3ddffe1914be70b960a5074eca6781a9ca11da9ebe7194df7cd19412a"
      />
    </div>
  );
};

export default SectionThree;
