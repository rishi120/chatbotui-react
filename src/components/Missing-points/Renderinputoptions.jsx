// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// const Renderinputoptions = (props) => {
//   const [hideFormElement, setHideFormElement] = useState(false);
//   const [hideSecondFormElement, sethideSecondFormElement] = useState(false);

//   const Inputprovidername = () => {
//     const checkInputProviderStatus = hideFormElement;
//     if (checkInputProviderStatus) {
//       return (
//         <Form.Group controlId="formBasicText1" style={{ marginTop: "10px" }}>
//           <Form.Label>Please enter input provider</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter input provider"
//             onChange={handleInputField}
//           />
//         </Form.Group>
//       );
//     }
//     return null;
//   };
//   const Inputcustomername = () => {
//     const checkCustomerNameStatus = hideSecondFormElement;
//     if (checkCustomerNameStatus) {
//       return (
//         <Form.Group controlId="formBasicText2">
//           <Form.Label>Please enter customer name</Form.Label>
//           <Form.Control type="text" placeholder="Enter customer name" />
//         </Form.Group>
//       );
//     }
//     return null;
//   };

//   const handleShowOptions = () => {
//     setHideFormElement(true);
//   };

//   const handleInputField = () => {
//     sethideSecondFormElement(true);
//     // console.log(getValue);
//   };

//   return (
//     <div>
//       <Inputprovidername />
//       <Inputcustomername />
//     </div>
//   );
// };

// export default Renderinputoptions;
