import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, 'dist');
const shell = await readFile(join(dist, 'index.html'), 'utf8');

const site = {
  name: '랩리워크',
  alternateName: 'Lab Re:work',
  url: 'https://www.labrework.com',
  email: 'lab.rework26@gmail.com',
  logo: 'https://www.labrework.com/og-image.png'
};

const posts = [
  {
    path: '/blog/ai-era-talent-evaluation-criteria',
    title: 'AI 시대의 새로운 인재 평가 기준을 어떻게 설계할까?',
    description: '생성형 AI 시대에 기존 성과 평가가 왜 한계를 맞는지, AI 리터러시와 업무 재설계 과정을 중심으로 새로운 인재 평가 기준을 정리합니다.',
    category: 'AI HRD',
    datePublished: '2026-07-01',
    dateModified: '2026-07-01',
    author: '김기현',
    keywords: ['AI 시대 인재평가', '성과관리', 'AI 리터러시', '인사평가', '업무재설계', 'HRD', '생성형 AI', '리더십'],
    sections: [
      {
        heading: 'AI 시대의 평가는 결과물의 양보다 판단 과정을 봐야 한다',
        paragraphs: [
          '생성형 AI의 보편화로 기존의 텍스트나 코드 양 중심의 성과 평가는 더 이상 작동하지 않습니다. 미래형 고성과자는 AI를 도구로 다루는 능력과 결과물을 비판적으로 검증하는 AI 리터러시를 갖춘 사람입니다.',
          '한 고객사에서 이런 장면을 본 적이 있습니다. 인공지능 도구가 전사적으로 도입되자마자 주니어 직원들이 작성하는 기획서의 양이 세 배 넘게 늘어났습니다. 하지만 리더들은 정작 누구를 고성과자로 평가해야 할지 깊은 혼란에 빠졌습니다.'
        ]
      },
      {
        heading: 'AI가 만든 결과물의 홍수 속에서 길을 잃은 리더들',
        paragraphs: [
          '과거에는 기획안 서두의 시장 분석을 정교하게 채우거나 기초적인 분석 리포트를 남들보다 빠르게 만드는 직원이 유능하다는 평가를 받았습니다. 그러나 생성형 AI가 단 몇 초 만에 그럴듯한 초안을 뽑아내면서 모든 직원의 서류가 상향 평준화된 것처럼 보이기 시작했습니다.',
          '리더들은 겉보기에 완벽한 보고서들 사이에서 진짜 문제를 해결한 인재가 누구인지 구별해 내지 못합니다. 기존 평가 지표로는 생성형 AI를 몰래 써서 양만 채운 결과물과 진지하게 고민해 만든 결과물을 걸러내기 어렵습니다.'
        ]
      },
      {
        heading: '양적 산출물에서 질문과 검증의 프로세스로 이동해야 한다',
        paragraphs: [
          '생성형 AI가 업무에 깊숙이 들어온 조직일수록, 평가는 결과 중심에서 과정 중심으로 이동해야 합니다. 랩리워크는 현장에서 이 지점을 단순한 인사 제도 개편이 아니라 업무 재설계라는 렌즈로 접근합니다.',
          'AI 시대의 고성과자는 해결해야 할 비즈니스 문제를 정확하게 쪼개어 AI에게 명확하게 질문하는 프롬프팅 역량, 그리고 AI가 내놓은 그럴듯한 환각 현상을 필터링하는 비판적 검증 능력을 동시에 가진 사람입니다.'
        ]
      },
      {
        heading: '데이터와 글로벌 연구가 증명하는 고성과자의 재정의',
        paragraphs: [
          'Betterworks의 2026년 성과 역량 보고서는 인사 조직 리더의 90%가 인공지능이 이미 고성과자의 기준을 재정의했다고 응답했지만, AI 시대의 새로운 인재 평가 기준을 공식 제도로 업데이트했다고 답한 기업은 42%에 그쳤다고 제시합니다.',
          'Human Resource Management에 게재된 Pan, Froese, Xue의 연구는 AI가 성과 평가에 참여할 때 기술적 차원뿐 아니라 직원 경험과 관계적 차원을 함께 고려해야 한다고 설명합니다. AI와 인간의 협업 관계를 명확히 정립할 때 평가 만족도를 높이는 실무적 단서가 만들어집니다.'
        ]
      },
      {
        heading: '작은 실험으로 평가 방식을 다시 설계해야 한다',
        paragraphs: [
          '그래서 랩리워크는 도구 사용법을 가르치는 일회성 강의 대신, 리더와 구성원이 함께 모여 평가 지표를 합의하는 워크숍을 제안합니다. 핵심은 작은 실험으로 평가 방식을 바꿔야 정착된다는 점입니다.',
          '예를 들어 한 분기 동안 주 단위 싱크업 미팅에서 결과물이 아니라 이번 주에 AI와 검증한 가설의 목록을 공유하게 만들 수 있습니다. 이를 통해 리더는 직원이 문제를 정의하는 깊이를 관찰할 수 있고, 자연스럽게 AI 시대의 새로운 인재 평가 기준을 수립할 수 있습니다.'
        ]
      },
      {
        heading: '자주 묻는 질문',
        paragraphs: [
          '새로운 평가 기준을 도입할 때는 주니어 직원들이 이를 상시적인 감시나 감찰로 받아들이지 않도록 심리적 안전감을 주는 것이 우선입니다. 프로세스 평가의 목적이 통제가 아니라 성장을 돕는 상시 코칭이라는 점을 리더의 언어로 명확히 전달해야 합니다.',
          '전통적인 정량적 성과 지표와 AI 리터러시 평가 지표의 가장 큰 차이는 평가 대상이 산출물의 결과인가, 아니면 문제를 해결해 나가는 판단력과 맥락 이해도인가에 있습니다.'
        ]
      }
    ],
    takeaways: [
      '생성형 AI 시대에는 텍스트나 코드의 양만으로 성과를 평가하기 어렵다.',
      '미래형 고성과자는 AI를 활용하는 능력과 결과물을 비판적으로 검증하는 AI 리터러시를 함께 갖춘 사람이다.',
      '평가는 결과 중심에서 업무 재설계 과정과 피드백 루프를 관찰하는 다면적 프레임워크로 전환되어야 한다.'
    ],
    citations: [
      { text: 'Betterworks. State of Performance Enablement 2026 Report. Betterworks Insights. 2026.', url: 'https://www.betterworks.com/' },
      { text: 'Pan Y, Froese FJ, Xue S. The Role of AI in Performance Appraisal: A Mixed-Method Study of Employee Experience Through a Relational Lens. Human Resource Management. 2025.', url: 'https://doi.org/10.1002/hrm.70049' }
    ]
  },
  {
    path: '/blog/hr-mega-trend-ai-work-redesign',
    title: 'HR 메가 트렌드 AI 시대의 워크 리디자인, 도구 도입을 넘어 일의 본질을 바꾸는 법',
    description: 'AI 시대의 워크 리디자인이 왜 단순한 도구 도입을 넘어 일의 분해와 재결합, 데이터 축적 구조 설계로 이어져야 하는지 정리합니다.',
    category: 'AI HRD',
    datePublished: '2026-06-25',
    dateModified: '2026-06-25',
    author: '김기현',
    keywords: ['HR 메가 트렌드', '워크 리디자인', '생성형 AI', '직무재설계', 'AI HRD', '디지털 전환', '업무자동화', '조직전략'],
    sections: [
      {
        heading: 'AI 시대의 워크 리디자인은 도구 도입이 아니라 일의 재설계다',
        paragraphs: [
          '생성형 AI의 진정한 가치는 단순한 기능 습득이 아니라 업무 프로세스를 완전히 해체하고 다시 조립하는 설계 능력에 있습니다. 실무자의 하루를 돈과 시간이라는 자원 관점에서 분해해야 비로소 효율적인 기술이 들어갈 빈틈과 사람이 집중해야 할 고부가가치 영역이 선명해집니다.',
          '최근 한 유통 기업 미팅룸에서 리더분들과 마주 앉았을 때의 일입니다. 사내에 여러 생성형 AI 계정을 지급했지만 실무진의 활용률은 제자리걸음이었고, 정작 중요한 핵심 업무에는 여전히 시간이 부족하다는 불만이 터져 나오고 있었습니다.'
        ]
      },
      {
        heading: '기술은 넘쳐나는데 왜 정작 중요한 일에 쓸 시간은 부족할까',
        paragraphs: [
          '수많은 기업들이 인공지능 도구들을 앞다투어 현장에 도입합니다. 대부분의 조직이 걷고 있는 디지털 여정의 첫걸음은 이처럼 단순한 도구 도입 단계에 머물러 있습니다. 이 단계에서는 어떤 성과를 만드는 방식을 택해야 할지, 어디서부터 어떻게 뜯어고쳐야 할지 막연한 질문들만 겉돌게 됩니다.',
          '비즈니스 환경에서 가장 중요하고 유한한 자원은 결국 돈과 시간입니다. 우리가 조직의 혁신을 위해 가장 먼저 들여다보아야 할 핵심은 바로 돈과 시간을 쓰는 실제 사람들의 하루입니다.'
        ]
      },
      {
        heading: '업무를 완벽하게 해체하고 다시 조립하는 분해와 재결합의 원칙',
        paragraphs: [
          '랩리워크가 컨설팅 현장에서 중요하게 여기는 접근법은 기술 교육 이전에 일의 맥락과 흐름을 먼저 정교하게 분석하는 것입니다. 워크 리디자인 방법론의 핵심은 일의 분해와 일의 재결합이라는 구체적인 혁신 원칙에 있습니다.',
          '비즈니스 부서와 인사 부서가 긴밀하게 협업하여 실제 실무자들이 수행하는 모든 과업을 아주 미세한 단계까지 해체하는 작업이 선행되어야 합니다. 현장에서 실제로 무슨 일이 어떤 순서로 일어나고 있는지 확인할 때, 비로소 자원이 새어나가는 낭비의 구조와 기술이 들어갈 최적의 영역이 드러납니다.',
          '재결합의 대원칙은 고부가가치 업무 중심으로 역할을 전면 재편하고, 단순 반복 처리 업무는 기술을 통해 최대한 자동화하며, 고도의 복잡한 판단이나 관계 조율 및 협업은 사람이 담당하도록 역할을 다시 정의하는 것입니다.'
        ]
      },
      {
        heading: '생성형 기술이 지닌 과학적 근거',
        paragraphs: [
          '에릭 브린욜프슨 교수가 이끈 연구진의 연구 결과에 따르면, 생성형 기술 기반의 보조 도구를 실제 업무 환경에 도입했을 때 직원의 시간당 과업 해결률로 측정된 생산성이 평균 14%에서 15%가량 향상되었습니다.',
          '생산성 향상의 혜택이 주니어 실무자들에게 더 압도적으로 집중되었다는 사실은 기술 시스템이 조직 내부의 노하우를 빠르게 확산시키는 촉매제 역할을 수행함을 보여줍니다. 단순히 도구의 사용법만 나열하는 교육으로는 이와 같은 구조적 성과를 기대하기 어렵습니다.'
        ]
      },
      {
        heading: '도구보다 데이터가 쌓이는 일의 구조를 설계해야 한다',
        paragraphs: [
          '조직을 만날 때마다 저는 눈앞의 도구 자체에 매몰되기보다 일하는 과정에서 확보되는 데이터에 먼저 집중하시라고 조언해 드립니다. 결국 일터에서의 핵심 싸움은 데이터가 올바르게 쌓이고 있느냐에 달려 있습니다.',
          '랩리워크는 프롬프트 명령어 몇 줄을 단순히 암기시키는 강의를 지향하지 않습니다. 기술과 데이터가 유기적으로 연동되는 연결 및 통합 단계를 점검하고, 업무 방식 자체가 인공지능과 인간의 협업 중심으로 재편되는 전환 단계를 함께 만들어 가고자 합니다.'
        ]
      },
      {
        heading: '자주 묻는 질문',
        paragraphs: [
          'HR 메가 트렌드 AI 시대의 워크 리디자인 프로젝트는 사내에 다양한 솔루션과 인공지능 인프라를 도입했음에도 불구하고 직원들의 업무 과부하가 해소되지 않거나 생산성 향상이 체감되지 않을 때 필요합니다.',
          'IT 중심 자동화가 시스템의 데이터 처리 속도나 비용 효율화에 초점을 맞춘다면, HR 중심의 워크 리디자인은 사람의 경험과 역할, 조직학습의 역동에서 출발합니다. 기술의 도움으로 확보한 여유 자원을 고부가가치 과업에 전략적으로 재배치하고 구성원들이 더 주도적으로 전문성을 발휘할 수 있도록 일의 생태계를 구축한다는 점에서 다릅니다.'
        ]
      }
    ],
    takeaways: [
      '생성형 AI의 가치는 기능 습득보다 업무 프로세스를 해체하고 다시 조립하는 설계 능력에서 나온다.',
      '실무자의 하루를 돈과 시간의 관점에서 분해해야 기술이 들어갈 영역과 사람이 집중할 영역이 선명해진다.',
      '성공적인 디지털 전환은 무분별한 툴 도입보다 가치 있는 데이터가 자연스럽게 쌓이는 업무 구조를 만드는 데 달려 있다.'
    ],
    citations: [
      { text: 'Brynjolfsson E, Li D, Raymond LR. Generative AI at Work. NBER Working Paper No. 31161. 2023.', url: 'https://doi.org/10.3386/w31161' },
      { text: 'Draup for Talent. Work Redesign Framework. Draup Insights. 2026.', url: 'https://draup.com/' }
    ]
  },
  {
    path: '/blog/generative-ai-employee-training-workflow-redesign',
    title: '단순한 툴 사용법을 넘어 일하는 흐름을 바꾸는 생성 AI 직원 교육 디자인',
    description: '생성 AI 직원 교육이 단순한 툴 사용법을 넘어 업무 흐름과 직무 맥락을 다시 설계해야 하는 이유를 익명 합성 사례와 최신 연구 흐름으로 정리합니다.',
    category: 'AI HRD',
    datePublished: '2026-06-18',
    dateModified: '2026-06-18',
    author: '김기현',
    keywords: ['생성 AI 직원 교육', 'AI HRD', '업무 재설계', '워크플로우', '직무재설계', 'AX 전환', '조직학습', '랩리워크'],
    sections: [
      {
        heading: '생성 AI 직원 교육의 핵심은 기능보다 흐름이다',
        paragraphs: [
          '생성 AI 직원 교육의 핵심은 기능 학습이 아니라 흩어진 업무 단계를 유기적으로 연결하는 전체 워크플로우의 재설계에 있습니다. 개별 작업의 완벽함보다 전체 업무 흐름의 단절과 조율 비용을 줄이는 시스템적 관점이 실질적인 조직의 생산성을 결정합니다.',
          '한 고객사에서 이런 장면을 봤습니다. 전국의 매장 운영을 총괄하는 현장 리더들이 모인 자리였습니다. 회사에서 유료 생성형 AI 계정을 배포했지만 실무자들은 이메일 초안 작성에만 도구를 쓰고 있었습니다. 매일 쏟아지는 수백 건의 고객 불만 분석과 매뉴얼 정비라는 진짜 핵심 업무에는 활용하지 못하고 있었지요.'
        ]
      },
      {
        heading: '도구는 쥐어졌지만 갈 길을 잃은 업무 현장의 목소리',
        paragraphs: [
          '이 사례는 특정 기업 한 곳의 이야기가 아니라 저희가 여러 프로젝트에서 반복해서 마주치는 익명 합성 사례입니다. 많은 경영진이 최신 기술만 도입하면 조직이 저절로 혁신될 것이라 기대합니다. 하지만 교육장에서 만난 실무자들의 고민은 완전히 달랐습니다. AI가 좋다는 것은 알겠는데 내 업무 중 정확히 어느 단계에 툴을 끼워 넣어야 할지 모르겠다는 호소였습니다.',
          '실제로 유통 서비스업 현장에서는 매일 다양한 형태의 정성 데이터가 발생합니다. 매장 방문 고객의 불만이나 현장 매니저들의 피드백 등이 결합된 복잡한 맥락의 업무입니다. 직원들은 AI에게 단발성으로 질문을 던졌다가 원론적인 답변이 돌아오면 이내 실망하고 익숙한 수작업 방식으로 돌아가곤 했습니다. 도구의 문제가 아니라 AI를 다루는 일의 구조가 잡히지 않았기 때문입니다.'
        ]
      },
      {
        heading: '기능의 반복이 만드는 함정과 단절된 워크플로우의 한계',
        paragraphs: [
          '제가 이 문제를 볼 때 중요하게 보는 건 개별 과업의 생산성 함정입니다. 조직 안에서 일어나는 업무는 결코 단절된 하나의 점으로 존재하지 않습니다. 질문을 던지고 답변을 얻고 이를 검증하여 다음 단계 보고서에 반영하는 연속적인 사슬 구조를 이룹니다.',
          '직원들이 현장에서 겪는 진짜 보틀넥은 조율 비용에 있습니다. AI가 초안을 잡아주더라도 이를 인간이 다시 검토하고 양식을 바꾸고 다른 부서에 전달하는 과정에서 수많은 단절이 일어납니다. 시스템적 관점이 부족한 상태에서의 도구 도입은 오히려 직원들에게 AI 산출물을 검증하고 수정해야 하는 새로운 형태의 관리 노동을 부과하여 업무 피로도를 높이는 부작용을 낳기도 합니다.'
        ]
      },
      {
        heading: '과업의 단편화에서 시스템적 사슬 구조로의 전환을 증명하는 연구',
        paragraphs: [
          'MIT 슬론 경영대학원 연구진이 발표한 2026년 연구는 생성형 AI의 가치가 단일 과업의 효율성뿐 아니라 전체 워크플로우를 어떻게 시퀀싱하고 연결하는가에 달려 있음을 설명합니다. 이 연구는 과업 사슬화라는 개념을 제시하며 인접한 과업들을 AI 친화적인 클러스터로 묶어 연속적으로 처리할 때 조율 비용이 최소화된다고 봅니다.',
          '글로벌 컨설팅 기업 맥킨지의 2025년 변화관리 보고서에서도 비슷한 흐름이 관찰됩니다. 보고서에 따르면 생성형 AI 도입 후 성과를 내는 고성과 기업들은 단순한 도구 사용법 교육에 그치지 않고 직무 프로세스 자체를 재구성하는 정형화된 교육을 제공했습니다.'
        ]
      },
      {
        heading: '랩리워크가 제안하는 직무 맥락 기반의 학습과 작은 실험',
        paragraphs: [
          '랩리워크가 현장에서 중요하게 보는 지점은 구성원들이 매일 처리하는 일의 흐름입니다. 랩리워크는 이 지점을 단순한 일회성 강의로만 풀지 않습니다. 우리는 현장 리더들과 함께 그들의 업무 과정을 펼쳐놓고 AI가 연속해서 처리할 수 있는 사슬 구간을 발굴하는 일종의 업무 재설계 워크숍을 결합합니다.',
          '고객 피드백 데이터가 수집되면 AI가 자동으로 감정을 분류하고 연이어 카테고리별 요약을 수행하며 동시에 매장 운영 매뉴얼 매칭까지 완료하도록 흐름을 재설계할 수 있습니다. 인간은 마지막 단계에서 맥락적 판단과 최종 의사결정만 내리도록 역할을 재정의하는 것입니다. 도구보다 일의 흐름을 먼저 보고 이를 작은 실험으로 바꾸어 현업에 적용해야 비로소 변화가 정착됩니다.'
        ]
      },
      {
        heading: '자주 묻는 질문',
        paragraphs: [
          '생성 AI 직원 교육은 전사적으로 AI 도구 라이선스를 배포했으나 실제 업무 활용률이 정체되어 있을 때, 혹은 디지털 전환을 추진 중이지만 실무진의 변화 저항과 막연한 불안감이 높을 때 가장 필요합니다.',
          '일반적인 프롬프트 활용 강의가 범용적인 명령어 패턴이나 기능적인 사용법을 일방향으로 전달한다면 랩리워크의 교육은 고객사의 실제 현업 데이터와 도메인 맥락을 기반으로 진행됩니다. 툴의 기능을 외우는 것이 아니라 참가자들이 직접 자신의 업무 사슬을 쪼개고 AI 협업 구조로 재조립하는 실습 중심의 컨설팅형 과정을 지향합니다.'
        ]
      }
    ],
    takeaways: [
      '생성 AI 직원 교육은 프롬프트 기능 학습보다 업무 흐름 재설계를 먼저 다뤄야 한다.',
      'AI 도입의 병목은 개별 산출물보다 검토, 전달, 조율이 끊기는 지점에서 생긴다.',
      '랩리워크는 고객사의 실제 직무 맥락을 바탕으로 AI가 이어서 처리할 수 있는 업무 사슬을 찾고 작은 실험으로 정착시킨다.'
    ],
    citations: [
      { text: 'Demirer M, Horton JJ, Immorlica N, Lucier B, Shahidi P. Chaining Tasks, Redefining Work: A Theory of AI Automation. arXiv. 2026. arXiv:2606.15960.', url: 'https://arxiv.org/abs/2606.15960' },
      { text: 'Mayer H, Yee L, Chui M, Roberts R. Reconfiguring work: Change management in the age of gen AI. McKinsey & Company. 2025.', url: 'https://www.mckinsey.com/' }
    ]
  },
  {
    path: '/blog/ai-work-redesign-after-generative-ai',
    title: 'AI 도입은 왜 교육보다 ‘일의 재설계’가 먼저인가: 2024년 이후 논문들이 말하는 조직 변화의 조건',
    description: '2024년 이후 OpenAlex에서 확인한 AI·HRD·조직학습 관련 논문을 바탕으로 AI 도입이 도구 교육을 넘어 직무 재설계, 심리적 안전감, 리더십, 거버넌스 설계로 이어져야 하는 이유를 정리합니다.',
    category: 'AI HRD',
    datePublished: '2026-06-05',
    dateModified: '2026-06-05',
    author: '김기현',
    keywords: ['AI HRD', '생성형 AI', '직무재설계', '조직학습', '심리적 안전감', 'AI 리터러시', '리더십', '변화관리'],
    sections: [
      {
        heading: 'AI 도입의 질문은 도구가 아니라 일의 재설계다',
        paragraphs: [
          '생성형 AI 교육을 요청하는 조직에서 가장 자주 나오는 질문은 “우리 직원들이 어떤 도구를 배워야 할까요?”이다. 하지만 2024년 이후 발표된 AI·HRD·조직학습 연구들을 보면 더 중요한 질문은 “우리 조직은 AI가 들어온 뒤 일을 어떻게 다시 설계할 것인가?”다.',
          'OpenAlex API로 2024년 이후 발표된 AI와 HRD, 조직학습, 직무 변화 관련 논문을 살펴보면 AI는 단순히 업무 속도를 높이는 도구가 아니다. 채용, 성과관리, 코칭, 리더십, 학습, 심리적 안전감, 조직 정의감까지 건드리는 변화 요인이다.'
        ]
      },
      {
        heading: 'AI는 HR 활동과 업무 맥락을 함께 바꾼다',
        paragraphs: [
          'Frontiers in Psychology의 2024년 스코핑 리뷰는 AI가 HR 활동에 미치는 영향을 업무 자동화, HR 데이터 활용 최적화, 인간 역량의 증강, 업무 맥락 재설계, 일의 사회적·관계적 측면 변화로 정리한다.',
          '이 관점에서 AI HRD 교육은 프롬프트 작성법만 가르치는 방식으로는 부족하다. 구성원은 AI 결과를 검토하는 법, 자동화 가능한 일과 사람이 책임져야 할 일을 구분하는 법, 편향과 오류를 조직적으로 다루는 법을 배워야 한다.'
        ]
      },
      {
        heading: 'AI 도입은 몰입과 저항을 동시에 만든다',
        paragraphs: [
          '제조·린 조직 연구는 AI가 직원 몰입에 영향을 줄 수 있음을 보여준다. 구성원이 AI를 감시나 대체 시스템으로 느끼면 몰입은 떨어지고, 판단과 개선 활동을 돕는 도구로 경험하면 참여를 높이는 촉매가 될 수 있다.',
          'AI 코칭 연구들도 같은 시사점을 준다. AI는 시간과 비용 측면에서 가능성을 열지만, 전문직 종사자에게 위협감과 방어적 반응을 만들 수 있다. 사람의 전문성을 단순 대체하는 방식이 아니라 판단과 관계 형성을 보완하는 방식으로 설계되어야 한다.'
        ]
      },
      {
        heading: '심리적 안전감과 학습 지향 리더십이 필요하다',
        paragraphs: [
          '2025년 한국 직장인 연구는 조직의 AI 도입이 심리적 안전감에 부정적 영향을 줄 수 있고, 이것이 직원 우울 수준과 연결될 수 있음을 분석했다. 동시에 윤리적 리더십은 이 관계를 조절하는 요인으로 제시된다.',
          '2024년 학습 지향 리더십 리뷰는 리더가 지원, 교육, 역할 모델링을 직접 수행하고, 학습 분위기와 업무 조직, 자원, 지식 공유를 간접적으로 설계해야 한다고 본다. AI 도입에서도 리더는 AI 사용을 지시하는 사람이 아니라 AI와 함께 배우는 환경을 설계하는 사람이어야 한다.'
        ]
      },
      {
        heading: 'AI HRD 교육은 리터러시, 직무 재설계, 변화관리로 확장되어야 한다',
        paragraphs: [
          '랩리워크 관점에서 AI HRD 교육은 세 단계로 설계될 필요가 있다. 첫째, AI 리터러시다. 구성원이 생성형 AI의 가능성과 한계를 이해하고 결과물을 비판적으로 검토할 수 있어야 한다.',
          '둘째, 직무 재설계다. 각자의 업무를 과업, 관계, 판단의 단위로 나누고 AI와 사람이 함께 일할 흐름을 다시 그려야 한다. 셋째, 조직 변화관리다. 심리적 안전감, 윤리 기준, 리더의 역할 모델링, 데이터 거버넌스를 함께 설계해야 한다.'
        ]
      }
    ],
    takeaways: [
      '2024년 이후 연구들은 AI 도입을 업무 자동화보다 업무 맥락 재설계의 문제로 본다.',
      'AI HRD 교육은 프롬프트 교육을 넘어 검토, 판단, 윤리, 역할 재정의를 포함해야 한다.',
      'AI 도입은 심리적 안전감과 리더십의 영향을 크게 받는다.',
      'HRD의 역할은 AI 사용법 전달자가 아니라 AI와 함께 일하는 방식을 설계하는 변화관리자다.'
    ],
    citations: [
      { text: 'OpenAlex API. Search query: generative AI organizational learning workplace HRD. Filter: from_publication_date:2024-01-01. Retrieved 2026-06-05.', url: 'https://api.openalex.org/' },
      { text: 'The effects of artificial intelligence on human resource activities and the roles of the human resource triad. Frontiers in Psychology. 2024.', url: 'https://doi.org/10.3389/fpsyg.2024.1360401' },
      { text: 'Tortorella GL, et al. How does artificial intelligence impact employees’ engagement in lean organisations? International Journal of Production Research. 2024.', url: 'https://doi.org/10.1080/00207543.2024.2368698' },
      { text: 'Transformative AI in human resource management: enhancing workforce planning with topic modeling. Cogent Business & Management. 2024.', url: 'https://doi.org/10.1080/23311975.2024.2432550' },
      { text: 'The coach bots are coming: exploring global coaches’ attitudes and responses to the threat of AI coaching. Human Resource Development International. 2024.', url: 'https://doi.org/10.1080/13678868.2024.2375934' },
      { text: 'Ethics in digital and AI coaching. Human Resource Development International. 2024.', url: 'https://doi.org/10.1080/13678868.2024.2315928' },
      { text: 'Learning-Oriented Leadership in Organizations: An Integrative Review of Qualitative Studies. Human Resource Development Review. 2024.', url: 'https://doi.org/10.1177/15344843241239723' },
      { text: 'The dark side of artificial intelligence adoption: linking artificial intelligence adoption to employee depression via psychological safety and ethical leadership. Humanities and Social Sciences Communications. 2025.', url: 'https://doi.org/10.1057/s41599-025-05040-2' }
    ]
  },
  {
    path: '/blog/organizational-culture-change-covid-genai',
    title: '조직문화의 변화: 코로나19와 생성AI 이후, 일하는 방식은 어떻게 다시 설계되는가',
    description: '코로나19는 조직문화의 중심을 출근과 통제에서 회복탄력성, 심리적 안전감, 원격협업으로 옮겼고, 생성AI는 다시 판단, 학습, 거버넌스의 문화를 요구하고 있습니다.',
    category: '조직문화',
    datePublished: '2026-05-28',
    dateModified: '2026-05-28',
    author: '김기현',
    keywords: ['조직문화', '조직변화', '코로나19', '생성AI', '원격근무', '심리적 안전감', '번아웃', 'AI 거버넌스', 'HRD', '변화관리'],
    sections: [
      {
        heading: '코로나19는 조직문화의 기본값을 바꾸었다',
        paragraphs: [
          '조직문화는 어느 날 갑자기 바뀌지 않는다. 보통은 위기가 먼저 오고, 일하는 방식이 흔들리고, 그 뒤에 사람들이 “우리 조직은 무엇을 정상으로 볼 것인가”를 다시 묻기 시작한다. 코로나19는 출근, 대면회의, 상사의 관찰, 같은 공간에 있다는 감각을 흔들었다.',
          '이번 글은 2012년 이후 PubMed에 등재된 논문 중 Europe PMC 기준 인용수 50회 이상인 연구를 중심으로 작성했다. 단순히 인용수가 높은 오래된 논문만 따르지 않기 위해 최근 논문에 가중치를 두었다.'
        ]
      },
      {
        heading: '위기 속 문화는 실행 조건으로 드러난다',
        paragraphs: [
          'Houghton 외(2020)의 Cochrane 리뷰는 호흡기 감염병 상황에서 의료진이 감염예방지침을 따르는 데 영향을 주는 요인을 정리했다. 지침의 명확성, 교육, 물리적 자원, 리더십, 팀 내 의사소통이 모두 중요했다.',
          'Wu 외(2020)는 동료지원과 위기 커뮤니케이션이 기관의 회복탄력성을 높이는 핵심 전략이라고 보았다. 위기 속에서 사람들은 정보보다 먼저 신뢰를 찾고, 지침보다 먼저 이 조직이 나를 보호하려 하는가를 확인한다.'
        ]
      },
      {
        heading: '원격근무는 장소가 아니라 협업 리듬의 문제다',
        paragraphs: [
          'Allen 외(2015)는 telecommuting 연구를 종합하며 원격근무가 성과와 직무만족에 긍정적일 수 있지만, 고립감과 경계관리 문제를 함께 만든다고 정리했다.',
          '팬데믹 이후 조직문화의 질문은 원격근무를 허용할 것인가에서 어떤 일을 언제 함께 해야 하는가로 바뀌었다. 좋은 문화는 사무실 복귀율이 아니라 협업의 리듬을 설계한다.'
        ]
      },
      {
        heading: '번아웃과 유지가 조직문화의 성적표가 되었다',
        paragraphs: [
          'Cohen 외(2023)는 보건전문직의 웰빙과 번아웃을 낮추는 직장 개입을 검토했고, de Vries 외(2023)는 병원에서 인력 유지에 영향을 주는 요인을 체계적으로 정리했다.',
          '두 연구가 만나는 지점은 명확하다. 조직문화는 좋은 분위기가 아니라 사람이 계속 일할 수 있게 만드는 시스템이다. 업무량, 리더십, 인정, 성장 기회, 심리적 안전감이 연결될 때 구성원은 남는다.'
        ]
      },
      {
        heading: '생성AI는 판단과 학습의 문화를 흔든다',
        paragraphs: [
          '팬데믹이 일하는 장소와 관계의 문화를 흔들었다면, 생성AI는 판단과 학습의 문화를 흔든다. Thirunavukarasu 외(2023)와 Sallam(2023)은 대규모언어모델과 ChatGPT가 교육, 연구, 실무에 기회를 주지만 정확성, 편향, 윤리, 책임성 문제가 동시에 따라온다고 정리했다.',
          '이제 조직문화의 핵심 질문은 AI를 쓰게 할 것인가가 아니라 어떤 판단은 사람이 책임지고, 어떤 작업은 AI와 함께 할 것인가가 된다.'
        ]
      },
      {
        heading: 'AI 정착은 기술보다 구현과 거버넌스의 문제다',
        paragraphs: [
          'Petersson 외(2022)는 AI 구현의 장벽으로 데이터 품질, 역량 부족, 책임 소재, 조직 내 신뢰, 기존 업무흐름과의 충돌을 제시했다. Reddy(2024)는 생성AI 도입에도 구현과학 기반의 단계적 도입, 거버넌스, 지속가능한 확산 경로가 필요하다고 주장했다.',
          '즉, AI가 조직문화에 들어오는 순간 HRD와 OD의 역할은 더 커진다. 교육은 사용법 안내가 아니라 검증, 책임, 협업 규칙을 만드는 과정이 된다.'
        ]
      }
    ],
    takeaways: [
      '코로나19 이후 조직문화는 출근 중심의 통제 문화에서 회복탄력성, 신뢰, 심리적 안전감, 원격협업 설계로 이동했다.',
      '생성AI는 조직문화의 초점을 도구 사용에서 판단, 책임, 검증, 거버넌스, 지속학습 문화로 확장시킨다.',
      '앞으로의 HRD와 OD는 교육 프로그램이 아니라 함께 일하는 방식의 재계약을 설계해야 한다.'
    ],
    citations: [
      { text: 'Thirunavukarasu AJ, et al. Large language models in medicine. Nature Medicine. 2023;29:1930-1940. PMID: 37460753. Europe PMC cited by 1473.', url: 'https://doi.org/10.1038/s41591-023-02448-8' },
      { text: 'Sallam M. ChatGPT Utility in Healthcare Education, Research, and Practice. Healthcare (Basel). 2023;11(6):887. PMID: 36981544. Europe PMC cited by 1173.', url: 'https://doi.org/10.3390/healthcare11060887' },
      { text: 'Houghton C, et al. Barriers and facilitators to healthcare workers adherence with infection prevention and control guidelines. Cochrane Database Syst Rev. 2020;4:CD013582. PMID: 32315451. Europe PMC cited by 443.', url: 'https://doi.org/10.1002/14651858.CD013582' },
      { text: 'Allen TD, Golden TD, Shockley KM. How Effective Is Telecommuting? Psychol Sci Public Interest. 2015;16(2):40-68. PMID: 26403188. Europe PMC cited by 256.', url: 'https://doi.org/10.1177/1529100615593273' },
      { text: 'Cohen C, et al. Workplace interventions to improve well-being and reduce burnout. BMJ Open. 2023;13:e071203. PMID: 37385740. Europe PMC cited by 197.', url: 'https://doi.org/10.1136/bmjopen-2022-071203' },
      { text: 'Petersson L, et al. Challenges to implementing artificial intelligence in healthcare. BMC Health Serv Res. 2022;22:850. PMID: 35778736. Europe PMC cited by 179.', url: 'https://doi.org/10.1186/s12913-022-08215-8' },
      { text: 'Reddy S. Generative AI in healthcare: an implementation science informed translational path. Implementation Science. 2024;19:27. PMID: 38491544. Europe PMC cited by 147.', url: 'https://doi.org/10.1186/s13012-024-01357-9' },
      { text: 'de Vries N, et al. The Race to Retain Healthcare Workers. Inquiry. 2023;60:469580231159318. PMID: 36912131. Europe PMC cited by 142.', url: 'https://doi.org/10.1177/00469580231159318' },
      { text: 'Wu AW, Connors C, Everly GS Jr. COVID-19: Peer Support and Crisis Communication Strategies to Promote Institutional Resilience. Ann Intern Med. 2020;172(12):822-823. PMID: 32251512. Europe PMC cited by 122.', url: 'https://doi.org/10.7326/M20-1236' },
      { text: 'Gómez-Salgado J, et al. Work engagement and psychological distress of health professionals during the COVID-19 pandemic. J Nurs Manag. 2021;29(5):1016-1025. PMID: 33400325. Europe PMC cited by 55.', url: 'https://doi.org/10.1111/jonm.13239' }
    ]
  },
  {
    path: '/blog/genai-organization-change-evidence-based',
    title: '생성AI는 조직을 어떻게 바꾸는가: 논문이 말하는 도입 이후의 변화 설계',
    description: '2022년 이후 발표된 고인용 연구를 바탕으로 생성AI가 일하는 방식, 직무 구조, 학습 체계, 거버넌스에 미치는 영향과 HRD가 준비해야 할 과제를 정리합니다.',
    category: 'AI HRD',
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    author: '김기현',
    keywords: ['생성AI', 'ChatGPT', '조직변화', '변화관리', 'AI HRD', '직무재설계', '구현과학', '조직개발', '디지털전환', 'AI리터러시'],
    sections: [
      {
        heading: '생성AI 도입은 기술 문제가 아니라 변화관리 문제',
        paragraphs: [
          '한 의료기관의 사례에서 출발해보자. ChatGPT-4에 의사-환자 대화 녹취를 입력해 SOAP 형식의 진료기록을 자동 생성한 연구(Kernberg et al., 2024)는 평균 23.6건의 오류를 보고했다. 그중 86%가 누락(omission)이었다. 흥미로운 점은 결론이다. 연구진은 AI 도입이 문서 작성 부담을 줄일 가능성은 분명하지만, 기존 워크플로에 매끄럽게 통합되어야 하며 임상가의 검토 단계가 반드시 설계되어야 한다고 밝혔다.',
          '즉, 기술 자체의 정확도보다 조직이 어떻게 검증과 교정 절차를 끼워 넣느냐가 성과를 가른다는 것이다. 도구는 워크플로 안에 끼워질 때 비로소 가치를 만든다.'
        ]
      },
      {
        heading: '구조화된 도입 프로그램과 거버넌스가 필요하다',
        paragraphs: [
          'Reddy(2024)는 생성AI를 의료조직에 도입하려면 기술수용모델(TAM)과 NASSS 같은 구현과학 프레임이 필수라고 주장했다. 파일럿-확산-지속의 단계적 변화관리, 이해관계자 참여 설계, 책임 거버넌스가 없이는 도입은 실패하거나 표류한다.',
          '이는 한국 HRD가 지금까지 AI 리터러시 교육 한 줄로 처리해온 영역을 훨씬 넘는 과제다.'
        ]
      },
      {
        heading: '직무 재설계와 KSA 재정의가 뒤따른다',
        paragraphs: [
          'Bhuyan 외(2025)는 생성AI가 임상 영역뿐 아니라 비임상 행정, 즉 의료문서, 청구·수가관리, 홍보, 교육의 효율을 동시에 끌어올린다고 보고했다. 반복 행정업무가 줄어든 자리에는 검토·판단·소통 역량을 요구하는 직무가 들어선다.',
          '인사부서는 KSA(지식·기술·태도) 정의를 다시 써야 한다.'
        ]
      },
      {
        heading: 'AI는 IT 과제가 아니라 조직개발 과제다',
        paragraphs: [
          'Yu 외(2023)는 생성AI 도입이 IT 부서만의 과제가 아님을 강조하며, 이해관계자가 함께 설계하는 공동 디자인(co-design) 프로세스를 핵심 원칙으로 제시한다.',
          'HRD 언어로 옮기면 이렇다. AI는 OD(조직개발) 과제이지, IT 과제가 아니다.'
        ]
      },
      {
        heading: '비판적 활용 역량이 AI 정착의 핵심이다',
        paragraphs: [
          'Wang 외(2023)는 AI 도구의 개발자와 사용자 모두 언제 그 접근이 개선되어야 하는지 이해할 역량이 필요하다고 강조했다. 이는 조직 구성원이 AI를 맹신하지도, 회피하지도 않게 만드는 비판적 활용 역량의 중요성을 의미한다.',
          'Liu 외(2023)의 연구 역시 ChatGPT가 의사결정 보조 역할은 잘 수행하지만 단독 판단자로는 신뢰할 수 없다는 점을 보여준다. 생성AI는 대체가 아니라 증강 도구다.'
        ]
      }
    ],
    takeaways: [
      'AI 도입 성과는 모델 성능이 아니라 조직의 변화관리·구현과학 역량이 결정한다.',
      '생성AI는 임상·행정 워크플로를 동시에 재편하며, 직무 재설계와 KSA 재정의를 요구한다.',
      '도입은 IT 과제가 아니라 OD(조직개발) 과제다. 공동 디자인과 비판적 활용 역량 없이는 정착하지 않는다.'
    ],
    citations: [
      { text: 'Wang H, et al. Scientific discovery in the age of artificial intelligence. Nature. 2023;620(7972):47-60.', url: 'https://doi.org/10.1038/s41586-023-06221-2' },
      { text: 'Reddy S. Generative AI in healthcare: an implementation science informed translational path on application, integration and governance. Implementation Science. 2024;19(1):27.', url: 'https://doi.org/10.1186/s13012-024-01357-9' },
      { text: 'Yu P, Xu H, Hu X, Deng C. Leveraging Generative AI and Large Language Models: A Comprehensive Roadmap for Healthcare Integration. Healthcare (Basel). 2023;11(20):2776.', url: 'https://doi.org/10.3390/healthcare11202776' },
      { text: 'Liu J, et al. Utility of ChatGPT in Clinical Practice. J Med Internet Res. 2023;25:e48568.', url: 'https://pubmed.ncbi.nlm.nih.gov/37379067/' },
      { text: 'Kernberg A, Gold JA, Mohan V. Using ChatGPT-4 to Create Structured Medical Notes From Audio Recordings of Physician-Patient Encounters. J Med Internet Res. 2024;26:e54419.', url: 'https://doi.org/10.2196/54419' },
      { text: 'Bhuyan SS, et al. Generative Artificial Intelligence Use in Healthcare. J Med Syst. 2025;49(1):10.', url: 'https://doi.org/10.1007/s10916-024-02136-1' }
    ]
  },
  {
    path: '/blog/ai-hrd-training',
    title: 'AI 시대의 HRD 교육, 무엇이 달라져야 할까',
    description: '생성형 AI 확산 이후 HRD 교육은 도구 사용법을 알려주는 단기 교육을 넘어, 구성원이 실제 업무 방식을 재설계하도록 돕는 변화관리 프로그램이 되어야 합니다.',
    category: 'AI HRD',
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    author: 'Lab Re:work',
    keywords: ['AI HRD 교육', '생성형 AI 교육', 'AX 전환', '조직문화'],
    sections: [
      {
        heading: 'AI HRD 교육은 도구 교육에서 끝나면 안 된다',
        paragraphs: [
          '많은 조직이 생성형 AI 교육을 시작했지만, 교육 이후 업무 방식이 실제로 바뀌지 않는 경우가 많습니다. AI 도구 사용법만 익히는 교육은 구성원의 일하는 방식, 의사결정 방식, 협업 문화를 바꾸기 어렵기 때문입니다.',
          'AI 시대의 HRD 교육은 구성원이 자신의 업무를 다시 정의하고, 반복 업무와 고부가가치 업무를 구분하며, AI를 동료처럼 활용하는 실험을 할 수 있어야 합니다.'
        ]
      },
      {
        heading: '업무 맥락과 변화관리 설계가 핵심이다',
        paragraphs: [
          '랩리워크는 AI 활용 교육을 조직문화와 직무 재설계 관점에서 다룹니다. 구성원의 불안과 저항을 낮추고, 작은 성공 경험을 만들며, 실제 업무 산출물로 이어지는 프로그램을 설계합니다.',
          '좋은 AI HRD 교육은 구성원이 무엇을 자동화할까보다 나는 어떤 일에 더 집중해야 할까를 묻게 만듭니다.'
        ]
      }
    ],
    takeaways: [
      'AI 교육은 도구 사용법보다 업무 재설계와 연결되어야 합니다.',
      '구성원의 심리적 불안과 저항을 다루는 변화관리 설계가 필요합니다.',
      '실제 업무 산출물과 작은 성공 경험이 AI 활용 확산의 핵심입니다.'
    ],
    citations: []
  }
];

const blogPage = {
  path: '/blog',
  title: '조직문화 인사이트 | 랩리워크 블로그',
  description: '잡 크래프팅, 조직문화, AX 전환, 리더십에 관한 실무 가이드와 사례 연구를 제공하는 랩리워크 블로그입니다.'
};

const fieldNotesPage = {
  path: '/field-notes',
  title: '현장 인사이트 | 강의 현장 · 학회 발표 · 기업 워크숍 - 랩리워크',
  description: '랩리워크의 강의 현장, 학회·논문 발표, 기업 워크숍, 교육 운영 사례를 기록하는 현장 인사이트 게시판입니다.',
  keywords: ['현장 인사이트', '강의 현장', '학회 발표', '논문 발표', '기업 워크숍', '교육 운영 사례', 'AI HRD 교육', '조직문화 워크숍']
};

const fieldNoteCategories = [
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

const fieldNotePosts = [
  {
    path: '/field-notes/dongbu-women-ax-data-planner-course',
    title: 'AX 시대의 기획자는 데이터를 읽고, AI와 함께 설계하는 사람입니다',
    description: '2026년 서울특별시동부여성발전센터에서 진행되는 AX융합 데이터 기반 기획자 교육 현장을 기록합니다. AI 리터러시, 파이썬 데이터 분석, 데이터 기반 기획과 취업 포트폴리오 역량을 다룹니다.',
    category: '강의 현장',
    datePublished: '2026-06-05',
    dateModified: '2026-06-05',
    location: '서울특별시동부여성발전센터 D스튜디오',
    author: '김기현',
    keywords: ['AX융합', '데이터 기반 기획', 'AI 리터러시', '파이썬 데이터 분석', '여성 취업교육', '포트폴리오', '강의 현장'],
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
          'OpenAlex API로 확인한 2024년 이후 연구들도 이 교육의 방향과 맞닿아 있습니다. OECD의 성인역량 조사 보고서(2024)는 성인의 문해력, 수리력, 적응적 문제해결력이 고용, 임금, 지속학습의 기반이 된다고 설명합니다.',
          '2025년 BMC Psychology에 실린 연구는 AI 태도와 AI 리터러시가 진로 자기효능감과 구직 불안 사이에서 중요한 매개 역할을 한다고 분석했습니다.'
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
          '파이썬 데이터 분석과 데이터 기반 예측은 단순한 기술 훈련이 아닙니다. 실무자는 데이터를 통해 문제를 발견하고, 패턴을 해석하고, 의사결정을 제안할 수 있어야 합니다.',
          '생성형 AI와 고용가능성에 관한 2024년 연구도 교육 현장에서 생성형 AI를 윤리적 기준과 학습 목적 안에서 활용하도록 돕는 것이 필요하다는 시사점을 줍니다.'
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
          '이번 교육의 방향은 AI를 잘 쓰는 사람에서 멈추지 않습니다. AI와 데이터로 더 좋은 기획을 할 수 있는 사람을 목표로 합니다.',
          '취업을 준비하는 과정에서 가장 강력한 증거는 무엇을 배웠는가보다 무엇을 만들어냈는가입니다. 참여자들은 교육 과정에서 배운 AI, 데이터 분석, 기획, 발표 역량을 하나의 결과물로 정리하며 자신의 실무 가능성을 보여주게 됩니다.'
        ]
      },
      {
        heading: '좋은 교육은 스스로 질문하게 만드는 일입니다',
        paragraphs: [
          'AX 시대의 기획자는 기술자만도, 문서 작성자만도 아닙니다. 데이터를 읽고, 사람의 문제를 이해하고, AI를 협업 도구로 활용하며, 실행 가능한 제안을 만드는 사람입니다.',
          '랩리워크는 이번 교육을 통해 참여자들이 AI와 데이터를 두려워해야 할 변화가 아니라, 자신의 가능성을 넓히는 도구로 경험할 수 있도록 함께하고 있습니다.'
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
    path: '/field-notes/kpc-ai-job-redesign-agent-course',
    title: 'AI 시대의 직무재설계와 AI 에이전트 활용 과정에 랩리워크가 함께합니다',
    description: '한국생산성본부의 「AI 시대의 직무재설계와 AI 에이전트 활용」 과정은 AI에 맡길 일과 사람이 집중해야 할 핵심 가치를 구분하고, 실무형 AI 에이전트를 직접 기획하는 교육입니다.',
    category: '강의 현장',
    datePublished: '2026-06-02',
    dateModified: '2026-06-02',
    location: '한국생산성본부',
    author: '김기현',
    keywords: ['AI 직무재설계', 'AI 에이전트', '생성형 AI 교육', '업무 생산성', '직무혁신', '강의 현장'],
    sections: [
      {
        heading: 'AI를 쓰는 법보다 중요한 것은 일을 다시 설계하는 법입니다',
        paragraphs: [
          '생성형 AI의 확산은 단순히 새로운 도구를 배우는 문제를 넘어, 우리가 맡은 직무와 일하는 방식을 다시 정의해야 하는 과제로 이어지고 있습니다. 이제 중요한 질문은 AI를 사용할 수 있는가가 아니라 내 업무 중 무엇을 AI와 함께 재설계할 것인가입니다.',
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
          '특히 AI 활용에 대한 막연한 기대나 불안을 넘어, 개인의 역할과 경쟁력을 새롭게 정의하는 데 초점을 둡니다. AI가 업무를 대체하는 것이 아니라 구성원이 더 가치 있는 판단과 설계에 집중하도록 돕는 파트너가 될 수 있도록 사례와 실습 중심으로 접근합니다.'
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
          '랩리워크는 이번 과정을 통해 참가자들이 AI를 도구로 익히는 데서 멈추지 않고, 자신의 업무를 재설계하고 AI 에이전트를 실무에 적용하는 구체적인 방법을 가져갈 수 있도록 돕겠습니다.',
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

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function stripTags(value) {
  return String(value).replace(/<[^>]*>/g, '');
}

function jsonScript(data) {
  return `<script type="application/ld+json">${JSON.stringify(data).replaceAll('</', '<\\/')}</script>`;
}

function absoluteUrl(url) {
  return String(url).startsWith('http') ? url : `${site.url}${url}`;
}

function injectMeta(html, route, schemaScripts, bodyHtml) {
  const canonical = `${site.url}${route.path}`;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const keywords = escapeHtml(route.keywords?.join(', ') || 'AI HRD 교육, 생성형 AI 교육, 조직문화, 변화관리, 랩리워크');
  const headExtra = `
  <link rel="canonical" href="${canonical}" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="keywords" content="${keywords}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:type" content="${route.path === '/blog' ? 'website' : 'article'}" />
  <meta property="og:site_name" content="${site.name}" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  ${schemaScripts.join('\n  ')}`;

  return html
    .replace(/<link rel="canonical"[^>]*>\s*/g, '')
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>\s*/g, '')
    .replace(/<meta name="keywords"[^>]*>\s*/g, '')
    .replace(/<meta property="og:title"[^>]*>\s*/g, '')
    .replace(/<meta property="og:description"[^>]*>\s*/g, '')
    .replace(/<meta property="og:url"[^>]*>\s*/g, '')
    .replace(/<meta property="og:type"[^>]*>\s*/g, '')
    .replace(/<meta name="twitter:title"[^>]*>\s*/g, '')
    .replace(/<meta name="twitter:description"[^>]*>\s*/g, '')
    .replace('</head>', `${headExtra}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
}

function layout(content) {
  return `<main style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:880px;margin:0 auto;padding:48px 20px;line-height:1.75;color:#172033">
  <p><a href="/" style="color:#2563eb;font-weight:700">Lab Re:work</a></p>
  ${content}
</main>`;
}

function articleBody(post) {
  const sections = post.sections.map(section => `
    <section>
      <h2>${escapeHtml(section.heading)}</h2>
      ${section.paragraphs.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('\n')}
    </section>`).join('\n');

  const takeaways = post.takeaways.map(item => `<li>${escapeHtml(item)}</li>`).join('\n');
  const citations = post.citations.length
    ? `<section><h2>출처</h2><ol>${post.citations.map(citation => `<li><a href="${citation.url}">${escapeHtml(citation.text)}</a></li>`).join('\n')}</ol></section>`
    : '';

  return layout(`
    <article>
      <p style="color:#2563eb;font-weight:700">${escapeHtml(post.category)} · ${escapeHtml(post.datePublished)}</p>
      <h1>${escapeHtml(post.title)}</h1>
      <p><strong>${escapeHtml(post.description)}</strong></p>
      ${sections}
      <section><h2>핵심 정리</h2><ul>${takeaways}</ul></section>
      ${citations}
    </article>`);
}

function blogBody() {
  const cards = posts.map(post => `
    <article>
      <p style="color:#2563eb;font-weight:700">${escapeHtml(post.category)} · ${escapeHtml(post.datePublished)}</p>
      <h2><a href="${post.path}">${escapeHtml(post.title)}</a></h2>
      <p>${escapeHtml(post.description)}</p>
    </article>`).join('\n');

  return layout(`
    <h1>조직문화 인사이트</h1>
    <p>${escapeHtml(blogPage.description)}</p>
    ${cards}`);
}

function fieldNotesBody() {
  const categories = fieldNoteCategories.map(category => `
    <article>
      <p style="color:#2563eb;font-weight:700">현장 인사이트</p>
      <h2>${escapeHtml(category.name)}</h2>
      <p>${escapeHtml(category.description)}</p>
    </article>`).join('\n');
  const postCards = fieldNotePosts.map(post => `
    <article>
      <p style="color:#2563eb;font-weight:700">${escapeHtml(post.category)} · ${escapeHtml(post.datePublished)}</p>
      <h2><a href="${post.path}">${escapeHtml(post.title)}</a></h2>
      <p>${escapeHtml(post.description)}</p>
    </article>`).join('\n');

  return layout(`
    <h1>현장 인사이트</h1>
    <p>${escapeHtml(fieldNotesPage.description)}</p>
    <h2>최근 현장 기록</h2>
    ${postCards}
    <h2>카테고리</h2>
    ${categories}`);
}

function fieldNotePostBody(post) {
  const sections = post.sections.map(section => `
    <section>
      <h2>${escapeHtml(section.heading)}</h2>
      ${section.paragraphs.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('\n')}
      ${section.image ? `<figure><img src="${section.image.src}" alt="${escapeHtml(section.image.alt)}" style="max-width:100%;height:auto;border-radius:20px" /><figcaption>${escapeHtml(section.image.caption)}</figcaption></figure>` : ''}
    </section>`).join('\n');
  const applicationGuide = post.applicationGuide || (post.link ? '교육 일정, 장소, 신청 방법은 한국생산성본부 과정 상세 페이지에서 확인하실 수 있습니다.' : '');
  const linkBlock = applicationGuide ? `
      <section>
        <h2>과정 신청 및 상세 안내</h2>
        <p>${escapeHtml(applicationGuide)}</p>
        ${post.link ? `<p><a href="${post.link.href}">${escapeHtml(post.link.label)}</a></p>` : ''}
      </section>` : '';
  const posterBlock = post.poster
    ? `<figure><img src="${post.poster.src}" alt="${escapeHtml(post.poster.alt)}" style="max-width:100%;height:auto;border-radius:20px" /><figcaption>${escapeHtml(post.poster.caption)}</figcaption></figure>`
    : '';

  return layout(`
    <article>
      <p style="color:#2563eb;font-weight:700">${escapeHtml(post.category)} · ${escapeHtml(post.datePublished)} · ${escapeHtml(post.location)}</p>
      <h1>${escapeHtml(post.title)}</h1>
      <p><strong>${escapeHtml(post.description)}</strong></p>
      ${sections}
      ${linkBlock}
      ${posterBlock}
    </article>`);
}

function articleSchema(post) {
  const canonical = `${site.url}${post.path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    inLanguage: 'ko-KR',
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: canonical,
    url: canonical,
    articleSection: post.category,
    keywords: post.keywords,
    author: {
      '@type': 'Person',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      alternateName: site.alternateName,
      url: site.url,
      email: site.email
    },
    citation: post.citations.map(citation => citation.url),
    about: post.keywords.map(keyword => ({ '@type': 'Thing', name: keyword })),
    articleBody: stripTags(articleBody(post))
  };
}

function fieldNotesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: fieldNotesPage.title,
    description: fieldNotesPage.description,
    url: `${site.url}${fieldNotesPage.path}`,
    inLanguage: 'ko-KR',
    publisher: {
      '@type': 'Organization',
      name: site.name,
      alternateName: site.alternateName,
      url: site.url,
      email: site.email
    },
    about: fieldNotesPage.keywords.map(keyword => ({ '@type': 'Thing', name: keyword })),
    hasPart: [
      ...fieldNotePosts.map(post => ({
        '@type': 'Article',
        headline: post.title,
        url: `${site.url}${post.path}`,
        datePublished: post.datePublished
      })),
      ...fieldNoteCategories.map(category => ({
        '@type': 'CreativeWork',
        name: category.name,
        description: category.description
      }))
    ]
  };
}

function fieldNotePostSchema(post) {
  const canonical = `${site.url}${post.path}`;
  const images = [
    ...(post.poster ? [post.poster.src] : []),
    ...post.sections.flatMap(section => section.image ? [section.image.src] : [])
  ].map(absoluteUrl);

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    inLanguage: 'ko-KR',
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: canonical,
    url: canonical,
    articleSection: post.category,
    keywords: post.keywords,
    image: images,
    author: {
      '@type': 'Person',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      alternateName: site.alternateName,
      url: site.url,
      email: site.email
    },
    about: post.keywords.map(keyword => ({ '@type': 'Thing', name: keyword })),
    articleBody: stripTags(fieldNotePostBody(post))
  };
}

function fieldNotesBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: site.url },
      { '@type': 'ListItem', position: 2, name: '현장 인사이트', item: `${site.url}${fieldNotesPage.path}` }
    ]
  };
}

function breadcrumbSchema(route, label) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: site.url },
      { '@type': 'ListItem', position: 2, name: '블로그', item: `${site.url}/blog` },
      ...(route.path === '/blog' ? [] : [{ '@type': 'ListItem', position: 3, name: label, item: `${site.url}${route.path}` }])
    ]
  };
}

function blogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: blogPage.title,
    description: blogPage.description,
    url: `${site.url}/blog`,
    inLanguage: 'ko-KR',
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${site.url}${post.path}`,
      datePublished: post.datePublished
    }))
  };
}

async function writeRoute(routePath, html) {
  const filePath = routePath === '/' ? join(dist, 'index.html') : join(dist, routePath.slice(1), 'index.html');
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, html, 'utf8');
}

await writeRoute('/blog', injectMeta(shell, blogPage, [
  jsonScript(blogSchema()),
  jsonScript(breadcrumbSchema(blogPage, '블로그'))
], blogBody()));

await writeRoute('/field-notes', injectMeta(shell, fieldNotesPage, [
  jsonScript(fieldNotesSchema()),
  jsonScript(fieldNotesBreadcrumbSchema())
], fieldNotesBody()));

for (const post of fieldNotePosts) {
  await writeRoute(post.path, injectMeta(shell, post, [
    jsonScript(fieldNotePostSchema(post)),
    jsonScript({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: site.url },
        { '@type': 'ListItem', position: 2, name: '현장 인사이트', item: `${site.url}/field-notes` },
        { '@type': 'ListItem', position: 3, name: post.title, item: `${site.url}${post.path}` }
      ]
    })
  ], fieldNotePostBody(post)));
}

for (const post of posts) {
  await writeRoute(post.path, injectMeta(shell, post, [
    jsonScript(articleSchema(post)),
    jsonScript(breadcrumbSchema(post, post.title))
  ], articleBody(post)));
}

console.log(`Prerendered SEO routes: /blog, /field-notes, ${fieldNotePosts.map(post => post.path).join(', ')}, ${posts.map(post => post.path).join(', ')}`);
