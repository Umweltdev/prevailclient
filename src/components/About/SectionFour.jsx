import React from "react";

const TimelineCard = ({ accentColor, date, title, description }) => (
  <li style={{ "--accent-color": accentColor }}>
    <div className="date">{date}</div>
    <div className="title">{title}</div>
    <div className="descr">{description}</div>
  </li>
);

const Timeline = () => (
  <div>
    <h1 className="timeline-header">Consultation Journey</h1>
    <ul className="ul-list">
      <TimelineCard
        accentColor="#41516C"
        date="Prospect Information Submission"
        title=""
        description="The prospect initiates the process by filling out their information on our website"
      />
      <TimelineCard
        accentColor="#FBCA3E"
        date="Availability confirmation Email"
        title=""
        description="After submission, the prospect receives an email containing a calendar with availability options for a 10-minute call to confirm their interest."
      />
      <TimelineCard
        accentColor="#E24A68"
        date="Consultation Questionnaire Request"
        title=""
        description="During the call, if the prospect expresses interest in proceeding, they receive an email containing the consultation questionnaire document or a website link"
      />
      <TimelineCard
        accentColor="#1B5F8C"
        date="Questionnaire Submission"
        title=""
        description="Upon completion of the questionnaire, the prospect sends or uploads the document."
      />
      <TimelineCard
        accentColor="#ab00ff"
        date="Reminder and Opt-Out for Questionnaire Completion"
        title=""
        description="In case the questionnaire is not completed, the prospect may receive a reminder email, with the option to opt out of receiving further reminders."
      />
      <TimelineCard
        accentColor="#ab63f3"
        date="Meeting Scheduling"
        title=""
        description="The prospect will receive an email to schedule a meeting, the email will contain a calendar with availability options."
      />
      <TimelineCard
        accentColor="#0076ff"
        date="Initial Requirements and Service Presentation"
        title=""
        description="A meeting lasting about an hour is scheduled where Prevail outlines the prospect's requirements, service options, value, and the benefits of choosing Prevail's services."
      />
      <TimelineCard
        accentColor="green"
        date="Proposed Strategy Meeting Scheduling"
        title=""
        description="The prospect receives a calendar email to schedule a meeting to discuss the proposed strategy, its components, and how it aligns with their goals."
      />
      <TimelineCard
        accentColor="red"
        date="Prospect’s Feedback, Payment Agreement and Timeline"
        title=""
        description="Following the meeting, the prospect provides feedback and reaches an agreement on the payment plan and timeline."
      />
      <TimelineCard
        accentColor="#303443"
        date="Contract Document Signing"
        title=""
        description="The prospect receives an email with the contract document for signing and sending back or uploading."
      />
      <TimelineCard
        accentColor="#5a5050"
        date="Client Onboarding and Job Commencement"
        title=""
        description="Once the initial payment is made, the prospect officially becomes Prevail's client, and the marketing work begins. "
      />
    </ul>
    <div className="credits">
      <a
        target="_blank"
        href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm"
      >
        inspired by
      </a>
    </div>
  </div>
);

export default Timeline;
