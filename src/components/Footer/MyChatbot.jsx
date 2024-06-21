// MyChatBot.js
import React from "react";
import ChatBot from "react-chatbotify";

const MyChatBot = ({ onClose }) => {
  const [form, setForm] = React.useState({});
  const formStyle = {
    marginTop: 10,
    marginLeft: 20,
    border: "1px solid #491d8d",
    padding: 10,
    borderRadius: 5,
    maxWidth: 300,
    "@media (max-width: 600px)": {
      width: "90vw",
    },
  };

  const flow = {
    start: {
      message: "Hi! Welcome to Prevail, What is your name?",
      function: (params) => setForm({ ...form, name: params.userInput }),
      path: "ask_service",
    },
    ask_service: {
      message: "What service do you want from us?",
      checkboxes: {
        items: [
          "All Services",
          "Brand Identity",
          "Custom Web & Management",
          "Web Developement & Management",
          "Search Engine Marketing(SEM)",
          "Marketing Price Displacement",
          "Digital Accelerator",
        ],
        min: 1,
      },
      chatDisabled: true,
      function: (params) =>
        setForm({ ...form, pet_ownership: params.userInput }),
      path: "ask_meeting",
    },
    ask_meeting: {
      message: (params) =>
        `We can schedule a meeting based on service selected`,
      options: ["Schedule A Meeting", "No"],
      function: (params) => setForm({ ...form, age: params.userInput }),
      path: "end",
    },

    end: {
      message:
        "Thank you for you for contacting Prevail, we will get back to you within the next 48hrs. Note that if you have scheduled a meeting, we will be very much available for it",
      render: (
        <div style={formStyle}>
          <p>Name: {form.name}</p>
          <p>Service: {form.ask_service}</p>
          <p>Meeting: {form.ask_meeting}</p>
          {/* <p>Pet Choices: {form.pet_choices}</p>
          <p>Num Work Days: {form.num_work_days}</p> */}
        </div>
      ),
      options: ["New Application"],
      chatDisabled: true,
      path: "start",
    },
  };

  return (
    <div className="chatbot-container">
      <button className="close-btn" onClick={onClose}></button>
      <ChatBot
        options={{
          theme: { embedded: true },
          chatHistory: { storageKey: "example_basic_form" },
        }}
        flow={flow}
      />
    </div>
  );
};

export default MyChatBot;
