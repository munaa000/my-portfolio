import React from 'react';
import SectionHeader from '../common/SectionHeader';

const Education = ({ data, isEditing, onDataChange }) => {

  // 항목 필드 수정 핸들러
  const handleItemChange = (id, field, value) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
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
      institution: "새로운 학교 이름", 
      major: "전공", 
      period: "기간", 
      degree: "학위", 
      details: "상세 내용",
    };
    onDataChange([...data, newItem]);
  };

  if (isEditing) {
    return (
      <section>
        <SectionHeader title="학력 (수정)" />
        
        <button onClick={handleItemAdd} style={{ padding: '8px 15px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', marginBottom: '15px', cursor: 'pointer' }}>
          + 학력 항목 추가
        </button>

        {data.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '4px', backgroundColor: '#fcfcfc' }}>
            
            <button 
              onClick={() => handleItemDelete(item.id)} 
              style={{ float: 'right', backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
            >
              삭제
            </button>
            
            {Object.keys(item).filter(key => key !== 'id').map(field => (
              <div key={field} style={{ marginBottom: '10px' }}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                <input
                  type="text"
                  value={item[field]}
                  onChange={(e) => handleItemChange(item.id, field, e.target.value)}
                />
              </div>
            ))}
          </div>
        ))}
      </section>
    );
  }

  // 읽기 모드 (디자인 적용)
  return (
    <section>
      <SectionHeader title="학력 (Education)" />
      {data.map((item) => (
        <div key={item.id} style={{ marginBottom: '15px' }}>
          <h4>{item.institution} ({item.degree})</h4>
          {/* 💡 클래스 적용 */}
          <p className="item-period">{item.major} | {item.period}</p>
          <p style={{ margin: '0', fontSize: '0.9em' }}>{item.details}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;