import React, { forwardRef } from 'react';
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
 * 보기 모드 (Display Mode) 이력서 전체 컴포넌트
 * App.js로부터 최종 데이터를 받아 렌더링합니다.
 */
const ResumeDisplay = forwardRef(({ data }, ref) => {
  
  // 사이드바에 들어갈 내용 구성
  const sidebar = (
    <>
      <PersonalInfo data={data.personal} isEditing={false} />
      <Skills data={data.skills} isEditing={false} />
      <Certificates data={data.certificates} isEditing={false} />
    </>
  );

  // 메인 콘텐츠에 들어갈 내용 구성
  const mainContent = (
    <>
      <Introduction data={data.introduction} isEditing={false} />
      <Education data={data.education} isEditing={false} />
      <Experience data={data.experience} isEditing={false} />
      <Projects data={data.projects} isEditing={false} />
    </>
  );

  return (
    <div className="resume-display-container" ref={ref}>
      <ResumeLayout 
        sidebarContent={sidebar}
        mainContent={mainContent}
      />
    </div>
  );
});

export default ResumeDisplay;