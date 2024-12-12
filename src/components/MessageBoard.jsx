// MessageBoard.jsx
import React, { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([]); // State สำหรับเก็บข้อความทั้งหมด
  const [messageText, setMessageText] = useState(""); // State สำหรับเก็บข้อความที่ผู้ใช้งานพิมพ์ใน Input

  // ฟังก์ชันสำหรับเพิ่มข้อความลงกระดาน
  function handleAddMessage() {
    if (messageText.trim() !== "") {
      // เพิ่มข้อความใหม่เข้าไปใน Array ของข้อความ
      setMessages([...messages, messageText]);
      // ล้าง Input หลังจากเพิ่มข้อความ
      setMessageText("");
    }
  }

  // ฟังก์ชันสำหรับลบข้อความ
  function handleDeleteMessage(indexToRemove) {
    const updatedMessages = messages.filter(function (_, index) {
      return index !== indexToRemove; // เก็บข้อความที่ไม่ตรงกับ index ที่ต้องการลบ
    });
    setMessages(updatedMessages);
  }

  // ฟังก์ชันสำหรับจัดการการกด Enter
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleAddMessage(); // เรียกฟังก์ชันเพิ่มข้อความ
    }
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageText} // เชื่อมต่อ State กับ Input
            onChange={function (event) {
              setMessageText(event.target.value); // อัปเดตข้อความใน State
            }}
            onKeyDown={function (event) {
              handleKeyPress(event); // เรียกฟังก์ชันเมื่อกดปุ่ม
            }}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={function () {
            handleAddMessage(); // เรียกฟังก์ชันเพิ่มข้อความ
          }}
        >
          Submit
        </button>
      </div>
      <div className="board">
        {messages.map(function (message, index) {
          return (
            <div key={index} className="message">
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={function () {
                  handleDeleteMessage(index); // เรียกฟังก์ชันลบข้อความ
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;