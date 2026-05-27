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
  <p><a href="/blog" style="color:#2563eb;font-weight:700">Lab Re:work Blog</a></p>
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

for (const post of posts) {
  await writeRoute(post.path, injectMeta(shell, post, [
    jsonScript(articleSchema(post)),
    jsonScript(breadcrumbSchema(post, post.title))
  ], articleBody(post)));
}

console.log(`Prerendered SEO routes: /blog, ${posts.map(post => post.path).join(', ')}`);
