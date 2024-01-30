import ContactItem from "./ContactItem";

function ContactLists({ contacts, deleteHandler }) {
  return (
    <div>
      <h3>Contact Lists</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p>No contact yet!</p>
      )}
    </div>
  );
}

export default ContactLists;
