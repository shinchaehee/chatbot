import React from 'react';
import './CategoryGrid.css';

// 이미지 import
import contactIcon from '../../assets/icons/contact.png';
import libraryIcon from '../../assets/icons/library.png';
import registerIcon from '../../assets/icons/register.png';
import scholarshipIcon from '../../assets/icons/scholarship.png';
import busIcon from '../../assets/icons/bus.png';
import facilityIcon from '../../assets/icons/facility.png';
import tuitionIcon from '../../assets/icons/tuition.png';
import calendarIcon from '../../assets/icons/calendar.png';
import certificateIcon from '../../assets/icons/certificate.png';

const categories = [
  { label: '교내연락처', icon: contactIcon },
  { label: '도서관', icon: libraryIcon },
  { label: '수강신청', icon: registerIcon },
  { label: '장학금', icon: scholarshipIcon },
  { label: '셔틀버스', icon: busIcon },
  { label: '편의시설', icon: facilityIcon },
  { label: '등록금', icon: tuitionIcon },
  { label: '학사일정', icon: calendarIcon },
  { label: '증명서', icon: certificateIcon },
];

export default function CategoryGrid() {
  return (
    <div className="category-wrapper">
      {/* 카테고리 버튼들 */}
      <div className="category-grid">
        {categories.map((cat, i) => (
          <button key={i} className="category-btn">
            <img src={cat.icon} alt={cat.label} />
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* 아래 안내 버튼 */}
      <div className="category-bottom-buttons">
        <button className="info-btn">용인대학교 챗봇 안내</button>
        <button className="info-btn">챗봇 안뇽이 이용 TIP</button>
      </div>
    </div>
  );
}