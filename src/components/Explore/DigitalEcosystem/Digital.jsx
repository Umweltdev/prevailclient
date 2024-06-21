import React from 'react';
import { Container, Grid, Typography, Box, Card, CardContent, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Dummy icons for illustration purposes
import Icon1 from '../assets/image_115.png'; // Replace with actual paths
import Icon2 from '../assets/image_116.png';
import Icon3 from '../assets/image_117.png';
import Icon4 from '../assets/image_118.png';
import Icon5 from '../assets/image_119.png';
import Icon6 from '../assets/image_120.png';
import Icon7 from '../assets/image_121.png';
import Icon8 from '../assets/image_122.png';

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)",
    padding: "2rem 0",
    minHeight: "100vh", // Ensure full height of the viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: theme.spacing(4),
    
  },
  card: {
    height: "470px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "white",
    borderRadius: "20px",
  },
  mediaContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
    width: "60%",
    background: "white",
    margin: "auto", // Centering the Paper component
  },
  media: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  content: {
    padding: theme.spacing(2),
  },
}));

const Digital = () => {
  const classes = useStyles();

  const data = [
    { title: 'Digital Landscape', description: 'The term "digital landscape" refers to the entire digital environment where your brand operates. This includes various online platforms, digital trends, consumer behavior online, and the evolution of digital marketing strategies.', icon: Icon1 },
    { title: 'Brand Awareness', description: 'Brand awareness strategies are to introduce your brand and its products or services to your target audience. The goal is to create a long-lasting impression in the minds of potential customers so that when they are ready to make a purchase, they think of your brand.', icon: Icon2 },
    { title: 'Competitor Analysis', description: 'To succeed in the market, it is essential to research and understand your competitors’ strategies, strengths, weaknesses, and market positioning. Examining your competitors can aid you in identifying market gaps, learning from their successes or mistakes, and differentiating your brand.', icon: Icon3 },
    { title: 'Keyword Ranking', description: 'A high keyword ranking can lead to organic traffic being directed to your site, improve visibility, and enhance brand credibility. SEO (Search Engine Optimization) strategies such as optimizing website content, building backlinks, and improving site performance are used to improve keyword rankings.', icon: Icon4 },
    { title: 'Targeted Advertising', description: 'A strategy in which you direct your advertising efforts to a specific audience based on demographics, interests, behaviors, or other criteria. This approach aims to spend your marketing budget more efficiently by reaching people more likely to be interested in your products or services.', icon: Icon5 },
    { title: 'Higher Visibility', description: 'This goal aims to enhance your business’s online presence to become more noticeable to prospective customers. This objective can be achieved through various means, such as improving search engine rankings, engaging on social media, and content marketing. The more visible your brand is online and offline, the more likely it is to be considered by potential customers.', icon: Icon6 },
    { title: 'Optimization', description: 'This refers to continuously improving your digital marketing strategies to achieve better results. It can involve website optimization for better user experience and SEO ranking, improving ad campaigns, data analysis, and making informed adjustments to stay ahead of the competition and achieve your marketing goals.', icon: Icon7 },
    { title: 'Reporting', description: 'This involves collecting and analyzing data to evaluate the performance of your digital marketing activities. Reporting provides valuable insights into campaign effectiveness, audience behavior, and overall return on investment. It informs decisions to improve your marketing strategy.', icon: Icon8 },
  ];

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h6" align="center" pt="100px" color="primary" gutterBottom>
          Digital Ecosystem
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
          The Ultimate Products We Serve
        </Typography>
        <Grid container spacing={4}>
          {data.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1">
                    {item.description}
                  </Typography>
                </CardContent>
                <Box sx={{
                  background: "#F7F8FA",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: "10px",
                  borderRadius: "10px", 
                  width: '96.5%', 
                  height: '100%',
                }}>
                  <Paper className={classes.mediaContainer} elevation={3}>
                    <img src={item.icon} alt={item.title} className={classes.media} />
                  </Paper>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Digital;
