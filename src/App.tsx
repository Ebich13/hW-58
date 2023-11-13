import React, {useState} from 'react';
import Toolbar from './Componets/Toolbar/Toolbar';
import Modal from './Componets/Modal/Modal';
import Alert from './Componets/Alert/Alert';


function App() {
  const [showModal, setShowModal] = useState(true);
  const [showAlert, setShowAlert] = useState(true);


  const modalButtons = [
    { type: 'primary', label: 'Continue', onClick:() => alert("You are ready?") },
    { type: 'danger', label: 'Close', onClick:() => setShowModal(false)},
  ];

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <div className="container mt-5">
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Open Modal
        </button>
        {showModal && (
          <Modal show={showModal} onClose={() => setShowModal(false)} title="Some kinda modal title" buttons={modalButtons}>
            <p>This is modal content</p>
          </Modal>
        )}

        <Alert  type="success" onDismiss={() =>setShowAlert(false)}>
          This is a success type alert
        </Alert>
        {showAlert && (
          <Alert type="warning" clickDismissible onDismiss={() => setShowAlert(false)}>
            This is a warning type alert
          </Alert>
        )}
      </div>
    </>
  );
}



export default App;
