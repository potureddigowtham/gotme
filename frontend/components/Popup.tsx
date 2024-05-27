// Popup.tsx
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next') // replace with your app's root element id

const Popup = () => {
  const messages = [
    'Where can i find a tutor?',
    'Hope someone can help me with my homework',
    'How the hell can i get a tutor?',
    'I need help with my office work',
  ];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentMessages, setCurrentMessages] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentMessages.length < messages.length) {
        setModalIsOpen(true);
        setCurrentMessages((prevMessages) => {
          const nextMessage = messages[prevMessages.length % messages.length];
          return [...prevMessages, nextMessage];
        });
      } else {
        clearInterval(timer);
      }
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => {
      clearInterval(timer);
    };
  }, [currentMessages]);

  return currentMessages.map((message, index) => (
    <Modal
      key={index}
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={false}
      contentLabel="My dialog"
      style={{
        content: {
          width: '300px',
          height: '50px',
          position: 'absolute',
          top: `${100 + index * 110}px`, // adjust this value to move the modals down
          left: '5',
          backgroundColor: '#f0f0f0', // add this line to change the background color
          color: '#333', // add this line to change the text color
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        overlay: {
          backgroundColor: 'transparent',
          pointerEvents: 'none',
        },
      }}
    >
      <div>{message}</div>
    </Modal>
  ));
};

export default Popup;