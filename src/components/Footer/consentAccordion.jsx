import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Button, Card } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// Sample accordion data object
const accordionData = [
  {
    title: "Use Limited Data to Select Advertising ",
    summary:
      "Advertising shown to you about Prevail or our services can be tailored based on a limited set of data. This data might include information such as the website, app, or third-party applications you are currently using: your general (non-precise) geographic location, the type of device you are using, and the content you are interacting with or have interacted with in the past. This approach helps to deliver ads that are more relevant to you while ensuring that the same ad isn't shown too frequently. ",
    details: [
      "Advertising and Marketing: Our cookies store and access information on your device to tailor advertisements that are more relevant to your interests. These cookies help track your interaction with ads and determine their effectiveness. ",
      "Contextual Advertising Based on Service Interaction and Location: If Prevail is running a campaign to promote advanced digital tools tailored to your needs, wants or requirements. You might see ads highlighting these services while browsing the relevant section of our website or marketing efforts. ",
      "Frequency Capping and Service-Specific Advertising: If you’ve been exploring Prevail’s content marketing efforts, our platform might limit how often you see an advertisement about our premium content creation service. This ensures that you are not repeatedly overwhelmed by the same ad while still informing you of services that align with your interests. ",
    ],
  },
  {
    title:
      "Understand Audiences Through Statistics or Combinations of Data from Different Sources ",
    summary:
      "Prevail generates reports and insights by combining various data sets, including user profiles, website analytics, market research, and other interaction data. This data is used to understand how users interact with our content and services, helping us identify trends and common characteristics among different audience segments. This analysis allows us to refine our offerings, optimise our marketing strategies and improve the user experience. ",
    details: [
      "Audience Analysis for Service Optimisation: Suppose Prevail wants to understand how different user segments engage with our marketing tools, solutions, and efforts. We might analyse data from users who frequently visit our marketing content and website pages, combining it with demographic information such as industry type and company size. This helps us identify which types of businesses are most interested in specific services, enabling us to tailor our offerings and marketing efforts more effectively. ",
      "Cross-Platform Audience Insights: Prevail may also work with research partners to compare the characteristics of users who interact with our advertisements across different platforms (e.g., desktop vs. mobile). For instance, we may discover that a significant portion of users/clients engaging with a particular tool or service are accessing them through mobile devices and are primarily in the 30-45 age range. This insight allows us to adjust our advertising strategy to reach and engage this audience segment better. ",
    ],
  },
  {
    title: "Actively Scan Device Characteristics for Identification ",
    summary:
      "Prevail may actively scan your device’s characteristics, such as its technical specifications and capabilities, to help identify the best ways to deliver content, screen optimisation, and advertisements. This process optimises those content or ads for your specific device, providing a better overall experience. ",
    details: [
      "Optimisation of Service Delivery for Various Device Users: Suppose Prevail notices a significant increase in users accessing our content, tools, solutions and efforts. By scanning the device characteristics, such as screen size and network type, we might develop and implement a more responsive and efficient version for users. This improvement ensures that users have a smooth experience regardless of the device they are using. ",
      "Optimising Resource Allocation: Prevail might scan device characteristics to understand the common types of devices used by our audience. For example, if a significant number of users access our services through high-resolution mobile, we might allocate more resources to developing tablet-optimised features and interfaces. ",
    ],
  },
  {
    title: "Develop and Improve Services ",
    summary:
      "Information about how you interact with Prevail’s services, including your engagement with ads and content, is invaluable in improving our existing offerings and developing new features or products. This data-driven approach enables us better to meet the needs of our diverse user base. Importantly, this process focuses on enhancing the service experience and does not involve creating or refining individual user profiles or identifiers ",
    details: [
      "Adapting to New Technology for Enhanced User Interaction: If Prevail is considering expanding its services to support a new type of digital device, we may analyse how users interact with our content or tools on those devices. For instance, we could collect data on user interactions to determine whether our existing advertising formats are effective or if we need to develop new methods for delivering content on our platform. This process helps us stay ahead of technological trends and continuously improve our service offerings. ",
      "A/B Testing to Improve User Interface Design: Prevail may conduct A/B testing by tracking how users interact with different versions of a new service feature or user interface. For instance, we might introduce an analytics dashboard on our user portal and how users interact with it compared to not including it. This data helps us refine the design and analytics data to ensure it's intuitive and meets users'/clients' needs.",
      "Analysing Content Performance to Guide Future Development: Prevail may analyse which types of content (e.g., blog posts, case studies, video tutorials) receive the most engagement. If we notice that our audience is particularly interested in content about automation in marketing, we might prioritise developing more advanced tools and services in this area. ",
    ],
  },
  {
    title: "Use Limited Data to Select Content",
    summary:
      "Content presented to you on Prevail’s platform, marketing outreach, and social media, can be tailored based on a limited set of data. This data might include information such as the specific services or sections of the website you are using, your general (non-precise) geographic location, the type of device you are using, and the content you are interacting with or have interacted with in the past. This approach ensures that the content you see is relevant to your needs while avoiding redundancy, such as showing the same article or video multiple times. ",
    details: [
      "Customising Content Based on Service Interaction and Location: Suppose you are exploring Prevail’s resources on digital marketing strategies, and your general location suggests you are in a region with a high concentration of SMEs. Based on this limited data, Prevail might present you with case studies and success stories of local businesses in your area that have successfully implemented similar strategies, making the content more relevant to your specific context. ",
      "Personalising Content Recommendations Based on Device Type: If you access Prevail’s platform primarily through a mobile device, the system might prioritise presenting content that is optimised for smaller screens, such as infographics or brief articles, rather than lengthy whitepapers or detailed reports that are better suited for desktop viewing. This helps improve your overall user experience by matching the content format to your device. ",
    ],
  },
  {
    title: "Use Profiles to Select Personalised Content ",
    summary:
      "Content presented to you on Prevail’s platform can be tailored based on your personalise content profiles. These profiles reflect your activity on Prevail’s services, such as the forms you submit, the content you engage with, and your indicated interests or preferences. This profiling allows us to prioritise and organise content in a way that makes it easier for you to find information that matches your specific interests and needs, ensuring a way that makes it easier for you to find information that matches your particular interests and needs ensuring a more efficient and engaging user experience. ",
    details: [
      "Cross-Service Content Personalisation: Imagine you’ve attended several of Prevail’s webinars on branding transformation. Based on the profile created from your participation, the next time you visit the Prevail platform, you might be greeted with a personalised list of eBooks, case studies, or articles that dive deeper into branding transformation strategies, helping you expand your knowledge in this field. ",
      "Optimising Content Recommendations Based on Industry Interests: If you’ve indicated through forms or previous interactions that you work in the real estate industry, Prevail might use this information to build a profile highlighting your industry interest. As a result, when you explore the platform, content related to real estate marketing trends, automation tools for property management, and other relevant topics will be recommended to you first, ensuring that you quickly find the most pertinent information. ",
    ],
  },
  {
    title: "Measure Advertising Performance",
    summary:
      "Information regarding which advertising is presented to you and how you interact with it is crucial for evaluating the effectiveness of our advertising campaigns. This data helps us understand whether the advertising has met its goals, such as whether users saw an ad, clicked on it, or took a subsequent action, like signing up for a service or purchasing a service. By analysing this information, we can optimise future ad placements and campaigns to ensure they are as relevant and effective as possible.",
    details: [
      "Optimising Placement of Service Promotions: Imagine Prevail is promoting a special offer on its content creation services through a banner. If you interact with the ad by clicking it and exploring the service but do not immediately sign up, Prevail might analyse this interaction along with data from other users. This analysis helps us understand which ad placements or messages lead to the most engagement, allowing us to refine our ad strategy and improve conversion rates for future campaigns. ",
      "Measuring Engagement with Industry-Specific Ads: Prevail might run targeted ads highlighting specific tools or services for industries like real estate or hospitality. We can measure how well these ads perform by tracking whether users from these industries click on the ads and take further actions, such as requesting a demo or downloading a case study. This data allows us to tailor future advertising efforts to better resonate with each industry’s unique needs. ",
    ],
  },
  {
    title: "Functional",
    summary:
      "Functional cookies are essential for enhancing your experience on Prevail’s platform by remembering the choices you make and personalising your interaction with our services. These cookies enable us to offer you a smoother, more tailored experience by storing information such as your username and password for login, your search preferences, and any customisations you make to the website's appearance. However, these cookies do not track your activity across other sites, focusing solely on improving your experience within our platform.",
    details: [
      "Session Continuity: These cookies store login information, so you don’t have to re-enter your username and password each time you visit. They also remember your search preferences, making it easier to find the content you need across sessions.",
      "Content Accessibility: Functional cookies can be used to remember specific settings or changes you’ve made, such as adjusting text size or font. They may also be necessary to provide services you've requested, like watching a video, posting a comment, or filling out a form.",
      "Anonymised Data Collection: The information collected by these cookies is often anonymized, meaning it cannot be used to track your browsing activity on other websites. Instead, it helps us improve your experience on Prevail by remembering how you interact with our platform.",
    ],
  },
  {
    title: "Developing New Services Based on User Feedback ",
    summary:
      "At Prevail, we prioritise evolving our services to better meet the needs of our users and clients. We regularly collect data on user satisfaction and feature requests through surveys, feedback forms, and direct interactions on our platform. If a significant number of users express interest in a particular feature or request an integration with a specific third-party tool within our application, we may prioritise its development.",
    details: [
      "SaaS Integration: If numerous users indicate a strong demand for integration with a particular project management tool, we would consider this feedback in our product development roadmap. By doing so, we ensure that our platform continues to evolve in a way that aligns with user needs and preferences, making Prevail more valuable and effective for our clients.",
      "Analytic Dashboard: Suppose several clients using Prevail’s analytics dashboard frequently request more advanced reporting features, such as customisable reports. By assessing that feedback, we might prioritise the development of these advanced reporting capabilities, ensuring that our platform better meets our clients' specific analytical needs. This process ensures that Prevail stays ahead of industry trends and continues to offer solutions directly influenced by our users' needs and preferences.",
    ],
  },
];

function ConsentAccordion() {
  const [expanded, setExpanded] = React.useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{ p: "20px 0", width: "100%" }}>
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
            bgcolor="#fff"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "primary.main", fontSize: "20px" }}>
                {item.title}
              </Typography>
              {/* Conditionally render the buttons only if the accordion is not expanded */}
              <Box
                sx={{
                  display: expanded === `panel${index}` ? "none" : "flex",
                  gap: 1,
                }}
              >
                <Button
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: "30px",
                    width: "144px",
                  }}
                >
                  Disagree
                </Button>
                <Button
                  sx={{
                    bgcolor: "primary.main",
                    color: "#fff",
                    borderRadius: "30px",
                    width: "144px",
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "#fff",
                    },
                  }}
                >
                  Agree
                </Button>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography textAlign={"left"} variant="subtitle2">
              {item.summary}
            </Typography>
            <Card
              sx={{
                width: "100%",
                p: 2,
                bgcolor: "#E9E9E9",
                mt: 2,
                boxShadow: 0,
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography>Examples of Data Processing: </Typography>
              {item.details.map((detail, idx) => (
                <Typography
                  key={idx}
                  component={"li"}
                  textAlign={"left"}
                  variant="subtitle2"
                >
                  {detail}
                </Typography>
              ))}
            </Card>
            <Box sx={{ display: "flex", gap: 1, my: 2 }}>
              <Button
                sx={{
                  bgcolor: "#fff",
                  borderRadius: "30px",
                  width: "144px",
                  border: "1px solid",
                }}
              >
                Disagree
              </Button>
              <Button
                sx={{
                  bgcolor: "primary.main",
                  color: "#fff",
                  borderRadius: "30px",
                  width: "144px",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "#fff",
                  },
                }}
              >
                Agree
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
export default ConsentAccordion;
