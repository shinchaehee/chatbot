import React from 'react';
import './ChatMessage.css';
import botIcon from '../../assets/icons/ect-icon/bot-icon.png'; // 이미지 import

export default function ChatMessage({ isUser, text }) {
  return (
    <div className={`chat-message ${isUser ? 'user' : 'bot'}`}>
      {/* 챗봇일 때만 캐릭터 아이콘 표시 */}
      {!isUser && (
        <img
          src={botIcon}
          alt="챗봇"
          className="bot-avatar"
        />
      )}
      <div className="message-bubble">{text}</div>
    </div>
  );
}