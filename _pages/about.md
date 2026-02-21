---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 👨‍🎓 Biography / 个人简介

I'm currently an undergraduate student majoring in Computer Science and Technology at Northwestern Polytechnical University (NWPU).

I participated in the Mathematics Olympiad during my years at Chengdu No. 7 High School, that laid a profound foundation for my analytical thinking and fast-learning capabilities, empowering my subsequent journey in scientific research and various contests. I also took additional courses in Advanced Algebra, Operations Research, Convex Optimization, and other specialized mathematics courses.

In recent years, I have actively begun exploring my research interests. I am extremely fortunate to study quantum machine learning under the guidance of [Prof. Qianli Zhou](https://jszy.nwpu.edu.cn/2025010088.html), where I have completed my first academic paper. 

Furthermore, I am honored to have gained research internship opportunities at top-tier laboratories through competitive programs such as the CIBR-CLS-IDG Joint Summer School on Neuroscience and Cognitive Science and the THU AIR Winter Camp. These experiences have allowed me to delve deeply into interdisciplinary AI research, including EEG decoding and Large Language Model Agents.

In my view, Artificial Intelligence has achieved superhuman proficiency in specific tasks (e.g., pattern recognition, strategic gaming), their ability in handling complex tasks still falls short. The next frontier lies in generalizing these capabilities to the messy, complex real world. My wish is to bridge the gap between high-level AI capabilities and real-world applications to truly liberate productivity. Specifically, I am interested in:

- **LLM-based Agents:** Developing agents capable of complex workflows and environments, stronger reasoning skills and memory capabilities.
- **Fundamental LLM Capabilities:** Enhancing the core reasoning efficiency and long-context memory of Large Language Models.
- **Self-improving models:** Facilitating the self-iteration of models through improved training infrastructure, including automated high-quality data filtering, processing, synthesis and model evaluation.

我是 西北工业大学 (NWPU) 计算机科学与技术专业的 23 级在读本科生。

我高中于成都七中学习数学竞赛，这为我参加竞赛与科研提供了坚实的思维与学习能力基础。另外我也辅修了高等代数，运筹学，凸优化等数学专业课程。

近年来，我逐渐开始探索感兴趣的研究方向。我有幸在 [周千里教授](https://jszy.nwpu.edu.cn/2025010088.html) 的指导下学习量子机器学习，并且完成了第一篇论文。

我有幸通过 CLS-CIBR-IDG 暑期培训班，AIR冬令营等途径加入顶尖实验室实习，探索了人工智能交叉领域，如脑电图解码，大模型智能体。

在我的认知中，尽管人工智能在模式识别、博弈等特定任务上已超越人类表现，但其在处理复杂任务的能力仍显不足，核心挑战在于将其的能力泛化至复杂的真实世界。我的愿望是将高水平的 AI 技术落地以解放生产力。具体包括：

- **大模型智能体:** 构建能适应复杂工作流程与环境的智能体，更强的推理研究与记忆能力。
- **大模型基础能力:** 提升 LLM 的核心能力，如长上下文记忆与复杂逻辑推理。
- **大模型辅助训练:** 通过自动化数据处理与评估分析体系，辅助模型训练，推动 AI 的自我训练迭代，减少人工成本。

<br>

<span class='anchor' id='-news'></span>
# 🔥 News / 最新动态

- **[2026.01]** Joined the Institute for AI Industry Research, Tsinghua University (THU AIR) as a research intern, focusing on brain-inspired Deep Research Agents. / 参加清华air冬令营，致力于类脑认知 DeepResearch 智能体的研发。
- **[2026.01]** Submitted a first-author paper on Quantum Multimodal Fusion Networks to *IEEE Transactions on Cybernetics (TCYB)*. / 以独立一作身份向 *IEEE TCYB* 投递量子多模态融合网络文章 [[arXiv]](https://arxiv.org/abs/2601.07856)。
- **[2025.08]** Won the second prize at the 9th National Student Computer System Capability Challenge (NSCSCC 2025) Individual Competition*. / 荣获2025年全国大学生计算机系统能力大赛CPU设计赛（龙芯杯）个人赛二等奖。
- **[2025.07]** Participated in the Tsinghua-PKU CLS-McGovern-CIDR Summer School (Best Team Award) and joined THU THBI, manuscript submitted for *ICML(2026)* . / 清华-北大神经与认知科学暑期班获最佳团队，并进入清华大学脑与智能实验室实习，一篇 *ICML(2026)* 在投。
- **[2025.05]** Won the Gold Medal at the 50th ICPC Invitational Contest and the 13th Shaanxi Provincial Collegiate Programming Contest (Runner-up). / 荣获第 50 届 ICPC 邀请赛金奖及陕西省大学生程序设计竞赛金奖（亚军）。
- **[2024.12]** Won the Silver Medal at the 49th ICPC Asia East Continent Final Contest. / 荣获第 49 届 ICPC 亚洲区域总决赛银奖。

<br>

<span class='anchor' id='-publications'></span>
# 📝 Preprints & Publications / 论文发表

- **Feature Entanglement-based Quantum Multimodal Fusion Neural Network** [[arXiv]](https://arxiv.org/abs/2601.07856)
  <br> **Yu Wu**, Qianli Zhou, et al.
  <br> *Manuscript submitted for publication in the **IEEE Transactions on Cybernetics (TCYB)** (2026).*
  <br> *<small>We propose an interpretable quantum multimodal fusion network based on evidence theory.</small>*
  <br> *<small>我们提出了一种基于证据理论的可解释量子多模态融合网络，优势体现于参数量、可并行性及可解释性，进行了完备的泛化性测试与消融实验。</small>*

- **CRCC: Contrast-based Robust Cross-Subject and Cross-Site Representation Learning for EEG** (Paper will release after reviewing)
  <br> Xiaobin Wong, Zhonghua Zhao, Haoran Guo, Zhengyi Liu, **Yu Wu**, Feng Yan, Zhiren Wang, Sen Song.
  <br> *Manuscript submitted for publication in the **International Conference on Machine Learning (ICML)** (2026).*
  <br> *<small>We builds a robust cross-subject and cross-site EEG model for precision psychiatry through contrastive and reinforcement learning.</small>*
  <br> *<small>基于对比学习与强化学习开发的跨被试、跨站点 EEG 精准精神病学模型，负责模型分类效果的可视化分析, zero-shot, 对比实验等测试。</small>*

<br>

<span class='anchor' id='-experience'></span>
# 🔬 Research Experience / 科研经历

- **Institute for AI Industry Research, Tsinghua University (THU AIR)**
  <br> *Research Intern | Jan 2026 - Present*
  <br> Focusing on the development of brain-inspired cognitive DeepResearch Agents. Exploring cutting-edge Agent architectures and benchmarks.
  <br> *<small>清华大学智能产业研究院 (THU AIR) | 冬令营科研实习；类脑认知 DeepResearch 智能体开发，熟悉 Agent 架构与相关测试基准。</small>*

- **Multi-domain Intelligent Perception & Cognition Lab, NWPU**
  <br> *Research Assistant | Aug 2025 - Present*
  <br> Leading the research on quantum machine learning models. Designed and implemented an interpretable quantum multimodal fusion network, completing extensive ablation studies and writing the manuscript (submitted to IEEE TCYB).
  <br> *<small>西北工业大学多域智能感知与认知实验室 | 科研助理；量子机器学习研究，设计并实现了可解释的量子多模态融合网络（独立一作）。</small>*

- **Tsinghua Laboratory of Brain and Intelligence (THU THBI)**
  <br> *Research Intern | Jul 2025 - Feb 2026*
  <br> Worked on the LEM model development. Conducted comprehensive benchmark tests and comparative experiments against state-of-the-art models (e.g., LaBraM) for EEG-based precision psychiatry.
  <br> *<small>清华大学脑与智能实验室 (THU THBI) | 科研实习；参与 LEM 模型开发：EEG 精神病学模型的分析及针对前沿模型的测试与对比实验。</small>*

<br>

<span class='anchor' id='-education'></span>
# 📖 Educations / 教育背景

- **Northwestern Polytechnical University (NWPU)** | *Computer Science and Technology* | Sep 2023 - Jun 2027 
  <br> **GPA:** 3.905 / 4.1 (Rank: 6/193) | Comprehensive Evaluation 2/233 (2023-2024), 5/195 (2024-2025)
  <br> **Awards:** National Scholarship for Undergraduate Students (2023-2024, 2024-2025)
  <br> *<small>西北工业大学 (985) | 计算机科学与技术 | GPA 3.905/4.1, Top 3% (Comprehensive)，连续两年荣获国家奖学金。</small>*

<br>

<span class='anchor' id='-awards'></span>
# 🏆 Honors and Awards / 荣誉奖项

**Honor / 荣誉**
- **2024-2025 National Scholarship for Undergraduate Students** <br> *<small>2024-2025学年度本专科生国家奖学金</small>* 
- **2023-2024 National Scholarship for Undergraduate Students** <br> *<small>2023-2024学年度本专科生国家奖学金</small>* 

<br>

**Competitive Programming / 程序设计竞赛**
- **Gold Medal**, 50th ICPC Invitational Contest (Xi'an, Nanchang) <br> *<small>第 50 届 ICPC 国际大学生程序设计竞赛邀请赛 (西安, 南昌站) **金奖**</small>* `2025`
- **Gold Medal, Runner-up**, 13th Shaanxi Provincial Collegiate Programming Contest <br> *<small>第 13 届陕西省大学生程序设计竞赛 **金奖 | 亚军**</small>* `2025`
- **Silver Medal**, 50th ICPC Regional Contest (Wuhan 51st, Chengdu 34th) & Star Participant (Xi'an 17th) <br> *<small>第 50 届 ICPC 国际大学生程序设计竞赛区域赛 (武汉站 51st, 成都站 34th) **银奖**，西安站 **打星 17th**</small>* `2025`
- **Silver Medal**, The 2024 ICPC Asia East Continent Final Contest (EC-Final) <br> *<small>2024 年 ICPC 亚洲区域总决赛 **银奖**</small>* `2024`
- **Silver Medal**, 49th ICPC Regional Contest (Kunming, Hangzhou) <br> *<small>第 49 届 ICPC 国际大学生程序设计竞赛区域赛 (昆明站, 杭州站) **银奖**</small>* `2024`

<br>

**Computer Systems / 计算机系统能力竞赛**
- **Second Prize**, "Loongson Cup" National College Student Computer Systems Ability Competition (Individual Track) <br> *<small>“龙芯杯”全国大学生计算机系统能力培养大赛个人赛 **二等奖**</small>* `2025`

<br>

**Mathematics & Physics / 数理基础学科竞赛**
- 第六届西北工业大学大学生数学竞赛 **一等奖** `2025`
- 第五届西北工业大学大学生数学竞赛 **一等奖** `2024`
- 第一届西北工业大学大学生国际理论力学竞赛校赛 团队赛 **二等奖 季军**，个人赛 **三等奖** `2024`
- 2021年全国高中数学联赛 **一等奖** （192） `2021`
- **Second Runner-up** (Mechanics Test), 16th Pan-Pearl River Delta and Chinese Elite Schools Physics Olympiad<br> *<small>第十六届泛珠三角物理奥林匹克暨中华名校邀请赛 力学基础试 **第三名** </small>* `2020`

<br>

**Project Design / 作品设计赛**
- **Second Prize**, National College Student Software Innovation Contest (Northwest Region) <br> *<small>全国大学生软件创新大赛西北区 **二等奖**</small>* `2025`






