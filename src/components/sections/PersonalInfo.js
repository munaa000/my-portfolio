import React from 'react';
import SectionHeader from '../common/SectionHeader';

const PersonalInfo = ({ data, isEditMode, onUpdate, userId }) => {
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate(name, value);
    };
    
    // 이력서 사진 URL이 초기 데이터에서 "/profile.jpg"로 설정되어 있습니다.
    // Placehoder 크기도 90x120으로 맞춤
    const photoSrc = data.photoUrl || 'https://placehold.co/90x120/0077B6/FFFFFF?text=Photo';
    
    if (isEditMode) {
        return (
            <div className="editable-section personal-info-container">

                {/* 1. 이미지: 인라인 스타일 제거. 크기 제어는 오직 App.css에 의존합니다. */}
                <img 
                    src={photoSrc} 
                    alt="Profile" 
                    // 이전 인라인 스타일 (width: "120px", height: "160px") 제거됨
                />
                <label>사진 URL</label>
                <input 
                    type="text" 
                    name="photoUrl" 
                    value={data.photoUrl} 
                    onChange={handleChange} 
                    placeholder="사진 URL"
                />

                <SectionHeader title="개인 정보 수정" />
                <label>이름</label>
                <input type="text" name="name" value={data.name} onChange={handleChange} />
                <label>이메일</label>
                <input type="text" name="email" value={data.email} onChange={handleChange} />
                <label>전화번호</label>
                <input type="text" name="phone" value={data.phone} onChange={handleChange} />
                <p style={{marginTop: '15px', fontSize: '0.8em', color: '#6c757d'}}>
                    데이터 저장용 사용자 ID: {userId}
                </p>
            </div>
        );
    }

    return (
        <div className="personal-info-container">
            {/* 2. 이미지: 읽기 모드 */}
            <img 
                src={photoSrc} 
                alt={`${data.name}의 프로필 사진`}
                onError={(e) => {
                    e.target.onerror = null; 
                    // Placehoder 크기도 90x120으로 맞춤
                    e.target.src="https://placehold.co/90x120/E9ECEF/444444?text=No+Image"
                }}
            />
            <h1>{data.name}</h1>
            <hr />
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
        </div>
    );
};

export default PersonalInfo;