import { useEffect, useState } from "react";
import data from "../database/data";

const Questions = () => {
  const [checked, setChecked] = useState(undefined);

  const onSelect = () => {
    setChecked(true);
    console.log("radio button change");
  };

  const question = data[0];

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>

      <ul key={question.id}>
        {question.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              onChange={onSelect}
              name="options"
              id={`q${i}-option`}
            />

            <label htmlFor={`q${i}-option`} className="text-primary">
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
