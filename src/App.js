import React, { useState, useRef, useEffect } from 'react';
import { initialResumeData } from './components/data/initialData';
import ResumeDisplay from './components/ResumeDisplay';
import ResumeEdit from './components/ResumeEdit';
import './App.css';


// 로컬 저장소 키 정의
const LOCAL_STORAGE_KEY = 'resumeData';

const App = () => {
  // 1. 상태 초기화: localStorage에서 데이터를 안전하게 로드
  const [data, setData] = useState(() => {
    try {
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        
        // 안전성 체크: 파싱된 데이터가 객체이고 필수 필드(personal)가 있는지 확인
        if (parsedData && typeof parsedData === 'object' && parsedData.personal) {
          return parsedData;
        }
        console.warn("localStorage data is invalid or incomplete. Using initial data.");
      }
      
      return initialResumeData; // 저장된 데이터가 없거나 유효하지 않으면 초기 데이터 사용
      
    } catch (error) {
      console.error("Error loading or parsing data from localStorage. Using initial data:", error);
      return initialResumeData;
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const resumeRef = useRef(null); 

  // 2. 데이터 변경 시 localStorage에 자동 저장
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
    }
  }, [data]); // data 상태가 변경될 때마다 실행

  /**
   * 데이터 업데이트 핸들러
   */
  const handleDataChange = (section, newData) => {
    setData(prevData => ({
      ...prevData,
      [section]: newData
    }));
  };

  /**
   * 인쇄 기능
   */
  const handlePrint = () => {
    if (!isEditing) {
        window.print(); 
    }
  };

  /**
   * 수정 모드 토글 기능
   */
  const toggleEditMode = () => {
    setIsEditing(prev => !prev);
  };

  return (
    <div className="app-container">
      {/* 액션 버튼 영역 */}
      <div className="action-buttons">
        <button className="print-btn" onClick={handlePrint} disabled={isEditing}>인쇄하기 🖨️</button>
        <button className="edit-toggle-btn" onClick={toggleEditMode}>
          {isEditing ? '저장 및 보기 모드 💾' : '수정하기 ✏️'}
        </button>
      </div>

      {/* 이력서 본체 */}
      <div className="resume-wrapper">
        {isEditing ? (
          <ResumeEdit data={data} onDataChange={handleDataChange} />
        ) : (
          <ResumeDisplay data={data} ref={resumeRef} />
        )}
      </div>
    </div>
  );
};

export default App;