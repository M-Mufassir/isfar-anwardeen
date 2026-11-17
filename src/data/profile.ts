export interface CareerMilestone {
  id: string;
  company: string;
  shortTag: string;
  period: string;
  duration: string;
  location: string;
  headlineRole: string;
  isCurrent?: boolean;
  summary: string;
  subRoles?: {
    title: string;
    period: string;
    highlight?: string;
  }[];
  badges: string[];
}

export interface EnterprisePillar {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: 'network' | 'cloud' | 'layers';
}

export const PROFILE = {
  name: 'Isfar Anwardeen',
  honorific: 'Mr.',
  role: 'General Manager - Enterprise & Postpaid',
  company: 'Hutchison Telecommunications Lanka (Pvt) Ltd.',
  brandName: 'HUTCH Enterprise',
  parentGroup: 'A member of CK Hutchison Holdings',
  location: 'Colombo, Sri Lanka',
  mobile: '+94725506666',
  mobileDisplay: '+94 72 550 6666',
  generalLine: '+94788632632',
  generalLineDisplay: '+94 78 863 2632',
  email: 'isfara@hutchison.lk',
  address: 'No 234, Galle Road, Bambalapitiya, Colombo 04, Sri Lanka',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=234+Galle+Road+Bambalapitiya+Colombo+04+Sri+Lanka',
  website: 'https://www.hutch.lk',
  cloudWebsite: 'https://hutchcloud.lk',
  whatsappUrl:
    'https://wa.me/94725506666?text=Hello%20Mr.%20Isfar%20Anwardeen%2C%20connecting%20with%20you%20via%20your%20HUTCH%20Enterprise%20digital%20card.',
  vcardPath: '/isfar-anwardeen.vcf',
  executiveSummary:
    'As General Manager - Enterprise & Postpaid, I drive commercial growth and enterprise innovation across Sri Lanka’s telecommunications landscape — leveraging 25+ years of executive leadership in enterprise sales, postpaid strategy, SME unit creation, and high-performing team transformation.',
  metrics: [
    { value: '25+', label: 'Years Telecom Leadership', accent: true },
    { value: 'SL & CA', label: 'Cross-Market Experience', accent: false },
    { value: '2020', label: 'CLA Great Manager Award', accent: false },
    { value: 'MBA', label: 'ICFAI Business Admin', accent: false },
  ],
  enterprisePillars: [
    {
      title: 'Enterprise Connectivity & Postpaid',
      subtitle: 'Mobile-for-Business · IoT · Leased Lines',
      description:
        'Scalable postpaid fleets, high-speed Internet Leased Lines (ILL), and resilient corporate mobility engineered for enterprises, SMEs, and institutions.',
      tags: ['Corporate Postpaid', 'IoT Connectivity', 'Leased Lines'],
      icon: 'network',
    },
    {
      title: 'HUTCH Cloud & Cybersecurity',
      subtitle: 'Sovereign Cloud · Managed Security · APIs',
      description:
        'Next-generation sovereign cloud architecture, zero-trust security frameworks, and enterprise API integration powered by Hutchison’s global infrastructure.',
      tags: ['HUTCH Cloud', 'Cybersecurity', 'API Gateway'],
      icon: 'cloud',
    },
    {
      title: 'Digital Workplace & Engagement',
      subtitle: 'Omni-Channel · Bulk Messaging · Digitization',
      description:
        'Modern workplace collaboration tools, corporate messaging portals, and customer engagement platforms tailored for rapid business digitization.',
      tags: ['Omni-Channel', 'Enterprise SMS', 'SME Enablement'],
      icon: 'layers',
    },
  ] as EnterprisePillar[],
  careerTimeline: [
    {
      id: 'hutch',
      company: 'Hutchison Telecommunications Lanka (Pvt) Ltd.',
      shortTag: 'HUTCH SRI LANKA',
      period: 'May 2022 – Present',
      duration: 'Current Mandate',
      location: 'Colombo, Sri Lanka',
      headlineRole: 'General Manager - Enterprise & Postpaid',
      isCurrent: true,
      summary:
        'Leading the Enterprise Business & Postpaid division at HUTCH Sri Lanka — scaling corporate connectivity, cloud & digital services, and strategic B2B partnerships under the CK Hutchison Holdings umbrella.',
      badges: ['Enterprise Strategy', 'Postpaid P&L', 'B2B Partnerships', 'Team Leadership'],
    },
    {
      id: 'airtel',
      company: 'Bharti Airtel Lanka',
      shortTag: 'AIRTEL SRI LANKA',
      period: 'Nov 2012 – May 2022',
      duration: '9 yrs 7 mos',
      location: 'Colombo, Sri Lanka',
      headlineRole: 'Head of Sales – Postpaid & SME Pioneer',
      summary:
        'Progressed through three core leadership tiers over nearly a decade, founding Airtel Lanka’s first in-house SME business unit and earning national recognition at the CLA Great Manager Awards 2020.',
      subRoles: [
        {
          title: 'Head of Sales – Postpaid',
          period: 'Feb 2020 – May 2022',
          highlight: 'Directed national postpaid retail & enterprise acquisition; CLA Great Manager 2020.',
        },
        {
          title: 'Senior Sales Manager',
          period: 'Jun 2017 – Feb 2020',
        },
        {
          title: 'Sales Manager – SME',
          period: 'Nov 2012 – Jun 2017',
          highlight: 'Started Airtel Lanka’s first in-house SME business unit from the ground up.',
        },
      ],
      badges: ['Postpaid Growth', 'SME Unit Founder', 'Execution Excellence'],
    },
    {
      id: 'rogers',
      company: 'Rogers Communications',
      shortTag: 'ROGERS · CANADA',
      period: 'Aug 2010 – Sep 2012',
      duration: '2 yrs 2 mos',
      location: 'Toronto, Ontario, Canada',
      headlineRole: 'Territory Representative – Toronto',
      summary:
        'Gained North American telecommunications experience managing high-velocity territory growth and customer acquisition in Toronto’s competitive telecom market.',
      badges: ['North America Market', 'Territory Growth', 'Consultative Sales'],
    },
    {
      id: 'lankabell',
      company: 'Lanka Bell',
      shortTag: 'LANKA BELL',
      period: 'Feb 1998 – Jun 2010',
      duration: '12 yrs 5 mos',
      location: 'Sri Lanka',
      headlineRole: 'Sector Sales Manager (5 Promotions Across 12+ Years)',
      summary:
        'Built a 12-year foundational career rising from Sales Executive & Corporate Account Executive through Account Manager and Area Sales Manager to Sector Sales Manager.',
      subRoles: [
        { title: 'Sector Sales Manager', period: 'Mar 1998 – Jun 2010' },
        { title: 'Area Sales Manager', period: 'Dec 2005 – Apr 2008' },
        { title: 'Account Manager & Corporate Account Executive', period: 'Mar 2003 – Nov 2005' },
        { title: 'Sales Executive', period: 'Feb 1998 – Feb 2001' },
      ],
      badges: ['Sales Operations', 'Account Governance', 'Quota Execution'],
    },
  ] as CareerMilestone[],
  award: {
    title: 'Great Manager Awards 2020',
    category: 'Driving Results & Execution Excellence',
    issuer: 'Colombo Leadership Academy (CLA) · People Business',
    organization: 'Bharti Airtel Lanka (Pvt) Ltd',
    description:
      'Honored among Sri Lanka’s top business leaders for consistent commercial delivery, strategic execution, and leading cross-functional sales teams to standout performance.',
  },
  education: [
    {
      degree: 'MBA, Business Administration',
      institution: 'ICFAI University',
      period: '2008 – 2010',
      detail: 'Strategic Management, Marketing & Organizational Leadership',
    },
    {
      degree: 'The 10 Essentials of Influence and Persuasion',
      institution: 'Executive Credential · LinkedIn',
      period: 'Issued Mar 2022',
      detail: 'Executive Stakeholder Communication & Negotiation',
    },
  ],
  competencies: [
    'Enterprise Business Strategy',
    'Postpaid Commercial Leadership',
    'B2B & SME Market Creation',
    'Business Planning & P&L',
    'Analytical Execution',
    'Cross-Functional Team Building',
  ],
};
