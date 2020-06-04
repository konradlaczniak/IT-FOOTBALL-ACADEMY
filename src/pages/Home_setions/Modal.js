import React from "react";
import Modal from "react-bootstrap/modal";
import Button from "react-bootstrap/button";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>{props.title}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.paragraph1}</p>
        <p>{props.paragraph2}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button id="btn-modal" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MoreInfo(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        id="btn-modal"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        See more
      </Button>

      <MyVerticallyCenteredModal
        title={props.title}
        paragraph1={props.paragraph1}
        paragraph2={props.paragraph2}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default MoreInfo;
