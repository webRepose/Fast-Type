import { useState } from "react";
import Section from "./Section";
import RainbowButton from "./UI/Buttons/RainbowButton";

const TEST = () => {
  const [handText, setHandText] = useState();
  const [handText2, setHandText2] = useState();

  const request = async (url, fun) => {
    await fetch(url, {
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ action: 1 }),
    })
      .then((res) => res.text())
      .then((res) => fun((prev) => (prev = res)));
  };

  const data = {
    action: 1,
  };

  fetch("http://send.kz/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type":
        "application/x-www-form-urlencoded, application/json, charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));

  const request2 = (url, fun) => {
    fetch(url, {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type":
          "application/x-www-form-urlencoded, application/json, charset=utf-8",
      },
      body: JSON.stringify({ key: 1 }),
    })
      .then((res) => res.json())
      .then((res) => fun((prev) => (prev = res)));
  };

  return (
    <main>
      <Section>
        <div style={{ marginBottom: "20px" }}>
          <RainbowButton
            onClick={() => {
              request("http://server.kz/", setHandText);
            }}
          >
            Get date
          </RainbowButton>
          <p>{handText && handText}</p>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h3>Случайное число между:</h3>

          <form action="http://send.kz/" method="POST">
            <input
              required
              pattern="[/[0-9]/]"
              id="num1"
              name="num1"
              type="number"
            />
            <br />
            <br />
            <input
              required
              pattern="[/[0-9]/]"
              id="num2"
              name="num2"
              type="number"
            />
            <br />
            <input
              onClick={(e) => {
                // e.preventDefault()

                request2("http://send.kz/", setHandText2);
                // setTimeout(() => request2('http://send.kz/', setHandText2), 3000)
                // window.location.replace('http://localhost:3000/test');
              }}
              type="submit"
              value="send"
            />
          </form>

          <button
            onClick={() => {
              request2("http://send.kz/", setHandText2);
            }}
          ></button>

          <br />
          <p>{handText2 && handText2}</p>
        </div>
      </Section>
    </main>
  );
};

export default TEST;
