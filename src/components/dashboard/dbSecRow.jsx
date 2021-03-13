import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";

//import stylesheet
import "../../App.css";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "investments",
      backgroundColor: "rgba(100,225,100,0.2)",
      borderColor: "rgba(100,225,100,2)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const LineData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "investment",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(225,225,225,0.5)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

export const Chart1 = () => {
  return (
    <>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-8 mx-3 px-3 bg-dark text-light py-1 rounded chart">
            <p className="h3 py-3">Investment bonus</p>
            <Bar
              data={data}
              width={10}
              height={3}
              options={{
                maintainAspectRatio: true,
              }}
            />
          </div>
          <div className="col-md-3 mx-3 px-3 bg-dark text-light py-3 rounded chart">
            <div className="row">
              <div className="col-md-12 text-light p-3">
                <p className="display-5">Gains</p>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-8 mx-2">
                        <p className="">
                          <i className="bi-graph-up h5 text-success"></i>
                          <span className="mx-2">Trending</span>
                        </p>
                      </div>
                      <div className="col-3 ms-auto">
                        <p className="text-light">+2,34</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-8 mx-2">
                        <p className="">
                          <i className="bi-graph-up h5 text-success"></i>
                          <span className="mx-2">Top trades</span>
                        </p>
                      </div>
                      <div className="col-3 ms-auto">
                        <p className="text-success">Gold</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-8 mx-2">
                        <p className="">
                          <i className="bi-graph-up h5 text-success"></i>
                          <span className="mx-2">Bonuses</span>
                        </p>
                      </div>
                      <div className="col-3 ms-auto">
                        <p className="text-primary">+34</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-8 mx-2">
                        <p className="">
                          <i className="bi-graph-up h5 text-success"></i>
                          <span className="mx-2">Bonuses</span>
                        </p>
                      </div>
                      <div className="col-3 ms-auto">
                        <p className="text-primary">+34</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-12 py-3 px-2 bg-dark rounded mx-auto chart">
            <Line
              data={LineData}
              options={{
                title: {
                  display: true,
                  text: "Average investment growth per year",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};
