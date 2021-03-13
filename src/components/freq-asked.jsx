import React from "react";

//dependency
import AOS from "aos";

//import stylesheet
import "../App.css";

//util components
const FreqWrite = () => {
  return (
    <div className="col-md-12">
      <p className="h4 text-danger py-1">Frequent questions</p>
      <p className="display-5 text-light">
        Build your savings without even trying
        <span className="text-danger">.</span>
      </p>
      <p className="py-3 text-light">
        Turn on Round-up Rules and start saving up effortlessly. Whenever you
        make a purchase, Goals make it easy to save for the things you want or
        want to do. There’s no need for spreadsheets or extra apps to budget and
        track your money.
      </p>
    </div>
  );
};

const QuestionPlate = ({ question, answer }) => {
  const [isAnsVisi, setIsAnsVisi] = React.useState(false);
  const setShow = () => setIsAnsVisi(!isAnsVisi);
  return (
    <div className="row py-3 px-2 rounded lighter-dark text-danger mt-2">
      <div className="col-1">
        <p className="h6" onClick={setShow}>
          <i class="bi-arrow-down-up"></i>
        </p>
      </div>
      <div className="col-10">
        <p className="h6">{question}</p>
        {isAnsVisi && <p>{answer}</p>}
      </div>
    </div>
  );
};

const Questions = () => {
  const questionAns = [
    {
      question: "Guarantee interest returns, but how?",
      answer:
        "Digital assets are a class of assets considered dangerous and inconvenient. Many reasons such as liquidity, money laundering accusation, uncertainty of regulation, access restriction, volatile markets, functionality inquiries reduce trust in these assets. We believe that the risk factor should be eliminated for all people who believe that finance will rise on distributed systems. That's why we offer high interest returns to platform investors. With careful and detailed examination of market conditions, daily trading volume, expectations; we change our portfolio distribution and adjust our investment strategy. With this active fund management, you enjoy the fixed interest rate return on the user side.",
    },
    {
      question: "What are company principles?",
      answer:
        "Successful investment management companies base their business on a core investment philosophy, and Bynamic is no different. Although we offer innovative and specific strategies through digital asset funds, an overarching theme runs through the investment guidance we provide to clients— focus on those things within your control. There are basically four principles that we attach great importance to: ",
    },
    {
      question: "What scamFX?",
      answer:
        "Swift Investment is a registered digital asset investment firm based in the US. The platform, which includes advanced basic and technical analysis at the source of high return performance, offers high & fixed interest return. Aiming for success with its international investor network, experienced team, privileged information from business and technology world; Bynamic stands out from its competitors with its proven quality and ease of use. The company, which is managed under the leadership of people who think and foresee the future, is committed to achieving high returns from well-diversified portfolios and prioritizing clients. ",
    },
    {
      question: "How can i asked for help?",
      answer:
        "Swift Investment is a registered digital asset investment firm based in the US. The platform, which includes advanced basic and technical analysis at the source of high return performance, offers high & fixed interest return. Aiming for success with its international investor network, experienced team, privileged information from business and technology world; Bynamic stands out from its competitors with its proven quality and ease of use. The company, which is managed under the leadership of people who think and foresee the future, is committed to achieving high returns from well-diversified portfolios and prioritizing clients. ",
    },
  ];

  return (
    <div className="col-md-12">
      {questionAns.map((cur) => (
        <QuestionPlate question={cur.question} answer={cur.answer} />
      ))}
    </div>
  );
};

//main componnent here!!
export const Freq = () => {
  AOS.init();
  return (
    <div className="container-fluid py-5 bg-dark px-5">
      <div className="row py-3">
        <div className="col-md-5 mx-auto" data-aos="fade-up">
          <FreqWrite />
        </div>
        <div className="col-md-5 py-2 mx-auto" data-aos="fade-down">
          <Questions />
        </div>
      </div>
    </div>
  );
};
