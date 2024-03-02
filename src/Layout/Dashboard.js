import React, { useState } from "react";
import OpenAI from "openai";

const DashBoard = () => {
  const [messageToSend, setMessageToSend] = useState("");
  const [formData, setFormData] = useState({ input: "" });

  const changeHandler = (event) => {
    event.preventDefault();
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const responseHandler = async (event) => {
    event.preventDefault();
    try {
      const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });
      
      const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: formData.input,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      setMessageToSend(response.choices[0].text);
    }
    catch (error) {
           console.error("Error calling OpenAI API:", error);
    }
  };

  return (
    <div className="text-black flex flex-col gap-7 items-center">
      Welcome to DashBoard
      <form onSubmit={responseHandler} className="w-full">
        <input
          type="text"
          name="input"
          onChange={changeHandler}
          value={formData.input}
          className=" rounded-md p-1 w-[50%]"
          placeholder="Enter you query"
        />
        <button type="submit" className="text-white p-1 ml-2 rounded-md bg-green-500">
          Generate
        </button>
      </form>
      <p  id="txt" className="text-white text-justify w-[60%]">{messageToSend}</p>
    </div>
  );
};

export default DashBoard;
