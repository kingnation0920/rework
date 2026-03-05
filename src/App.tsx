import React, { useState } from 'react';
import { Menu, X, ChevronRight, Mail, Phone, BookOpen, Users, Target, Lightbulb, Briefcase, Award, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const EXPERTS = [
  {
    id: 'yoon',
    name: '윤지연',
    nameEn: 'Jiyeon Yoon',
    imageUrl: '/rework/001.jpg',
    title: '데이터와 사람을 잇는 HRD 전문가',
    quote: '"빅데이터로 분석하고, 에듀테크로 설계하며, 코칭으로 변화를 이끌어냅니다."',
    tags: ['#교육컨설턴트', '#피플애널리스트', '#AX_러닝_디자이너', '#퍼실리테이터', '#KPC코치'],
    email: 'Jena_Yoon@naver.com',
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
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400',
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
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
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
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
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
    imageUrl: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=400&h=400',
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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState<typeof EXPERTS[0] | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<typeof PROGRAMS[0] | null>(null);

  return (
    <div className="bg-gray-50 text-gray-900 font-sans min-h-screen selection:bg-blue-200">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600 tracking-tight">Lab Re:work</div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-600">
            <a href="#about" className="hover:text-blue-600 transition">소개</a>
            <a href="#experts" className="hover:text-blue-600 transition">전문가</a>
            <a href="#programs" className="hover:text-blue-600 transition">프로그램</a>
            <a href="#contact" className="hover:text-blue-600 transition">문의</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-600">
                <a href="#about" onClick={() => setIsMenuOpen(false)}>소개</a>
                <a href="#experts" onClick={() => setIsMenuOpen(false)}>전문가</a>
                <a href="#programs" onClick={() => setIsMenuOpen(false)}>프로그램</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>문의</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-40 pb-24 px-6 text-center bg-gradient-to-b from-white to-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-blue-600 font-semibold mb-4 tracking-wider text-sm md:text-base uppercase">Re:work, Real Work</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900">
            일을 다시 <span className="text-blue-600">정의하다</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            데이터로 진단하고, AI로 설계하며,<br className="hidden md:block" /> 교육으로 실질적인 성과를 만듭니다.
          </p>
        </motion.div>
      </header>

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
                    src={expert.imageUrl} 
                    alt={expert.name} 
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

      {/* Footer */}
      <footer id="contact" className="py-24 bg-white text-center px-6 border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">함께 더 나은 성장 경험을 만들기 위해</h2>
        <p className="mb-10 text-gray-500 max-w-2xl mx-auto text-lg">
          Lab Re:work는 데이터와 AI를 통해 업무의 본질을 혁신합니다.
        </p>
        <a 
          href="mailto:Jena_Yoon@naver.com" 
          className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
        >
          <Mail size={20} />
          <span>문의하기: Jena_Yoon@naver.com</span>
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
                    src={selectedExpert.imageUrl} 
                    alt={selectedExpert.name} 
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
                  <a href={`mailto:${selectedExpert.email}`} className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <Mail size={18} className="mr-2" />
                    {selectedExpert.email}
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
