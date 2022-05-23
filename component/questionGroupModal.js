import React, { useState } from "react";
import ModalConatiner from "./modalConatiner";
import QuestionForm from "./questionForm";
import axios from "axios";

export default function QuestionGroupModal({ open, onClose = () => {} }) {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  // const [answers, setAnswers] = useState([]);
  return (
    <ModalConatiner open={open} onClose={onClose}>
      <div className="container">
        <label className="label is-size-4 has-text-success">Тестийн нэр</label>
        <input className="input" type="text" placeholder="Тестийн нэр" value={name} onChange={(e) => setName(e.target.value)} />
        {questions.map((item, index) => (
          <div key={item?.name + index}>
            <label className="label is-size-4 has-text-info">{index + 1}-р асуулт</label>
            <QuestionForm
              value={questions[index]}
              onChange={(data) => {
                questions[index] = data;
                setQuestions([...questions]);
              }}
            />
          </div>
        ))}
        <div className="buttons  mt-5">
          {questions.length === 0 ? null : (
            <button
              className="button is-danger"
              onClick={() => {
                questions.splice(questions.length - 1, 1);
                setQuestions([...questions]);
              }}>
              Асуулт хасах
            </button>
          )}
          <button className="button is-success is-outlined" onClick={() => setQuestions([...questions, {}])}>
            Асуулт нэмэх
          </button>
          <button
            className="button is-success"
            onClick={() => {
              if (
                name &&
                questions.length ===
                  questions.filter((item) => item.answers.findIndex((item2) => item2 === item.correct) !== -1 && item.answers?.length === 4).length &&
                questions.filter((item) => item.answers?.length === 4).length > 0
              ) {
                axios
                  .post("http://localhost:8000/create-question", { name, questions: JSON.stringify(questions) })
                  .then((data) => {
                    alert("Амжилттай хадгалагдлаа");
                    console.log(data);
                    window.location.reload();
                  })
                  .catch((err) => {
                    console.log(err);
                    alert("Асуулт давхцсан байна");
                  });
              } else {
                alert("Бүх асуултыг бүрэн оруулна уу");
              }
            }}>
            Тестийг хадгалах
          </button>
        </div>
      </div>
    </ModalConatiner>
  );
}
