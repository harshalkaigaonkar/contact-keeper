import React, { useContext } from "react";
import PropTypes from "prop-types";
import contactContext from "../../Context/Contact/ContactContext";
import "./ContactItem.css";

const ContactItem = ({ contact }) => {
  const ContactContext = useContext(contactContext);
  const { deleteContact, setCurrent, clearCurrent } = ContactContext;

  const { _id, name, phone, email, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };
  return (
    <article className='ba br2 bg-lightest-blue dark-gray b--black-10 ma3 mw6 card'>
      <div className='pa2'>
        <div className='container'>
          <div>
            <h3 className='ma0'>{name}</h3>
          </div>
          <div className='spacer' />
          <div>
            <p
              className={
                "f6 pointer dim br3 ph3 pv2 mb2 dib ttc white ma0 " +
                (type === "professional" ? "bg-dark-green" : "bg-dark-blue")
              }
            >
              {type}
            </p>
          </div>
        </div>
        {email && (
          <p className='ma0 pt2 pb2'>
            <i
              className='fas fa-envelope ma0'
              style={{ padding: "0px 10px" }}
            />
            {email}
          </p>
        )}
        {phone && (
          <p className='ma0 pt2 pb2'>
            <i className='fas fa-phone ma0' style={{ padding: "0px 10px" }} />
            {phone}
          </p>
        )}
        <div>
          <p
            className='f6 pointer link dim br3 ph3 pv2 mb2 dib ml1 mr1 bg-black white mb0'
            onClick={() => setCurrent(contact)}
          >
            Edit
          </p>
          <p
            className='f6 pointer link dim br3  ph3 pv2 mb2 dib ml1 mr1 bg-red white mb0'
            onClick={onDelete}
          >
            Delete
          </p>
        </div>
      </div>
    </article>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
