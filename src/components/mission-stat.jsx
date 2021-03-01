import React from "react";

//util components
const MissionWriteUp = () => {
  return (
    <div className="container py-2 px-1">
      <div className="row">
        <div className="col-md-12">
          <p className="display-6">
            Focused, Active Management of High-Growth Digital Assets
            <span className="text-danger">.</span>
          </p>
          <p className='py-2'>
            Swift Investment Global Ltd is a registered investment platform
            providing digital asset investment management services to
            individuals. We provide a dynamic investment solution to clients in
            need of a self-operating portfolio, as well as a smart fund with
            flexible time and investment amount.
          </p>
        </div>
      </div>
    </div>
  );
};

const MissionImage = () => {
    return <div>
        <img src='./assets/chris-khani-mq0hUlBJvA0-unsplash.jpg' alt='image of phones' className='mission-image' />
    </div>
}

export const MissionStatement = () => {
  return (
    <div className="container-fluid py-5 px-5 bg-dark text-light">
      <div className="row">
        <div className="col-md-6">
          <MissionWriteUp />
        </div>
        <div className="col-md-6">
            <MissionImage />
        </div>
      </div>
    </div>
  );
};
