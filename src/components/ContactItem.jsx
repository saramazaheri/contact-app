function ContactItem({
  data: { id, name, lastName, email, phone },
  deleteHandler,
}) {
  return (
    <li key={id}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>{email}</span>
      </p>
      <p>
        <span>{phone}</span>
      </p>
      <button onClick={() => deleteHandler(id)}>Delete</button>
    </li>
  );
}

export default ContactItem;
