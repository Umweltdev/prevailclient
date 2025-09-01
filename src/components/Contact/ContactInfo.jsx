import { Box, CardMedia, Grid, Typography, Paper, Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import icon1 from "./assets/announcement.svg";
import icon2 from "./assets/approve.svg";
import icon3 from "./assets/chat-bubble-user.svg";
import icon4 from "./assets/comment-alt-message.svg";

const useContactStyles = makeStyles((theme) => ({
  contactCard: {
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
    borderRadius: '20px !important',
    padding: '24px !important',
    marginBottom: '20px !important',
    boxShadow: '0 8px 32px rgba(110, 62, 244, 0.06) !important',
    border: '1px solid rgba(110, 62, 244, 0.08)',
    position: 'relative',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'translateY(-4px) translateX(4px)',
      boxShadow: '0 16px 48px rgba(110, 62, 244, 0.12) !important',
      '& $iconContainer': {
        transform: 'scale(1.1) rotate(5deg)',
        background: 'linear-gradient(135deg, #6E3EF4 0%, #9C6AFF 100%)',
        '& img': {
          filter: 'brightness(0) invert(1)',
        }
      }
    }
  },
  iconContainer: {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, rgba(110, 62, 244, 0.1) 0%, rgba(156, 106, 255, 0.1) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-2px',
      left: '-2px',
      right: '-2px',
      bottom: '-2px',
      borderRadius: '18px',
      background: 'linear-gradient(135deg, rgba(110, 62, 244, 0.2) 0%, rgba(156, 106, 255, 0.2) 100%)',
      zIndex: -1,
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&:hover::after': {
      opacity: 1,
    }
  },
  headerText: {
    background: 'linear-gradient(135deg, #1D0D40 0%, #6E3EF4 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '600 !important',
    fontSize: '18px !important',
    marginBottom: '8px !important',
    lineHeight: '1.4 !important'
  },
  detailText: {
    color: '#64748B !important',
    fontSize: '15px !important',
    lineHeight: '1.6 !important',
    fontWeight: '400 !important'
  },
  mainContainer: {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-20px',
      left: '-20px',
      width: '8px',
      height: '120px',
      background: 'linear-gradient(to bottom, #6E3EF4, #9C6AFF)',
      borderRadius: '4px',
      opacity: 0.6,
    }
  },
  headerSection: {
    marginBottom: '32px',
    textAlign: 'center',
  },
  headerChip: {
    background: 'linear-gradient(135deg, #6E3EF4 0%, #9C6AFF 100%)',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '14px',
    marginBottom: '16px',
    boxShadow: '0 4px 12px rgba(110, 62, 244, 0.3)',
  }
}));

const contactData = [
  {
    icon: icon1,
    header: "Curiosity Driven",
    detail: "At Prevail, our curiosity pushes the boundaries of digital marketing, aiming to achieve transformative results.",
  },
  {
    icon: icon2,
    header: "Bespoke Solutions",
    detail: "We are eager to explore custom solutions to help transform your business.",
  },
  {
    icon: icon3,
    header: "Engagement Invitation",
    detail: "Reach out today to initiate a conversation that could redefine your brand's trajectory.",
  },
  {
    icon: icon4,
    header: "Prompt Response",
    detail: "After submitting your query, one of our specialists will contact you to discuss how we can elevate your brand.",
  },
];

const ContactInfo = () => {
  const classes = useContactStyles();

  return (
    <Box className={classes.mainContainer} sx={{
      width: { xs: "90vw", sm: "500px" },
      maxWidth: "100%"
    }}>
      <div className={classes.headerSection}>
        <Chip 
          // icon={<StarIcon />}
          label="Why Choose Us" 
          className={classes.headerChip}
        />
        <Typography sx={{
          color: '#1D0D40',
          fontSize: '24px',
          fontWeight: '600',
          background: 'linear-gradient(135deg, #1D0D40 0%, #6E3EF4 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Experience Excellence
        </Typography>
      </div>
      
      {contactData.map((data, i) => (
        <Paper key={i} className={classes.contactCard}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <div className={classes.iconContainer}>
              <CardMedia
                component="img"
                image={data.icon}
                sx={{ width: "28px", height: "28px" }}
              />
            </div>
            <Box sx={{ flex: 1 }}>
              <Typography className={classes.headerText}>
                {data.header}
              </Typography>
              <Typography className={classes.detailText}>
                {data.detail}
              </Typography>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default ContactInfo;