import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function QuestionDetail() {
  const router = useRouter();

  // console.log(_id);

  const { slug } = router.query;

  const [data, setData] = useState();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/questionGroupDetail/${slug}`)
      .then((data) => {
        console.log(data);
        setData(data.data);
        setAnswers(data.data.questions.map(() => ""));
      })
      .catch((err) => console.log(err));
  }, []);
  function Calculate() {
    let total = data.questions.length;
    let correct = 0;
    data?.questions.forEach((element, index) => {
      element.correct === answers[index] ? correct++ : null;
    });
    alert(`${correct}/${total} (${(correct / total) * 100}%)  ${percentToCharacter((correct / total) * 100)}`);
  }
  function percentToCharacter(percent) {
    if (percent >= 90) return "A Баяр хүргэе 🔥🔥🔥";
    if (percent >= 80) return "B Баяр хүргэе ✨";
    if (percent >= 70) return "C Арай чүү л  🥲";
    if (percent >= 60) return "D Суга 😑";
    return "F сургуулиас хөө 😵";
  }

  return (
    <div className="container" style={{ maxWidth: "1080px", margin: "50px auto", padding: "0 50px", display: "flex", flexDirection: "column" }}>
      <h1 className="is-size-2 is-bolder">Тест ажил: {data?.name}</h1>
      {data?.questions?.map((item, index) => (
        <div>
          <h1 className="is-size-3 mb-5">{item.question}</h1>
          {item.answer.map((item2) => (
            <div class="control mb-2">
              <label class="radio">
                <input
                  type="radio"
                  name={item.question}
                  onChange={(e) => {
                    if (e.target.value) {
                      answers[index] = item2;
                      setAnswers([...answers]);
                    }
                  }}
                />
                {item2}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button className="button is-info" onClick={Calculate}>
        Илгээх
      </button>
      {/* <div className="buttons" style={{ alignSelf: "flex-end" }}></div> */}
    </div>
  );
}
