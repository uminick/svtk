const projects = [
  {
    "no"          : 1,
    "title"       : "비씨카드 이지바로 연구비 시스템 고도화",
    "description" : "비씨카드 통합연구비관리(Ezbaro) 內 카드신청 및 이용내역 영역 개발 및 관리자 영역 유지보수",
    "startMonth"  : "2020.03",
    "endMonth"    : "2020.09"
  },
  {
    "no"          : 2,
    "title"       : "브이피 IT구조개선 차세대시스템 구축",
    "description" : "SQL 현행화 및 테스트 지원",
    "startMonth"  : "2020.10",
    "endMonth"    : "2020.12"
  },
  {
    "no"          : 3,
    "title"       : "신한카드 마이데이터 구축",
    "description" : "신한플레이(App) 內 마이데이터 서비스영역 프론트 및 관리자 영역 개발",
    "startMonth"  : "2021.01",
    "endMonth"    : "2022.01"
  },
  {
    "no"          : 4,
    "title"       : "농협카드 공공조달 유류구매카드 종합관리시스템 고도화",
    "description" : "표준웹형식(HTML5)에 기반한 공공조달 유류구매카드 종합관리시스템 고도화",
    "startMonth"  : "2022.02",
    "endMonth"    : "2022.07"
  },
  {
    "no"          : 5,
    "title"       : "롯데카드 로카모빌리티/로카페이 시스템 구축",
    "description" : "회원전환 배치 및 API 개발 / 오픈페이 결제관리 영역 API 및 전/후처리 공통영역 개발",
    "startMonth"  : "2022.08",
    "endMonth"    : "2023.01"
  },
];

const awards = [
  {
    "no"           : 1,
    "title"        : "안드로이드(JAVA) 부문 장려상",
    "organization" : "전국컴퓨터교육협의회",
    "date"         : "2017.08"
  }
];

const certifications = [
  {
    "no"           : 1,
    "title"        : "정보처리기사",
    "organization" : "한국산업인력공단",
    "date"         : "2019.08"
  }
];

const specialties = ["Java", "Vue.JS", "JavaScript", "OracleDB"];

const otherInfos = [
  {
    "no"           : 1,
    "title"        : "병전역",
    "description"  : "작전 정보병 만기 전역",
    "startMonth"   : "2014.05",
    "endMonth"     : "2016.02"
  }
];

// projects.sort((a,b)=>{return b.no - a.no});

export async function GET({fetch, request}){
  return new Response(JSON.stringify({
    projects: projects,
    awards: awards,
    certifications: certifications,
    otherInfos: otherInfos
  }));
}