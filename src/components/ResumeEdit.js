import React from 'react';
import ResumeLayout from './layout/ResumeLayout';

// 섹션 컴포넌트 임포트
import PersonalInfo from './sections/PersonalInfo';
import Skills from './sections/Skills';
import Certificates from './sections/Certificates';
import Introduction from './sections/Introduction';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

/**
 * 수정 모드 (Edit Mode) 이력서 전체 컴포넌트
 * App.js로부터 데이터와 데이터 변경 핸들러를 받아 각 섹션에 전달합니다.
 */
const ResumeEdit = ({ data, onDataChange }) => {
  
  // 사이드바에 들어갈 내용 구성
  const sidebar = (
    <>
      <div className="editable-section">
        <PersonalInfo 
          data={data.personal} 
          isEditing={true} 
          onDataChange={(newData) => onDataChange('personal', newData)}
        />
      </div>
      
      <div className="editable-section">
        <Skills 
          data={data.skills} 
          isEditing={true} 
          onDataChange={(newData) => onDataChange('skills', newData)}
        />
      </div>
      
      <div className="editable-section">
        <Certificates 
          data={data.certificates} 
          isEditing={true} 
          onDataChange={(newData) => onDataChange('certificates', newData)}
        />
      </div>
    </>
  );

  // 메인 콘텐츠에 들어갈 내용 구성
  const mainContent = (
    <>
      <div className="editable-section">
        <Introduction 
          data={data.introduction} 
          isEditing={true} 
          onDataChange={(newData) => onDataChange('introduction', newData)}
        />
      </div>
      
      <div className="editable-section">
        <Education 
          data={data.education} 
          isEditing={true} 
          onDataChange={(newData) => onDataChange('education', newData)}
        />
      </div>
      
      <div className="editable-section">
        <Experience 
          data={data.experience} 
          isEditing={true} 
          onDataChange={(newData) => onDataChange('experience', newData)}
        />
      </div>
      
      <div className="editable-section">
        <Projects 
          data={data.projects} 
          isEditing={true} 
          onDataChange={(newData) => onDataChange('projects', newData)}
        />
      </div>
    </>
  );

  return (
    <div className="resume-edit-container">
      <ResumeLayout 
        sidebarContent={sidebar}
        mainContent={mainContent}
      />
    </div>
  );
};

export default ResumeEdit;