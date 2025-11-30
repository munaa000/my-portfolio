export const initialResumeData = {
  // 1. 개인정보 (PersonalInfo)
  personal: {
    name: "박규나",
    jobTitle: "프론트엔드 개발자",
    phone: "010-2965-1105",
    email: "gyuna0914@naver.com",
    github: "https://github.com/munaa000",
    photoUrl: "/test.jpg", 
  },
  // 2. 자기소개 (Introduction)
  introduction: "저는 **사용자 경험(UX)**에 높은 가치를 두는 프론트엔드 개발자입니다. React를 활용하여 확장성 및 유지보수성이 좋은 웹 애플리케이션을 개발하는 데 집중하며, 동료 개발자와의 원활한 소통을 통해 시너지를 창출합니다.",
  // 3. 학력 (Education)
  education: [
    { id: 1, institution: "인하공업전문대학교", major: "컴퓨터정보공학과", period: "2023.03 - 2026.02", degree: "전문학사", details: "" },
  ],
  // 4. 경력 (Experience)
  experience: [
    { id: 1, company: "", position: "", period: "", description: ["", "", ""] },
  ],
  // 5. 기술 역량 (Skills)
  skills: ["JavaScript", "React", "node.js", "HTML5 / CSS3 (SCSS)", "Git / GitHub", "mysql", "Oracle", "eclipse", "python", "Java"],
  // 6. 자격증 (Certificates)
  certificates: [
    { id: 1, name: "", issuedBy: "", date: "" },
  ],
  // 7. 프로젝트 (Projects)
  projects: [
    { id: 1, title: "운동 웹 사이트 'fitsweat'", period: "2024.08 - 2024.12", summary: "", technologies: ["React", "MySQL", "Eclipse"], link: "https://github.com/munaa000/fitsweat.git" }, 
    { id: 2, title: "반려동물 챗봇 '멍멍케어'", period: "2025.03 - 2025.07", summary: "", technologies: ["React", "MySQL", "spring", "PyTorch", "RASA"], link: "https://github.com/munaa000/chatbot.git" }, 
  ],
};