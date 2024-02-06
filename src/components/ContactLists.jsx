import ContactItem from "./ContactItem";

import styles from "./ContactsList.module.css";

function ContactLists({ contacts, deleteHandler }) {
  return (
    <div className={styles.container}>
      <h3>Contact Lists</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No contact yet!</p>
      )}
    </div>
  );
}

export default ContactLists;
