import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const InformationPage = () => {
  return (
    <Grid
      sx={{
        width: "620px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        "@media (max-width: 767px)": {
          width: "85vw",
          alignItems: "center",
          mt: "-30px"
        },
      }}
    >
      <Box id="information-we-collect">
        <Typography
          sx={{ color: "#1D0D40", fontSize: "28px", fontWeight: "500" }}
        >
          Information We Collect
        </Typography>
        <ul
          style={{
            color: "#505660",
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          <Typography
            sx={{ color: "#505660", fontSize: "16px", fontWeight: "500" }}
          >
            We collect information about you when you:
          </Typography>
          <li>
            Register for an account, interact with our services, and information
            shared during the course of any projects.
          </li>
          <li>Communicate with us via email, phone, or other channels.</li>
          <li>
            Details necessary to process payments, including credit card
            information and billing addresses.
          </li>
          <li>
            Information related to the services and deliverables we provide,
            including project details and timelines.
          </li>
          <li>Participate in our promotions, webinars, or events.</li>
          <li>
            This information may include your name, contact details,
            professional details, and any other information you choose to
            provide.
          </li>
        </ul>
      </Box>
      {/* ====================================================================== */}
      <Box id="use-of-information">
        <Typography
          sx={{ color: "#1D0D40", fontSize: "28px", fontWeight: "500" }}
        >
          Use of Information
        </Typography>
        <ul style={{ color: "#505660", fontSize: "16px", fontWeight: "400" }}>
          <Typography
            sx={{ color: "#505660", fontSize: "16px", fontWeight: "500" }}
          >
            We use the collected information for the following purposes: 
          </Typography>
          <li>
            To deliver and improve our services and products as agreed upon in
            the contract. 
          </li>
          <li>To process payments and manage payment schedules.</li>
          <li>
            Communicate with you about project updates, revisions, feedback,
            offers, and events.
          </li>
          <li>
            Information related to the services and deliverables we provide,
            including project details and timelines.
          </li>
          <li>Provide customer support and respond to your requests. </li>
          <li>
            Analyse and understand how our services are used to enhance your
            experience. 
          </li>
        </ul>
      </Box>

      {/* ====================================================================== */}
      <Box id="client-expectations">
        <Typography
          sx={{ color: "#1D0D40", fontSize: "28px", fontWeight: "500" }}
        >
          Client Expectations
        </Typography>
        <ul style={{ color: "#505660", fontSize: "16px", fontWeight: "400" }}>
          <Typography
            sx={{ color: "#505660", fontSize: "16px", fontWeight: "500" }}
          >
            We expect our clients to participate actively in meetings and
            provide timely feedback. This helps us to meet project timelines and
            deliver quality services. Missed meetings or delayed feedback can
            result in project delays and additional costs. 
          </Typography>
        </ul>
      </Box>

      {/* ====================================================================== */}
      <Box id="revisions-and-substantive-changes">
        <Typography
          sx={{ color: "#1D0D40", fontSize: "28px", fontWeight: "500" }}
        >
          Revisions and Substantive Changes
        </Typography>
        <ul style={{ color: "#505660", fontSize: "16px", fontWeight: "400" }}>
          <Typography
            sx={{ color: "#505660", fontSize: "16px", fontWeight: "500" }}
          >
            Clients are entitled to two rounds of revisions at no extra charge,
            provided the changes do not significantly alter the original project
            scope. Requests for substantial changes (exceeding 30% of the
            original scope) will require a new project invoice and contract
            amendment.
          </Typography>
        </ul>
      </Box>

      {/* ====================================================================== */}
      <Box id="cancellation-policy">
        <Typography
          sx={{ color: "#1D0D40", fontSize: "28px", fontWeight: "500" }}
        >
          Cancellation Policy
        </Typography>
        <ul style={{ color: "#505660", fontSize: "16px", fontWeight: "400" }}>
          <Typography
            sx={{ color: "#505660", fontSize: "16px", fontWeight: "500" }}
          >
            Either party may terminate the services at any time if the
            relationship is deemed unsatisfactory. In the event of cancellation,
            Prevail retains ownership of all copyrights and original work.
            Clients will be responsible for payment of completed work and
            incurred expenses up to the cancellation date. 
          </Typography>
        </ul>
      </Box>

      {/* ====================================================================== */}
      <Box id="confidentiality">
        <Typography
          sx={{ color: "#1D0D40", fontSize: "28px", fontWeight: "500" }}
        >
          Confidentiality
        </Typography>
        <ul style={{ color: "#505660", fontSize: "16px", fontWeight: "400" }}>
          <Typography
            sx={{ color: "#505660", fontSize: "16px", fontWeight: "500" }}
          >
            Both parties agree to maintain the confidentiality of all
            information shared during the project. This includes but is not
            limited to passwords, login information, payment details, and
            business information. 
          </Typography>
        </ul>
      </Box>

      {/* ====================================================================== */}
      <Box id="copyright-ownership">
        <Typography
          sx={{ color: "#1D0D40", fontSize: "28px", fontWeight: "500" }}
        >
          Copyright Ownership
        </Typography>
        <ul style={{ color: "#505660", fontSize: "16px", fontWeight: "400" }}>
          <Typography
            sx={{ color: "#505660", fontSize: "16px", fontWeight: "500" }}
          >
            Prevail retains copyright ownership of all deliverables until final
            payment is made. Upon final payment, copyright ownership is
            transferred to the client, with the restriction that deliverables
            cannot be resold to other businesses or individuals. 
          </Typography>
        </ul>
      </Box>

      {/* ====================================================================== */}
      <Box id="sharing-of-information">
        <Typography
          sx={{ color: "#1D0D40", fontSize: "28px", fontWeight: "500" }}
        >
          Sharing of Information
        </Typography>
        <ul style={{ color: "#505660", fontSize: "16px", fontWeight: "400" }}>
          <Typography
            sx={{ color: "#505660", fontSize: "16px", fontWeight: "500" }}
          >
            Both parties agree to maintain the confidentiality of all
            information shared during the project. This includes but is not
            limited to passwords, login information, payment details, and
            business information. 
          </Typography>
        </ul>
      </Box>

      {/* ====================================================================== */}
      <Box id="data-security">
        <Typography
          sx={{ color: "#1D0D40", fontSize: "28px", fontWeight: "500" }}
        >
          Data Security
        </Typography>
        <ul style={{ color: "#505660", fontSize: "16px", fontWeight: "400" }}>
          <Typography
            sx={{ color: "#505660", fontSize: "16px", fontWeight: "500" }}
          >
            We implement various security measures to protect your personal
            information, including encryption and secure storage solutions.
            Despite these measures, no method of transmission over the internet
            or electronic storage is 100% secure. Therefore, while we strive to
            use commercially acceptable means to protect your data, we cannot
            guarantee its absolute security. In addition, you have the right to:
          </Typography>
          <li> Access the personal information we hold about you.</li>
          <li>
            Request the correction of inaccurate information we hold about you.
          </li>
          <li>
            Request the deletion of information about you under certain
            circumstances.
          </li>
          <li>
            Withdraw consent to use your information where such consent has been
            provided.
          </li>
          <li>
            To exercise any of these rights, please contact us at
            info@prevailagency.ie.
          </li>
        </ul>
      </Box>

      {/* ====================================================================== */}
      <Box id="acceptance-of-terms">
        <Typography
          sx={{ color: "#1D0D40", fontSize: "28px", fontWeight: "500" }}
        >
          Acceptance of Terms
        </Typography>
        <ul style={{ color: "#505660", fontSize: "16px", fontWeight: "400" }}>
          <Typography
            sx={{ color: "#505660", fontSize: "16px", fontWeight: "500" }}
          >
            By engaging with Prevail, you acknowledge acceptance of the terms
            outlined in this Privacy Policy. Providing your personal information
            to Prevail and continuing to use our services constitutes your
            agreement to this policy and any future updates. 
          </Typography>
        </ul>
      </Box>

      <Box id="contact-us">
        <Typography
          sx={{ color: "#1D0D40", fontSize: "28px", fontWeight: "500" }}
        >
          Contact Us
        </Typography>
        <ul style={{ color: "#505660", fontSize: "16px", fontWeight: "400" }}>
          <Typography
            sx={{ color: "#505660", fontSize: "16px", fontWeight: "500" }}
          >
            If you have any questions about this Privacy Policy, please contact
            us at vailagency.ie. 
          </Typography>
        </ul>
      </Box>
    </Grid>
  );
};

export default InformationPage;
