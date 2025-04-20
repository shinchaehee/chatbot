import React, { useState, useMemo } from 'react';
import './ChatInput.css';
import AutocompleteToggle from '../Autocomplete/Autocomplete';
import sendImg from '../../assets/icons/ect-icon/send-icon.png';

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState('');
  const [isChecked, setIsChecked] = useState(true);

  const questionList = useMemo(() => [
    '군휴학에 대하여 설명해주세요.',
    '군 휴학 신청 방법을 알려주세요.',
    '등록금 납부 기간은 언제인가요?',
    '장학금 신청은 어떻게 하나요?',
    '수강신청 일정이 궁금해요.',
    '학사 일정이 어떻게 되나요?',
    '기숙사 신청 방법 알려주세요.',
    '도서관 이용 시간은?',
    '증명서 발급은 어떻게 하나요?',
    '셔틀버스 시간표 알려주세요.'
  ], []);

  const handleSend = (msg) => {
    if (msg.trim()) {
      onSend(msg);
      setInput('');
    }
  };

  const handleToggle = () => {
    setIsChecked(prev => !prev);
  };

  const filteredOptions = useMemo(() => {
    const trimmed = input.trim();
    if (!isChecked || trimmed.length < 2) return [];
    return questionList.filter(q =>
      q.toLowerCase().includes(trimmed.toLowerCase())
    );
  }, [input, isChecked, questionList]);

  return (
    <>
      {/* 자동완성 토글 */}
      <div className="autocomplete-box">
        <AutocompleteToggle isChecked={isChecked} onToggle={handleToggle} />
      </div>

      {/* 추천 질문 리스트 (Select 제거) */}
      {isChecked && input.trim().length >= 2 && filteredOptions.length > 0 && (
        <div className="select-list-wrapper">
          {filteredOptions.map((q, idx) => (
            <div
              key={idx}
              className="suggestion-item"
              onClick={() => handleSend(q)}
            >
              {q}
            </div>
          ))}
        </div>
      )}

      {/* 입력창 */}
      <div className="chat-input-bar">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="질문을 입력하세요"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
          />
          <button className="send-btn" onClick={() => handleSend(input)}>
            <img src={sendImg} alt="보내기" className="send-icon" />
          </button>
        </div>
      </div>
    </>
  );
}
