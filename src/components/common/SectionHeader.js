import React from 'react';

/**
 * 이력서 섹션의 제목을 표시하는 공통 컴포넌트
 * @param {string} title - 섹션 제목
 */
const SectionHeader = ({ title }) => {
  return (
    <h2 className="section-title">
      {title}
    </h2>
  );
};

export default SectionHeader;