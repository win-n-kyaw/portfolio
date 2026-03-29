// Fallback data used when Sanity is not configured.
// Replace this content with your own or connect Sanity CMS.

export const siteSettings = {
  title: 'Win Naing Kyaw',
  role: 'Cloud Engineer · STEM Educator · EdTech Consultant',
  tagline:
    'Cloud-focused software engineer and STEM educator — architecting production-grade infrastructure on AWS & Azure while empowering the next generation through AI-assisted learning.',
  email: 'winnkyawhc@hotmail.com',
  phone: '(+66) 653-899-530',
  location: 'Chiang Mai, Thailand',
  github: 'https://gitlab.com/winnkyaw',
  linkedin: 'https://linkedin.com/in/win-naing-kyaw',
  twitter: '',
};

export const aboutData = {
  heading: 'About Me',
  bio: `Cloud-focused software engineer (B.Eng., Chiang Mai University — CGPA 3.59) with CKA, CKAD, and Terraform Associate certifications. I architect production-grade solutions on AWS and Azure, spanning Kubernetes, IaC, AI/ML pipelines, and large-scale network infrastructure including a 300+ node BGP-enabled distributed network.

Equally passionate about STEM education — three years coaching robotics and programming at international schools, plus AR-integrated STEAM curriculum development across Southeast Asia. Judges' Award winner representing Myanmar at the First Global Robotics Competition, Dubai 2019.`,
  imageUrl: '',
};

export const experienceData = [
  {
    _id: '1',
    role: 'AI/ML Engineer Intern',
    company: 'Base Technology Inc. (Expa.ai)',
    location: 'Chiang Mai, Thailand',
    startDate: '2026-01',
    endDate: '2026-03',
    current: true,
    description:
      'Architected a 5-agent orchestration system using CrewAI for end-to-end restaurant management automation. Designed a conversational RAG pipeline integrating hybrid BM25 + semantic vector search with Reciprocal Rank Fusion. Deployed containerized inference stacks (Weaviate + Ollama). Built AI-assisted dev toolchains using Claude Code and MCP server integrations.',
    technologies: ['CrewAI', 'RAG', 'Weaviate', 'Ollama', 'Docker', 'n8n', 'Python'],
  },
  {
    _id: '2',
    role: 'Capstone — Smart Parking Lot System',
    company: 'Chiang Mai University',
    location: 'Chiang Mai, Thailand',
    startDate: '2025-10',
    endDate: '2025-10',
    current: false,
    description:
      'Designed an end-to-end smart parking solution with IP cameras, Raspberry Pi, and Nvidia Jetson edge devices. Developed FastAPI backend for concurrent camera stream ingestion. Deployed 4 ML models for real-time occupancy detection and license plate recognition. Implemented MQTT for low-latency edge-to-cloud telemetry.',
    technologies: ['FastAPI', 'MQTT', 'Nvidia Jetson', 'Python', 'AWS', 'ML/CV'],
  },
  {
    _id: '3',
    role: 'Cloud Infrastructure Engineer',
    company: 'Chiang Mai University (Independent Projects)',
    location: 'Chiang Mai, Thailand',
    startDate: '2025-09',
    endDate: '2025-11',
    current: false,
    description:
      'Provisioned production-grade multi-AZ EKS cluster on AWS with Terraform. Replaced SSH bastion architecture with AWS Systems Manager Session Manager with KMS encryption. Built Azure IAM solution with Managed Identities for credential-less Blob Storage access.',
    technologies: ['AWS', 'Azure', 'Terraform', 'EKS', 'IAM', 'KMS'],
  },
  {
    _id: '4',
    role: 'Network & Infrastructure Engineer',
    company: 'Self-Directed (Independent Project)',
    location: 'Remote',
    startDate: '2023-01',
    endDate: null,
    current: true,
    description:
      'Designed and operated a BGP-enabled distributed infrastructure spanning 300+ VPS nodes across multiple cloud providers. Acquired ASN and /24 IPv4 CIDR block with dynamic IP rotation via selective BGP route announcements. Architected a 3-node HA Kubernetes control plane on Oracle Cloud ARM with Cilium CNI.',
    technologies: ['BGP', 'Kubernetes', 'Cilium', 'Oracle Cloud', 'n8n', 'Shadowsocks'],
  },
  {
    _id: '5',
    role: 'Outsourced STEM Activity Coach',
    company: 'Lanna International School / Sasin International School',
    location: 'Chiang Mai, Thailand',
    startDate: '2022-01',
    endDate: '2025-01',
    current: false,
    description:
      'Designed and delivered extracurricular STEM modules for K-12 international school students. Taught robotics, programming, and computational thinking in multilingual settings. Collaborated with coordinators to align with IB and Cambridge curriculum frameworks.',
    technologies: ['Robotics', 'Python', 'Scratch', 'Curriculum Design', 'IB/Cambridge'],
  },
  {
    _id: '6',
    role: 'Junior Maker — STEAM Education',
    company: '360ed',
    location: 'Yangon, Myanmar',
    startDate: '2017-12',
    endDate: '2018-03',
    current: false,
    description:
      'Developed STEAM curriculum integrating augmented reality (AR) content for children aged 8-14. Coached students in maker projects combining electronics, programming, and design thinking. Contributed to AR-based learning products deployed in schools across Myanmar.',
    technologies: ['AR', 'Electronics', 'Design Thinking', 'STEAM'],
  },
];

export const projectsData = [
  {
    _id: '1',
    title: 'BGP-Enabled Distributed Infrastructure',
    description:
      'Designed and operated a 300+ VPS node distributed network across multiple cloud providers with BGP route management, dynamic IP rotation, and automated fleet lifecycle management via n8n workflows.',
    technologies: ['BGP', 'Kubernetes', 'Cilium', 'Oracle Cloud', 'n8n'],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    featured: true,
  },
  {
    _id: '2',
    title: 'Smart Parking Lot System',
    description:
      'End-to-end IoT parking solution with IP cameras, Nvidia Jetson edge ML inference for occupancy detection and license plate recognition, MQTT telemetry, and AWS-hosted monitoring portal.',
    technologies: ['FastAPI', 'MQTT', 'Nvidia Jetson', 'ML/CV', 'AWS', 'Raspberry Pi'],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    featured: true,
  },
  {
    _id: '3',
    title: 'Production EKS Cluster with Terraform',
    description:
      'Multi-AZ Kubernetes cluster on AWS provisioned via Terraform with private/public subnet architecture, managed node groups, IAM roles, and dual-mode RBAC via aws-auth ConfigMap and EKS Auth API.',
    technologies: ['AWS EKS', 'Terraform', 'IAM', 'Kubernetes', 'VPC'],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    featured: true,
  },
  {
    _id: '4',
    title: 'CrewAI Multi-Agent Orchestration',
    description:
      'A 5-agent orchestration system automating restaurant management workflows including order processing, inventory tracking, and customer service using CrewAI framework with RAG retrieval pipeline.',
    technologies: ['CrewAI', 'RAG', 'Weaviate', 'Ollama', 'Python', 'Docker'],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    featured: true,
  },
];

export const skillsData = [
  { _id: '1', name: 'AWS (EKS, EC2, S3, IAM, VPC)', category: 'Cloud Platforms', proficiency: 90 },
  { _id: '2', name: 'Azure (Entra ID, RBAC, VMs)', category: 'Cloud Platforms', proficiency: 80 },
  { _id: '3', name: 'Oracle Cloud', category: 'Cloud Platforms', proficiency: 75 },
  { _id: '4', name: 'Kubernetes (CKA/CKAD)', category: 'Containers & Orchestration', proficiency: 92 },
  { _id: '5', name: 'Docker', category: 'Containers & Orchestration', proficiency: 90 },
  { _id: '6', name: 'Helm / ArgoCD', category: 'Containers & Orchestration', proficiency: 85 },
  { _id: '7', name: 'Terraform (Certified)', category: 'Infrastructure as Code', proficiency: 90 },
  { _id: '8', name: 'GitLab CI / GitHub Actions', category: 'Infrastructure as Code', proficiency: 85 },
  { _id: '9', name: 'Python', category: 'Languages', proficiency: 90 },
  { _id: '10', name: 'JavaScript / Node.js', category: 'Languages', proficiency: 82 },
  { _id: '11', name: 'Bash', category: 'Languages', proficiency: 88 },
  { _id: '12', name: 'Terraform HCL', category: 'Languages', proficiency: 90 },
  { _id: '13', name: 'BGP / FRR', category: 'Networking', proficiency: 85 },
  { _id: '14', name: 'VPC / Subnet Design', category: 'Networking', proficiency: 88 },
  { _id: '15', name: 'MQTT', category: 'Networking', proficiency: 80 },
  { _id: '16', name: 'CrewAI / RAG Pipelines', category: 'AI & ML', proficiency: 85 },
  { _id: '17', name: 'Weaviate / Vector Search', category: 'AI & ML', proficiency: 82 },
  { _id: '18', name: 'LLM Integration', category: 'AI & ML', proficiency: 85 },
];

export const certificationsData = [
  { name: 'CKA: Certified Kubernetes Administrator', date: 'August 2024' },
  { name: 'CKAD: Certified Kubernetes Application Developer', date: 'December 2024' },
  { name: 'HashiCorp Certified: Terraform Associate', date: 'November 2024' },
];

export const educationData = [
  {
    degree: 'B.Eng. Software Engineering',
    institution: 'Chiang Mai University — College of Arts, Media and Technology',
    location: 'Chiang Mai, Thailand',
    period: 'June 2022 – March 2026',
    gpa: '3.59 / 4.00',
    note: 'Cooperative Education track with AI/ML industry placement',
  },
  {
    degree: 'Foundation in Environmental Science',
    institution: 'The Movement Institute',
    location: 'Yangon, Myanmar',
    period: '2019',
    gpa: '',
    note: '',
  },
];

export const blogData = [
  {
    _id: '1',
    title: 'Building a BGP-Enabled Network Across 300+ Nodes',
    slug: 'bgp-network-300-nodes',
    excerpt:
      'How I acquired an ASN, a /24 IPv4 block, and designed a distributed infrastructure with dynamic IP rotation using BGP route announcements.',
    publishedAt: '2025-01-15',
    body: 'Detailed walkthrough of designing and operating a BGP-enabled distributed infrastructure spanning 300+ VPS nodes across multiple cloud providers.',
    tags: ['BGP', 'Networking', 'Infrastructure'],
  },
  {
    _id: '2',
    title: 'From Classroom to Cloud: My Journey as a STEM Educator',
    slug: 'stem-educator-journey',
    excerpt:
      'Reflections on three years of teaching robotics and programming at international schools, and how AI is reshaping education.',
    publishedAt: '2025-03-01',
    body: 'My experience designing curriculum for K-12 learners in multicultural environments and integrating AI-assisted tools into pre-college education.',
    tags: ['EdTech', 'STEM', 'AI in Education'],
  },
];
