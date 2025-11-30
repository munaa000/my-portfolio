import React from 'react';
import SectionHeader from '../common/SectionHeader';

const Experience = ({ data, isEditing, onDataChange }) => {

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

  // 'description' 배열 수정 핸들러 (텍스트 영역 사용)
  const handleDescriptionChange = (id, text) => {
    // 텍스트를 줄바꿈 기준으로 배열로 분리하고, 공백 라인은 필터링
    const descriptionArray = text.split('\n').filter(line => line.trim() !== '');
    
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, description: descriptionArray };
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
      company: "새로운 회사 이름", 
      position: "직책/역할", 
      period: "기간", 
      description: ["주요 업무 및 성과 1.", "주요 업무 및 성과 2."],
    };
    onDataChange([...data, newItem]);
  };

  if (isEditing) {
    return (
      <section>
        <SectionHeader title="경력 (수정)" />
        
        <button onClick={handleItemAdd} style={{ padding: '8px 15px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', marginBottom: '15px', cursor: 'pointer' }}>
          + 경력 항목 추가
        </button>

        {data.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '4px', backgroundColor: '#fcfcfc' }}>
            
            <button 
              onClick={() => handleItemDelete(item.id)} 
              style={{ float: 'right', backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
            >
              삭제
            </button>
            
            {/* 일반 필드 입력 (company, position, period) */}
            {Object.keys(item).filter(key => key !== 'id' && key !== 'description').map(field => (
              <div key={field} style={{ marginBottom: '10px' }}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                <input
                  type="text"
                  value={item[field]}
                  onChange={(e) => handleItemChange(item.id, field, e.target.value)}
                />
              </div>
            ))}
            
            {/* Description 필드 (배열 -> Textarea로 변환) */}
            <div style={{ marginBottom: '10px' }}>
                <label>Description (줄바꿈으로 구분):</label>
                <textarea
                    value={item.description.join('\n')} // 배열을 줄바꿈 문자열로 합쳐서 표시
                    onChange={(e) => handleDescriptionChange(item.id, e.target.value)}
                    rows="5"
                    placeholder="주요 업무 및 성과를 줄바꿈(엔터)으로 구분하여 입력해주세요."
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
      <SectionHeader title="경력 (Experience)" />
      {data.map((item) => (
        <div key={item.id} style={{ marginBottom: '20px' }}>
          <h4>{item.company} / {item.position}</h4>
          {/* 💡 클래스 적용 */}
          <p className="item-period">{item.period}</p> 
          <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
            {item.description.map((desc, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;