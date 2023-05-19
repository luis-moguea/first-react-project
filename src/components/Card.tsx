import "../styles/card.css";
import Percentage from "./Percentage";
import { MappedStats } from "./MappedStats";
import Button from "./Button";
import { Navigate } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="card">
        <section className="card__first">
          <h1 className="card__first--result">Your Result</h1>
          <Percentage />
          <h1 className="card__first--great">Great</h1>
          <p className="card__first--text">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>
        <section className="card__second">
          <div className="card__second--div">
            <h1 className="card__second--summary">Summary</h1>
            <MappedStats />
          </div>
          <Button
            onTap={() => {
              return <Navigate to="/" />;
            }}
          />
        </section>
      </div>
    </>
  );
};

export default Card;
