import React from 'react';
import SectionHeader from '../common/SectionHeader';

const Projects = ({ data, isEditing, onDataChange }) => {
  
  // 항목 필드 수정 핸들러 (일반 필드)
  const handleItemChange = (id, field, value) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    onDataChange(newData);
  };

  // 'technologies' 배열 수정 핸들러 (문자열 -> 배열로 변환)
  const handleTechnologiesChange = (id, text) => {
    // 쉼표로 분리하고, 각 항목의 앞뒤 공백을 제거하여 배열로 만듦
    const technologiesArray = text.split(',').map(tech => tech.trim()).filter(tech => tech !== '');
    
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, technologies: technologiesArray };
      }
      return item;
    });
    onDataChange(newData);
  };

  // 항목 삭제 핸들러
  const handleItemDelete = (id) => {
    const newData = data.filter(item => item.id !== id);
    onDataChange(newData);
  };

  // 항목 추가 핸들러
  const handleItemAdd = () => {
    const maxId = data.length > 0 ? Math.max(...data.map(i => i.id)) : 0; 
    const newItem = {
      id: maxId + 1,
      title: "새로운 프로젝트 제목",
      period: "기간",
      summary: "요약 설명",
      technologies: ["React", "TypeScript"],
      link: "https://",
    };
    onDataChange([...data, newItem]);
  };

  if (isEditing) {
    return (
      <section>
        <SectionHeader title="주요 프로젝트 (수정)" />
        
        <button onClick={handleItemAdd} style={{ padding: '8px 15px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', marginBottom: '15px', cursor: 'pointer' }}>
          + 프로젝트 항목 추가
        </button>

        {data.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '4px', backgroundColor: '#fcfcfc' }}>
            
            <button 
              onClick={() => handleItemDelete(item.id)} 
              style={{ float: 'right', backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
            >
              삭제
            </button>
            
            {Object.keys(item).filter(key => key !== 'id' && key !== 'technologies').map(field => (
              <div key={field} style={{ marginBottom: '10px' }}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                {/* summary 필드는 textarea로, 나머지는 input으로 처리 */}
                {field === 'summary' ? (
                    <textarea
                        value={item[field]}
                        onChange={(e) => handleItemChange(item.id, field, e.target.value)}
                        rows="3"
                    />
                ) : (
                    <input
                        type="text"
                        value={item[field]}
                        onChange={(e) => handleItemChange(item.id, field, e.target.value)}
                    />
                )}
              </div>
            ))}

            {/* Technologies 필드 (배열 -> 쉼표로 구분된 문자열로 변환) */}
            <div style={{ marginBottom: '10px' }}>
                <label>사용 기술 (쉼표로 구분):</label>
                <input
                    type="text"
                    value={item.technologies.join(', ')} 
                    onChange={(e) => handleTechnologiesChange(item.id, e.target.value)}
                    placeholder="예: React, TypeScript, SCSS"
                />
            </div>
          </div>
        ))}
      </section>
    );
  }

  // 읽기 모드 (디자인 적용)
  return (
    <section>
      <SectionHeader title="주요 프로젝트 (Projects)" />
      {data.map((item) => (
        // 💡 클래스 적용
        <div key={item.id} className="projects-list-item">
          <h4>{item.title} <span className="item-period" style={{ float: 'right', marginTop: 0 }}>{item.period}</span></h4>
          <p style={{ margin: '0 0 10px 0', fontSize: '0.95em' }}>{item.summary}</p>
          <p style={{ margin: '0', fontSize: '0.9em', fontWeight: 'bold' }}>사용 기술: {item.technologies.join(' / ')}</p>
          {item.link && <p style={{ margin: '5px 0 0 0' }}><a href={item.link} target="_blank" rel="noopener noreferrer">🔗 프로젝트 링크</a></p>}
        </div>
      ))}
    </section>
  );
};

export default Projects;