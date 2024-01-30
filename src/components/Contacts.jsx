import { useState } from "react";
import { v4 } from "uuid";

import ContactLists from "./ContactLists";
import inputs from "../constants/inputs";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter invalid data");
      return;
    }
    setAlert("");

    const newContact = { ...contact, id: v4() };

    setContacts((contacts) => [...contacts, newContact]);
    setContact({ id: "", name: "", lastName: "", email: "", phone: "" });
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };
  return (
    <div>
      <div>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}

        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactLists contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contacts;
