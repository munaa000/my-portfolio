import React from 'react';
import SectionHeader from '../common/SectionHeader';

// HTML 태그를 모두 제거하는 유틸리티 함수
const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
};

const Introduction = ({ data, isEditing, onDataChange }) => {

    const handleTextChange = (e) => {
        onDataChange(e.target.value);
    };

    if (isEditing) {
        return (
            <section>
                <SectionHeader title="자기소개 (수정)" />
                <textarea
                    value={data}
                    onChange={handleTextChange}
                    rows="8"
                    style={{ width: '100%', padding: '10px', fontSize: '1em', resize: 'vertical', border: '1px solid #ccc' }}
                />
            </section>
        );
    }

    // 읽기 모드
    // HTML 태그를 허용하지 않도록 수정합니다. (단, 굵은 글씨용 **는 허용)
    
    // 1. 데이터에서 혹시 모를 HTML 태그를 모두 제거합니다. (단, 마크다운 강조 태그는 남김)
    // 이전에 입력된 악성 HTML/IMG 태그를 제거하는 방어 코드를 추가합니다.
    const cleanedData = stripHtml(data);

    // 2. 굵은 글씨(Bold) 마크다운만 HTML <strong> 태그로 변환합니다.
    const formattedData = cleanedData.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    return (
        <section>
            <SectionHeader title="자기소개 (Introduction)" />
            {/* 안전을 위해 dangerouslySetInnerHTML 대신 정제된 HTML을 사용합니다. */}
            <p 
                style={{ whiteSpace: 'pre-wrap', margin: '0' }} 
                dangerouslySetInnerHTML={{ __html: formattedData }} 
            />
        </section>
    );
};

export default Introduction;