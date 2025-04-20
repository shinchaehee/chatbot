import { useState } from 'react';
import TopBar from './components/TopBar/TopBar';
import CategoryGrid from './components/CategoryGrid/CategoryGrid';
import ChatInput from './components/ChatInput/ChatInput';
import ChatMessage from './components/ChatMessage/ChatMessage';
import Drawer from './components/Drawer/Drawer';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    {
      isUser: false,
      text: `안녕하세요, 용인대학교 챗봇 안뇽이에요😊\n궁금한 점이 있나요? 언제나 여러분의 궁금증을 해결해주는 안뇽이가 바로 답변해 드려요!😘\n\n궁금하신 점에 대해 간단한 문장 또는 키워드로 질문해주시면 제가 더 잘 이해할 수 있어요!`
    }
  ]);

  // ✅ 드로어 상태
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(prev => !prev);

  const handleSend = (input) => {
    if (!input.trim()) return;

    const newMessages = [...messages, { isUser: true, text: input }];

    const botReply = {
      isUser: false,
      text: '안뇽이가 답변 중이에요! 🐾'
    };

    setMessages([...newMessages, botReply]);
  };

  return (
    <div className="app-container">
      {/* ✅ onMenuClick prop 추가 */}
      <TopBar onMenuClick={toggleDrawer} />

      <div className="main-content">
        <div className="chat-box">
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} isUser={msg.isUser} text={msg.text} />
          ))}
        </div>
        <CategoryGrid />
      </div>

      <ChatInput onSend={handleSend} />

      {/* ✅ 드로어 위치 수정 */}
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </div>
  );
}

export default App;
