import { useState } from "react";
import "./modal.css";
import Modal from "./modal";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopop = () => {
    setShowModalPopup(!showModalPopup);
  };
 const onclose = () =>{
    setShowModalPopup(false)
 }

  return (
    <div className="modal-test-container">
      <button onClick={handleToggleModalPopop} className="modal-button">
        Open Modal
      </button>
      {showModalPopup && (
        <Modal
          onClose={onclose}
          header={
            <div>
              <h2>Modal Title</h2>
            </div>

          }
          body={<div>Customized Body</div>}
          footer={<div><h2>Customized Footer</h2></div>}
        />
      )}
    </div>
  );
};

export default ModalTest;
