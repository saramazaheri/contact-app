function ContactLists({ contacts }) {
  console.log(contacts);
  return (
    <div>
      <h3>Contact Lists</h3>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContactLists;
