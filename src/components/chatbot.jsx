import React from "react";

//import style sheet
import "../App.css";

//chat component
const ChatPlate = () => {
  return (
    <>
      <div className="container py-2 rounded bg-light mb-1" id="chat">
        <div className="row">
          <div className="col-md-12">
            <p className="h5">
              scam<span className="text-danger">FX</span> chat services
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 me-auto mb-2">
            <p className="bg-primary text-light p-2 rounded my-3">
              Hello, how are you?
            </p>
          </div>
        </div>
      </div>
      <div className="row mb-4 rounded">
        <div className="row align-center">
          <div className="col-10">
            <div class="input-group">
              <input
                type="text"
                class="form-control pt-1"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
          <div className="col-2 text-center p-1">
            <p className="bg-primary rounded">
              <i className="bi-cursor-fill mt-1 h4 text-light"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const Chatbot = () => {
  const [showChat, setShowChat] = React.useState(true);
  const toggleShowChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="container-fluid fixed-bottom py-5 px-3">
      <div className="row">
        <div className="col-3 ms-auto">
          {showChat && <ChatPlate />}
          <div>
            <p className="text-end mx-4" onClick={toggleShowChat}>
              <i
                className={`${"bi-chat-fill"} text-light h3 bg-primary p-2 rounded`}
              ></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
