import React, { useState } from 'react';
import './Drawer.css';

export default function Drawer({ isOpen, onClose }) {
  const [question, setQuestion] = useState(''); // ✅ 입력값 상태 추가

  if (!isOpen) return null;

  // ✅ 제출 핸들러 추가
  const handleSubmit = () => {
    if (!question.trim()) return; // 아무것도 없으면 무시
    console.log('제출된 질문:', question); // 콘솔 출력
    setQuestion('');   // ✅ 입력값 초기화
    onClose();         // ✅ 창 닫기
  };

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose}></div>

      <div className="drawer-container">
        <button className="drawer-close" onClick={onClose}>×</button>
        <h2 className="drawer-title">질문 제출하기</h2>
        <p>
          챗봇을 통해 원하는 답변을 얻지 못했다면 아래 입력란에 질문을 입력해주세요.<br />
          입력된 답변은 챗봇의 더 정확한 답변을 위해서만 사용됩니다.
        </p>
        <p className="drawer-warning">
          원활한 챗봇 개발을 위해 욕설, 비방, 저속한 표현 등은 삼가해주세요!
        </p>
        
        {/* ✅ 입력값 상태 반영 */}
        <textarea
          className="drawer-textarea"
          placeholder="질문을 입력해주세요."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        
        {/* ✅ 버튼 클릭 시 handleSubmit 호출 */}
        <button className="drawer-submit" onClick={handleSubmit}>
          제출
        </button>
      </div>
    </>
  );
}
