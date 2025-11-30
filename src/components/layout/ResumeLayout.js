import React from 'react';

/**
 * 이력서의 2단 레이아웃을 정의하는 컴포넌트
 * @param {JSX.Element} sidebarContent - 사이드바에 들어갈 내용 (개인 정보, 스킬 등)
 * @param {JSX.Element} mainContent - 메인 콘텐츠 영역에 들어갈 내용 (경력, 학력 등)
 */
const ResumeLayout = ({ sidebarContent, mainContent }) => {
  return (
    <div className="resume-layout">
      <div className="sidebar">
        {sidebarContent}
      </div>
      <div className="main-content">
        {mainContent}
      </div>
    </div>
  );
};

export default ResumeLayout;