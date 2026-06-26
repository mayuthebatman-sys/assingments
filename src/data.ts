import { CompanyProfile, ReportSection, SlideData } from "./types";

export const COMPANIES: CompanyProfile[] = [
  {
    id: "kapruka",
    name: "Kapruka Holdings PLC",
    type: "E-Commerce & Retail Delivery",
    ownership: "Publicly Listed (Founder-Led)",
    primaryLeadershipStyle: "Autocratic transitioning to Bureaucratic",
    primaryManagementTheory: "Fayol's Administrative Principles & Weber's Bureaucracy",
    cultureType: "Founder-Centric, Centralized, High Power Distance",
    marketPosition: "Pioneer e-commerce brand in Sri Lanka, facing down-growth and agile competition.",
    keyChallenge: "Severe founder dependency, high centralization of authority, slow digital-agile innovation, and declining employee morale leading to stagnation.",
    metrics: {
      employeeMorale: 42,
      decisionSpeed: 35,
      innovationRate: 48,
      operationalAgility: 45,
      longTermGrowth: 52
    }
  },
  {
    id: "daraz",
    name: "Daraz Sri Lanka",
    type: "Multi-vendor E-Commerce Platform",
    ownership: "MNC Subsidiary (Alibaba Group)",
    primaryLeadershipStyle: "Transactional and Metric-Driven Transformational",
    primaryManagementTheory: "Taylor's Scientific Management & Modern Agile Systems",
    cultureType: "Results-Oriented, High-Pressure, Competitive, Metric-Based",
    marketPosition: "Market-share leader in e-commerce, backed by global infrastructure.",
    keyChallenge: "Extremely high staff turnover (burnout), lack of long-term employee loyalty, and friction between global processes and local market nuances.",
    metrics: {
      employeeMorale: 65,
      decisionSpeed: 88,
      innovationRate: 85,
      operationalAgility: 90,
      longTermGrowth: 80
    }
  },
  {
    id: "lassana",
    name: "Lassana Flora",
    type: "E-Commerce Gifts & Floral Delivery",
    ownership: "Private Enterprise (Founder-Driven Professionalized)",
    primaryLeadershipStyle: "Paternalistic and Service-Oriented (Servant Leadership)",
    primaryManagementTheory: "Fayol's Administrative & Human Relations Theory",
    cultureType: "Clan-based, Customer-Intimate, Collaborative",
    marketPosition: "Market leader in florist & gifts, utilizing e-commerce for geographic scaling.",
    keyChallenge: "Maintaining high-touch service standards and clan culture during rapid regional and category expansions.",
    metrics: {
      employeeMorale: 85,
      decisionSpeed: 70,
      innovationRate: 72,
      operationalAgility: 78,
      longTermGrowth: 85
    }
  }
];

export const REPORT_SECTIONS: ReportSection[] = [
  {
    id: "exec-summary",
    title: "Executive Summary",
    learningOutcome: "Introduction & Context",
    criteria: ["Context", "Sri Lankan Industry Analysis"],
    readingTime: "2 mins",
    content: `
### Strategic Diagnostic and Industry Appraisal: Sri Lankan E-commerce Sector

This business consultancy report provides a rigorous academic and empirical evaluation of **Kapruka Holdings PLC** (the focal company), comparing its performance, leadership paradigms, and organizational structures with two principal industry competitors: **Daraz Sri Lanka** and **Lassana Flora**. 

Kapruka Holdings, an early pioneer of e-commerce in Sri Lanka, has suffered significant operational down-growth, financial stagnation, and market share dilution over the past few years. This study diagnoses the root causes of this decline by examining the application of **Leadership and Management Theories (LO1)** and evaluating the influence of **Styles and Organizational Culture (LO2)** on corporate performance.

#### Key Comparative Findings:
*   **Kapruka Holdings PLC** operates under a highly centralized, founder-centric structure, closely aligned with classical management theories. While this was highly effective during its early pioneer phase, it has generated a severe "founder-dependency trap," crippling decentralized innovation, stifling middle-management decision-making, and depressing employee morale.
*   **Daraz Sri Lanka** represents a stark contrast, applying modern metric-driven, transactional, and scientific management practices adapted from its parent company, Alibaba Group. This maximizes operational agility and speed but introduces high-pressure cultures and elevated staff turnover.
*   **Lassana Flora** successfully bridges the gap using a paternalistic and service-oriented leadership style, operating on a high-touch "human relations" paradigm that maintains strong employee loyalty and consistent quality standards, though facing challenges in high-speed scalability.

This report offers strategic, theory-grounded recommendations to the board of Kapruka to restructure its management authority, foster an innovative and psychologically safe culture, and transition toward a situational and transformational leadership model to reverse its down-growth.
`
  },
  {
    id: "lo1-theories",
    title: "LO1: Leadership & Management Theories",
    learningOutcome: "LO1: Examine leadership and management theories and principles, and their impact on effectiveness.",
    criteria: ["P1", "P2", "M1", "D1"],
    readingTime: "6 mins",
    content: `
### 1.1 Leadership Theories and Management Activities (P1)

Leadership and management, while complementary, represent distinct sets of activities. Leadership involves setting direction, aligning people, and motivating teams to embrace change (**Kotter, 2001**). Management focus lies in planning, budgeting, organizing, staffing, and problem-solving to maintain predictability and order.

#### Trait and Behavioral Theories
Historically, **Trait Theory** suggested that leaders are born with inherent qualities (e.g., intelligence, confidence, decisiveness). In the Sri Lankan retail sector, this is visible in founder-led organizations like Kapruka, where the founder's personal charismatic traits defined the early corporate vision. 

However, **Behavioral Theories** (such as the *Ohio State Studies* or *Michigan Leadership Studies*) shifted the focus from who leaders are to what they do—distinguishing between **Task-Oriented** (initiating structure) and **People-Oriented** (consideration) behaviors. 
*   **Kapruka** exhibits highly task-oriented behavioral traits, where standard operating procedures are enforced top-down, with low relationship-oriented consideration for employee voice.
*   **Lassana Flora** strikes a balanced equilibrium, prioritizing high task excellence in cold-chain logistics alongside high employee consideration, reflecting a democratic/relationship-driven focus.

#### Situational and Contingency Theories
**Hersey and Blanchard's Situational Leadership Theory (SLT)** argues that effective leadership depends on matching the leader's style (directing, coaching, supporting, delegating) to the "readiness" or maturity level of the followers. 
*   In **Kapruka**, the leadership style has remained static (directing and coaching) despite the organization maturing. Followers (middle managers) possess high competence and commitment but are subjected to continuous micro-management, causing frustration.
*   **Daraz Sri Lanka** applies a contingency-based model through Alibaba's localized playbooks. Leadership behaviors shift dynamically based on seasonal campaigns (e.g., "11:11 sales" require highly directive task-oriented leadership, whereas business-as-usual phases allow for consultative coaching).

#### Transformational and Transactional Leadership
**Bass (1985)** conceptualized **Transformational Leadership** as inspiring followers to transcend self-interest for the organizational vision, utilizing the *Four Is*: Idealized Influence, Inspirational Motivation, Intellectual Stimulation, and Individualized Consideration. Conversely, **Transactional Leadership** relies on contingent rewards, active management-by-exception, and corrective transactions.
*   **Daraz** employs transactional mechanics heavily, linking key performance indicators (KPIs) to immediate bonuses, combined with transformational rhetoric about "digitizing South Asia."
*   **Kapruka** lacks active transactional rewards and fails to provide transformational intellectual stimulation, leading to a flat, uninspired workforce.

---

### 1.2 Management Theories in Practical Scenarios (P2)

To understand management activities in Sri Lankan e-commerce, we contrast classical, scientific, and modern human relations schools of management.

| Management Theory | Key Tenet / Principle | Application in Daraz | Application in Lassana Flora | Application in Kapruka Holdings |
| :--- | :--- | :--- | :--- | :--- |
| **Fayol's 14 Administrative Principles** | Division of work, unity of command, and **Centralization** (**Fayol, 1916**). | Decentralized division of labor with strict unity of command via functional structures. | Centralized logistics but highly decentralized service points; strong focus on esprit de corps. | **Over-centralization** of power. Unity of command is skewed because the founder bypasses managers to instruct staff directly. |
| **Taylor's Scientific Management** | Systematic analysis of work, standardization of tasks, and financial incentives to maximize productivity. | High utilization of data analytics, route optimization, and packaging timelines for warehouse staff. | Standardized cold-storage timing and bouquet arrangement procedures. | Focus on manual tracking and physical logistics without modern scientific time-and-motion optimizations. |
| **Weber's Bureaucratic Theory** | Hierarchical authority, division of labor, formal selection, and impersonal relationships. | Highly formalized digital workflows; career progression based strictly on competency and delivery metrics. | Semi-formal structure; emphasizes personal relationships, reducing rigid bureaucratic boundaries. | Rigid hierarchy with impersonal relations, yet lacking the objective fairness and clear promotions of Weber's model. |

---

### 1.3 Analysis of Impact on Organizational Effectiveness (M1)

Applying these management and leadership theories directly impacts the organizational effectiveness of each enterprise:

1.  **Kapruka Holdings (Ineffectiveness of Stagnant Classicalism)**:
    Kapruka's strict adherence to classical centralization (Fayol) without the modern decentralization required for fast-paced e-commerce has severely degraded its effectiveness. In e-commerce, customer preferences and technological frameworks shift weekly. Because the founder retains final approval on minor operational, marketing, and developmental decisions, bottlenecks are chronic. Middle management is "disempowered," leading to what **Webb (2018)** describes as *learned helplessness*—managers stop taking initiative because they assume their decisions will be overridden.
2.  **Daraz Sri Lanka (Effectiveness of Tech-Scientific Management)**:
    Daraz's rigorous application of Taylor's scientific principles and transactional leadership has driven massive market acquisition. Warehouse layouts are scientifically structured for picking speed, and delivery riders' routes are optimized via machine-learning algorithms. However, this has created an "organizational machine" where humans are treated as replaceable cogs. Effectiveness is high in output metrics, but extremely vulnerable to high voluntary turnover (up to 40% annually in middle tiers), threatening long-term stability and institutional knowledge retention.
3.  **Lassana Flora (Sustained Human Relations Success)**:
    By blending Fayol's structural discipline with Elton Mayo's Human Relations approach, Lassana Flora achieves high customer intimacy and operational durability. They recognize that motivated florists and customer service agents translate directly to superior floral designs and brand equity. Consequently, their effectiveness is highly resilient, surviving economic recessions and fuel crises through adaptive, collaborative team arrangements (esprit de corps).
`
  },
  {
    id: "lo2-styles",
    title: "LO2: Leadership Styles & Culture",
    learningOutcome: "LO2: Review the influence of different leadership and management styles on the culture of organisations.",
    criteria: ["P3", "P4", "M2", "M3"],
    readingTime: "7 mins",
    content: `
### 2.1 Leadership and Management Styles in Business Situations (P3)

Leadership styles dictate how authority is exercised and how decisions are implemented. In the Sri Lankan business landscape, cultural nuances significantly shape how these styles are received by employees. We analyze the application of five key styles across critical business situations:

#### 1. Autocratic Leadership
In this style, decision-making is centralized solely in the leader, with minimal subordinate input. 
*   **Kapruka Holdings**: The primary operating style of the founder. In crisis situations (e.g., sudden currency devaluations or supply chain blockades), this style allowed Kapruka to pivot rapidly in its early days. However, in routine operations, technology integration, and brand expansion, autocratic leadership has led to severe bottlenecks. Middle managers feel marginalized, resulting in a culture of silent compliance rather than proactive innovation.
*   **Daraz**: Avoids traditional autocratic leadership, relying instead on system-driven parameters and KPI mandates.

#### 2. Democratic / Participative Leadership
Decisions are made by consensus, involving active delegation and consultation.
*   **Lassana Flora**: Actively applied during service design and product expansion. The management team holds weekly collaborative roundtables where florists, drivers, and digital marketers participate in brainstorming. Subordinates feel valued, and this participative approach has successfully unlocked creative avenues for premium packaging and delivery options.

#### 3. Paternalistic Leadership
Common in South Asian cultural contexts (**Hofstede, 2011**), this style blends strong authority with parental-like care and protection for employees, demanding loyalty in return.
*   **Lassana Flora**: The organization operates like an extended family (Clan culture). The founder provides extensive welfare benefits, personal interest-free loans, and career growth pathways. In return, staff demonstrate high commitment, low absenteeism, and a willingness to work extended hours during peak seasons (e.g., Valentine's Day).
*   **Kapruka**: Exhibits a pseudo-paternalistic style; it demands the intense loyalty and long hours characteristic of paternalism but fails to deliver the reciprocal nurturing, resulting in employee cynicism.

#### 4. Transactional Leadership
Focuses on clarifying roles, structuring tasks, and utilizing contingent rewards and punishments.
*   **Daraz**: Highly evident in their logistics and vendor-management verticals. High sales volumes and operational speed are heavily rewarded with performance bonuses, while failure to meet delivery times or response metrics triggers automated penalties or performance improvement plans (PIPs).

#### 5. Transformational Leadership
Fosters inspiration, intellectual curiosity, and vision.
*   **Daraz**: Practiced primarily at the executive tier, where leaders inspire staff to "revolutionize the digital economy of Sri Lanka," aligning them with the parent company's global vision.

---

### 2.2 Comparison of Styles on Decision-Making (M2)

The leadership styles adopted by these organizations profoundly influence their strategic and operational decision-making frameworks:

\`\`\`
[Kapruka Holdings]        ---> Highly Centralized (Single-point of failure, slow pivot)
[Daraz Sri Lanka]         ---> Decentralized & Metric-driven (Data-guided, highly agile)
[Lassana Flora]           ---> Consultative & Collaborative (Value-aligned, high alignment)
\`\`\`

*   **Kapruka Holdings (Bottlenecked Decision-Making)**: 
    Due to the autocratic and highly centralized style, the decision-making loop is exceptionally elongated. Every major purchase order, software feature, and marketing campaign must go through the founder. This has paralyzed Kapruka's ability to respond to market disruptions, such as the emergence of niche social-commerce vendors or specialized delivery platforms in Sri Lanka.
*   **Daraz Sri Lanka (Rapid, Metric-Driven Decision-Making)**: 
    Decisions are highly decentralized but bounded by hard algorithmic metrics. Local teams have the authority to run promotions, adjust digital interfaces, and alter vendor terms, provided the data justifies the action. This enables instant pivoting. However, the limitation is the lack of "human-centric" empathy; decisions are cold and numeric, often alienating local delivery partners and generating high internal friction.
*   **Lassana Flora (Consensus and Quality-Focused Decision-Making)**: 
    Decisions are consultative. While major strategic directions are guided by the founder, operational decisions are delegated to autonomous departments. This fosters high alignment and psychological safety, ensuring that once a decision is made, it is executed with complete team backing.

---

### 2.3 Factors Influencing Organizational Culture (P4)

Organizational culture is the shared values, beliefs, and assumptions that govern how people behave in organizations (**Schein, 2010**). In the Sri Lankan context, culture is shaped by distinct internal and external forces:

1.  **Founders' Values and Vision (Schein's Culture Creation)**:
    *   *Kapruka*: Built on the vision of its charismatic, tech-pioneer founder. The culture is highly individualistic and dependent on his personal approval, leading to a culture of dependency and risk-aversion.
    - *Lassana Flora*: Shaped by Dr. Lasantha Malavige's background in medicine and customer care. The culture is anchored on empathy, surgical operational precision, and mutual respect.
2.  **National Culture (Hofstede's Cultural Dimensions)**:
    Sri Lanka scores high on **Power Distance** (acceptance of unequal power distribution) and is highly **Collectivist**.
    *   *Kapruka's* culture amplifies this high power distance, where employees rarely challenge executive directives. This restricts bottom-up feedback and blinds senior management to operational flaws.
    *   *Lassana Flora* leverages the collectivist nature of Sri Lankan culture to build a tight-knit "family" structure, channeling high social cohesion into corporate performance.
3.  **Industry Speed and Ownership Structures**:
    *   *Daraz*, as an international subsidiary under Alibaba, is governed by a global tech-performance culture. The pace of e-commerce demands constant digital experimentation. The culture has evolved into a hyper-rational, fast-moving, and competitive environment where performance is transparent and failure is immediately corrected.

---

### 2.4 Impact of Culture on Performance (M3)

An organization's culture is not merely a social backdrop; it is a major determinant of operational performance and financial sustainability:

*   **Kapruka's Culture of Compliance (Declining Performance)**:
    Kapruka's highly centralized and low-trust culture has created a stagnation loop. Because employees are penalized for unsanctioned initiatives, innovation has dried up. Talented software engineers and marketers leave for flatter, more modern organizations. This high talent drain, combined with slow operational adaptation, is the core engine behind Kapruka's financial and market down-growth.
*   **Daraz's Culture of Hyper-Performance (High Output, High Friction)**:
    Daraz's metrics-driven, results-oriented culture drives exceptional performance. It has enabled them to capture over 50% of the Sri Lankan e-commerce volume. However, the culture lacks psychological safety. The high-stress, transactional nature of relationships leads to chronic burnout, causing high recruitment costs and periodic execution bottlenecks due to constant handovers.
*   **Lassana Flora's Culture of Service Excellence (Sustainable Growth)**:
    Their highly aligned clan and service culture is their core competitive advantage. It ensures that perishable goods are handled with utmost care. The strong mutual support among staff enables them to scale up operations during major calendar events without systemic failure, driving highly stable, long-term profitability.
`
  },
  {
    id: "d1-evaluation",
    title: "D1: Critical Evaluation & Synthesis",
    learningOutcome: "D1: Critically evaluate the impact of different approaches to leadership and management.",
    criteria: ["D1", "Synthesis of Findings"],
    readingTime: "5 mins",
    content: `
### Critical Evaluation of Leadership & Management Approaches

A critical synthesis of the leadership and management models practiced by Kapruka Holdings, Daraz, and Lassana Flora reveals that **no single approach is globally superior**; rather, effectiveness is governed by the principle of **contingency and alignment**—how well the leadership style, management structure, and organizational culture align with the external industry environment.

#### 1. The Classical / Founder-Centric Trap (Kapruka Holdings)
Kapruka's model represents a severe misalignment. During the early 2010s, when e-commerce was a blue ocean in Sri Lanka, a highly centralized, founder-led, task-oriented model was effective. It allowed rapid, single-point execution. However, as the organization scaled and the market grew complex, this structure became its primary bottleneck.
*   **The Critical Failure**: Over-centralization (Fayol) and autocratic leadership have paralyzed middle management. The absence of a decentralized, transformational culture prevents the business from innovating.
*   **The Impact**: Stagnation, inability to match agile digital-native competitors, high voluntary turnover of top talent, and declining organizational performance.

#### 2. The Hyper-Rational / Algorithmic Model (Daraz)
Daraz's model is highly optimized for scale but highly fragile in human capital sustainability. It represents a strict modern adaptation of Taylor's Scientific Management.
*   **The Critical Failure**: Treat humans purely as economic actors (Scientific Management) and rely excessively on transactional incentives. While this achieves massive throughput and rapid operational expansion, it neglects the socio-psychological needs of employees (**Herzberg's Motivator-Hygiene Theory**).
*   **The Impact**: Chronic burnout, high employee turnover, loss of institutional knowledge, and localized labor friction.

#### 3. The Balanced Clan / Human Relations Model (Lassana Flora)
Lassana Flora demonstrates the highest level of cultural and operational alignment for its specific niche. By pairing Fayol's logistical discipline with paternalistic care and democratic service design, it achieves sustainable excellence.
*   **The Strategic Strengths**: High psychological safety, exceptional employee retention, and extreme resilience during crisis situations.
*   **The Limitations**: Paternalistic structures can struggle during massive internationalization where personal relationships cannot scale infinitely, requiring gradual transition toward systems-driven bureaucracy.

---

### Strategic Consultant Recommendations for Kapruka Holdings

To halt its down-growth and restore operational vitality, Kapruka's board must execute a comprehensive structural and cultural turnaround:

\`\`\`
[Current State: Kapruka]              ---> [Target Restructuring State]
- Centralized Founder-Led Hierarchy        - Decentralized Business Unit Structure
- Autocratic Control Style                 - Transformational & Situational Styles
- Low-trust Compliance Culture             - Empathetic Culture of Innovation
\`\`\`

1.  **Deconstruct the Founder-Dependency Structure (Fayol's Centralization/Decentralization)**:
    Transition from a highly centralized organizational structure to a **decentralized, business-unit model**. Establish autonomous departments (e.g., Cross-border E-commerce, Local Retail Delivery, Technology & Development) headed by empowered general managers. The founder must transition from an *Executive Controller* to a *Non-Executive Board Chairman*, focusing on long-term capital allocation and international expansion, leaving daily operations to professional executives.
2.  **Cultivate a Culture of Psychological Safety and Innovation (Schein's Culture Shift)**:
    Introduce a formal change-management program to dismantle the "compliance-only" culture. Implement feedback systems, cross-functional innovation circles, and reward mechanisms for employee-led initiatives. Frame failures in software or marketing experiments as learning opportunities rather than disciplinary events, thereby reducing risk-aversion.
3.  **Implement a Situational and Transformational Leadership Framework (Hersey & Blanchard / Bass)**:
    Train existing senior staff on situational leadership, encouraging them to delegate authority to mature subordinates. Shift the corporate communication paradigm from "directive instructions" to an inspiring, transformational vision. Align employee performance with transparent contingent rewards (contingent on business unit profitability) to rebuild a sense of ownership.
`
  }
];

export const PRESENTATION_SLIDES: SlideData[] = [
  {
    id: 1,
    title: "Strategic Appraisal: Sri Lankan E-commerce",
    duration: "1.5 mins",
    bullets: [
      "Appraisal Focus: Kapruka's down-growth",
      "Sector Scope: Retail & e-commerce logistics",
      "Entities: Kapruka, Daraz, Lassana Flora",
      "Core Frameworks: LO1 & LO2 integration"
    ],
    visualPrompt: "Clean, professional title slide with dark slate/emerald palette. Side-by-side corporate logos of Kapruka, Daraz, and Lassana Flora formatted as sleek, high-contrast monochrome icons.",
    speakerNotes: "Good morning, members of the Board and academic evaluators. As your recruited Business Consultant, I have prepared a strategic diagnosis of Kapruka Holdings PLC. Over the past few years, Kapruka has experienced a notable down-growth, contrasted by the rapid market acquisition of Daraz and the highly resilient growth of Lassana Flora. In this 15-minute presentation, I will unpack how leadership and management theories, styles, and organizational cultures have directly influenced these corporate trajectories. Let's begin by defining our analytical boundaries."
  },
  {
    id: 2,
    title: "Defining Leadership vs. Management (LO1)",
    duration: "1.5 mins",
    bullets: [
      "Leadership: Vision, alignment, and change",
      "Management: Budgets, systems, and predictability",
      "Strategic Conflict: Role confusion",
      "Founder Overlap: Administrative bottlenecks"
    ],
    visualPrompt: "A sleek comparison diagram with intersecting circles representing 'Leadership' (Change, Inspiration, Vision) and 'Management' (Stability, Systems, Operations), with Kapruka's current operating point marked at the extreme top-heavy overlap.",
    speakerNotes: "To analyze why Kapruka is struggling, we must first establish the theoretical distinction between leadership and management, citing John Kotter's seminal work. Leadership is about coping with change and setting the strategic direction, while management is about coping with complexity and maintaining order. The core issue at Kapruka is a severe systemic overlap. The founder attempts to execute both high-level visionary leadership and micro-level administrative management, leaving zero operational autonomy for the senior management team. This leads us directly to behavioral leadership theories."
  },
  {
    id: 3,
    title: "Behavioral & Situational Leadership (P1)",
    duration: "1.5 mins",
    bullets: [
      "Behavioral: Task vs. People-oriented style",
      "Situational Model: Leader matches readiness",
      "Kapruka: Static directive mismatch",
      "Lassana Flora: Dynamic maturity coaching"
    ],
    visualPrompt: "Hersey & Blanchard's Situational Leadership matrix showing S1 (Directing) through S4 (Delegating). Kapruka is highlighted as being stuck in S1/S2 (telling/selling) while its employees are at R3/R4 (highly mature/competent).",
    speakerNotes: "Under Behavioral Theory, effective leadership is split between initiating structure and consideration. Kapruka is excessively task-oriented and scores extremely low on people-oriented consideration. When we overlay Hersey and Blanchard's Situational Leadership Model, we see why this is a fatal mismatch. Kapruka's middle management consists of highly mature, capable professionals. However, the leadership remains rigidly fixed in S1 directive styles rather than S4 delegating styles. Managers are treated as low-maturity operatives, inducing learned helplessness. In contrast, Lassana Flora actively adapts its leadership behavior to employee maturity, unlocking high performance."
  },
  {
    id: 4,
    title: "Management Theories: Classical vs. Modern (P2)",
    duration: "2.0 mins",
    bullets: [
      "Fayol: Authority and structural centralization",
      "Taylor: Standardized scientific productivity",
      "Weber: Impersonal, formal hierarchy",
      "Comparative Matrix: Core theoretical applications"
    ],
    visualPrompt: "A beautiful comparative matrix table comparing Kapruka, Daraz, and Lassana Flora across Fayol's Centralization, Taylor's Scientific metrics, and Weber's Bureaucratic hierarchy.",
    speakerNotes: "Moving to management theories, we examine the classical administrative school of Henri Fayol, Taylor's Scientific Management, and Max Weber's Bureaucracy. E-commerce requires rapid, decentralized execution. Yet, as detailed in our comparative matrix, Kapruka maintains an extreme centralization of power that directly violates Fayol's balanced administrative principles. On the other hand, Daraz Sri Lanka applies a pure form of Frederick Taylor's Scientific Management, treating their logistics, picking, and packing processes as standardized, hyper-optimized algorithms. Lassana Flora balances Fayol's structural discipline with modern human relations theories."
  },
  {
    id: 5,
    title: "LO1 Evaluation: Impact on Effectiveness (M1)",
    duration: "1.5 mins",
    bullets: [
      "Kapruka: Slow, bottlenecked decision velocity",
      "Daraz: Hyper-efficient e-commerce volume",
      "Systemic Vulnerability: High talent attrition",
      "Lassana Flora: Resilient, loyal service team"
    ],
    visualPrompt: "A horizontal bar chart comparing the three firms on 'Operational Speed' vs. 'Human Capital Sustainability.' Daraz dominates on speed, Lassana Flora leads on sustainability, and Kapruka lags on both.",
    speakerNotes: "The practical impact of these management models on organizational effectiveness is stark. At Kapruka, over-centralization has created chronic operational bottlenecks. Decisions on minor website changes or local promotions wait weeks for the founder's personal sign-off. Meanwhile, Daraz achieves hyper-efficiency through algorithmic Taylorism—but at a high human cost. Their burnout rates are exceptionally high, which threatens their long-term institutional stability. Lassana Flora stands as a highly effective model of sustainable human relations, retaining key talents and maintaining market leadership in its niche."
  },
  {
    id: 6,
    title: "Leadership Styles & Decision-Making (LO2/P3)",
    duration: "2.0 mins",
    bullets: [
      "Autocratic Style: Risk of central delay",
      "Paternalistic Style: Empathy-driven loyalty",
      "Transactional Style: KPI-linked reward systems",
      "Transformational Style: Inspiring digital innovation"
    ],
    visualPrompt: "An interactive-looking radar chart demonstrating how the five leadership styles (Autocratic, Democratic, Paternalistic, Transactional, Transformational) are distributed across the three companies.",
    speakerNotes: "Let's transition to Learning Outcome 2, focusing on specific leadership styles. Our research mapped these styles to critical business scenarios. Kapruka remains heavily reliant on an autocratic style. While this was beneficial when Kapruka was a small startup navigating early internet infrastructure in Sri Lanka, it now cripples their decision-making. Lassana Flora utilizes a paternalistic style. In Sri Lankan culture, which Hofstede identifies as collectivist with high power distance, paternalism is exceptionally powerful. It builds deep loyalty. Daraz uses a strong mix of transactional and transformational leadership to maintain high operational tempo."
  },
  {
    id: 7,
    title: "Hofstede's Dimensions: Shaping Culture (P4)",
    duration: "1.5 mins",
    bullets: [
      "Power Distance: High subordinate compliance",
      "Collectivism: Dense social, team cohesion",
      "Schein's Culture Model: Beliefs and artifacts",
      "National Nuances: Sri Lankan context"
    ],
    visualPrompt: "A sleek comparison infographic showing Hofstede's scores for Sri Lanka alongside Edgar Schein's three-tiered cultural pyramid (Artifacts, Espoused Values, Basic Assumptions) for each organization.",
    speakerNotes: "Organizational culture does not develop in a vacuum. It is heavily influenced by national culture. Analyzing Sri Lanka through Geert Hofstede's cultural dimensions, we observe high Power Distance and high Collectivism. In Kapruka's case, high Power Distance has been amplified to a dysfunctional degree. Employees accept autocratic rule and do not offer bottom-up feedback, hiding serious operational defects. Lassana Flora, however, leverages the collectivist dimension. They treat their employees like a family, transforming social cohesion into competitive advantage. In contrast, Daraz introduces an aggressive, individualistic multinational tech culture."
  },
  {
    id: 8,
    title: "Impact of Culture on Performance (M2/M3)",
    duration: "1.5 mins",
    bullets: [
      "Kapruka: Low-trust risk-aversion blocks growth",
      "Daraz: Metric pressure fuels burnout rate",
      "Lassana Flora: Clan trust drives brand loyalty",
      "Strategic Metric: Culture dictates execution"
    ],
    visualPrompt: "A high-impact split graphic: Left side represents the 'Stagnation Loop' (Autocracy -> Low Trust -> Silence -> Decline); Right side represents the 'Agility Loop' (Empowerment -> Trust -> Innovation -> Growth).",
    speakerNotes: "Peter Drucker famously stated that 'culture eats strategy for breakfast.' Our evaluation of the culture-performance link proves this. Kapruka's culture is one of passive compliance. Because employees are penalized for taking unapproved initiatives, innovation has completely ceased, driving their financial down-growth. Daraz's results-oriented culture drives massive performance but creates an unstable, high-attrition workplace. Lassana Flora proves that a nurturing, psychologically safe, and customer-intimate culture supports steady, highly profitable performance. This brings us to our critical evaluation and synthesis."
  },
  {
    id: 9,
    title: "D1 Critical Synthesis & Core Diagnosis",
    duration: "1.5 mins",
    bullets: [
      "Principle: Contingency alignment model",
      "Kapruka failure: Scale and centralization",
      "Daraz failure: Human sustainability limit",
      "Lassana Flora limit: International scalability"
    ],
    visualPrompt: "A multi-dimensional strategic positioning grid, plotting 'Operational Speed/Agility' on the X-axis and 'Human Capital Sustainability' on the Y-axis. The three companies are plotted in distinct quadrants.",
    speakerNotes: "Under criteria D1, we critically evaluate these different approaches. The key takeaway is the Contingency Alignment Principle. Kapruka's down-growth is not caused by a bad market, but by strategic misalignment. Their autocratic, centralized, and low-trust model is completely mismatched with the hyper-speed requirements of modern e-commerce. Conversely, while Daraz dominates on speed, its hyper-rational model treats human capital as a disposable resource, which is highly fragile. Lassana Flora represents the most balanced model, although scaling paternalism internationally remains their primary constraint."
  },
  {
    id: 10,
    title: "Strategic Advisory: Restructuring Kapruka Holdings",
    duration: "1.5 mins",
    bullets: [
      "1. Decentralize: Launch autonomous SBUs",
      "2. Transition: Delegate daily operational tasks",
      "3. Leadership: Adopt transformational style",
      "4. Culture: Foster psychological safety"
    ],
    visualPrompt: "A sequential 4-step strategic roadmap styled with timeline connectors and clean corporate icons, outlining Kapruka's complete transition plan over a 12-month period.",
    speakerNotes: "To reverse Kapruka's down-growth, we present a structured 4-step turnaround roadmap. First, the firm must decentralize its structures. We recommend establishing autonomous Strategic Business Units with delegated budgets. Second, the founder must transition out of daily executive management into a Non-Executive Chairman role, hiring a professional COO. Third, they must shift their leadership style toward a transformational paradigm, encouraging middle-management initiative. Finally, they must rebuild a culture of trust and psychological safety to plug the talent drain. Thank you, and I am now happy to open the floor to your questions."
  }
];
