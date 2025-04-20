import React, { useState, useMemo } from 'react';
import './ChatInput.css';
import AutocompleteToggle from '../Autocomplete/Autocomplete';
import sendImg from '../../assets/icons/ect-icon/send-icon.png';
import Select from 'react-select';

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState('');
  const [isChecked, setIsChecked] = useState(true);

  const questionList = [
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
  ];

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  const filteredOptions = useMemo(() => {
    if (!isChecked || input.length < 2) return [];

    const normalizedInput = input.toLowerCase().replace(/\s+/g, '');

    return questionList
      .filter(q => q.toLowerCase().replace(/\s+/g, '').includes(normalizedInput))
      .map(q => ({ label: q, value: q }));
    }, [input, isChecked]);

  return (
    <>
      <div className="autocomplete-box">
        <AutocompleteToggle isChecked={isChecked} onToggle={handleToggle} />
      </div>

      <div className="chat-input-bar">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="질문을 입력하세요"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="send-btn" onClick={handleSend}>
            <img src={sendImg} alt="보내기" className="send-icon" />
          </button>
        </div>

        {isChecked && input.length >= 2 && filteredOptions.length > 0 && (
          <div className="select-wrapper">
            <Select
              className="autocomplete-select"
              options={filteredOptions}
              onChange={(selected) => {
                if (selected && typeof selected.value === 'string') {
                  onSend(selected.value);
                  setInput('');
                }
              }}
              placeholder="추천 질문 선택"
              noOptionsMessage={() => '일치하는 질문이 없어요'}
            />
          </div>
        )}
      </div>
    </>
  );
}
