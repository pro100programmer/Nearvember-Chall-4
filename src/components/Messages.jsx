import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      <h2>Messages</h2>
      {messages.map((message, i) =>
        // TODO: format as cards, add timestamp
        <p key={i} class='is-premium'>
           <strong>{message.sender}:<br/>{message.time}</strong><br/>
          {message.text}
          
        </p>
      )}
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
