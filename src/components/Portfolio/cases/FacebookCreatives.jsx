import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Grid, Typography } from "@mui/material";

export default function FacebookCreatives() {
  return (
    <Grid sx={{margin: "10vh 0"}}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "3vw",
          fontWeight: "bold",
        }}
      >
        Marketing Collaterals
      </Typography>
      <Box
        sx={{
          width: "80vw",
          height: 450,
          overflowY: "scroll",
          margin: "5vh auto",
        }}
      >
        <ImageList variant="masonry" cols={3} >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Grid>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1599590984817-0c15f31b1fa5?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1626738740187-5896d6321342?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1633533447057-56ccf997f4fe?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sink",
  },
  {
    img: "https://i.pinimg.com/736x/a2/e4/fd/a2e4fd28b122b3fbb82fb0f1714ea598.jpg",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1636719672819-1ccac865f0b4?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Blinds",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663100678842-d89cb7b084ee?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Chairs",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRKb5xpGTI1JkPIAQd1th3vYzQtnQ6Lz8yco5uK56gmW671dXL2vgf_PeXbJsBHgyTRc&usqp=CAU",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1481973946307-512988dde8b1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1616590285617-a15b96b6fcf0?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];
