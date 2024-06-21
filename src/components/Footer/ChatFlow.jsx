// import React from "react";

// // Define formStyle outside the component if it is static
// const formStyle = {
//   marginTop: 10,
//   marginLeft: 20,
//   border: "1px solid #491d8d",
//   padding: 10,
//   borderRadius: 5,
//   maxWidth: 300,
// };

// const Flow = () => {
//   const [form, setForm] = React.useState({});

export const flow = {
  start: {
    message: "Hello there! What is your name?",
    function: (params) =>
      setForm((prevForm) => ({ ...prevForm, name: params.userInput })),
    path: "ask_age",
  },
  ask_age: {
    message: (params) =>
      `Nice to meet you ${params.userInput}, what is your age?`,
    function: (params) =>
      setForm((prevForm) => ({ ...prevForm, age: params.userInput })),
    path: "ask_pet",
  },
  ask_pet: {
    message: "Do you own any pets?",
    options: ["Yes", "No"],
    chatDisabled: true,
    function: (params) =>
      setForm((prevForm) => ({
        ...prevForm,
        pet_ownership: params.userInput,
      })),
    path: "ask_choice",
  },
  ask_choice: {
    message: "Select at least 2 pets that you are comfortable to work with:",
    checkboxes: { items: ["Dog", "Cat", "Rabbit", "Hamster"], min: 2 },
    chatDisabled: true,
    function: (params) =>
      setForm((prevForm) => ({ ...prevForm, pet_choices: params.userInput })),
    path: "ask_work_days",
  },
  ask_work_days: {
    message: "How many days can you work per week?",
    function: (params) =>
      setForm((prevForm) => ({
        ...prevForm,
        num_work_days: params.userInput,
      })),
    path: "end",
  },
  //   end: {
  //     message: "Thank you for your interest, we will get back to you shortly!",
  //     render: () => (
  //       <div style={formStyle}>
  //         <p>Name: {form.name}</p>
  //         <p>Age: {form.age}</p>
  //         <p>Pet Ownership: {form.pet_ownership}</p>
  //         <p>Pet Choices: {form.pet_choices}</p>
  //         <p>Num Work Days: {form.num_work_days}</p>
  //       </div>
  //     ),
  //     options: ["New Application"],
  //     chatDisabled: true,
  //     path: "start",
  //   },
};

// };

// export default Flow;
