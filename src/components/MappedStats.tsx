import Stats from "./Stats";
import data from "../data/data.json";

export const MappedStats = () => {
  return (
    <>
      {data.map((el) => {
        return (
          <Stats
            key={el.category}
            color={el.color}
            fontColor={el.fontColor}
            category={el.category}
            icon={el.icon}
            score={el.score}
          />
        );
      })}
    </>
  );
};
