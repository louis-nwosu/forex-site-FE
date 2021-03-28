import React from "react";

const RowCard = ({ bigIcon, num, muted, smallIcon, mutedSmall }) => {
  return (
    <div className="bg-dark rounded text-light p-1">
      <div className="row mx-3">
        <div className="col-7 mt-2">
          <p className="h4 text-warning">
            <i className={`bi-${bigIcon} display-5`}></i>
          </p>
        </div>
        <div className="col-4">
          <p className="text-muted">{muted}</p>
          <p className="">{num}</p>
        </div>
      </div>
      <div className="row mx-3 mt-1 p-1" style={{borderTop: '1px solid #999'}}>
        <p className="text-muted">
          <i className={`bi-${smallIcon} m-1`}></i>
          {mutedSmall}
        </p>
      </div>
    </div>
  );
};

export const DbFirstRow = ({dept, wt, prt}) => {
  const [cardDate, setCardData] = React.useState([
    {
      bigIcon: "bezier",
      muted: "Deposit",
      num: "150GB",
      smallIcon: "easel",
      mutedSmall: "Update",
    },
    {
      bigIcon: "palette2",
      muted: "Withdraws",
      num: "$1,345",
      smallIcon: "calendar3",
      mutedSmall: "Last day",
    },
    {
      bigIcon: "bullseye",
      muted: "Profit",
      num: "23",
      smallIcon: "clock",
      mutedSmall: "weekend",
    },
    {
      bigIcon: "circle-half",
      muted: "Runs",
      num: "+45K",
      smallIcon: "fullscreen-exit",
      mutedSmall: "Update",
    },
  ]);
  return (
    <div className="container-fluid my-4 py-2">
      <div className="row">
        {cardDate.map((data) => {
          return (
            <div className="col-md-3 my-2">
              <RowCard
                bigIcon={data.bigIcon}
                muted={data.muted}
                num={data.num}
                smallIcon={data.smallIcon}
                mutedSmall={data.mutedSmall}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
