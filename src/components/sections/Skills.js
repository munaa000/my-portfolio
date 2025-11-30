import React from 'react';
import SectionHeader from '../common/SectionHeader';

const Skills = ({ data, isEditing, onDataChange }) => {

  // 입력 변경 핸들러
  const handleTextChange = (text) => {
    // 텍스트를 쉼표(,) 기준으로 분리하고, 앞뒤 공백을 제거한 후, 빈 문자열을 필터링하여 배열로 만듦
    const skillsArray = text
      .split(',')
      .map(skill => skill.trim())
      .filter(skill => skill !== '');
      
    onDataChange(skillsArray);
  };

  if (isEditing) {
    return (
      <section>
        <SectionHeader title="기술 역량 (수정)" />
        <p style={{ fontSize: '0.9em', color: '#7f8c8d' }}>기술 목록을 쉼표(,)로 구분하여 입력해 주세요.</p>
        <textarea
          value={data.join(', ')} 
          onChange={(e) => handleTextChange(e.target.value)}
          rows="5"
          placeholder="예: React, JavaScript, SCSS, Git"
        />
      </section>
    );
  }

  // 읽기 모드 (디자인 적용)
  return (
    <section>
      <SectionHeader title="기술 역량" />
      <div className="skills-container">
        {data.map((skill, index) => (
          <span key={index}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;