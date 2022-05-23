import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../component/card";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/questiongroups")
      .then((data) => {
        console.log(data);
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Асуулт давхцсан байна");
      });
  }, []);

  return (
    <div className="harly-check" style={{ margin: "50px auto", maxWidth: "1024px" }}>
      <h1
        className="button mb-6 is-success"
        onClick={() => {
          router.push("/admin");
        }}>
        Админ хуудас руу очих
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        {data?.map((item) => (
          <Card
            key={item._id}
            title={item.name}
            count={item.questions?.length}
            onClick={async () => {
              router.push(`/example/${item.name}`);
              console.log("hi");
            }}
          />
        ))}
      </div>
    </div>
  );
}
