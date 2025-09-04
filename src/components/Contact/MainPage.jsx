import { Box, Typography, Container, Chip } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import { makeStyles } from "@mui/styles";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import styles from "./assets/contact.module.css";
import Form from "./Form";
import ContactInfo from "./ContactInfo";

const useMainStyles = makeStyles((theme) => ({
  mainContainer: {
    background: 'linear-gradient(135deg, #F9FAFC 0%, #EEF2FF 50%, #FFFFFF 100%)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 20% 80%, rgba(110, 62, 244, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(156, 106, 255, 0.05) 0%, transparent 50%)',
      pointerEvents: 'none',
    }
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '80px',
    position: 'relative',
  },
  headerChip: {
    background: 'linear-gradient(135deg, #6E3EF4 0%, #9C6AFF 100%)',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '16px',
    padding: '12px 24px',
    marginBottom: '24px',
    boxShadow: '0 8px 24px rgba(110, 62, 244, 0.3)',
  },
  headerTitle: {
    background: 'linear-gradient(135deg, #6E3EF4 0%, #9C6AFF 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '48px !important',
    fontWeight: '700 !important',
    marginBottom: '24px !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '36px !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px !important',
    }
  },
  headerDescription: {
    color: '#64748B',
    fontSize: '18px',
    lineHeight: '1.7',
    maxWidth: '600px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    }
  },
  contentSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '60px',
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px',
    }
  }
}));

const MainPage = () => {
  const classes = useMainStyles();
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={sectionRef}
      className={`${classes.mainContainer} ${styles.contact} ${sectionInView ? styles.visible : ""}`}
      sx={{ py: { xs: 8, md: 12 }, pt: {xs: 20, md: 22} }}
    >
      <Container maxWidth="xl">
        <Box
          ref={textRef}
          className={`${classes.headerSection} ${styles.textSlideIn} ${textInView ? styles.visible : ""}`}
        >
          <Chip 
            icon={<ConnectWithoutContactIcon />}
            label="Get In Touch" 
            className={classes.headerChip}
          />
          <Typography className={classes.headerTitle}>
            Contact Us
          </Typography>
          <Typography className={classes.headerDescription}>
            Fill out the form below and let us know how we can assist you. Whether
            you&apos;re interested in reshaping your brand identity, developing a
            cutting-edge website, or harnessing the power of advanced marketing
            technologies, our team is ready to help steer your next big leap forward.
          </Typography>
        </Box>

        <Box className={classes.contentSection}>
          <Box
            ref={formRef}
            className={`${styles.formSlideIn} ${formInView ? styles.visible : ""}`}
          >
            <Form />
          </Box>
          <Box
            ref={infoRef}
            className={`${styles.infoSlideIn} ${infoInView ? styles.visible : ""}`}
          >
            <ContactInfo />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MainPage;