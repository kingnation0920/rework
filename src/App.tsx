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
  '/field-notes': {
    title: '현장 인사이트 | 강의 현장 · 학회 발표 · 기업 워크숍 - 랩리워크',
    description: '랩리워크의 강의 현장, 학회·논문 발표, 기업 워크숍, 교육 운영 사례를 기록하는 현장 인사이트 게시판입니다.'
  },
  '/field-notes/kpc-ai-job-redesign-agent-course': {
    title: 'AI 시대의 직무재설계와 AI 에이전트 활용 과정 안내 | 랩리워크',
    description: '한국생산성본부 AI 시대의 직무재설계와 AI 에이전트 활용 과정에 랩리워크가 함께합니다. AI와 함께 일하는 방식을 재설계하는 실무형 교육입니다.'
  },
  '/field-notes/dongbu-women-ax-data-planner-course': {
    title: 'AX융합 데이터 기반 기획자 교육 현장 | 랩리워크',
    description: '2026년 서울특별시동부여성발전센터 AX융합 데이터 기반 기획자 교육 현장을 기록합니다. AI 리터러시, 파이썬 데이터 분석, 데이터 기반 기획과 취업 포트폴리오 역량을 다룹니다.'
  },
  '/blog/ai-hrd-training': {
    title: 'AI 시대의 HRD 교육, 무엇이 달라져야 할까 | 랩리워크 블로그',
    description: '생성형 AI 확산 이후 HRD 교육이 단순한 도구 교육을 넘어 업무 재설계와 조직문화 변화관리로 확장되어야 하는 이유를 정리합니다.'
  },
  '/blog/genai-organization-change-evidence-based': {
    title: '생성AI는 조직을 어떻게 바꾸는가 | 랩리워크 블로그',
    description: '2022년 이후 발표된 고인용 연구를 바탕으로 생성AI가 일하는 방식, 직무 구조, 학습 체계, 거버넌스에 미치는 영향을 정리합니다.'
  },
  '/blog/organizational-culture-change-covid-genai': {
    title: '조직문화의 변화: 코로나19와 생성AI 이후 일하는 방식 | 랩리워크 블로그',
    description: '코로나19와 생성AI가 조직문화, 원격근무, 심리적 안전감, 번아웃, AI 거버넌스에 만든 변화를 PubMed 기반 고인용 논문으로 정리합니다.'
  },
  '/blog/ai-work-redesign-after-generative-ai': {
    title: 'AI 도입은 왜 교육보다 일의 재설계가 먼저인가 | 랩리워크 블로그',
    description: '2024년 이후 OpenAlex 논문을 바탕으로 AI 도입이 HRD 교육, 직무 재설계, 심리적 안전감, 리더십, 조직 변화관리에 주는 시사점을 정리합니다.'
  },
  '/blog/generative-ai-employee-training-workflow-redesign': {
    title: '생성 AI 직원 교육 디자인 | 일하는 흐름을 바꾸는 교육 - 랩리워크 블로그',
    description: '생성 AI 직원 교육이 단순한 툴 사용법을 넘어 업무 흐름과 직무 맥락을 다시 설계해야 하는 이유를 익명 합성 사례와 최신 연구 흐름으로 정리합니다.'
  },
  '/blog/hr-mega-trend-ai-work-redesign': {
    title: 'HR 메가 트렌드 AI 시대의 워크 리디자인 | 랩리워크 블로그',
    description: 'AI 시대의 워크 리디자인이 왜 단순한 도구 도입을 넘어 일의 분해와 재결합, 데이터 축적 구조 설계로 이어져야 하는지 정리합니다.'
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
  images?: Array<{
    afterParagraph: number;
    src: string;
    alt: string;
    caption: string;
    fit?: 'cover' | 'contain';
  }>;
  takeaways: string[];
  sources?: string[];
};

type FieldNotePost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  location: string;
  tags: string[];
  sections: Array<{
    heading: string;
    paragraphs: string[];
    image?: {
      src: string;
      alt: string;
      caption: string;
    };
  }>;
  applicationGuide?: string;
  link?: {
    label: string;
    href: string;
  };
  poster?: {
    src: string;
    alt: string;
    caption: string;
  };
};

const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'hr-mega-trend-ai-work-redesign',
    title: 'HR 메가 트렌드 AI 시대의 워크 리디자인, 도구 도입을 넘어 일의 본질을 바꾸는 법',
    description: '생성형 AI의 진정한 가치는 단순한 기능 습득이 아니라 업무 프로세스를 해체하고 다시 조립하는 설계 능력에 있습니다.',
    category: 'AI HRD',
    date: '2026-06-25',
    readTime: '8분',
    tags: ['HR 메가 트렌드', '워크 리디자인', '생성형 AI', '직무재설계', 'AI HRD', '디지털 전환', '업무자동화', '조직전략'],
    paragraphs: [
      '생성형 AI의 진정한 가치는 단순한 기능 습득이 아니라 업무 프로세스를 완전히 해체하고 다시 조립하는 설계 능력에 있습니다. 실무자의 하루를 돈과 시간이라는 자원 관점에서 분해해야 비로소 효율적인 기술이 들어갈 빈틈과 사람이 집중해야 할 고부가가치 영역이 선명해집니다. 결국 성공적인 디지털 전환은 무분별한 툴 도입을 지양하고 협업 과정에서 가치 있는 데이터가 자연스럽게 쌓이는 구조를 만드는 데 달려 있습니다.',
      '최근 한 유통 기업 미팅룸에서 리더분들과 마주 앉았을 때의 일입니다. 사내에 여러 생성형 AI 계정을 지급했지만 실무진의 활용률은 제자리걸음이었고, 정작 중요한 핵심 업무에는 여전히 시간이 부족하다는 불만이 터져 나오고 있었습니다. 이는 요즘 많은 조직이 마주한 HR 메가 트렌드 AI 시대의 워크 리디자인에 대한 핵심적인 고민입니다.',
      '그렇다면 우리가 당면한 HR 메가 트렌드 AI 시대의 워크 리디자인이란 무엇일까요? 이것은 단순히 새로운 소프트웨어를 설치하는 기술적 도입을 뜻하지 않으며, 조직 구성원이 매일 수행하는 직무의 세부 과업을 완벽하게 분해하고 재결합하여 기술과 인간이 가장 이상적인 시너지를 내도록 일의 생태계를 다시 설계하는 일련의 조직 전략을 말합니다.',
      '기술은 넘쳐나는데 왜 정작 중요한 일에 쓸 시간은 부족할까',
      '수많은 기업들이 인공지능 도구들을 앞다투어 현장에 도입합니다. 대부분의 조직이 걷고 있는 디지털 여정의 첫걸음은 이처럼 단순한 도구 도입 단계에 머물러 있습니다. 이 단계에서는 어떤 성과를 만드는 방식을 택해야 할지, 어디서부터 어떻게 뜯어고쳐야 할지 막연한 질문들만 겉돌게 됩니다.',
      '비즈니스 환경에서 가장 중요하고 유한한 자원은 결국 돈과 시간입니다. 우리가 조직의 혁신을 위해 가장 먼저 들여다보아야 할 핵심은 바로 돈과 시간을 쓰는 실제 사람들의 하루입니다. 아무리 뛰어난 기술 인프라를 갖추고 있더라도, 현장의 실무자들이 일과 시간의 대부분을 단순 반복 업무에 빼앗기고 있다면 그 기술은 무용지물이 될 수밖에 없습니다.',
      '진짜 중요한 고객을 위해 더 깊이 고민하고 가치 있는 질문을 던질 여유가 주어지지 않기 때문입니다. 많은 조직이 바로 이 지점에서 한계에 부딪혀 랩리워크를 찾게 됩니다.',
      '업무를 완벽하게 해체하고 다시 조립하는 분해와 재결합의 원칙',
      '이러한 문제를 해결하기 위해 랩리워크가 컨설팅 현장에서 중요하게 여기는 접근법은 기술 교육 이전에 일의 맥락과 흐름을 먼저 정교하게 분석하는 것입니다. 워크 리디자인 방법론의 핵심은 일의 분해와 일의 재결합이라는 구체적인 혁신 원칙에 있습니다.',
      '비즈니스 부서와 인사 부서가 긴밀하게 협업하여 실제 실무자들이 수행하는 모든 과업을 아주 미세한 단계까지 완벽하게 해체하는 작업이 선행되어야 합니다. 현장에서 실제로 무슨 일이 어떤 순서로 일어나고 있는지 확인할 때, 비로소 자원이 새어나가는 낭비의 구조가 드러나고 기술이 들어갈 최적의 영역을 식별할 수 있습니다.',
      '일의 해체가 끝난 후에 비로소 진정한 일의 재결합 단계로 나아갈 수 있습니다. 재결합의 대원칙은 고부가가치 업무 중심으로 역할을 전면 재편하고, 단순 반복 처리 업무는 기술을 통해 최대한 자동화하며, 고도의 복잡한 판단이나 관계 조율 및 협업은 사람이 담당하도록 역할을 다시 정의하는 것입니다.',
      '이를 통해 핵심 인재들이 공급사나 고객과의 고부가가치 협상에 그들의 소중한 돈과 시간을 온전히 집중할 수 있도록 업무의 판을 새로 짜는 것이 워크 리디자인의 궁극적인 지향점입니다.',
      '생성형 기술이 지닌 과학적 근거',
      '이처럼 과업 단위로 직무를 재구성하는 접근 방식은 계량화된 연구와 과학적 데이터로도 증명되고 있습니다. 에릭 브린욜프슨 교수가 이끈 연구진의 연구 결과에 따르면, 생성형 기술 기반의 보조 도구를 실제 업무 환경에 도입했을 때 직원의 시간당 과업 해결률로 측정된 생산성이 평균 14%에서 15%가량 향상되었습니다.',
      '생산성 향상의 혜택이 주니어 실무자들에게 더 압도적으로 집중되었다는 사실은 기술 시스템이 조직 내부의 노하우를 빠르게 확산시키는 촉매제 역할을 수행함을 보여줍니다. 단순히 도구의 사용법만 나열하는 교육으로는 이와 같은 구조적 성과를 기대하기 어렵습니다.',
      '글로벌 HR 리서치 기관들의 최신 동향 보고서 역시 기술 도입이 성공적인 비즈니스 전환으로 이어지기 위해서는 직무를 구성하는 하위 과업들을 철저하게 대조하고 인력 운영의 아키텍처를 새롭게 조립하는 거시적 관점의 직무 재설계 프로세스가 반드시 동반되어야 한다고 제안하고 있습니다.',
      '그래서 저는 조직을 만날 때마다, 눈앞의 도구 자체에 매몰되기보다 일하는 과정에서 확보되는 데이터에 먼저 집중하시라고 조언해 드립니다. 결국 일터에서의 핵심 싸움은 데이터가 올바르게 쌓이고 있느냐에 달려 있습니다. 수많은 서비스형 소프트웨어 도구들이 무분별하게 범람하는 상황 속에서, 우리는 무엇을 과감하게 버리고 무엇을 핵심 자산으로 남길 것인지 냉정하게 결정해야 합니다.',
      '랩리워크는 프롬프트 명령어 몇 줄을 단순히 암기시키는 강의를 지향하지 않습니다. 기술과 데이터가 유기적으로 연동되는 연결 및 통합 단계를 점검하고, 업무 방식 자체가 인공지능과 인간의 협업 중심으로 완벽히 재편되는 전환 단계를 함께 만들어 가고자 합니다. 일하는 구조 자체를 디자인할 때 조직의 지속 가능한 성장이 가능해집니다.',
      'HR 메가 트렌드 AI 시대의 워크 리디자인 프로젝트는 조직에 언제 가장 필요한가요?',
      '사내에 다양한 솔루션과 인공지능 인프라를 도입했음에도 불구하고 직원들의 업무 과부하가 해소되지 않거나 생산성 향상이 체감되지 않을 때 요구됩니다. 특히 핵심 직무의 담당자들이 본연의 가치 있는 업무보다 단순 반복적인 메일 확인, 행정 입력, 데이터 정리 등 서류 작업에 과도한 에너지를 빼앗기고 있다면 즉시 과업 분해와 재설계 작업을 시작해야 합니다.',
      '일반적인 IT 중심의 자동화 구축과 HR 중심의 워크 리디자인의 차이는 무엇인가요?',
      '정보기술 부서가 주도하는 기술 중심 자동화는 주로 시스템의 데이터 처리 속도를 높이거나 비용을 효율화하는 등 기계적인 최적화에 초점을 맞춥니다. 반면 인적자원 관리 관점의 워크 리디자인은 사람의 경험과 역할, 그리고 조직학습의 유기적인 역동에서 출발합니다. 기술의 도움으로 확보한 여유 자원을 고부가가치 과업에 전략적으로 재배치할 것인지 설계하고, 구성원들이 기술을 도구 삼아 더 주도적으로 전문성을 발휘할 수 있도록 일의 생태계를 구축한다는 점에서 차이가 있습니다.',
      '우리가 속한 조직의 일터 생태계는 지금 어떤 단계를 지나고 있습니까. 랩리워크는 현장의 수많은 리더, 그리고 실무자분들과 함께 끊임없이 이 질문을 던지며 내일의 일하는 방식을 바꾸는 작고 실천적인 실험들을 이어 나가고 있습니다. 여러분의 소중한 인재들이 오늘 하루 가장 가치 있는 질문을 던지고 위대한 고민에 그들의 지혜를 온전히 쏟아부을 수 있도록, 이제 화려한 기술의 장막 뒤에 숨겨진 진짜 일의 맥락을 마주해 보시기를 바랍니다.'
    ],
    images: [
      {
        afterParagraph: 2,
        src: '/blog/hr-mega-trend-work-redesign-01.jpg',
        alt: 'HR MEGA TREND 세미나 강연장 전경',
        caption: '2026년 상반기 HR MEGA TREND 세미나, AI 시대의 워크 리디자인 현장'
      },
      {
        afterParagraph: 12,
        src: '/blog/hr-mega-trend-work-redesign-03.jpg',
        alt: 'AI 시대의 워크 리디자인 세미나 프로그램 안내판',
        caption: '워크 리디자인은 인재전략, 성과관리, 인력운영, HR의 재발견까지 연결되는 조직 설계의 문제다.',
        fit: 'contain'
      },
      {
        afterParagraph: 18,
        src: '/blog/hr-mega-trend-work-redesign-02.jpg',
        alt: 'AI 시대의 워크 리디자인 세미나 입구 배너',
        caption: 'AI 시대의 워크 리디자인은 도구 도입을 넘어 일의 본질을 다시 묻는 과정이다.',
        fit: 'contain'
      }
    ],
    takeaways: [
      '생성형 AI의 가치는 기능 습득보다 업무 프로세스를 해체하고 다시 조립하는 설계 능력에서 나온다.',
      '실무자의 하루를 돈과 시간의 관점에서 분해해야 기술이 들어갈 영역과 사람이 집중할 영역이 선명해진다.',
      '성공적인 디지털 전환은 무분별한 툴 도입보다 가치 있는 데이터가 자연스럽게 쌓이는 업무 구조를 만드는 데 달려 있다.'
    ],
    sources: [
      'Brynjolfsson E, Li D, Raymond LR. Generative AI at Work. NBER Working Paper No. 31161. 2023. doi:10.3386/w31161.',
      'Draup for Talent. Work Redesign Framework. Draup Insights. 2026.'
    ]
  },
  {
    slug: 'generative-ai-employee-training-workflow-redesign',
    title: '단순한 툴 사용법을 넘어 일하는 흐름을 바꾸는 생성 AI 직원 교육 디자인',
    description: '생성 AI 직원 교육의 핵심은 기능 학습이 아니라 흩어진 업무 단계를 유기적으로 연결하는 전체 워크플로우의 재설계에 있습니다.',
    category: 'AI HRD',
    date: '2026-06-18',
    readTime: '7분',
    tags: ['생성 AI 직원 교육', 'AI HRD', '업무 재설계', '워크플로우', '직무재설계', 'AX 전환', '조직학습', '랩리워크'],
    paragraphs: [
      '생성 AI 직원 교육의 핵심은 기능 학습이 아니라 흩어진 업무 단계를 유기적으로 연결하는 전체 워크플로우의 재설계에 있습니다. 개별 작업의 완벽함보다 전체 업무 흐름의 단절과 조율 비용을 줄이는 시스템적 관점이 실질적인 조직의 생산성을 결정합니다. 랩리워크는 단순한 프롬프트 실습을 넘어 현업의 맥락을 분석하고 작은 실험을 통해 조직 내에 실행 문화를 정착시킵니다.',
      '한 고객사에서 이런 장면을 봤습니다. 전국의 매장 운영을 총괄하는 현장 리더들이 모인 자리였습니다. 회사에서 유료 생성형 AI 계정을 배포했지만 실무자들은 이메일 초안 작성에만 도구를 쓰고 있었습니다. 매일 쏟아지는 수백 건의 고객 불만 분석과 매뉴얼 정비라는 진짜 핵심 업무에는 활용하지 못하고 있었지요.',
      '조직에서 말하는 진정한 생성 AI 직원 교육이란 무엇일까요? 이것은 단순히 명령어 조작법을 익히는 도구 학습을 뜻하지 않습니다. 생성 AI 직원 교육은 구성원이 자신의 직무 맥락을 깊이 이해하고 인공지능과 협업하여 기존의 일하는 방식과 업무 흐름을 근본적으로 다시 구조화하는 직무 재설계 과정을 말합니다.',
      '도구는 쥐어졌지만 갈 길을 잃은 업무 현장의 목소리',
      '이 사례는 특정 기업 한 곳의 이야기가 아니라 저희가 여러 프로젝트에서 반복해서 마주치는 익명 합성 사례입니다. 많은 경영진이 최신 기술만 도입하면 조직이 저절로 혁신될 것이라 기대합니다. 하지만 교육장에서 만난 실무자들의 고민은 완전히 달랐습니다. AI가 좋다는 것은 알겠는데 내 업무 중 정확히 어느 단계에 툴을 끼워 넣어야 할지 모르겠다는 호소였습니다.',
      '실제로 유통 서비스업 현장에서는 매일 다양한 형태의 정성 데이터가 발생합니다. 매장 방문 고객의 불만이나 현장 매니저들의 피드백 등이 결합된 복잡한 맥락의 업무입니다. 직원들은 AI에게 단발성으로 질문을 던졌다가 원론적인 답변이 돌아오면 이내 실망하고 익숙한 수작업 방식으로 돌아가곤 했습니다. 도구의 문제가 아니라 AI를 다루는 일의 구조가 잡히지 않았기 때문입니다.',
      '기능의 반복이 만드는 함정과 단절된 워크플로우의 한계',
      '제가 이 문제를 볼 때 중요하게 보는 건 개별 과업의 생산성 함정입니다. 조직 안에서 일어나는 업무는 결코 단절된 하나의 점으로 존재하지 않습니다. 질문을 던지고 답변을 얻고 이를 검증하여 다음 단계 보고서에 반영하는 연속적인 사슬 구조를 이룹니다. 이러한 교육이 실패하는 가장 큰 이유는 바로 이 사슬을 고려하지 않고 프롬프트 작성법 같은 파편화된 기술만 가르치기 때문입니다.',
      '직원들이 현장에서 겪는 진짜 보틀넥은 조율 비용에 있습니다. AI가 초안을 잡아주더라도 이를 인간이 다시 검토하고 양식을 바꾸고 다른 부서에 전달하는 과정에서 수많은 단절이 일어납니다. 시스템적 관점이 부족한 상태에서의 도구 도입은 오히려 직원들에게 AI 산출물을 검증하고 수정해야 하는 새로운 형태의 관리 노동을 부과하여 업무 피로도를 높이는 부작용을 낳기도 합니다.',
      '과업의 단편화에서 시스템적 사슬 구조로의 전환을 증명하는 연구',
      '이러한 현장 패턴은 최근 경영학 및 기술 채택 분야의 연구 흐름과도 맞닿아 있습니다. MIT 슬론 경영대학원 연구진이 발표한 2026년 연구는 생성형 AI의 가치가 단일 과업의 효율성뿐 아니라 전체 워크플로우를 어떻게 시퀀싱하고 연결하는가에 달려 있음을 설명합니다. 이 연구는 과업 사슬화라는 개념을 제시하며 인접한 과업들을 AI 친화적인 클러스터로 묶어 연속적으로 처리할 때 조율 비용이 최소화된다고 봅니다. 인간과 기계 사이의 불필요한 인수인계 검문소를 줄이는 것이 시스템 전체의 효율성을 높인다는 뜻입니다.',
      '글로벌 컨설팅 기업 맥킨지의 2025년 변화관리 보고서에서도 비슷한 흐름이 관찰됩니다. 보고서에 따르면 생성형 AI 도입 후 성과를 내는 고성과 기업들은 단순한 도구 사용법 교육에 그치지 않고 직무 프로세스 자체를 재구성하는 정형화된 교육을 제공했습니다. 특히 실무자들이 업무 흐름 내에 AI를 직접 통합시키는 훈련을 받았을 때 활용 빈도와 고부가가치 업무 집중도가 비약적으로 상승했습니다.',
      '랩리워크가 제안하는 직무 맥락 기반의 학습과 작은 실험',
      '그래서 저는 이런 고객사를 만날 때마다 도구 자체를 강조하지 않습니다. 랩리워크가 현장에서 중요하게 보는 지점은 구성원들이 매일 처리하는 일의 흐름입니다. 랩리워크는 이 지점을 단순한 일회성 강의로만 풀지 않습니다. 우리는 현장 리더들과 함께 그들의 업무 과정을 펼쳐놓고 AI가 연속해서 처리할 수 있는 사슬 구간을 발굴하는 일종의 업무 재설계 워크숍을 결합합니다.',
      '예를 들어 앞서 언급한 합성 사례의 경우 고객 피드백 데이터가 수집되면 AI가 자동으로 감정을 분류하고 연이어 카테고리별 요약을 수행하며 동시에 매장 운영 매뉴얼 매칭까지 완료하도록 흐름을 재설계했습니다. 인간은 마지막 단계에서 맥락적 판단과 최종 의사결정만 내리도록 역할을 재정의하는 것입니다. 도구보다 일의 흐름을 먼저 보고 이를 작은 실험으로 바꾸어 현업에 적용해야 비로소 변화가 정착됩니다. 랩리워크는 이처럼 기술 도입의 정체기를 겪는 조직들과 함께, 도구가 아닌 일하는 방식의 사슬을 어떻게 다시 연결할 것인가라는 근본적인 질문을 던지며 변화의 여정을 시작합니다.',
      '생성 AI 직원 교육은 언제 도입하는 것이 가장 효과적인가요?',
      '전사적으로 AI 도구 라이선스를 배포했으나 실제 업무 활용률이 정체되어 있을 때, 혹은 디지털 전환을 추진 중이지만 실무진의 변화 저항과 막연한 불안감이 높을 때 가장 필요합니다. 특히 부서별 업무 프로세스가 고착화되어 단순한 소프트웨어 도입만으로는 생산성 개선이 어려울 때 워크플로우 재설계와 결합된 교육이 강력한 돌파구가 됩니다.',
      '일반적인 프롬프트 활용 강의와 랩리워크의 교육 방식은 어떤 차이가 있나요?',
      '일반적인 강의가 범용적인 명령어 패턴이나 기능적인 사용법을 일방향으로 전달한다면 랩리워크의 교육은 고객사의 실제 현업 데이터와 도메인 맥락을 기반으로 진행됩니다. 툴의 기능을 외우는 것이 아니라 참가자들이 직접 자신의 업무 사슬을 쪼개고 AI 협업 구조로 재조립하는 실습 중심의 컨설팅형 과정을 지향합니다.'
    ],
    takeaways: [
      '생성 AI 직원 교육은 프롬프트 기능 학습보다 업무 흐름 재설계를 먼저 다뤄야 한다.',
      'AI 도입의 병목은 개별 산출물보다 검토, 전달, 조율이 끊기는 지점에서 생긴다.',
      '랩리워크는 고객사의 실제 직무 맥락을 바탕으로 AI가 이어서 처리할 수 있는 업무 사슬을 찾고 작은 실험으로 정착시킨다.'
    ],
    sources: [
      'Mayer H, Yee L, Chui M, Roberts R. Reconfiguring work: Change management in the age of gen AI. McKinsey & Company. 2025.',
      'Demirer M, Horton JJ, Immorlica N, Lucier B, Shahidi P. Chaining Tasks, Redefining Work: A Theory of AI Automation. arXiv. 2026. arXiv:2606.15960.'
    ]
  },
  {
    slug: 'ai-work-redesign-after-generative-ai',
    title: 'AI 도입은 왜 교육보다 ‘일의 재설계’가 먼저인가: 2024년 이후 논문들이 말하는 조직 변화의 조건',
    description: '2024년 이후 OpenAlex에서 확인한 AI·HRD·조직학습 관련 논문들은 공통적으로 말한다. AI 도입의 핵심은 도구 사용법 교육이 아니라, 업무 맥락과 역할, 심리적 안전감, 리더십, 거버넌스를 함께 재설계하는 일이다.',
    category: 'AI HRD',
    date: '2026-06-05',
    readTime: '8분',
    tags: ['AI HRD', '생성형 AI', '직무재설계', '조직학습', '심리적 안전감', 'AI 리터러시', '리더십', '변화관리'],
    paragraphs: [
      '생성형 AI 교육을 요청하는 조직에서 가장 자주 나오는 질문은 “우리 직원들이 어떤 도구를 배워야 할까요?”이다. 하지만 2024년 이후 발표된 AI·HRD·조직학습 연구들을 보면, 더 중요한 질문은 따로 있다. “우리 조직은 AI가 들어온 뒤 일을 어떻게 다시 설계할 것인가?”라는 질문이다.',
      'OpenAlex API로 2024년 이후 발표된 AI와 HRD, 조직학습, 직무 변화 관련 논문을 살펴보면 흐름은 꽤 선명하다. AI는 단순히 업무 속도를 높이는 도구가 아니다. 채용, 성과관리, 코칭, 리더십, 학습, 심리적 안전감, 조직 정의감까지 건드리는 변화 요인이다. 그래서 AI 도입을 교육 프로그램 하나로 처리하면 현장에서는 금방 한계가 드러난다. 사람들은 사용법은 배우지만, 언제 써야 하는지, 어떤 결과를 믿어야 하는지, 내 역할이 어떻게 달라지는지는 여전히 모른다.',
      'Frontiers in Psychology에 발표된 2024년 스코핑 리뷰는 AI가 HR 활동에 미치는 영향을 다섯 가지로 정리한다. 업무 자동화, HR 데이터 활용 최적화, 인간 역량의 증강, 업무 맥락의 재설계, 그리고 일의 사회적·관계적 측면의 변화다. 여기서 중요한 표현은 “업무 맥락의 재설계”다. AI가 들어오면 HR은 단순히 기존 업무를 빠르게 처리하는 것이 아니라, 누가 판단하고, 누가 검토하며, 어떤 기준으로 공정성을 확인할지 다시 정해야 한다.',
      '이 관점에서 AI HRD 교육은 프롬프트 작성법만 가르치는 방식으로는 부족하다. 구성원은 AI에게 지시하는 법뿐 아니라, AI가 만든 결과를 검토하는 법, 자신의 직무에서 자동화 가능한 일과 사람이 책임져야 할 일을 구분하는 법, 그리고 AI 활용 과정에서 발생하는 편향과 오류를 조직적으로 다루는 법을 배워야 한다.',
      '제조·린 조직을 대상으로 한 2024년 연구도 비슷한 시사점을 준다. 연구는 AI가 직원 몰입에 어떤 영향을 미치는지 살펴보며, AI 도입이 현장의 참여와 태도에 직접 영향을 줄 수 있음을 보여준다. 린 조직에서 성과는 프로세스만으로 나오지 않는다. 구성원이 개선 활동에 참여하고, 자신의 일이 더 나아지고 있다고 느낄 때 성과가 난다. AI도 마찬가지다. 구성원이 AI를 “내 일을 감시하거나 대체하는 시스템”으로 느끼면 몰입은 떨어진다. 반대로 “내 판단과 개선 활동을 돕는 도구”로 경험하면 AI는 참여를 높이는 촉매가 될 수 있다.',
      'AI 코칭 관련 연구들은 HRD에 더 직접적인 질문을 던진다. 2024년 Human Resource Development International에 실린 연구는 전 세계 비즈니스 코치 436명을 대상으로 AI 코칭에 대한 태도와 위협 인식을 분석했다. AI는 시간과 비용 측면에서 새로운 가능성을 열지만, 동시에 전문직 종사자에게 위협감과 방어적 반응을 불러올 수 있다. 또 다른 2024년 논문은 디지털·AI 코칭의 윤리 이슈를 다루며, 코치 훈련과 슈퍼비전, 윤리 역량, 인간 코치와 AI의 통합적 접근 필요성을 강조한다.',
      '이 연구들이 말하는 바는 분명하다. AI는 사람의 전문성을 단순 대체하는 방식으로 들어오면 저항을 만든다. 그러나 전문가의 판단과 관계 형성을 보완하는 방식으로 설계되면 새로운 역할을 만든다. HRD가 해야 할 일은 “AI 코치가 사람 코치를 대체할까?”를 묻는 것이 아니라, “AI가 들어온 코칭 환경에서 인간 코치는 어떤 고유한 가치를 더 선명하게 가져가야 하는가?”를 묻는 것이다.',
      '2025년 한국 직장인을 대상으로 한 AI 도입과 심리적 안전감 연구는 더 날카로운 경고를 준다. 연구는 조직의 AI 도입이 심리적 안전감에 부정적 영향을 줄 수 있고, 이것이 직원 우울 수준과 연결될 수 있음을 분석했다. 동시에 윤리적 리더십이 이 관계를 조절하는 요인으로 제시된다. 즉 AI 도입은 기술 프로젝트가 아니라 리더십 프로젝트다. 구성원이 “실수해도 말할 수 있다”, “AI 결과에 의문을 제기해도 된다”, “내 역할 변화에 대해 이야기할 수 있다”고 느끼지 못하면 AI 도입은 생산성보다 불안을 먼저 키울 수 있다.',
      '그래서 AI 시대의 리더십은 도구를 많이 쓰라고 독려하는 리더십이 아니다. 학습 지향적 리더십에 가까워져야 한다. 2024년 Human Resource Development Review의 통합 리뷰는 조직 내 학습을 촉진하는 리더십을 직접 행동과 간접 행동으로 나눈다. 직접 행동은 지원, 교육, 요구, 역할 모델링이다. 간접 행동은 학습 분위기 조성, 업무 조직 설계, 학습 자원 확보, 지식 공유 촉진이다. AI 도입에도 이 구조가 그대로 적용된다. 리더는 AI 사용을 지시하는 사람이 아니라, AI와 함께 배우는 환경을 설계하는 사람이어야 한다.',
      '결국 2024년 이후 논문들이 함께 가리키는 결론은 하나다. AI 도입의 성공은 모델 성능보다 조직의 재설계 역량에 달려 있다. 어떤 일을 자동화할지, 어떤 판단은 사람이 맡을지, 어떤 결과는 검토해야 할지, 어떤 불안을 공개적으로 다룰지, 어떤 리더십 행동이 학습을 촉진할지를 함께 정해야 한다.',
      '랩리워크 관점에서 AI HRD 교육은 세 단계로 설계될 필요가 있다. 첫째, AI 리터러시다. 구성원이 생성형 AI의 가능성과 한계를 이해하고, 결과물을 비판적으로 검토할 수 있어야 한다. 둘째, 직무 재설계다. 각자의 업무를 과업, 관계, 판단의 단위로 나누고 AI와 사람이 함께 일할 흐름을 다시 그려야 한다. 셋째, 조직 변화관리다. 심리적 안전감, 윤리 기준, 리더의 역할 모델링, 데이터 거버넌스를 함께 설계해야 한다.',
      'AI를 잘 쓰는 조직은 도구를 많이 쓰는 조직이 아니다. AI가 들어온 뒤에도 구성원이 더 잘 배우고, 더 명확하게 판단하고, 더 안전하게 질문할 수 있는 조직이다. 기술은 일을 바꾸지만, 그 변화가 성과가 되게 만드는 것은 결국 조직의 학습 능력이다.'
    ],
    images: [
      {
        afterParagraph: 2,
        src: 'https://images.pexels.com/photos/34774358/pexels-photo-34774358.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: '노트북을 보며 함께 일하는 팀',
        caption: 'AI 도입은 개인의 도구 활용보다 팀의 협업 방식 변화와 더 깊게 연결된다. 이미지: Pexels / Matheus Bertelli'
      },
      {
        afterParagraph: 7,
        src: 'https://images.pexels.com/photos/17737193/pexels-photo-17737193.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: '사무실에서 노트북을 보며 논의하는 동료',
        caption: 'AI가 들어온 업무 환경에서는 검토, 판단, 역할 분담을 함께 설계해야 한다. 이미지: Pexels / Walls.io'
      }
    ],
    takeaways: [
      '2024년 이후 연구들은 AI 도입을 업무 자동화보다 업무 맥락 재설계의 문제로 본다.',
      'AI HRD 교육은 프롬프트 교육을 넘어 검토, 판단, 윤리, 역할 재정의를 포함해야 한다.',
      'AI 도입은 심리적 안전감과 리더십의 영향을 크게 받는다.',
      'HRD의 역할은 AI 사용법 전달자가 아니라, AI와 함께 일하는 방식을 설계하는 변화관리자다.'
    ],
    sources: [
      'OpenAlex API. Search query: generative AI organizational learning workplace HRD. Filter: from_publication_date:2024-01-01. Retrieved 2026-06-05.',
      'Budhwar P, Chowdhury S, Wood G, Aguinis H, Bamber GJ, Beltran JR, et al. The effects of artificial intelligence on human resource activities and the roles of the human resource triad: opportunities and challenges. Frontiers in Psychology. 2024. doi:10.3389/fpsyg.2024.1360401. OpenAlex cited by 54.',
      'Tortorella GL, Powell D, Hines P, Vergara A, Tlapa D, Vassolo RS. How does artificial intelligence impact employees’ engagement in lean organisations? International Journal of Production Research. 2024. doi:10.1080/00207543.2024.2368698. OpenAlex cited by 58.',
      'Transformative AI in human resource management: enhancing workforce planning with topic modeling. Cogent Business & Management. 2024. doi:10.1080/23311975.2024.2432550. OpenAlex cited by 53.',
      'The coach bots are coming: exploring global coaches’ attitudes and responses to the threat of AI coaching. Human Resource Development International. 2024. doi:10.1080/13678868.2024.2375934. OpenAlex cited by 30.',
      'Ethics in digital and AI coaching. Human Resource Development International. 2024. doi:10.1080/13678868.2024.2315928. OpenAlex cited by 22.',
      'Learning-Oriented Leadership in Organizations: An Integrative Review of Qualitative Studies. Human Resource Development Review. 2024. doi:10.1177/15344843241239723. OpenAlex cited by 24.',
      'The dark side of artificial intelligence adoption: linking artificial intelligence adoption to employee depression via psychological safety and ethical leadership. Humanities and Social Sciences Communications. 2025. doi:10.1057/s41599-025-05040-2. OpenAlex cited by 13.'
    ]
  },
  {
    slug: 'organizational-culture-change-covid-genai',
    title: '조직문화의 변화: 코로나19와 생성AI 이후, 일하는 방식은 어떻게 다시 설계되는가',
    description: '코로나19는 조직문화의 중심을 출근과 통제에서 회복탄력성, 심리적 안전감, 원격협업으로 옮겼고, 생성AI는 다시 판단, 학습, 거버넌스의 문화를 요구하고 있습니다. PubMed 등재 논문과 Europe PMC 인용수 데이터를 바탕으로 조직문화 변화의 다음 과제를 정리합니다.',
    category: '조직문화',
    date: '2026-05-28',
    readTime: '8분',
    tags: ['조직문화', '조직변화', '코로나19', '생성AI', '원격근무', '심리적 안전감', '번아웃', 'AI 거버넌스', 'HRD', '변화관리'],
    paragraphs: [
      '조직문화는 어느 날 갑자기 바뀌지 않는다. 보통은 위기가 먼저 오고, 일하는 방식이 흔들리고, 그 뒤에 사람들이 “우리 조직은 무엇을 정상으로 볼 것인가”를 다시 묻기 시작한다. 코로나19는 그 질문을 전 세계 조직에 동시에 던졌다. 출근, 대면회의, 상사의 관찰, 같은 공간에 있다는 감각이 조직문화의 기본값이었지만 팬데믹은 이 기본값을 깨뜨렸다. 원격근무와 감염관리, 위기 커뮤니케이션, 구성원 소진 관리가 조직문화의 핵심 의제로 올라왔다.',
      '이번 글은 2012년 이후 PubMed에 등재된 논문 중 Europe PMC 기준 인용수 50회 이상인 연구를 중심으로 작성했다. 단순히 인용수가 높은 오래된 논문만 따르지 않기 위해 최근 논문에 가중치를 두었다. 그래서 코로나19 이후의 조직 회복탄력성, 원격근무, 번아웃, 그리고 2023년 이후 생성AI 도입과 거버넌스 연구를 함께 보았다. 결론은 분명하다. 조직문화의 변화는 “복지 제도 하나를 추가하는 일”도, “AI 도구 하나를 배포하는 일”도 아니다. 조직이 불확실성을 다루는 방식을 다시 설계하는 일이다.',
      '팬데믹 초기의 핵심은 순응과 실행이었다. Houghton 외(2020)의 Cochrane 리뷰는 호흡기 감염병 상황에서 의료진이 감염예방지침을 따르는 데 영향을 주는 요인을 정리했다. 지침의 명확성, 교육, 물리적 자원, 리더십, 팀 내 의사소통이 모두 중요했다. 이 연구가 조직문화에 주는 메시지는 간단하다. 위기 상황에서 문화는 슬로건이 아니라 실행 조건으로 드러난다. 구성원이 “해야 한다”는 말을 듣는 것만으로는 움직이지 않는다. 일할 수 있는 자원, 명확한 기준, 서로 확인하는 팀 루틴이 있어야 한다.',
      '동시에 조직문화는 구성원의 정서적 안전망을 요구받기 시작했다. Wu 외(2020)는 팬데믹 상황에서 동료지원(peer support)과 위기 커뮤니케이션이 기관의 회복탄력성을 높이는 핵심 전략이라고 보았다. 이는 조직문화가 더 이상 성과 압박만으로 유지될 수 없다는 뜻이다. 위기 속에서 사람들은 정보보다 먼저 신뢰를 찾고, 지침보다 먼저 “이 조직이 나를 보호하려 하는가”를 확인한다. 리더의 메시지, 동료 간 지원, 빠른 피드백 구조가 문화의 실체가 된다.',
      '원격근무는 코로나19가 만든 임시방편처럼 보였지만, 사실 더 오래된 연구 축적 위에 있었다. Allen 외(2015)는 telecommuting 연구를 종합하며 원격근무가 성과와 직무만족에 긍정적일 수 있지만, 고립감과 경계관리 문제를 함께 만든다고 정리했다. 팬데믹 이후 조직문화의 질문은 “원격근무를 허용할 것인가”에서 “어떤 일을 언제 함께 해야 하는가”로 바뀌었다. 좋은 문화는 사무실 복귀율이 아니라 협업의 리듬을 설계한다. 집중이 필요한 일, 동시성이 필요한 일, 관계 회복이 필요한 일을 구분해야 한다.',
      '이 변화는 번아웃과 유지(retention)의 문제로 이어졌다. Cohen 외(2023)는 간호사, 의사, 보건전문직의 웰빙과 번아웃을 낮추는 직장 개입을 검토했고, de Vries 외(2023)는 병원에서 인력 유지에 영향을 주는 요인을 체계적으로 정리했다. 두 연구가 만나는 지점은 명확하다. 조직문화는 “좋은 분위기”가 아니라 사람이 계속 일할 수 있게 만드는 시스템이다. 업무량, 리더십, 인정, 성장 기회, 심리적 안전감이 연결될 때 구성원은 남는다.',
      '그리고 생성AI가 등장했다. 팬데믹이 일하는 장소와 관계의 문화를 흔들었다면, 생성AI는 판단과 학습의 문화를 흔든다. Thirunavukarasu 외(2023)는 대규모언어모델이 의료 지식, 문서화, 교육, 의사결정 보조에 미치는 가능성과 위험을 폭넓게 정리했다. Sallam(2023)의 체계적 리뷰 역시 ChatGPT가 교육, 연구, 실무에 기회를 주지만 정확성, 편향, 윤리, 책임성 문제가 동시에 따라온다고 보았다. 이제 조직문화의 핵심 질문은 “AI를 쓰게 할 것인가”가 아니라 “어떤 판단은 사람이 책임지고, 어떤 작업은 AI와 함께 할 것인가”가 된다.',
      'AI 도입은 기술보다 구현의 문제다. Petersson 외(2022)는 스웨덴 의료 리더 인터뷰를 통해 AI 구현의 장벽을 분석했다. 데이터 품질, 역량 부족, 책임 소재, 조직 내 신뢰, 기존 업무흐름과의 충돌이 반복적으로 등장했다. Reddy(2024)는 생성AI 도입에도 구현과학 기반의 단계적 도입, 거버넌스, 지속가능한 확산 경로가 필요하다고 주장했다. 즉, AI가 조직문화에 들어오는 순간 HRD와 OD의 역할은 더 커진다. 교육은 사용법 안내가 아니라 검증, 책임, 협업 규칙을 만드는 과정이 된다.',
      '앞으로의 조직문화는 세 가지 능력으로 평가될 것이다. 첫째, 위기 속에서도 구성원이 신뢰할 수 있는 커뮤니케이션과 지원 체계를 갖추는 능력. 둘째, 원격·하이브리드 환경에서 일의 리듬과 관계의 리듬을 분리해 설계하는 능력. 셋째, 생성AI를 무조건 금지하거나 무조건 장려하지 않고, 비판적으로 활용하며 책임 있게 정착시키는 능력이다.',
      '조직문화의 변화는 결국 “함께 일하는 방식의 재계약”이다. 코로나19는 우리가 같은 공간에 있지 않아도 조직이 유지될 수 있음을 보여주었다. 생성AI는 같은 방식으로 일하지 않아도 성과를 만들 수 있음을 보여주고 있다. 남은 과제는 기술이 아니라 문화다. 구성원이 불확실한 도구와 변화 속에서도 신뢰하고, 배우고, 판단하고, 책임질 수 있는 환경을 만드는 것. 그것이 코로나19와 생성AI 이후 조직문화의 핵심 과제다.'
    ],
    takeaways: [
      '코로나19 이후 조직문화는 출근 중심의 통제 문화에서 회복탄력성, 신뢰, 심리적 안전감, 원격협업 설계로 이동했다.',
      '생성AI는 조직문화의 초점을 도구 사용에서 판단, 책임, 검증, 거버넌스, 지속학습 문화로 확장시킨다.',
      '앞으로의 HRD와 OD는 교육 프로그램이 아니라 “함께 일하는 방식의 재계약”을 설계해야 한다.'
    ],
    sources: [
      'Thirunavukarasu AJ, et al. Large language models in medicine. Nature Medicine. 2023;29:1930-1940. doi:10.1038/s41591-023-02448-8. PMID: 37460753. Europe PMC cited by 1473.',
      'Sallam M. ChatGPT Utility in Healthcare Education, Research, and Practice: Systematic Review on the Promising Perspectives and Valid Concerns. Healthcare (Basel). 2023;11(6):887. doi:10.3390/healthcare11060887. PMID: 36981544. Europe PMC cited by 1173.',
      'Houghton C, et al. Barriers and facilitators to healthcare workers adherence with infection prevention and control guidelines for respiratory infectious diseases: a rapid qualitative evidence synthesis. Cochrane Database Syst Rev. 2020;4:CD013582. doi:10.1002/14651858.CD013582. PMID: 32315451. Europe PMC cited by 443.',
      'Allen TD, Golden TD, Shockley KM. How Effective Is Telecommuting? Assessing the Status of Our Scientific Findings. Psychol Sci Public Interest. 2015;16(2):40-68. doi:10.1177/1529100615593273. PMID: 26403188. Europe PMC cited by 256.',
      'Cohen C, et al. Workplace interventions to improve well-being and reduce burnout for nurses, physicians and allied healthcare professionals: a systematic review. BMJ Open. 2023;13:e071203. doi:10.1136/bmjopen-2022-071203. PMID: 37385740. Europe PMC cited by 197.',
      'Petersson L, et al. Challenges to implementing artificial intelligence in healthcare: a qualitative interview study with healthcare leaders in Sweden. BMC Health Serv Res. 2022;22:850. doi:10.1186/s12913-022-08215-8. PMID: 35778736. Europe PMC cited by 179.',
      'Reddy S. Generative AI in healthcare: an implementation science informed translational path on application, integration and governance. Implementation Science. 2024;19:27. doi:10.1186/s13012-024-01357-9. PMID: 38491544. Europe PMC cited by 147.',
      'de Vries N, et al. The Race to Retain Healthcare Workers: A Systematic Review on Factors that Impact Retention of Nurses and Physicians in Hospitals. Inquiry. 2023;60:469580231159318. doi:10.1177/00469580231159318. PMID: 36912131. Europe PMC cited by 142.',
      'Wu AW, Connors C, Everly GS Jr. COVID-19: Peer Support and Crisis Communication Strategies to Promote Institutional Resilience. Ann Intern Med. 2020;172(12):822-823. doi:10.7326/M20-1236. PMID: 32251512. Europe PMC cited by 122.',
      'Gómez-Salgado J, et al. Work engagement and psychological distress of health professionals during the COVID-19 pandemic. J Nurs Manag. 2021;29(5):1016-1025. doi:10.1111/jonm.13239. PMID: 33400325. Europe PMC cited by 55.'
    ]
  },
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

const FIELD_NOTE_CATEGORIES = [
  {
    name: '강의 현장',
    description: '생성형 AI, 조직문화, 리더십, 잡 크래프팅 교육이 실제 현장에서 어떻게 진행되는지 기록합니다.'
  },
  {
    name: '학회·논문 발표',
    description: '학술대회 발표, 논문 발표, 연구 기반 인사이트 공유 활동을 정리합니다.'
  },
  {
    name: '기업 워크숍',
    description: '기업과 기관의 문제를 다룬 워크숍, 퍼실리테이션, 변화관리 세션의 현장 기록입니다.'
  },
  {
    name: '교육 운영 사례',
    description: '교육 과정 설계, 운영 방식, 참여자 반응, 후속 적용 과정을 사례 중심으로 남깁니다.'
  }
];

const FIELD_NOTE_POSTS: FieldNotePost[] = [
  {
    slug: 'dongbu-women-ax-data-planner-course',
    title: 'AX 시대의 기획자는 데이터를 읽고, AI와 함께 설계하는 사람입니다',
    description: '2026년 서울특별시동부여성발전센터에서 진행되는 「AX융합 데이터 기반 기획자」 과정은 AI 리터러시, 데이터 분석, 디자인씽킹, 보고서 작성, 발표와 포트폴리오 실습을 연결해 취업을 준비하는 여성들의 실무 역량을 키우는 교육입니다.',
    category: '강의 현장',
    date: '2026-06-05',
    location: '서울특별시동부여성발전센터 D스튜디오',
    tags: ['AX융합', '데이터 기반 기획', 'AI 리터러시', '파이썬 데이터 분석', '여성 취업교육', '포트폴리오', '강의 현장'],
    applicationGuide: '교육 일정, 장소, 신청 방법은 서울특별시동부여성발전센터 과정 상세 페이지에서 확인하실 수 있습니다.',
    sections: [
      {
        heading: '데이터와 AI를 함께 다루는 기획자 교육입니다',
        paragraphs: [
          '2026년 3월 27일부터 7월 16일까지, 서울특별시동부여성발전센터 D스튜디오에서 「AX융합 데이터 기반 기획자」 교육이 진행되고 있습니다. 이번 과정은 데이터역량 교육 이수 후 취업을 희망하는 여성을 대상으로 하며, 교육비 전액 무료, 고사양 노트북과 교재·교구 지원까지 포함된 실무형 교육입니다.',
          '이번 교육의 핵심은 단순히 AI 도구 하나를 배우는 데 있지 않습니다. 데이터로 문제를 읽고, AI와 함께 분석하고, 기획서와 보고서로 설득하며, 마지막에는 포트폴리오로 자신의 역량을 증명하는 데 있습니다.'
        ],
        image: {
          src: '/field-notes/dongbu-ax-data-planner-01.jpg',
          alt: '강사가 엑셀 데이터 화면을 보며 데이터 분석 내용을 설명하는 모습',
          caption: '1'
        }
      },
      {
        heading: 'AI 리터러시는 취업 자신감과도 연결됩니다',
        paragraphs: [
          '최근 OpenAlex API로 확인한 2024년 이후 연구들도 이 교육의 방향과 맞닿아 있습니다. OECD의 성인역량 조사 보고서(2024)는 성인의 문해력, 수리력, 적응적 문제해결력이 고용, 임금, 지속학습의 기반이 된다고 설명합니다. AI 시대라고 해서 기본 역량이 덜 중요해지는 것이 아닙니다. 오히려 데이터를 읽고, 문제를 구조화하고, 새로운 도구를 학습하는 능력이 더 중요해지고 있습니다.',
          '2025년 BMC Psychology에 실린 연구는 AI 태도와 AI 리터러시가 진로 자기효능감과 구직 불안 사이에서 중요한 매개 역할을 한다고 분석했습니다. AI를 막연한 위협으로 느끼는 사람과, AI를 자신의 역량을 확장하는 도구로 이해하는 사람은 구직 과정에서 느끼는 불안과 자신감이 달라질 수 있습니다.'
        ],
        image: {
          src: '/field-notes/dongbu-ax-data-planner-02.jpg',
          alt: '강사가 생성형 AI와 지식 학습에 대해 설명하고 참여자들이 듣는 강의 현장',
          caption: '2'
        }
      },
      {
        heading: '기획 역량은 분석, 설계, 표현이 연결될 때 완성됩니다',
        paragraphs: [
          '이 과정에서 다루는 파이썬 데이터 분석과 데이터 기반 예측은 단순한 기술 훈련이 아닙니다. 실무자는 데이터를 통해 문제를 발견하고, 패턴을 해석하고, 의사결정을 제안할 수 있어야 합니다. 기획자는 감각만으로 설득하지 않습니다. 데이터를 근거로 가설을 만들고, AI와 함께 아이디어를 확장하며, 이해관계자가 납득할 수 있는 언어로 결과를 정리해야 합니다.',
          '생성형 AI와 고용가능성에 관한 2024년 연구도 비슷한 시사점을 줍니다. 교육 현장에서 생성형 AI를 무조건 금지하기보다, 윤리적 기준과 학습 목적 안에서 활용하도록 돕는 것이 필요하다는 논의가 확산되고 있습니다. 실제 업무 환경에서는 AI를 피하는 능력보다 AI를 비판적으로 활용하는 능력이 더 중요해지고 있기 때문입니다.'
        ],
        image: {
          src: '/field-notes/dongbu-ax-data-planner-03.jpg',
          alt: '서울특별시동부여성발전센터 D스튜디오에서 진행 중인 AX융합 데이터 기반 기획자 교육 현장',
          caption: '3'
        }
      },
      {
        heading: '포트폴리오로 실무 가능성을 증명합니다',
        paragraphs: [
          '이번 교육의 방향은 “AI를 잘 쓰는 사람”에서 멈추지 않습니다. “AI와 데이터로 더 좋은 기획을 할 수 있는 사람”을 목표로 합니다. 디자인씽킹은 사용자의 문제를 발견하게 하고, 데이터 분석은 그 문제를 근거 있게 설명하게 하며, 보고서와 프레젠테이션은 해결안을 설득 가능한 형태로 바꾸게 합니다. 이 연결이 바로 AX 시대의 기획 역량입니다.',
          '마지막 단계인 포트폴리오 실무역량 및 분석 발표는 특히 중요합니다. 취업을 준비하는 과정에서 가장 강력한 증거는 “무엇을 배웠는가”보다 “무엇을 만들어냈는가”입니다. 참여자들은 교육 과정에서 배운 AI, 데이터 분석, 기획, 발표 역량을 하나의 결과물로 정리하며 자신의 실무 가능성을 보여주게 됩니다.'
        ]
      },
      {
        heading: '좋은 교육은 스스로 질문하게 만드는 일입니다',
        paragraphs: [
          'AX 시대의 기획자는 기술자만도, 문서 작성자만도 아닙니다. 데이터를 읽고, 사람의 문제를 이해하고, AI를 협업 도구로 활용하며, 실행 가능한 제안을 만드는 사람입니다. 「AX융합 데이터 기반 기획자」 과정은 그 역량을 실제 교육 현장에서 하나씩 쌓아가는 과정입니다.',
          '랩리워크는 이번 교육을 통해 참여자들이 AI와 데이터를 두려워해야 할 변화가 아니라, 자신의 가능성을 넓히는 도구로 경험할 수 있도록 함께하고 있습니다. 중요한 것은 도구의 이름이 아니라, 그 도구로 어떤 문제를 해결할 수 있는가입니다. 그리고 좋은 교육은 바로 그 질문을 스스로 던질 수 있게 만드는 일에서 시작됩니다.'
        ]
      },
      {
        heading: '참고 논문 및 자료',
        paragraphs: [
          '1. OECD. (2024). Do Adults Have the Skills They Need to Thrive in a Changing World? doi:10.1787/b263dc5d-en',
          '2. BMC Psychology. (2025). Mediating effect of AI attitudes and AI literacy on the relationship between career self-efficacy and job-seeking anxiety. doi:10.1186/s40359-025-02757-2',
          '3. Cogent Education. (2024). Guiding principles of generative AI for employability and learning in UK universities. doi:10.1080/2331186x.2024.2357898'
        ]
      }
    ]
  },
  {
    slug: 'kpc-ai-job-redesign-agent-course',
    title: 'AI 시대의 직무재설계와 AI 에이전트 활용 과정에 랩리워크가 함께합니다',
    description: '한국생산성본부의 「AI 시대의 직무재설계와 AI 에이전트 활용」 과정은 AI에 맡길 일과 사람이 집중해야 할 핵심 가치를 구분하고, 실무형 AI 에이전트를 직접 기획하는 교육입니다.',
    category: '강의 현장',
    date: '2026-06-02',
    location: '한국생산성본부',
    tags: ['AI 직무재설계', 'AI 에이전트', '생성형 AI 교육', '업무 생산성', '직무혁신', '강의 현장'],
    sections: [
      {
        heading: 'AI를 쓰는 법보다 중요한 것은 일을 다시 설계하는 법입니다',
        paragraphs: [
          '생성형 AI의 확산은 단순히 새로운 도구를 배우는 문제를 넘어, 우리가 맡은 직무와 일하는 방식을 다시 정의해야 하는 과제로 이어지고 있습니다. 이제 중요한 질문은 “AI를 사용할 수 있는가”가 아니라 “내 업무 중 무엇을 AI와 함께 재설계할 것인가”입니다.',
          '한국생산성본부에서 개설되는 「AI 시대의 직무재설계와 AI 에이전트 활용」 과정은 이러한 변화에 대응하기 위한 실무 중심 교육입니다. 랩리워크는 본 과정에서 AI 시대의 직무 변화, 업무 재설계, AI 에이전트 활용 전략을 현업 관점에서 다룹니다.'
        ],
        image: {
          src: 'https://images.pexels.com/photos/34046709/pexels-photo-34046709.jpeg?auto=compress&cs=tinysrgb&w=1200',
          alt: '비즈니스 교육 워크숍에서 참가자들이 노트북을 보며 토론하는 모습',
          caption: '업무 맥락을 기준으로 AI 활용 가능 영역을 찾는 실습형 교육을 지향합니다. 이미지: Pexels'
        }
      },
      {
        heading: 'AI에 맡길 일과 사람이 집중해야 할 가치를 구분합니다',
        paragraphs: [
          '이번 과정의 핵심은 단순한 AI 기능 소개가 아닙니다. 참가자는 자신의 직무를 세분화해 AI에 맡길 수 있는 업무와 사람이 집중해야 할 핵심 가치를 구분하고, 이를 바탕으로 실제 업무 흐름에 적용 가능한 AI 에이전트를 기획해보게 됩니다.',
          '특히 AI 활용에 대한 막연한 기대나 불안을 넘어, 개인의 역할과 경쟁력을 새롭게 정의하는 데 초점을 둡니다. AI가 업무를 대체하는 것이 아니라, 구성원이 더 가치 있는 판단과 설계에 집중하도록 돕는 파트너가 될 수 있도록 사례와 실습 중심으로 접근합니다.'
        ]
      },
      {
        heading: '맞춤형 AI 에이전트를 직접 기획하고 적용합니다',
        paragraphs: [
          'AI 에이전트는 단순한 자동화 도구가 아니라 업무 흐름을 이해하고, 반복되는 판단과 산출물 생성을 보조하는 새로운 협업 방식입니다. 그래서 좋은 에이전트를 만들기 위해서는 먼저 자신의 업무 구조를 정확히 파악해야 합니다.',
          '본 과정은 참가자가 재설계된 업무 흐름을 바탕으로 실무형 맞춤 AI 에이전트를 직접 기획하고 적용하는 경험을 제공하도록 구성되어 있습니다. AI 활용 역량을 기르고 싶은 재직자, 반복 업무를 줄이고 고부가가치 업무에 집중하고 싶은 실무자에게 특히 적합합니다.'
        ],
        image: {
          src: 'https://images.pexels.com/photos/6326041/pexels-photo-6326041.jpeg?auto=compress&cs=tinysrgb&w=1200',
          alt: '노트북을 활용해 온라인 교육과 업무 설명을 진행하는 강의 장면',
          caption: 'AI 에이전트는 직무 맥락과 업무 흐름을 이해할 때 실질적인 성과로 이어집니다. 이미지: Pexels'
        }
      },
      {
        heading: 'AI 시대의 경쟁력은 도구 활용을 넘어 역할 재정의에서 시작됩니다',
        paragraphs: [
          '랩리워크는 이번 과정을 통해 참가자들이 AI를 “도구”로 익히는 데서 멈추지 않고, 자신의 업무를 재설계하고 AI 에이전트를 실무에 적용하는 구체적인 방법을 가져갈 수 있도록 돕겠습니다.',
          'AI 시대에 자신의 역할과 경쟁력을 다시 점검하고 싶은 분, 조직 내 AI 활용을 확산해야 하는 담당자, 업무 생산성을 높이고 싶은 실무자라면 이번 과정을 통해 AI와 함께 일하는 방식을 더 선명하게 설계할 수 있을 것입니다.'
        ]
      }
    ],
    link: {
      label: '한국생산성본부 과정 상세 보기',
      href: 'https://www.kpc.or.kr/PTWED003_dtil_view.do?ecno=48676'
    },
    poster: {
      src: 'https://www.kpc.or.kr/upload/outside/temp/2026/05/06/20260506_135505592_01232.jpg',
      alt: 'AI 시대의 직무재설계와 AI 에이전트 활용 과정 안내 포스터',
      caption: '한국생산성본부 「AI 시대의 직무재설계와 AI 에이전트 활용」 과정 안내 이미지'
    }
  }
];

function getFieldNotePost(path: string) {
  const slug = path.replace('/field-notes/', '');
  return FIELD_NOTE_POSTS.find(post => post.slug === slug);
}

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
          <a href="/field-notes" className="hover:text-blue-600 transition">현장 인사이트</a>
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
              <a href="/field-notes" onClick={closeMenu}>현장 인사이트</a>
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

function FieldNotesPage() {
  return (
    <PageShell>
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-600 font-semibold mb-4 tracking-wider text-sm uppercase">Field Notes</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">현장 인사이트</h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl leading-relaxed">
            강의 현장, 학회·논문 발표, 기업 워크숍, 교육 운영 사례를 통해 랩리워크가 현장에서 어떻게 변화를 설계하는지 기록합니다.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {FIELD_NOTE_CATEGORIES.map(category => (
              <article key={category.name} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <span className="text-blue-600 font-bold text-sm">현장 인사이트</span>
                <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-gray-900">{category.name}</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">{category.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">최근 현장 기록</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {FIELD_NOTE_POSTS.map(post => (
                <a
                  key={post.slug}
                  href={`/field-notes/${post.slug}`}
                  className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span className="font-bold text-blue-600">{post.category}</span>
                    <span>{post.date}</span>
                    <span>{post.location}</span>
                  </div>
                  <h3 className="mt-5 text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">{post.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {post.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-blue-600 font-bold">
                    현장 기록 보기 <ArrowRight size={18} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-3xl border border-blue-100 bg-blue-50 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">다음 현장 기록을 남기고 싶다면</h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              강의 사진, 발표명, 날짜, 기관명 공개 가능 여부, 현장 반응을 정리하면 교육 사례 페이지로 확장할 수 있습니다.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
              <Mail size={18} />
              현장 기록 문의
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function FieldNotePostPage({ path }: { path: string }) {
  const post = getFieldNotePost(path);

  if (!post) return <NotFoundPage />;

  return (
    <PageShell>
      <article className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <a href="/field-notes" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-10">
            현장 인사이트로 돌아가기
          </a>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="font-bold text-blue-600">{post.category}</span>
            <span>{post.date}</span>
            <span>{post.location}</span>
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

          <div className="mt-14 space-y-14">
            {post.sections.map(section => (
              <section key={section.heading} className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">{section.heading}</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-8">
                  {section.paragraphs.map(paragraph => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.image && (
                  <figure className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
                    <img src={section.image.src} alt={section.image.alt} className="w-full aspect-[16/9] object-cover" />
                    <figcaption className="px-5 py-4 text-sm text-gray-500">{section.image.caption}</figcaption>
                  </figure>
                )}
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-blue-100 bg-blue-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900">과정 신청 및 상세 안내</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {post.applicationGuide || '교육 일정, 장소, 신청 방법은 한국생산성본부 과정 상세 페이지에서 확인하실 수 있습니다.'}
            </p>
            {post.link && (
              <a href={post.link.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
                {post.link.label}
                <ArrowRight size={18} />
              </a>
            )}
          </div>

          {post.poster && (
            <figure className="mt-10 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
              <img src={post.poster.src} alt={post.poster.alt} className="w-full object-contain bg-green-50" />
              <figcaption className="px-5 py-4 text-sm text-gray-500">{post.poster.caption}</figcaption>
            </figure>
          )}
        </div>
      </article>
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
            {post.paragraphs.map((paragraph, index) => {
              const image = post.images?.find(item => item.afterParagraph === index + 1);
              const imageClassName = image?.fit === 'contain'
                ? 'max-h-[720px] w-full object-contain bg-gray-50'
                : 'aspect-[16/9] w-full object-cover';

              return (
                <React.Fragment key={paragraph}>
                  <p>{paragraph}</p>
                  {image && (
                    <figure className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
                      <img src={image.src} alt={image.alt} className={imageClassName} />
                      <figcaption className="px-5 py-4 text-sm text-gray-500">{image.caption}</figcaption>
                    </figure>
                  )}
                </React.Fragment>
              );
            })}
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
  if (path === '/field-notes') return <FieldNotesPage />;
  if (path.startsWith('/field-notes/')) return <FieldNotePostPage path={path} />;
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
