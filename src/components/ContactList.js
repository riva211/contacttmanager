// import React from "react";
// import ContactCard from "./ContactCard";

// const ContactList = (props) => {
//   console.log(props);

//   const deleteConactHandler = (id) => {
//     props.getContactId(id);
//   };




//   const renderContactList = props.contacts.map((contact) => {
//     return (
//      <ContactCard>
//       contact={contact}
//       clickHandler={deleteConactHandler}
//       key={contact.id}
//       </ContactCard>
//     );
//   });
//   return (
//     <div>
//       <div className="w-full rounded-lg mx-2 bg-slate-300 text-center">
//         <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
//           Contact List
//         </h2>
//       </div>
//       {renderContactList}
//     </div>
//   );
// };
// export default ContactList;

import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  
  return     <div>
       <div className="w-full rounded-lg mx-2 bg-slate-300 text-center">
         <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
           Contact List
        </h2>
       </div>
       {renderContactList}
       </div>
  
};

export default ContactList;