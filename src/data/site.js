export const profile = {
  name: 'Yi-Jyun Sun',
  nickname: 'Jenny',
  location: 'Illinois, United States',
  role: 'M.S. student in Computer Science',
  intro: 'I build language technologies that help people work with complex information—especially in healthcare, education, and conversational AI.',
  email: 'yjsun2@illinois.edu',
  linkedin: 'https://www.linkedin.com/in/yi-jyun-sun-450748287/',
  scholar: 'https://scholar.google.com/citations?user=5aD_URoAAAAJ&hl=en&authuser=1',
  github: 'https://github.com/jennycs0830',
};

export const research = [
  { number: '01', title: 'I-DocAssist', area: 'Agentic AI · Healthcare', description: 'Long-term vision: build an AI assistant that helps care teams manage insurance requirements across the claims lifecycle. Starting with prior authorization, it would surface current, procedure-specific requirements, check them against clinical documentation, and suggest missing or unclear information. Over time, it could help prepare paperwork, draft appeals, and track denial trends. The goal is to reduce administrative burden and prevent avoidable delays in care, giving providers more time with patients.', note: 'Research in progress', collaboration: 'UIUC AI research · OSF / UICOMP clinical partners', accent: 'green' },
  { number: '02', title: 'CELaRAI', area: 'LLMs · Early literacy', description: 'Long-term vision: improve K–2 early reading through responsible AI. CELaRAI is developing AIRE, a student-focused tool that personalizes text and offers real-time reading analysis and just-in-time support in phonics, word recognition, fluency, and comprehension, especially for culturally and linguistically diverse learners. The center also aims to shape responsible AI practice in early literacy through research, ethical guidance, and capacity building.', url: 'https://earlyliteracyai.org/', note: 'Research in progress', collaboration: 'University at Buffalo · Stanford · East Carolina University · Michigan State · UIUC · UCLA', accent: 'peach' },
];

export const publications = [
  { authors: 'Y.-J. Sun, J. Sowizral, T. Mackey, D. Lucas, K. Wang, J. Shallat, D. Hakkani-Tür, J. M. Rehg, S. Syed', title: 'Structuring Matters: Insurance Policy Formalization for Agentic Decision-Making.', venue: 'Under review at NAACL 2027', status: 'Under review', project: 'I-DocAssist', projectRole: 'Formalizes insurance coverage criteria into structured representations that an agent can use to compare policies with a patient’s case. This work contributes the policy-understanding foundation for prior-authorization support.', visual: '/images/pa-policystruct-figure-3.png', visualAlt: 'PolicyStruct pipeline: stage one finds criteria sections, structures coverage criteria as logic trees, and links procedure codes to sections. Stage two detects gaps by comparing the draft to the source policy, then adds missing relevant criteria, preserves relevant verbatim content, and excludes irrelevant content.', visualCaption: 'Figure 3. PolicyStruct’s two-stage pipeline: structure policy criteria and procedure-code links, then check completeness and recover relevant content.' },
  { authors: 'N. K. Hoang, S. Mehri, T.-A. Hsu, Y.-J. Sun, Q. X. N. Truong, K. D. Doan, D. Hakkani-Tür', title: 'PSI-Bench: Interpretable and Clinically Meaningful Evaluation of Depression Patient Simulators.', venue: 'COLM Social Sim Workshop, 2026 · Best Paper Award', status: 'Published', url: 'https://arxiv.org/abs/2604.25840', codeUrl: 'https://github.com/nguyenkhoihoang/PSI-Bench', visual: 'https://arxiv.org/html/2604.25840v2/main_fig.png', visualAlt: 'PSI-Bench overview, from human and simulated patient conversations through evaluation dimensions to comparison of simulator and human behavior.' },
  { authors: 'S. Jhunjhunwala, Y.-J. Sun, A. Deora, Z. Wang, N. B. Shankar, T. Christ, C. Wang, A. Alwan, D. Hakkani-Tür', title: 'The effect of transcription quality on LLM-judge scoring: a case study of ASR mediated children QA grading.', venue: 'Under review at ICASSP 2027', status: 'Under review', project: 'CELaRAI', projectRole: 'Studies how speech-recognition errors affect LLM-judge scoring of children’s answers. It examines a key reliability issue for assessing spoken responses and informs CELaRAI’s automated comprehension-assessment work.', collaboration: 'UCLA ASR team', visual: '/images/asr-llm-grading-overview.svg', visualAlt: 'A student response is transcribed by ASR and scored by an LLM judge; the score is compared with human annotations.' },
  { authors: 'Y.-J. Sun, X. Yang, S. Shashidhar, D. Hakkani-Tür', title: 'Question Generation for Early Literacy', venue: 'In preparation', status: 'In preparation', project: 'CELaRAI', projectRole: 'Develops comprehension-question generation for early-literacy materials, using a question-quality reward model that derives reward signals from early-literacy rubrics, plus preference optimization to improve generated questions.', visual: '/images/celarai-question-generation.png', visualAlt: 'A question-generation model creates questions. Human annotators or a question-quality reward model provide preferences; these form preference data used to optimize generation with direct preference optimization (DPO). The reward model also scores newly generated questions to guide iterative updates.' },
  { authors: 'Y. Li, Y.-J. Sun, V. Nguyen, K. Unnikrishnan, A. Agrawal, D. Hakkani-Tür', title: 'From Tacit Understanding to Downstream Collaboration.', venue: 'In preparation', status: 'In preparation', projectRole: 'Tests whether pair-level TUX—alignment on ambiguous spectrum placements—predicts agreement on a separate personalized task. In the proposed simulation, CalConflictBench users are instantiated for the TUX spectrum task, while TUX agents resolve their calendar conflicts; the study compares spectrum alignment with downstream decision agreement.', visual: '/images/tux-downstream-extension.svg', visualAlt: 'Conceptual extension of TUX: a CalConflictBench user profile and a profile-conditioned TUX agent are evaluated on the Spectrum task to produce pair-level TUX, and the agent resolves calendar conflicts that are compared with the user’s modeled decisions. The proposed analysis tests whether TUX predicts calendar decision agreement, controlling for profile similarity.' },
  { authors: 'S. Dey, Y.-J. Sun, D. Hakkani-Tür, G. Tür', title: 'Know Your Mistakes: Towards Preventing Overreliance on Task-Oriented Conversational AI Through Accountability Modeling.', venue: 'Association for Computational Linguistics (ACL), 2025', status: 'Published', url: 'https://arxiv.org/abs/2501.10316', codeUrl: 'https://github.com/uiuc-conversational-ai-lab/Accountable-DST', visual: 'https://arxiv.org/html/2501.10316v4/acc_dst_motivation_new5.png', visualAlt: 'Accountability model identifies a missing dialogue-state slot, then either self-corrects it or asks the user to confirm it.' },
  { authors: 'Y.-J. Sun, S. Dey, D. Hakkani-Tür, G. Tür', title: 'Confidence Estimation for LLM-based Dialogue State Tracking.', venue: 'IEEE Spoken Language Technology Workshop (SLT), 2024', status: 'Published', url: 'https://arxiv.org/abs/2409.09629', codeUrl: 'https://github.com/jennycs0830/Confidence_Score_DST', visual: 'https://arxiv.org/html/2409.09629v2/Conf-Approach.png', visualAlt: 'Confidence estimation pipeline: an LLM response is parsed and scored using verbalized confidence, softmax logits, and Minicons, then combined.' },
];

export const experience = [
  { logo: '/images/convai-lab-logo.png', logoAlt: 'ConvAI Lab logo', role: 'Graduate Research Assistant', org: 'ConvAI Lab · University of Illinois Urbana-Champaign', dates: 'Aug 2025 — Present', detail: 'Research on agentic AI for clinical prior authorization and language technology for personalized early literacy.', current: true },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', logoAlt: 'Amazon logo', role: 'Applied Scientist Intern', org: 'Amazon · One Medical Product Development', dates: 'May — Aug 2026', detail: 'Healthcare AI internship. Project details are kept high-level for public sharing.', pending: true },
  { logo: '/images/omniguider-logo.png', logoAlt: 'Omniguider logo', role: 'Machine Learning Intern', org: 'Omniguider · Foxconn Technology Group', dates: 'Jul — Aug 2025', detail: 'Built a library recommender for 40K+ books using language-model profiling, embeddings, an autoencoder, and clustering; delivered it in an interactive Streamlit app.' },
  { logo: '/images/big-data-mobile-logo.png', logoAlt: 'Big Data Mobile logo', role: 'AI Intern', org: 'Big Data Mobile', dates: 'Feb — Jun 2025', detail: 'Developed an ECG arrhythmia classifier and a Python toolkit for signal segmentation, annotation, and resampling.' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/ITRI_logo.png', logoAlt: 'ITRI logo', role: 'LLM Application Development Intern', org: 'Industrial Technology Research Institute', dates: 'May — Dec 2024', detail: 'Built a content extraction and article-filling tool for a news outlet and explored adversarial prompting methods.' },
  { logo: 'https://cdn.brand.illinois.edu/logos/block-i.svg', logoAlt: 'University of Illinois Urbana-Champaign Block I logo', role: 'Undergraduate Research Assistant', org: 'University of Illinois Urbana-Champaign · with Professor Dilek Hakkani-Tür', dates: 'May — Aug 2024', detail: 'Researched uncertainty estimation for dialogue state tracking and accountability modeling for task-oriented dialogue agents.' }
];

export const service = [
  {
    category: 'Organizing',
    items: [
      { year: '2026', role: 'Co-organizer, Midwest Speech and Language Days (MSLD), UIUC' },
    ],
  },
  {
    category: 'Reviewing',
    items: [
      { year: 'May 2026', role: 'ACL Rolling Review (ARR)' },
      { year: '2026', role: 'Midwest Speech and Language Days (MSLD)' },
      { year: '2026', role: 'SIGDIAL' },
    ],
  },
];

export const education = [
  { school: 'University of Illinois Urbana-Champaign', degree: 'M.S. in Computer Science, thesis', detail: 'Advisors: Dilek Hakkani-Tür and Gökhan Tür · GPA 3.96 / 4.00', dates: 'Aug 2025 — Present' },
  { school: 'National Yang Ming Chiao Tung University', degree: 'B.S. in Computer Science', detail: 'GPA 3.61 / 4.00 · Last 60 credits GPA 3.94 / 4.00', dates: 'Sep 2020 — Jun 2025' },
];
