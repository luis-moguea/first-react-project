import "../styles/stats.css";

interface Props {
  category: string;
  icon: string;
  score: number;
  color?: string;
  fontColor?: string;
}

const Stats = (props: Props) => {
  return (
    <ul className="stats">
      <li className="stats__list">
        <section
          style={{ background: props.color }}
          className="stats__list__section"
        >
          <div className="stats__list--first-part">
            <img
              className="stats__list__section--img"
              src={props.icon}
              alt="icons"
            />
            <p
              style={{ color: props.fontColor }}
              className="stats__list__section--text"
            >
              {props.category}
            </p>
          </div>
          <div className="stats__list--second-part">
            <p className="stats__list__section--score">
              {props.score}
              <span>/100</span>
            </p>
          </div>
        </section>
      </li>
    </ul>
  );
};

export default Stats;
