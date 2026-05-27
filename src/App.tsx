import React, { useEffect, useState } from 'react';
import { Menu, X, Mail, BookOpen, Users, Target, Lightbulb, Briefcase, Award, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CONTACT_EMAIL = 'lab.rework26@gmail.com';

const EXPERTS = [
  {
    id: 'yoon',
    name: '윤지연',
    nameEn: 'Jiyeon Yoon',
    image: '/001.jpg',
    title: '데이터와 사람을 잇는 HRD 전문가',
    quote: '"빅데이터로 분석하고, 에듀테크로 설계하며, 코칭으로 변화를 이끌어냅니다."',
    tags: ['#교육컨설턴트', '#피플애널리스트', '#AX_러닝_디자이너', '#퍼실리테이터', '#KPC코치'],
    email: CONTACT_EMAIL,
    summary: '교육공학 석사와 빅데이터(비즈니스인포매틱스) 박사 과정을 통해 인적자원개발(HRD)과 데이터 과학의 융합을 실현하는 전문가입니다. 삼성인력개발원, 웅진씽크빅 등 선도 기업의 데이터 기반 교육 과정 설계 및 자문을 수행했으며, 현재는 생성형 AI와 빅데이터를 활용한 성과 창출형 교육 솔루션을 제공하고 있습니다. 정량적 데이터 분석 역량(파이썬 프로그래밍을 통한 빅데이터 분석, LDA, 텍스트마이닝)과 정성적 코칭/퍼실리테이션 역량(KPC)을 겸비하여 조직의 실질적인 변화를 지원합니다.',
    competencies: [
      'People Analytics: 텍스트 마이닝(LDA) 등을 활용한 조직 진단 및 직원 경험(EX) 설계',
      'AI & Data Literacy: 생성형 AI 및 데이터 분석 도구를 활용한 업무 효율화 및 문제해결',
      'Learning Experience Design: NCS 및 에듀테크 기반의 학습자 중심 교육과정 개발',
      'Facilitation & Coaching: 조직 활성화, 갈등 관리, 비전 수립을 위한 전문 퍼실리테이션'
    ]
  },
  {
    id: 'kim',
    name: '김기현',
    nameEn: 'Kihyun Kim',
    image: '/002.jpg',
    title: '데이터로 진단하고, AI로 설계하며, 교육으로 성과를 만듭니다.',
    quote: '"실전 M&A 경험과 AI 기술을 잇는 비즈니스 전략 파트너"',
    tags: ['#AI교육', '#빅데이터', '#창업교육', '#경영전략', '#마케팅', '#기획력향상', '#평가위원'],
    email: 'kingnation@naver.com',
    summary: '한양대학교에서 MBA 석사와 비즈니스 인포메틱스(빅데이터 전공) 박사 과정을 수료하며 데이터 과학과 경영 전략의 융합을 실현하는 전문가입니다. 라이프앤바이오(주)를 공동 창업하여 글로벌 투자은행(IB)인 모건스탠리PE에 약 800억 원 규모로 매각한 성공적인 엑시트(Exit) 경험을 보유하고 있습니다. 생성형 AI 교육, 빅데이터 분석, 창업 전략 등 기업과 스타트업의 실질적인 성과 창출을 돕는 맞춤형 교육을 제공하고 있습니다.',
    competencies: [
      'AI & Data Literacy: 생성형 AI 교육, 빅데이터 분석 서비스 개발 및 인공지능 융합 서비스 멘토링',
      'Startup & Business Strategy: 신사업 비즈니스 모델 기획, 실전 창업 교육 및 M&A 전략 수립 자문',
      'Business Consulting: 경영 전략, 마케팅, 기획력 향상을 위한 전문 강의 및 컨설팅 수행',
      'Expert Network: 창업진흥원 및 한국전력공사, 정보통신기획평가원, 기업기술정보진흥원 등 평가위원, 한국핀테크지원센터 멘토 활동'
    ]
  },
  {
    id: 'lee',
    name: '이창현',
    nameEn: 'ChangHyun Lee',
    image: '/003.jpg',
    title: '데이터를 가치로 변환합니다.',
    quote: '"문제를 정의하고, 데이터로 그 문제를 해결합니다."',
    tags: ['#디지털트랜스포메이션', '#데이터기반의사결정', '#데이터기반신사업개발'],
    email: 'newdlckdgus@hanyang.ac.kr',
    summary: 'MIS 연구교수입니다. 다양한 데이터 분석 기법과 프로젝트, 학술연구, 강의, 특허 등에 대한 폭넓은 경험으로 디지털 트랜스포메이션 전략, 데이터 기반 의사결정 및 신사업개발 역량을 갖추도록 솔루션을 제공합니다.',
    competencies: [
      'Digital Transformation: AI 기반의 비즈니스 모델 설계, 가설 설정, 리스크 관리, 성과 평가까지 아우르는 풀 스택 전략',
      'Data-driven Decision-making: 분석, 해석, 자동화 프로토콜 개발까지 의사결정 및 신사업 개발에 필요한 정보와 인사이트 제공',
      'Data Analytics: AI 개발, 실험 설계, 인과 추론, 텍스트 분석, 통계 분석, 설문 조사, 디자인 씽킹, 디자인 사이언스, 질적 혼합 연구 등 다양한 데이터 분석 커버리지'
    ]
  },
  {
    id: 'nam',
    name: '남미진',
    nameEn: 'Mijin Nam',
    image: '/004.jpg',
    title: '개인과 조직의 잠재력을 ON하는 코칭전문가',
    quote: '"사람과 사람, 사람과 조직, 현재와 미래를 연결하여 지속 가능한 성장을 설계합니다."',
    tags: ['#전문코치', '#코칭', '#리더십', '#소통', '#갈등관리', '#마음챙김'],
    email: 'mindmj53@gmail.com',
    summary: '비즈니스 코칭 분야에서 15년간 100개 이상의 기업 프로젝트를 수행하며 현장 중심의 데이터와 노하우를 축적해온 코칭 전문가입니다. 신입사원부터 임원, 저성과자부터 핵심 인재에 이르기까지 폭넓은 대상과의 프로젝트 경험을 바탕으로 조직의 맥락을 이해하고 빠르게 공감대와 파트너십을 형성합니다. 심리학 기반의 깊이 있는 내면 통찰을 통해 표면적 변화를 넘어 지속가능한 행동 변화를 설계하며, 개인과 조직의 잠재력을 실질적인 성과로 연결하는 전략적 HRD 솔루션을 제공합니다.',
    competencies: [
      'Leadership & Executive 1:1 Coaching: 신임리더, 저성과자, 핵심인재 리더십 일대일 코칭',
      'Group Coaching: 리더십, 역량개발, 온보딩 그룹코칭',
      'Coaching Program Design: 1on1 및 코칭 프로그램 개발, 사내 코치 육성',
      'Organizational Development: 조직문화 개선',
      'Conflict Management: 갈등관리, 감정관리'
    ]
  },
  {
    id: 'jung',
    name: '정상은',
    nameEn: 'Sangeun Jung',
    image: '/005.jpg',
    title: '개인과 조직의 성장을 돕는 HRD전문가',
    quote: '"Crafting Growth Finding ME"',
    tags: ['#조직개발', '#리더십', '#커뮤니케이션', '#커리어개발', '#성격검사', '#코칭'],
    email: 'doingnow1211@gmail.com',
    summary: '조직개발과 리더십 코칭을 기반으로 개인·임원·팀·조직 단위의 변화를 설계해 온 코치·퍼실리테이터입니다. 대기업 및 공공기관을 대상으로 팀장·임원 코칭, 팀코칭, 조직문화 개선 워크숍을 다수 수행해 왔으며, 온보딩·승진 예정자·중간관리자 대상 리더십 프로그램을 통해 실제 현업 성과와 협업 방식을 변화시키는 데 집중해 왔습니다. 버크만 진단을 활용한 개인 및 리더 코칭과 성격 기반 맞춤형 접근을 강점으로 하며, 조직 맥락을 빠르게 이해하고 실천 가능한 변화로 연결하는 현장 중심 코칭을 지향합니다.',
    competencies: [
      'Leadership & Executive Coaching: 팀장·임원 대상 리더십 코칭, 승진자·온보딩 리더 코칭, 관리 역량 강화 코칭',
      'Team Coaching & Organizational Development: 조직문화 개선, 팀 성과 향상, 신규 조직 및 변화기 팀 대상 팀코칭 설계·운영',
      'Birkman-based Coaching: 버크만 진단을 활용한 개인·리더 맞춤형 코칭, 성격·역할 기반 커뮤니케이션 개선'
    ]
  }
];

const PROGRAMS = [
  {
    id: 'p1',
    number: '01',
    title: 'AX 데이터 드리븐 디자인씽킹',
    target: '데이터와 AI 기술을 활용하여 고객의 니즈와 문제를 명확히 정의하고, 실행 가능한 솔루션을 신속하게 도출해야 하는 실무자 및 리더',
    duration: '3일 (1일 6시간, 총 18시간)',
    objectives: [
      '직관에 의존하던 기존 디자인씽킹에서 벗어나, 데이터(텍스트 마이닝 등)에 기반한 객관적인 문제 정의 능력을 함양한다.',
      '생성형 AI 도구를 활용하여 아이디어를 구체화하고, 고품질의 프로토타입을 신속하게 제작한다.',
      '고객 중심의 사고(Empathy)와 데이터 기술(Tech)을 융합하여 실질적인 비즈니스 문제 해결 역량을 확보한다.'
    ],
    points: [
      'Data-Driven Empathy: 단순히 상상하는 페르소나가 아닌, 소셜 데이터 및 키워드 분석(Topic Modeling)을 통해 검증된 고객의 숨겨진 욕구(Unmet Needs)를 발견한다.',
      'Emotional Connection: 정량적 데이터가 놓칠 수 있는 정서적 공감은 공감지도와 같은 아날로그 방법을 통해 보완하여, 이성과 감성이 결합된 통찰을 도출한다.',
      'AI-Powered Prototyping: 손으로 그리는 스케치를 넘어, AI 툴(Claude, Nano Banana, Midjourney, Gamma 등)을 활용해 즉시 시연 가능한 수준의 시각적 결과물을 도출한다.'
    ]
  },
  {
    id: 'p2',
    number: '02',
    title: 'AI 시대, 리더를 위한 업무 재설계(Job Crafting) 워크숍',
    target: '일반 재직자',
    duration: '1일 (총 5시간)',
    objectives: [
      'AI 도입에 따른 업무 환경 변화를 이해하고, 수동적 적응이 아닌 능동적 변화(Job Crafting)의 필요성을 인식한다.',
      '잡크래프팅의 3가지 요소(과업, 관계, 인지)를 AI 맥락에서 재해석하여 자신의 업무에 적용한다.',
      '구성원들이 AI를 도구로 활용하여 고부가가치 업무에 집중하도록 돕는 리더십 가이드를 수립한다.'
    ],
    points: [
      'Value-Centric Task Redesign: 기계적인 업무 분류가 아닌, 리더가 집중해야 할 \'본질적 가치\'에 주목합니다. 단순 반복 업무는 과감히 AI에 위임하고, 인간 리더만의 고유한 통찰과 판단이 필요한 영역을 확장하는 실질적 방법을 제시한다.',
      'Cognitive Reframing for Efficacy: 단순한 스킬 학습을 넘어, AI에 대한 막연한 불안을 구체적인 \'자기 효능감(Self-Efficacy)\'으로 전환합니다. AI를 대체자가 아닌, 나의 리더십을 증폭시켜 줄 강력한 파트너로 인식(Mindset)부터 재설정한다.',
      'AI-Powered Role Modeling: 추상적인 다짐에서 그치지 않고, 생성형 AI 도구를 활용해 재설계된 업무 정의서와 팀 운영 가이드를 즉시 생성합니다. 변화된 리더십의 실체를 현장에서 눈에 보이는 결과물로 확인한다.'
    ]
  },
  {
    id: 'p3',
    number: '03',
    title: '인간 에이전트, LLM 에이전트와 손을 잡다.',
    target: '일반 재직자',
    duration: '8시간 (1일 또는 4H x 2일)',
    objectives: [
      'LLM의 구조와 활용 가능성, 그리고 한계를 이해할 수 있다.',
      'ChatGPT API로 LLM 및 LLM 에이전트 시스템을 구현한다.',
      '문제를 정의하고 멀티 에이전트 시스템을 기획하여, 버그 수정, 배포, 업그레이드 전략을 이해한다.'
    ],
    points: [
      'LLM 기반 직무(프롬프트 엔지니어, 에이전트 디자이너)가 무엇인지 이해한다.',
      'LLM의 활용 가능성과 한계를 바탕으로 LLM 기반 서비스 기획 및 기존 업무 개선안을 제안할 수 있다.',
      'LLM을 다루는 것이 매우 쉽다는 것을 체감하고, 멀티 에이전트 시스템에서 인간 에이전트로서 나의 역할을 정의한다.'
    ]
  },
  {
    id: 'p4',
    number: '04',
    title: 'PBL(Project Based Learning) - AX 프로젝트',
    target: 'ChatGPT 등 생성형 AI 기본 사용법을 익힌 실무자 (대리~과장급 추천)',
    duration: '1일 3시간, 2회차(총 6시간)',
    objectives: [
      '생성형 AI의 작동 원리를 이해하고, 업무 목적에 맞는 프롬프트를 설계할 수 있다.',
      '최적화된 AI를 활용하여 아날로그 정보를 디지털 데이터로 전환할 수 있다.',
      '디지털 정보로 전환된 내용을 AI와 협업하여 결과물(카드뉴스, 매뉴얼 등)로 산출할 수 있다.'
    ],
    points: [
      'AI 리터러시 내재화: 프롬프트 엔지니어링의 원리를 이해하고, 단순 검색을 넘어 \'생성\'과 \'분석\' 도구로 AI를 활용할 수 있다.',
      '지식 자산화 역량 확보: 현장에 흩어진 암묵지(노하우)를 AI 도구를 활용해 형식지(매뉴얼/콘텐츠)로 빠르고 세련되게 변환할 수 있다.',
      'AI 활용 확산: AI 활용 성공 경험(Small Win)을 만듦으로써, AI 도입의 긍정적 트리거 역할을 수행한다.'
    ]
  },
  {
    id: 'p5',
    number: '05',
    title: 'HR 담당자를 위한 AI 솔루션: 조직문화 진단부터 컬처 덱(Culture Deck) 제작까지',
    target: '조직문화 담당자, HR 담당자, 사내 변화관리자(CA)',
    duration: '8시간 (1일 또는 4H x 2일)',
    objectives: [
      '생성형 AI를 활용하여 사내 게시판, 서술형 설문 등 비정형 데이터(Text)를 분석하고, 우리 조직의 잠재된 이슈와 긍정 요인을 객관적으로 도출할 수 있다.',
      '추상적인 핵심 가치를 AI와의 협업을 통해 구성원들이 즉시 이해하고 실천할 수 있는 구체적인 행동 약속(Do\'s & Don\'ts)과 일하는 방식으로 구체화할 수 있다.',
      '디자인이나 코딩 전문 기술 없이도 AI 툴(이미지 생성, 챗봇 빌더 등)을 활용하여, 조직문화 확산을 위한 시각 자료와 온보딩 가이드를 직접 제작할 수 있다.'
    ],
    points: [
      'HR 업무의 데이터 드리븐(Data-Driven) 전환',
      '비용 절감 및 업무 생산성 극대화',
      '살아있는 조직문화 경험 제공'
    ]
  },
  {
    id: 'p6',
    number: '06',
    title: '우리가 일하는 진짜 이유: Desire 프리즘으로 조직문화를 재창조하다.',
    target: '일반 재직자',
    duration: '8시간 (1일 또는 4H x 2일)',
    objectives: [
      '자체 개발된 [Desire 프리즘] 진단을 통해, 개인이 일을 통해 얻고자 하는 6가지 핵심 욕구(Design, Environment, Safety, Recognition, Identity, Enjoy) 중 자신의 주된 동기 요인을 명확히 파악할 수 있다.',
      '자신의 Desire 유형에 맞춰 업무의 범위(Task), 관계(Relation), 의미(Cognition)를 재조정하는 구체적인 잡 크래프팅 전략을 수립하고, 이를 통해 업무 몰입도를 높이는 실행 계획을 도출할 수 있다.',
      '구성원마다 상이한 Desire를 상호 이해하고 존중하는 커뮤니케이션 방식을 습득하며, 조직의 목표와 개인의 욕구가 정렬(Alignment)되는 \'지속 가능한 일하는 방식\'을 제안할 수 있다.'
    ],
    points: [
      '직무 몰입도 향상 및 조용한 사직(Quiet Quitting) 예방',
      '갈등 비용 감소 및 협업 시너지 창출',
      '핵심 인재 유지(Retention) 및 맞춤형 리더십 발휘'
    ]
  },
  {
    id: 'p7',
    number: '07',
    title: '생성형 AI 기반 업무자동화 과정',
    target: 'ChatGPT 등 생성형 AI 기본 사용법을 익힌 실무자 (대리~과장급 추천)',
    duration: '1일 (총 7시간)',
    objectives: [
      '자신의 직무에서 AI와 협업할 수 있는 구체적인 영역을 식별할 수 있다.',
      'ChatGPT를 활용해 업무 자동화 코드(Python 스크립트 등)를 생성하고 실행할 수 있다.',
      '반복 업무를 자동화하는 나만의 \'AI 업무 파이프라인\' 프레임워크를 설계할 수 있다.'
    ],
    points: [
      '업무 효율화: 반복적이고 소모적인 업무 시간을 단축하여 고부가가치 업무에 집중',
      'AI 리터러시 향상: 업무 데이터를 구조화하고 자동화 로직으로 변환하는 사고력 증진',
      '직무 재설계(Job Crafting): AI를 도구(Tool)가 아닌 동료(Co-worker)로 인식하여 주도적인 업무 환경 구축'
    ]
  },
  {
    id: 'p8',
    number: '08',
    title: 'AI 커넥티드 코칭, 1on1 역량 강화 및 가이드북 설계 워크숍',
    target: '리더(임원 및 중간관리자), 후배 육성 역량이 요구되는 서브리더 및 예비리더, 사내코치',
    duration: '1일 (총 6시간)',
    objectives: [
      '1on1 필수 역량을 강화하고, GROW 대화 모델을 활용하여 구성원의 성장을 이끄는 코칭을 할 수 있다.',
      '구성원의 다양한 상황(저성과자, 온보딩, 커리어 설계 등)에 최적화된 맞춤형 질문 리스트를 생성할 수 있는 전략적 AI 프롬프트를 설계할 수 있다.',
      'AI와 협업하여 도출한 가이드북을 바탕으로 AI 페르소나와 시뮬레이션을 수행하고 피드백을 반영하여 \'나만의 1on1 가이드북\'을 최종 결과물로 산출할 수 있다.'
    ],
    points: [
      '실전 맞춤형 코칭 툴킷 확보: 이론 중심 교육을 넘어, 각 리더의 팀원 상황에 맞춘 실무 밀착형 \'1on1 가이드북\'을 제작 함으로써 코칭의 현업 적용이 가능하다.',
      '심리적 안전감이 확보된 실습 환경: 실제 팀원과 대화하기 전, AI 페르소나와의 시뮬레이션을 통해 시행착오를 최소화하고 리더로서의 대화 자신감을 확보한다.',
      '데이터 기반의 디지털 코칭 역량 강화: AI를 활용하여 사전 준비부터 사후 기록까지 1on1 전 과정을 체계적으로 설계함으로써 코칭 운영의 효율성을 향상한다.'
    ]
  }
];

const SERVICES = [
  {
    title: 'AI HRD 교육',
    href: '/service/org-training',
    description: '생성형 AI와 데이터 분석 도구를 실제 업무 맥락에 맞게 익히고, 구성원이 AI를 성과 창출 도구로 활용하도록 돕습니다.',
    keywords: ['생성형 AI 교육', 'AI 리터러시', '업무 자동화']
  },
  {
    title: '잡 크래프팅 워크숍',
    href: '/service/job-crafting',
    description: '구성원이 과업, 관계, 인식을 주도적으로 재설계하여 직무 몰입도와 일의 의미를 회복하도록 설계합니다.',
    keywords: ['잡 크래프팅', '직무 재설계', '직원 몰입도']
  },
  {
    title: 'AX 전환 교육',
    href: '/service/ax-transformation',
    description: 'AI 도입 과정에서 생기는 불안과 저항을 낮추고, 조직문화 변화관리와 리더십 실행 전략을 함께 다룹니다.',
    keywords: ['AX 전환', '조직문화 변화관리', 'AI 도입 교육']
  }
];

const ROUTE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: '랩리워크 | AI 기반 HRD 교육 전문가 그룹',
    description: '랩리워크는 생성형 AI, HRD 교육, 조직문화 진단, 잡 크래프팅, AX 전환 교육을 통해 구성원의 일하는 방식을 재설계하는 AI 기반 HRD 교육 전문가 그룹입니다.'
  },
  '/services': {
    title: '서비스 소개 | AI HRD 교육 · 잡 크래프팅 · AX 전환 - 랩리워크',
    description: '랩리워크의 AI HRD 교육, 잡 크래프팅 워크숍, AX 전환 교육 서비스를 소개합니다. 상세 콘텐츠는 준비 중입니다.'
  },
  '/service/job-crafting': {
    title: '잡 크래프팅 컨설팅 | 구성원 몰입도와 직무 만족도를 높이는 방법 - 랩리워크',
    description: '잡 크래프팅이란 구성원 스스로 업무를 재설계하여 몰입도를 높이는 조직 개발 기법입니다. 랩리워크의 잡 크래프팅 워크숍 상세 소개는 준비 중입니다.'
  },
  '/service/org-training': {
    title: 'AI HRD 조직 교육 | 생성형 AI와 데이터 기반 교육 프로그램 - 랩리워크',
    description: '랩리워크는 생성형 AI, 데이터 분석, 리더십, 조직문화 교육을 결합한 AI 기반 HRD 조직 교육을 제공합니다. 상세 소개는 준비 중입니다.'
  },
  '/service/ax-transformation': {
    title: 'AX 전환 교육 | AI 도입 시 조직문화 변화관리 전략 - 랩리워크',
    description: 'AI 전환 과정에서 발생하는 구성원 저항, 심리적 불안, 조직 갈등을 관리하는 랩리워크의 AX 전환 교육 상세 소개는 준비 중입니다.'
  },
  '/blog': {
    title: '조직문화 인사이트 | 랩리워크 블로그',
    description: '잡 크래프팅, 조직문화, AX 전환, 리더십에 관한 실무 가이드와 사례 연구를 제공하는 랩리워크 블로그입니다.'
  },
  '/blog/ai-hrd-training': {
    title: 'AI 시대의 HRD 교육, 무엇이 달라져야 할까 | 랩리워크 블로그',
    description: '생성형 AI 확산 이후 HRD 교육이 단순한 도구 교육을 넘어 업무 재설계와 조직문화 변화관리로 확장되어야 하는 이유를 정리합니다.'
  },
  '/blog/genai-organization-change-evidence-based': {
    title: '생성AI는 조직을 어떻게 바꾸는가 | 랩리워크 블로그',
    description: '2022년 이후 발표된 고인용 연구를 바탕으로 생성AI가 일하는 방식, 직무 구조, 학습 체계, 거버넌스에 미치는 영향을 정리합니다.'
  }
};

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  paragraphs: string[];
  takeaways: string[];
  sources?: string[];
};

const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'genai-organization-change-evidence-based',
    title: '생성AI는 조직을 어떻게 바꾸는가: 논문이 말하는 도입 이후의 변화 설계',
    description: 'ChatGPT 이후, 조직은 AI를 도입할 것인가가 아니라 어떻게 정착시킬 것인가를 고민하는 단계로 넘어왔습니다. 최신 연구들은 생성AI의 성과가 모델 성능보다 조직의 변화관리 역량에서 결정된다고 말합니다.',
    category: 'AI HRD',
    date: '2026-05-27',
    readTime: '7분',
    tags: ['생성AI', 'ChatGPT', '조직변화', '변화관리', 'AI HRD', '직무재설계', '구현과학', '조직개발', '디지털전환', 'AI리터러시'],
    paragraphs: [
      '한 의료기관의 사례에서 출발해보자. ChatGPT-4에 의사-환자 대화 녹취를 입력해 SOAP 형식의 진료기록을 자동 생성한 연구(Kernberg et al., 2024)는 평균 23.6건의 오류를 보고했다. 그중 86%가 누락(omission)이었다. 흥미로운 점은 결론이다. 연구진은 AI 도입이 문서 작성 부담을 줄일 가능성은 분명하지만, 기존 워크플로에 매끄럽게 통합되어야 하며 임상가의 검토 단계가 반드시 설계되어야 한다고 밝혔다. 즉, 기술 자체의 정확도보다 조직이 어떻게 검증과 교정 절차를 끼워 넣느냐가 성과를 가른다는 것이다. 이는 생성AI 시대 조직변화의 첫 번째 원칙을 드러낸다. 도구는 워크플로 안에 끼워질 때 비로소 가치를 만든다.',
      '조직 단위에서의 변화는 더 구조적이다. Reddy(2024)는 Implementation Science에 발표한 논문에서 생성AI를 의료조직에 도입하려면 기술수용모델(TAM)과 NASSS(Non-Adoption, Abandonment, Scale-up, Spread and Sustainability) 같은 구현과학(implementation science) 프레임이 필수라고 주장했다. 핵심 메시지는 분명하다. 기술적 역량만으로 복잡한 조직 생태계를 하루아침에 바꿀 수 없으며, 구현과학에 기반한 구조화된 도입 프로그램이 반드시 필요하다는 것이다. 다시 말해, 파일럿-확산-지속의 단계적 변화관리, 이해관계자 참여 설계, 책임 거버넌스가 없이는 도입은 실패하거나 표류한다. 이는 한국 HRD가 지금까지 AI 리터러시 교육 한 줄로 처리해온 영역을 훨씬 넘는 과제다.',
      '조직 내 직무 구조도 재편된다. Bhuyan 외(2025)는 생성AI가 임상 영역뿐 아니라 비임상 행정, 즉 의료문서, 청구·수가관리, 홍보, 교육의 효율을 동시에 끌어올린다고 보고했다. 핵심 결과는 두 가지다. 첫째, 행정 업무 자동화가 임상가 번아웃을 줄여 직접 환자 케어 시간을 확보한다. 둘째, 학습·연구·운영이 지속학습형(continuous learning) 구조로 전환된다. 이 변화는 HR 관점에서 단순한 생산성 향상이 아니라 직무 재설계(job redesign)의 신호다. 반복 행정업무가 줄어든 자리에는 검토·판단·소통 역량을 요구하는 직무가 들어선다. 인사부서는 KSA(지식·기술·태도) 정의를 다시 써야 한다.',
      '조직 통합 관점에서 가장 자주 인용되는 로드맵은 Yu 외(2023)의 연구다. 저자들은 생성AI 도입이 IT 부서만의 과제가 아님을 강조하며, 이해관계자가 함께 설계하는 공동 디자인(co-design) 프로세스를 핵심 원칙으로 제시한다. 임상가, 사용자, 정책담당자, 데이터 거버넌스 담당자가 같은 테이블에 앉지 않으면 RLHF·프롬프트 전략·평가체계 같은 기술 의사결정이 현장과 어긋난다는 것이다. HRD 언어로 옮기면 이렇다. AI는 OD(조직개발) 과제이지, IT 과제가 아니다.',
      '거시적 흐름은 Wang 외(2023)가 Nature에 발표한 리뷰가 가장 명확하게 짚었다. 인용수 500회를 넘긴 이 논문은 자기지도학습과 기하학적 딥러닝, 생성모델이 가설 생성-실험 설계-데이터 해석의 전 과정에 침투하고 있음을 보여주며, AI 도구의 개발자와 사용자 모두 언제 그 접근이 개선되어야 하는지 이해할 역량이 필요하다고 강조했다. 이는 조직 구성원이 AI를 맹신하지도, 회피하지도 않게 만드는 비판적 활용 역량(critical AI competency)의 중요성을 의미한다. 이 역량이 빠진 조직에서는 AI 도입이 곧 의사결정 품질 저하로 직결된다.',
      '마지막으로 Liu 외(2023)가 JAMA에 보고한 임상 활용 연구는 ChatGPT가 의사결정 보조 역할은 잘 수행하지만, 단독 판단자로는 신뢰할 수 없다는 점을 명확히 했다. 이 결론은 모든 산업에 그대로 적용된다. 생성AI는 대체(replacement)가 아니라 증강(augmentation) 도구다. HRD의 메시지도 여기서 출발해야 한다. 두려움이 아닌 협업, 자동화가 아닌 증강, 도입이 아닌 정착.',
      '조직은 이미 변화의 중심에 있다. 질문은 더 이상 AI를 쓸 것인가가 아니다. 우리 조직은 AI를 정착시킬 변화 역량을 갖추고 있는가이다.'
    ],
    takeaways: [
      'AI 도입 성과는 모델 성능이 아니라 조직의 변화관리·구현과학 역량이 결정한다.',
      '생성AI는 임상·행정 워크플로를 동시에 재편하며, 직무 재설계와 KSA 재정의를 요구한다.',
      '도입은 IT 과제가 아니라 OD(조직개발) 과제다. 공동 디자인과 비판적 활용 역량 없이는 정착하지 않는다.'
    ],
    sources: [
      'Wang H, et al. Scientific discovery in the age of artificial intelligence. Nature. 2023;620(7972):47-60. doi:10.1038/s41586-023-06221-2. PMID: 37532811.',
      'Reddy S. Generative AI in healthcare: an implementation science informed translational path on application, integration and governance. Implementation Science. 2024;19(1):27. doi:10.1186/s13012-024-01357-9. PMID: 38491544.',
      'Yu P, Xu H, Hu X, Deng C. Leveraging Generative AI and Large Language Models: A Comprehensive Roadmap for Healthcare Integration. Healthcare (Basel). 2023;11(20):2776. doi:10.3390/healthcare11202776. PMID: 37893850.',
      'Liu J, et al. Utility of ChatGPT in Clinical Practice. J Med Internet Res. 2023;25:e48568. PMID: 37379067.',
      'Kernberg A, Gold JA, Mohan V. Using ChatGPT-4 to Create Structured Medical Notes From Audio Recordings of Physician-Patient Encounters: Comparative Study. J Med Internet Res. 2024;26:e54419. doi:10.2196/54419. PMID: 38648636.',
      'Bhuyan SS, et al. Generative Artificial Intelligence Use in Healthcare: Opportunities for Clinical Excellence and Administrative Efficiency. J Med Syst. 2025;49(1):10. doi:10.1007/s10916-024-02136-1. PMID: 39820845.'
    ]
  },
  {
    slug: 'ai-hrd-training',
    title: 'AI 시대의 HRD 교육, 무엇이 달라져야 할까',
    description: '생성형 AI 확산 이후 HRD 교육은 도구 사용법을 알려주는 단기 교육을 넘어, 구성원이 실제 업무 방식을 재설계하도록 돕는 변화관리 프로그램이 되어야 합니다.',
    category: 'AI HRD',
    date: '2026-05-27',
    readTime: '4분',
    tags: ['AI HRD 교육', '생성형 AI 교육', 'AX 전환', '조직문화'],
    paragraphs: [
      '많은 조직이 생성형 AI 교육을 시작했지만, 교육 이후 업무 방식이 실제로 바뀌지 않는 경우가 많습니다. 이유는 간단합니다. AI 도구 사용법만 익히는 교육은 구성원의 일하는 방식, 의사결정 방식, 협업 문화를 바꾸기 어렵기 때문입니다.',
      'AI 시대의 HRD 교육은 프롬프트 작성법에서 끝나면 안 됩니다. 구성원이 자신의 업무를 다시 정의하고, 반복 업무와 고부가가치 업무를 구분하며, AI를 동료처럼 활용하는 실험을 할 수 있어야 합니다. 이 과정에서 필요한 것은 기술 설명보다 업무 맥락에 맞춘 설계입니다.',
      '랩리워크는 AI 활용 교육을 조직문화와 직무 재설계 관점에서 다룹니다. 구성원의 불안과 저항을 낮추고, 작은 성공 경험을 만들며, 실제 업무 산출물로 이어지는 프로그램을 설계합니다. AI를 배우는 것이 아니라 AI와 함께 일하는 방식을 익히게 하는 것이 핵심입니다.',
      '결국 좋은 AI HRD 교육은 구성원이 “무엇을 자동화할까”보다 “나는 어떤 일에 더 집중해야 할까”를 묻게 만듭니다. 이 질문이 생길 때 AI 교육은 단순한 스킬 교육을 넘어 조직의 성과와 몰입을 높이는 변화의 출발점이 됩니다.'
    ],
    takeaways: [
      'AI 교육은 도구 사용법보다 업무 재설계와 연결되어야 합니다.',
      '구성원의 심리적 불안과 저항을 다루는 변화관리 설계가 필요합니다.',
      '실제 업무 산출물과 작은 성공 경험이 AI 활용 확산의 핵심입니다.'
    ]
  }
];

function getBlogPost(path: string) {
  const slug = path.replace('/blog/', '');
  return BLOG_POSTS.find(post => post.slug === slug);
}

const SERVICE_PAGE_CONTENT: Record<string, { eyebrow: string; heading: string; summary: string; tags: string[] }> = {
  '/service/job-crafting': {
    eyebrow: 'Job Crafting',
    heading: '잡 크래프팅 컨설팅',
    summary: '구성원이 자신의 과업, 관계, 직무 인식을 주도적으로 재설계해 일의 의미와 몰입도를 높이는 조직개발 프로그램입니다.',
    tags: ['잡 크래프팅', '직무 재설계', '직원 몰입도', '번아웃 예방']
  },
  '/service/org-training': {
    eyebrow: 'AI HRD Training',
    heading: 'AI HRD 조직 교육',
    summary: '생성형 AI와 데이터 기반 도구를 조직의 실제 업무에 연결해 구성원의 AI 활용 역량과 HRD 실행력을 높입니다.',
    tags: ['AI HRD 교육', '생성형 AI 교육', '리더십 교육', '조직 교육']
  },
  '/service/ax-transformation': {
    eyebrow: 'AX Transformation',
    heading: 'AX 전환 교육',
    summary: 'AI 도입 과정에서 생기는 불안, 저항, 협업 방식의 변화를 교육과 변화관리 관점에서 다루는 프로그램입니다.',
    tags: ['AX 전환', 'AI 도입', '변화관리', '조직문화']
  }
};

const FAQS = [
  {
    question: '랩리워크는 어떤 회사인가요?',
    answer: '랩리워크는 생성형 AI, 데이터 분석, 조직문화 진단, 잡 크래프팅, AX 전환 교육을 결합해 구성원의 일하는 방식을 재설계하는 AI 기반 HRD 교육 전문가 그룹입니다.'
  },
  {
    question: '잡 크래프팅이란 무엇인가요?',
    answer: '잡 크래프팅은 구성원이 자신의 업무 범위, 동료와의 관계, 직무에 대한 인식을 주도적으로 재설계해 직무 만족도와 몰입도를 높이는 조직개발 접근법입니다.'
  },
  {
    question: 'AX 전환 교육은 DX 교육과 무엇이 다른가요?',
    answer: 'DX가 업무 프로세스의 디지털화에 초점을 둔다면, AX는 AI를 의사결정과 업무 실행에 통합하는 변화입니다. 랩리워크는 기술 활용법뿐 아니라 구성원의 심리적 안전감과 조직문화 변화관리까지 함께 다룹니다.'
  },
  {
    question: '상담은 어떻게 신청하나요?',
    answer: `현재는 이메일 ${CONTACT_EMAIL}로 문의를 받고 있습니다. 조직 상황, 교육 대상, 희망 일정, 관심 프로그램을 보내주시면 맞춤형으로 안내드립니다.`
  }
];

function getCurrentPath() {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path || '/';
}

function setMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setPropertyMeta(property: string, content: string) {
  const tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (tag) tag.setAttribute('content', content);
}

function setCanonical(path: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', `https://www.labrework.com${path === '/' ? '/' : path}`);
}

function usePageMeta(path: string) {
  useEffect(() => {
    const meta = ROUTE_META[path] || ROUTE_META['/'];
    document.title = meta.title;
    setMeta('description', meta.description);
    setPropertyMeta('og:title', meta.title);
    setPropertyMeta('og:description', meta.description);
    setPropertyMeta('og:url', `https://www.labrework.com${path === '/' ? '/' : path}`);
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);
    setCanonical(path);
  }, [path]);
}

function SiteNav({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (open: boolean) => void }) {
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-600 tracking-tight">Lab Re:work</a>

        <div className="hidden md:flex space-x-8 font-medium text-gray-600">
          <a href="/" className="hover:text-blue-600 transition">홈</a>
          <a href="/services" className="hover:text-blue-600 transition">서비스</a>
          <a href="/blog" className="hover:text-blue-600 transition">블로그</a>
          <a href="/#experts" className="hover:text-blue-600 transition">전문가</a>
          <a href="/#programs" className="hover:text-blue-600 transition">프로그램</a>
          <a href="/#contact" className="hover:text-blue-600 transition">문의</a>
        </div>

        <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="메뉴 열기">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-600">
              <a href="/" onClick={closeMenu}>홈</a>
              <a href="/services" onClick={closeMenu}>서비스</a>
              <a href="/blog" onClick={closeMenu}>블로그</a>
              <a href="/#experts" onClick={closeMenu}>전문가</a>
              <a href="/#programs" onClick={closeMenu}>프로그램</a>
              <a href="/#contact" onClick={closeMenu}>문의</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function PendingNotice({ label = '콘텐츠' }: { label?: string }) {
  return (
    <div className="mt-10 rounded-3xl border border-dashed border-blue-200 bg-blue-50/70 px-8 py-12 text-center">
      <p className="text-sm font-bold uppercase tracking-wider text-blue-600">{label}</p>
      <p className="mt-3 text-3xl font-extrabold text-gray-900">준비 중 입니다.</p>
      <p className="mt-4 text-gray-600">곧 상세 콘텐츠를 채워 넣을 예정입니다.</p>
    </div>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-900 font-sans min-h-screen selection:bg-blue-200">
      <SiteNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>{children}</main>
      <footer id="contact" className="py-20 bg-white text-center px-6 border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">AI 기반 HRD 교육이 필요하다면</h2>
        <p className="mb-10 text-gray-500 max-w-2xl mx-auto text-lg">
          조직 상황, 교육 대상, 희망 일정, 관심 프로그램을 보내주시면 랩리워크가 맞춤형으로 안내드립니다.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
        >
          <Mail size={20} />
          <span>문의하기: {CONTACT_EMAIL}</span>
        </a>
      </footer>
    </div>
  );
}

function ServicesPage() {
  return (
    <PageShell>
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-600 font-semibold mb-4 tracking-wider text-sm uppercase">Services</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">서비스 소개</h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl leading-relaxed">
            PDF 3-3~3-5 전략에 맞춰 서비스 허브와 개별 서비스 페이지를 먼저 열어두었습니다.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {SERVICES.map(service => (
              <a key={service.href} href={service.href} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-blue-600 font-bold">
                  상세 페이지 보기 <ArrowRight size={18} />
                </span>
              </a>
            ))}
          </div>

          <PendingNotice label="서비스 소개 본문" />
        </div>
      </section>
    </PageShell>
  );
}

function ServiceDetailPage({ path }: { path: string }) {
  const content = SERVICE_PAGE_CONTENT[path];

  if (!content) return <NotFoundPage />;

  return (
    <PageShell>
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-semibold mb-4 tracking-wider text-sm uppercase">{content.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">{content.heading}</h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">{content.summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {content.tags.map(tag => (
              <span key={tag} className="text-sm font-medium bg-blue-50 text-blue-700 px-4 py-2 rounded-full">{tag}</span>
            ))}
          </div>
          <PendingNotice label={`${content.heading} 상세 콘텐츠`} />
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="/services" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-bold border border-blue-100 hover:bg-blue-50 transition-colors">
              서비스 목록으로
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
              <Mail size={18} />
              상담 문의
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function BlogPage() {
  const categories = ['잡 크래프팅', '조직문화', 'AX 전환', '리더십', 'HR 인사이트'];

  return (
    <PageShell>
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-600 font-semibold mb-4 tracking-wider text-sm uppercase">Blog</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">조직문화 인사이트</h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl leading-relaxed">
            잡 크래프팅, 조직문화, AX 전환, 리더십에 관한 실무 가이드와 사례 연구를 담는 블로그 허브입니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map(category => (
              <span key={category} className="bg-white border border-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium">
                {category}
              </span>
            ))}
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {BLOG_POSTS.map(post => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                  <span className="font-bold text-blue-600">{post.category}</span>
                  <span>{post.date}</span>
                  <span>{post.readTime} 읽기</span>
                </div>
                <h2 className="mt-5 text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">{post.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-blue-600 font-bold">
                  글 읽기 <ArrowRight size={18} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function BlogPostPage({ path }: { path: string }) {
  const post = getBlogPost(path);

  if (!post) return <NotFoundPage />;

  return (
    <PageShell>
      <article className="pt-36 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <a href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-10">
            블로그로 돌아가기
          </a>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="font-bold text-blue-600">{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readTime} 읽기</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            {post.title}
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">{post.description}</p>

          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-sm font-medium bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-12 space-y-7 text-lg text-gray-700 leading-8">
            {post.paragraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <section className="mt-14 rounded-3xl bg-gray-900 text-white p-8">
            <h2 className="text-2xl font-bold">핵심 정리</h2>
            <ul className="mt-6 space-y-4">
              {post.takeaways.map(takeaway => (
                <li key={takeaway} className="flex gap-3 text-gray-100 leading-relaxed">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>

          {post.sources && (
            <section className="mt-12 rounded-3xl border border-gray-100 bg-white p-8">
              <h2 className="text-2xl font-bold text-gray-900">출처</h2>
              <ol className="mt-6 space-y-4 list-decimal list-inside text-sm text-gray-600 leading-relaxed">
                {post.sources.map(source => (
                  <li key={source}>{source}</li>
                ))}
              </ol>
            </section>
          )}

          <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900">AI HRD 교육을 조직에 맞게 설계하고 싶다면</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              조직 상황, 교육 대상, 현재 고민을 보내주시면 랩리워크가 맞춤형 프로그램으로 안내드립니다.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
              <Mail size={18} />
              상담 문의
            </a>
          </div>
        </div>
      </article>
    </PageShell>
  );
}

function NotFoundPage() {
  return (
    <PageShell>
      <section className="pt-36 pb-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">페이지를 찾을 수 없습니다</h1>
        <p className="mt-6 text-xl text-gray-600">요청하신 주소가 아직 준비되지 않았습니다.</p>
        <a href="/" className="mt-10 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors">
          홈으로 돌아가기
        </a>
      </section>
    </PageShell>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState<typeof EXPERTS[0] | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<typeof PROGRAMS[0] | null>(null);
  const path = getCurrentPath();

  usePageMeta(path);

  if (path === '/services') return <ServicesPage />;
  if (path === '/blog') return <BlogPage />;
  if (path.startsWith('/blog/')) return <BlogPostPage path={path} />;
  if (path.startsWith('/service/')) return <ServiceDetailPage path={path} />;
  if (path !== '/') return <NotFoundPage />;

  return (
    <div className="bg-gray-50 text-gray-900 font-sans min-h-screen selection:bg-blue-200">
      <SiteNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <header id="about" className="pt-40 pb-24 px-6 text-center bg-gradient-to-b from-white to-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-blue-600 font-semibold mb-4 tracking-wider text-sm md:text-base uppercase">AI-Powered HRD Expert Group</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900">
            AI 기반 HRD 교육으로<br className="hidden md:block" />
            <span className="text-blue-600">일하는 방식을 재설계합니다</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            랩리워크는 생성형 AI, 조직문화 진단, 잡 크래프팅, AX 전환 교육을 통해
            구성원의 몰입과 조직 성과를 함께 높입니다.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              <Mail size={20} />
              무료 상담 신청하기
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-bold border border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              서비스 살펴보기
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </header>

      {/* Proof Section */}
      <section className="bg-white border-y border-gray-100 px-6 py-10">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl font-extrabold text-blue-600">20+</p>
            <p className="mt-2 text-gray-600 font-medium">기업 협력</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-600">200+</p>
            <p className="mt-2 text-gray-600 font-medium">교육·컨설팅 프로젝트</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-600">AI HRD</p>
            <p className="mt-2 text-gray-600 font-medium">교육·조직개발 전문성</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI 기반 HRD 교육 서비스</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            기술 도입 교육에 머무르지 않고, 구성원이 실제 업무와 조직문화 안에서 AI를 활용하도록 설계합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <span className="text-blue-600 font-mono font-bold">0{idx + 1}</span>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.keywords.map(keyword => (
                  <span key={keyword} className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Experts Section */}
      <section id="experts" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Experts</h2>
          <p className="text-gray-500">각 분야 최고의 전문가들이 실질적인 변화를 이끕니다</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERTS.map((expert, idx) => (
            <motion.div 
              key={expert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 cursor-pointer group flex flex-col h-full"
              onClick={() => setSelectedExpert(expert)}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={expert.image} 
                    alt={`${expert.name} ${expert.title} 프로필 사진`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-50"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-bold text-2xl text-gray-900">{expert.name}</h3>
                    <p className="text-sm text-gray-400 font-medium">{expert.nameEn}</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <ArrowRight size={20} />
                </div>
              </div>
              <p className="text-blue-600 font-semibold mb-4">{expert.title}</p>
              <p className="text-sm text-gray-600 mb-6 italic line-clamp-2">{expert.quote}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {expert.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs font-medium bg-gray-50 text-gray-600 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
                {expert.tags.length > 3 && (
                  <span className="text-xs font-medium bg-gray-50 text-gray-400 px-3 py-1 rounded-full">
                    +{expert.tags.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-gray-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AX Programs</h2>
            <p className="text-gray-400">데이터와 AI를 활용한 실전 교육 프로그램</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map((program, idx) => (
              <motion.div 
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:bg-gray-750 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group flex flex-col h-full"
                onClick={() => setSelectedProgram(program)}
              >
                <span className="text-blue-400 font-mono font-bold text-xl mb-4 block">{program.number}</span>
                <h4 className="font-bold text-lg mb-4 leading-snug group-hover:text-blue-400 transition-colors">{program.title}</h4>
                <p className="text-sm text-gray-400 line-clamp-3 mt-auto">{program.objectives[0]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">자주 묻는 질문</h2>
            <p className="text-gray-500">
              AI 검색과 일반 검색 모두에서 랩리워크의 전문성을 이해할 수 있도록 핵심 질문을 정리했습니다.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <motion.article
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="border border-gray-100 rounded-2xl p-6 bg-gray-50"
              >
                <h3 className="text-lg font-bold text-gray-900">Q. {faq.question}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">A. {faq.answer}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 bg-white text-center px-6 border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">AI 기반 HRD 교육이 필요하다면</h2>
        <p className="mb-10 text-gray-500 max-w-2xl mx-auto text-lg">
          조직 상황, 교육 대상, 희망 일정, 관심 프로그램을 보내주시면 랩리워크가 맞춤형으로 안내드립니다.
        </p>
        <a 
          href={`mailto:${CONTACT_EMAIL}`} 
          className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
        >
          <Mail size={20} />
          <span>문의하기: {CONTACT_EMAIL}</span>
        </a>
        <div className="mt-20 pt-8 border-t border-gray-100 text-sm text-gray-400">
          © {new Date().getFullYear()} Lab Re:work. All rights reserved.
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {selectedExpert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
              onClick={() => setSelectedExpert(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col"
            >
              <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 p-6 flex justify-between items-center z-10 shrink-0">
                <div className="flex items-center gap-4">
                  <img 
                    src={selectedExpert.image} 
                    alt={`${selectedExpert.name} ${selectedExpert.title} 프로필 사진`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedExpert.name}</h3>
                    <p className="text-blue-600 font-medium">{selectedExpert.title}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedExpert(null)}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 sm:p-8 space-y-8">
                <div className="bg-blue-50 p-6 rounded-2xl text-blue-900 italic font-medium text-lg text-center">
                  {selectedExpert.quote}
                </div>
                
                <div>
                  <h4 className="flex items-center text-lg font-bold mb-4 text-gray-900">
                    <Briefcase className="mr-2 text-blue-600" size={20} />
                    Professional Summary
                  </h4>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {selectedExpert.summary}
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center text-lg font-bold mb-4 text-gray-900">
                    <Award className="mr-2 text-blue-600" size={20} />
                    Core Competency
                  </h4>
                  <ul className="space-y-3">
                    {selectedExpert.competencies.map((comp, i) => {
                      const [title, desc] = comp.split(': ');
                      return (
                        <li key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <span className="font-bold text-gray-900 block mb-1">{title}</span>
                          {desc && <span className="text-gray-600 text-sm">{desc}</span>}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {selectedExpert.tags.map(tag => (
                    <span key={tag} className="text-sm font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <Mail size={18} className="mr-2" />
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
              onClick={() => setSelectedProgram(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col"
            >
              <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 p-6 sm:p-8 flex justify-between items-start z-10 shrink-0">
                <div className="pr-8">
                  <span className="text-blue-600 font-mono font-bold text-xl mb-2 block">Program {selectedProgram.number}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">{selectedProgram.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProgram(null)}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors shrink-0"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 sm:p-8 space-y-10">
                <div className="grid sm:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center">
                      <Users size={16} className="mr-2" /> 교육 대상
                    </h4>
                    <p className="text-gray-900 font-medium">{selectedProgram.target}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center">
                      <BookOpen size={16} className="mr-2" /> 교육 시간
                    </h4>
                    <p className="text-gray-900 font-medium">{selectedProgram.duration}</p>
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center text-xl font-bold mb-6 text-gray-900">
                    <Target className="mr-2 text-blue-600" size={24} />
                    교육 목표
                  </h4>
                  <ul className="space-y-4">
                    {selectedProgram.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 mr-4 text-sm font-bold">
                          {i + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{obj}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center text-xl font-bold mb-6 text-gray-900">
                    <Lightbulb className="mr-2 text-blue-600" size={24} />
                    차별화 포인트 & 기대효과
                  </h4>
                  <div className="grid gap-4">
                    {selectedProgram.points.map((point, i) => {
                      const parts = point.split(': ');
                      const hasTitle = parts.length > 1 && parts[0].length < 40;
                      
                      return (
                        <div key={i} className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
                          {hasTitle ? (
                            <>
                              <span className="font-bold text-gray-900 block mb-2 text-lg">{parts[0]}</span>
                              <span className="text-gray-600 leading-relaxed">{parts.slice(1).join(': ')}</span>
                            </>
                          ) : (
                            <span className="text-gray-600 leading-relaxed">{point}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
