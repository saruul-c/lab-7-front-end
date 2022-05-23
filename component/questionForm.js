import React, { useEffect, useState } from "react";

export default function QuestionForm({ onChange = () => {}, value }) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correct, setCorrect] = useState("");
  useEffect(() => {
    if (value) {
      setQuestion(value.question);
      setAnswers(value.answers?.length != 4 ? ["", "", "", ""] : value.answers);
      setCorrect(value.correct);
    }
  }, []);

  useEffect(() => {
    onChange({ question, answers, correct });
  }, [question, answers, correct]);

  return (
    <div className="container">
      <div className="field" style={{ marginBottom: "50px" }}>
        <label className="label">Асуулт</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" value={question} onChange={(e) => setQuestion(e.target.value)} />
        </div>
      </div>

      {answers.map((item, index) => (
        <div className="field">
          <label className="label">Сонголт {index + 1}</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              value={item}
              onChange={(e) => {
                answers[index] = e.target.value;
                setAnswers([...answers]);
              }}
            />
          </div>
        </div>
      ))}

      <div className="field">
        <label className="label">Зөв хариу</label>
        <div className="select">
          <select onChange={(e) => setCorrect(e.target.value)}>
            {answers
              .filter((item) => item)
              .map((item) => (
                <option value={item}>{item}</option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}
