export const profile = {
  name: 'Yi-Jyun Sun',
  nickname: 'Jenny',
  location: 'Illinois, United States',
  role: 'M.S. student in Computer Science',
  intro: 'I build language technologies that help people work with complex information—especially in healthcare, education, and conversational AI.',
  email: '', // Confirm resume address: yjsun2@iillinois.edu appears to contain an extra “i”.
  linkedin: 'https://www.linkedin.com/in/yi-jyun-sun',
  github: 'https://github.com/jennycs0830',
};

export const research = [
  { number: '01', title: 'I-DocAssist', area: 'Agentic AI · Healthcare', description: 'An agentic system for clinical prior authorization workflows, connecting insurance policy understanding with patient-specific compliance assessment and interactive clinician support.', note: 'Research in progress', accent: 'green' },
  { number: '02', title: 'CELaRAI', area: 'LLMs · Early literacy', description: 'Developing language model–based comprehension question generation and automated assessment for an interdisciplinary initiative in personalized early literacy education.', note: 'Research in progress', accent: 'peach' },
  { number: '03', title: 'LLM judges & ASR', area: 'Evaluation · Speech', description: 'Studying how transcription quality affects LLM-judge scores, using children’s question-answer grading as a case study.', note: 'Under review at ICASSP 2027', accent: 'blue' },
  { number: '04', title: 'Dialogue state tracking', area: 'Conversational AI · Uncertainty', description: 'Exploring confidence estimation and accountability modeling to help dialogue systems recognize mistakes and reduce overreliance.', note: 'Published at SLT 2024 and ACL 2025', accent: 'gold' },
];

export const publications = [
  { authors: 'Y.-J. Sun, D. Hakkani-Tür, S. Syed, J. Rehg', title: 'Structuring Matters: Insurance Policy Formalization for Agentic Decision-Making.', venue: 'Under review at NAACL 2027', status: 'Under review', visual: '/images/pa-policystruct-figure-3.png', visualAlt: 'PolicyStruct pipeline: stage one finds criteria sections, structures coverage criteria as logic trees, and links procedure codes to sections. Stage two detects gaps by comparing the draft to the source policy, then adds missing relevant criteria, preserves relevant verbatim content, and excludes irrelevant content.', visualCaption: 'Figure 3. PolicyStruct’s two-stage pipeline: structure policy criteria and procedure-code links, then check completeness and recover relevant content.' },
  { authors: 'N. K. Hoang, S. Mehri, T.-A. Hsu, Y.-J. Sun, Q. X. N. Truong, K. D. Doan, D. Hakkani-Tür', title: 'PSI-Bench: Interpretable and Clinically Meaningful Evaluation of Depression Patient Simulators.', venue: 'SIGDIAL Social Sim Workshop, 2026 · Best Paper Award', status: 'Published', url: 'https://arxiv.org/abs/2604.25840', codeUrl: 'https://github.com/nguyenkhoihoang/PSI-Bench', visual: 'https://arxiv.org/html/2604.25840v2/main_fig.png', visualAlt: 'PSI-Bench overview, from human and simulated patient conversations through evaluation dimensions to comparison of simulator and human behavior.' },
  { authors: 'S. Jhunjhunwala, Y.-J. Sun, A. Deora, Z. Wang, N. B. Shankar, T. Christ, C. Wang, A. Alwan, D. Hakkani-Tür', title: 'The effect of transcription quality on LLM-judge scoring: a case study of ASR mediated children QA grading.', venue: 'Under review at ICASSP 2027', status: 'Under review' },
  { authors: 'Y. Li, Y.-J. Sun, V. Nguyen, K. Unnikrishnan, A. Agrawal, D. Hakkani-Tür', title: 'From Tacit Understanding to Downstream Collaboration.', venue: 'In preparation', status: 'In preparation' },
  { authors: 'S. Dey, Y.-J. Sun, D. Hakkani-Tür, G. Tür', title: 'Know Your Mistakes: Towards Preventing Overreliance on Task-Oriented Conversational AI Through Accountability Modeling.', venue: 'Association for Computational Linguistics (ACL), 2025', status: 'Published', url: 'https://arxiv.org/abs/2501.10316', codeUrl: 'https://github.com/uiuc-conversational-ai-lab/Accountable-DST', visual: 'https://arxiv.org/html/2501.10316v4/acc_dst_motivation_new5.png', visualAlt: 'Accountability model identifies a missing dialogue-state slot, then either self-corrects it or asks the user to confirm it.' },
  { authors: 'Y.-J. Sun, S. Dey, D. Hakkani-Tür, G. Tür', title: 'Confidence Estimation for LLM-based Dialogue State Tracking.', venue: 'IEEE Spoken Language Technology Workshop (SLT), 2024', status: 'Published', url: 'https://arxiv.org/abs/2409.09629', codeUrl: 'https://github.com/jennycs0830/Confidence_Score_DST', visual: 'https://arxiv.org/html/2409.09629v2/Conf-Approach.png', visualAlt: 'Confidence estimation pipeline: an LLM response is parsed and scored using verbalized confidence, softmax logits, and Minicons, then combined.' },
];

export const experience = [
  { mark: 'UIUC', role: 'Graduate Research Assistant', org: 'ConvAI Lab · University of Illinois Urbana-Champaign', dates: 'Aug 2025 — Present', detail: 'Research on agentic AI for clinical prior authorization and language technology for personalized early literacy.', current: true },
  { mark: 'a', role: 'Applied Scientist Intern', org: 'Amazon · One Medical Product Development', dates: 'May — Aug 2026', detail: 'Healthcare AI internship. Project details are kept high-level for public sharing.', pending: true },
  { mark: 'FOX', role: 'Machine Learning Intern', org: 'Omniguider · Foxconn Technology Group', dates: 'Jul — Aug 2025', detail: 'Built a library recommender for 40K+ books using language-model profiling, embeddings, an autoencoder, and clustering; delivered it in an interactive Streamlit app.' },
  { mark: 'BDM', role: 'AI Intern', org: 'Big Data Mobile', dates: 'Feb — Jun 2025', detail: 'Developed an ECG arrhythmia classifier and a Python toolkit for signal segmentation, annotation, and resampling.' },
  { mark: 'ITRI', role: 'LLM Application Development Intern', org: 'Industrial Technology Research Institute', dates: 'May — Dec 2024', detail: 'Built a content extraction and article-filling tool for a news outlet and explored adversarial prompting methods.' },
  { mark: 'UIUC', role: 'Undergraduate Research Assistant', org: 'ConvAI Lab · University of Illinois Urbana-Champaign', dates: 'May — Aug 2024', detail: 'Researched uncertainty estimation for dialogue state tracking and accountability modeling for task-oriented dialogue agents.' }
];

export const education = [
  { school: 'University of Illinois Urbana-Champaign', degree: 'M.S. in Computer Science, thesis', detail: 'Advisors: Dilek Hakkani-Tür and Gökhan Tür · GPA 3.96 / 4.00', dates: 'Aug 2025 — Present' },
  { school: 'National Yang Ming Chiao Tung University', degree: 'B.S. in Computer Science', detail: 'GPA 3.61 / 4.00 · Last 60 credits GPA 3.94 / 4.00', dates: 'Sep 2020 — Jun 2025' },
];
