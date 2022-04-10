import './ConversationComponent.css';
import TypingBoard from '../typingBoard/TypingBoard';
import ConvBoard from '../convBoard/ConvBoard';
import Message from '../message/Message'
import React, { Component } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function ConversationComponent() {
  const [messageList, setMessageList] = useState('')
  return (
    <div className="all-conv-board">
      <div className="messageComp">
        <ConvBoard messageList={messageList} />
      </div>
      <TypingBoard setter={(props) => {
        var today = new Date();
        if (today.getMinutes() < 10)
          var time = today.getHours() + ":0" + today.getMinutes();
        else
          var time = today.getHours() + ":" + today.getMinutes();
        setMessageList([messageList, <Message content={[props[0], props[1], time]} />]);
      }} />
    </div>
  );
}
export default ConversationComponent;