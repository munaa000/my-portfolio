import React from 'react';
import SectionHeader from '../common/SectionHeader';

const Certificates = ({ data, isEditing, onDataChange }) => {
  
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
      name: "새로운 자격증/어학",
      issuedBy: "발급 기관",
      date: "취득일자",
      score: "", 
    };
    onDataChange([...data, newItem]);
  };

  if (isEditing) {
    return (
      <section>
        <SectionHeader title="자격증 (수정)" />
        
        <button onClick={handleItemAdd} style={{ padding: '8px 15px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', marginBottom: '15px', cursor: 'pointer' }}>
          + 자격증 항목 추가
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
      <SectionHeader title="자격증" />
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {data.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>{item.name}</span> ({item.issuedBy})<br/>
            <span className="item-period" style={{ marginTop: '0' }}>취득일: {item.date}{item.score && `, 점수: ${item.score}`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;