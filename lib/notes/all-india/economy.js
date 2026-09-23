const SRC = 'A curated, high-yield selection covering the standard prelims-level static economics/economy syllabus, compiled from NCERT-level references and standard competitive-exam material. This file deliberately favours durable structural and conceptual facts (definitions, mechanisms, institutional roles) over frequently-changing figures like current interest rates, GDP growth numbers or tax slabs, which belong in Current Affairs and should always be verified against a recent official source before the exam.';

const p = (heading, type, ...paragraphs) => ({ heading, type, paragraphs });
const s = (heading, type, ...bullets) => ({ heading, type, bullets });

export const economyTopics = {
  'Basic Concepts': {
    priority: 'MUST KNOW', title: 'Basic Concepts',
    summary: 'Foundational economic distinctions — micro vs. macroeconomics, the three sectors of the economy, and mixed-economy characteristics — frame every other economy topic and recur constantly as conceptual anchors.',
    sections: [
      p('1. Microeconomics vs. Macroeconomics', 'must',
        'Microeconomics studies the behaviour of individual economic units — a single consumer\'s choices, a single firm\'s production decisions, the price mechanism in a single market — while Macroeconomics studies the economy as a whole: aggregate output (GDP), overall price levels (inflation), national employment, and economy-wide policy tools like fiscal and monetary policy. Most of the remaining economy topics in this syllabus (National Income, Banking, Budget, Taxation) sit squarely within macroeconomics, since prelims-level economy questions overwhelmingly test aggregate, policy-level understanding rather than individual-market microeconomic theory.'),
      p('2. The three sectors of the economy', 'must',
        'Economic activity is conventionally divided into three sectors: the Primary sector (extraction of raw materials directly from nature — agriculture, mining, fishing, forestry), the Secondary sector (manufacturing and processing raw materials into finished goods — factories, construction), and the Tertiary sector (services — banking, trade, transport, IT, education, healthcare). India\'s economic structure has shifted substantially over recent decades toward a Services (tertiary)-sector-dominant GDP composition, even though the Primary sector (agriculture) still employs a disproportionately large share of the workforce relative to its GDP contribution — this employment-versus-output mismatch (agriculture: high employment share, lower GDP share) is one of the most frequently tested structural facts about the Indian economy.'),
      p('3. Mixed economy and planning heritage', 'understand',
        'India is conventionally described as a mixed economy, combining elements of a market economy (private enterprise, price mechanisms) with state intervention and public-sector participation (particularly in strategic and infrastructure sectors) — a structure that traces back to the post-independence Five-Year Plan era (covered under Planning & NITI Aayog) and the 1991 economic liberalisation reforms, which significantly expanded the market-economy elements while retaining substantial state involvement in specific sectors.'),
      s('4. What to memorize', 'must',
        'Microeconomics = individual units; Macroeconomics = economy-wide aggregates (most syllabus topics sit here)',
        'Three sectors: Primary (agriculture/extraction), Secondary (manufacturing), Tertiary (services)',
        'India: agriculture = high employment share, lower GDP share vs. services = lower employment share, highest GDP share',
        'India = mixed economy (market + state intervention)'),
      s('5. Exam traps', 'trap',
        'Agriculture employs a disproportionately LARGE share of India\'s workforce relative to its GDP contribution — the reverse of the services sector\'s pattern — a frequently tested asymmetry.'),
      s('6. 30-second revision', 'revision',
        'Micro=individual units. Macro=economy-wide. 3 sectors: Primary/Secondary/Tertiary. India: agriculture=high employment/low GDP share; services=low employment/high GDP share. India=mixed economy.')
    ],
    sourceNote: SRC
  },

  'National Income': {
    priority: 'MUST KNOW', title: 'National Income',
    summary: 'GDP, GNP and NNP, along with the distinction between nominal and real values, form the core measurement vocabulary of national income accounting — the National Statistical Office (NSO) is India\'s official source for these figures.',
    sections: [
      p('1. GDP, GNP and NNP', 'must',
        'Gross Domestic Product (GDP) measures the total value of goods and services produced within a country\'s domestic territory in a given period, regardless of who produces them (domestic or foreign entities). Gross National Product (GNP) measures total output produced by a country\'s citizens/residents, regardless of where in the world it is produced (GDP + net income from abroad). Net National Product (NNP) subtracts depreciation (wear and tear of capital assets) from GNP, giving a more accurate picture of an economy\'s genuinely sustainable output — this GDP → GNP → NNP progression, and what precisely each adjustment adds or subtracts, is a frequently tested definitional sequence.'),
      p('2. Nominal vs. Real GDP', 'must',
        'Nominal GDP values output at current market prices (including the effect of inflation), while Real GDP values output at constant prices from a fixed base year, stripping out the effect of price changes to show genuine output growth — Real GDP is therefore the more meaningful figure for comparing economic growth across years, since Nominal GDP growth could simply reflect rising prices rather than rising actual production. India\'s current GDP base year (used for Real GDP calculations) is periodically revised by the National Statistical Office (NSO); the specific current base year is a changeable fact worth verifying closer to the exam rather than memorising as fixed.'),
      p('3. Who measures India\'s national income', 'understand',
        'The National Statistical Office (NSO), under the Ministry of Statistics and Programme Implementation (MoSPI), is India\'s official body responsible for compiling and releasing GDP and other national income statistics — a body worth knowing by name and ministry, since "who calculates/releases GDP figures" is a recurring institutional-fact question distinct from the GDP concept itself.'),
      s('4. What to memorize', 'must',
        'GDP = domestic output (regardless of who produces it); GNP = GDP + net income from abroad (citizen/resident-based); NNP = GNP − depreciation',
        'Nominal GDP = current prices (includes inflation); Real GDP = constant/base-year prices (inflation stripped out) — Real GDP is the better growth measure',
        'National Statistical Office (NSO), under MoSPI, compiles India\'s official GDP figures'),
      s('5. Exam traps', 'trap',
        'GDP counts output within domestic territory regardless of nationality; GNP counts output by citizens/residents regardless of location — a frequently swapped definitional pair.',
        'Real GDP growth, not Nominal GDP growth, is the correct figure for measuring genuine economic growth after stripping out inflation.'),
      s('6. 30-second revision', 'revision',
        'GDP=domestic output. GNP=GDP+net income abroad. NNP=GNP−depreciation. Nominal=current prices; Real=constant/base-year prices (true growth measure). NSO/MoSPI=official GDP compiler.')
    ],
    sourceNote: SRC
  },

  'Planning & NITI Aayog': {
    priority: 'MUST KNOW', title: 'Planning & NITI Aayog',
    summary: 'India\'s planning history ran through twelve Five-Year Plans (1951-2017) under the Planning Commission before NITI Aayog replaced it in 2015, shifting from centralised allocation to indicator-based, cooperative-federalism policy guidance.',
    sections: [
      p('1. The Five-Year Plan era', 'must',
        'India adopted Soviet-inspired centralised Five-Year Plans starting in 1951, running through twelve plans until the framework ended in 2017 (the Twelfth Plan, 2012-17, being the last), administered by the Planning Commission (established 1950), which allocated central funds to states and sectors based on plan targets. The First Five-Year Plan (1951-56) prioritised agriculture, given the urgent post-independence need to boost food production; the Second Plan (1956-61), associated with economist P.C. Mahalanobis, prioritised heavy industry and the public sector — this Mahalanobis-heavy-industry association is a frequently tested standalone fact.'),
      p('2. NITI Aayog replaces the Planning Commission', 'must',
        'NITI Aayog (National Institution for Transforming India) replaced the Planning Commission in 2015, marking a deliberate philosophical shift from centralised, top-down fund allocation toward a "cooperative federalism" model emphasising state-level policy input, indicator-based monitoring (via tools like its various Indices — Health Index, SDG India Index, etc.) and a think-tank/policy-advisory role rather than direct financial allocation power. The Prime Minister serves as NITI Aayog\'s ex-officio Chairperson, and its Governing Council includes all state Chief Ministers, reflecting the cooperative-federalism design.'),
      p('3. Why the shift happened', 'understand',
        'The move from Planning Commission to NITI Aayog reflected broader post-liberalisation thinking that a centrally planned, target-driven allocation model was increasingly out of step with India\'s more market-oriented, post-1991 economy, and that states needed a stronger voice in shaping national development strategy rather than simply receiving centrally determined plan allocations — a shift that connects directly to the "hill-plains gap" and state-specific planning themes discussed for Uttarakhand under Schemes & Development.'),
      s('4. What to memorize', 'must',
        'Five-Year Plans: 1951-2017, twelve plans, administered by the Planning Commission (est. 1950)',
        'First Plan (1951-56) = agriculture priority; Second Plan (1956-61) = heavy industry (P.C. Mahalanobis model)',
        'NITI Aayog replaced Planning Commission in 2015; PM = ex-officio Chairperson; Governing Council = all state CMs',
        'NITI Aayog = advisory/think-tank role, indicator-based monitoring, NOT direct fund allocation like the Planning Commission'),
      s('5. Exam traps', 'trap',
        'NITI Aayog does not allocate central funds to states the way the Planning Commission did — its role is advisory and monitoring, a key functional distinction.',
        'P.C. Mahalanobis is associated with the Second Five-Year Plan\'s heavy-industry strategy, not the First Plan\'s agriculture focus.'),
      s('6. 30-second revision', 'revision',
        'Five-Year Plans 1951-2017 (12 plans), Planning Commission (1950). 1st Plan=agriculture. 2nd Plan=heavy industry(Mahalanobis). NITI Aayog replaced Planning Commission in 2015: PM=Chairperson, advisory role, not fund allocation.')
    ],
    sourceNote: SRC
  },

  'Banking & RBI': {
    priority: 'MUST KNOW', title: 'Banking & RBI',
    summary: 'The Reserve Bank of India (est. 1935), India\'s central bank, regulates the banking system through monetary policy tools like the repo rate, CRR and SLR, with the Monetary Policy Committee setting policy rates since 2016.',
    sections: [
      p('1. The Reserve Bank of India: role and history', 'must',
        'The Reserve Bank of India (RBI), established in 1935 (originally under the Reserve Bank of India Act, 1934, and nationalised in 1949), functions as India\'s central bank, responsible for issuing currency, regulating the banking system, managing monetary policy, holding the country\'s foreign exchange reserves, and acting as banker to both the government and other banks ("lender of last resort"). RBI headquarters is in Mumbai, and it operates under the Ministry of Finance while maintaining a degree of institutional independence in monetary policy decisions.'),
      p('2. Monetary policy tools', 'must',
        'RBI uses several key tools to manage money supply and inflation: the Repo Rate (the rate at which RBI lends short-term funds to commercial banks) is its primary policy rate — raising the repo rate makes borrowing costlier, cooling inflation and economic activity, while lowering it does the reverse; the Reverse Repo Rate is the rate at which RBI borrows from banks (the mirror-image tool); the Cash Reserve Ratio (CRR) is the minimum percentage of a bank\'s deposits that must be kept with RBI as reserves (raising CRR reduces money banks can lend, tightening liquidity); and the Statutory Liquidity Ratio (SLR) is the minimum percentage of deposits banks must maintain in liquid assets (cash, gold, approved securities) before lending the rest — this repo/reverse-repo/CRR/SLR toolkit, and the directional logic of raising vs. lowering each, is the single most consistently tested banking topic.'),
      p('3. The Monetary Policy Committee', 'understand',
        'Since 2016, India\'s key policy rates (including the repo rate) are set by the Monetary Policy Committee (MPC), a six-member body (three RBI members including the Governor, and three external members appointed by the government) that meets periodically to review and set the repo rate with an explicit inflation-targeting mandate — this institutional shift from RBI Governor\'s sole discretion to a committee-based, inflation-targeting framework is itself a frequently tested 2016-era reform, distinct from the individual tools (repo, CRR, SLR) themselves.'),
      s('4. What to memorize', 'must',
        'RBI = est. 1935 (RBI Act 1934), nationalised 1949, HQ Mumbai, India\'s central bank',
        'Repo Rate = RBI lends to banks (primary policy tool) · Reverse Repo = RBI borrows from banks · CRR = mandatory reserve % with RBI · SLR = mandatory liquid-asset % held by banks',
        'Raising repo/CRR/SLR = tightens liquidity, cools inflation; lowering = eases liquidity, stimulates growth',
        'Monetary Policy Committee (MPC, since 2016) = 6 members (3 RBI + 3 external), sets repo rate with inflation-targeting mandate'),
      s('5. Exam traps', 'trap',
        'Repo Rate (RBI lends to banks) and Reverse Repo Rate (RBI borrows from banks) are mirror-image, frequently swapped concepts.',
        'Since 2016, the repo rate is set by the MPC as a committee decision, not by the RBI Governor alone.'),
      s('6. 30-second revision', 'revision',
        'RBI=1935(Act 1934), nationalised 1949, Mumbai. Repo=RBI lends to banks. Reverse Repo=RBI borrows. CRR=reserve with RBI. SLR=banks\' own liquid assets. ↑rates=tighten/cool inflation. MPC(2016)=6 members, sets repo rate.')
    ],
    sourceNote: SRC
  },

  'Money & Inflation': {
    priority: 'MUST KNOW', title: 'Money & Inflation',
    summary: 'Inflation is measured in India primarily through the Consumer Price Index (CPI, RBI\'s inflation-targeting benchmark) and the Wholesale Price Index (WPI), with distinct causes classified as demand-pull versus cost-push inflation.',
    sections: [
      p('1. Measuring inflation: CPI and WPI', 'must',
        'India uses two main inflation indices: the Consumer Price Index (CPI), which tracks retail price changes for a representative basket of goods and services actually purchased by consumers, and is the index RBI officially targets for its inflation-targeting monetary policy mandate (via the MPC, covered under Banking & RBI); and the Wholesale Price Index (WPI), which tracks price changes at the wholesale/producer level before goods reach retail consumers, and notably (unlike CPI) excludes services entirely, covering only goods — this CPI-is-the-RBI-target-index fact, and the CPI-includes-services-while-WPI-doesn\'t distinction, are both frequently tested.'),
      p('2. Demand-pull vs. cost-push inflation', 'must',
        'Demand-pull inflation occurs when aggregate demand in the economy outpaces aggregate supply — "too much money chasing too few goods" — often associated with periods of strong economic growth, excess money supply, or fiscal stimulus. Cost-push inflation occurs when rising production costs (input prices like oil, raw materials, or wages) force producers to raise prices independent of demand conditions — a global oil-price spike is the textbook example. Distinguishing these two causal mechanisms, since they call for different policy responses (demand-pull may call for tighter monetary policy; cost-push is harder for monetary policy alone to address), is a standard conceptual exam distinction.'),
      p('3. Related inflation concepts', 'understand',
        'Deflation refers to a sustained fall in the general price level (the opposite of inflation), generally considered harmful to an economy since it can discourage spending and investment (consumers delaying purchases expecting further price falls). Stagflation is the unusual and particularly difficult combination of high inflation alongside stagnant economic growth and high unemployment, a scenario that defies the conventional inflation-growth tradeoff and is difficult to address with standard monetary tools. Core inflation refers to inflation excluding volatile items like food and fuel prices, providing a more stable, underlying inflation trend for policy analysis.'),
      s('4. What to memorize', 'must',
        'CPI = retail prices, includes services, RBI\'s official inflation-targeting index',
        'WPI = wholesale/producer prices, EXCLUDES services (goods only)',
        'Demand-pull inflation = demand > supply; Cost-push inflation = rising input costs',
        'Deflation = falling prices (harmful); Stagflation = high inflation + stagnant growth + high unemployment (rare, hard to fix)'),
      s('5. Exam traps', 'trap',
        'RBI officially targets CPI, not WPI, for its inflation-targeting monetary policy mandate — a frequently tested institutional fact.',
        'WPI excludes services entirely, covering goods only — a specific, commonly missed distinction from CPI.'),
      s('6. 30-second revision', 'revision',
        'CPI=retail, +services, RBI\'s target index. WPI=wholesale, goods only, no services. Demand-pull=demand>supply. Cost-push=rising input costs. Deflation=falling prices. Stagflation=inflation+stagnation+unemployment together.')
    ],
    sourceNote: SRC
  },

  'Budget & Fiscal Policy': {
    priority: 'MUST KNOW', title: 'Budget & Fiscal Policy',
    summary: 'The Union Budget, presented annually under Article 112, distinguishes Revenue and Capital accounts and Plan/Non-Plan-style expenditure, with fiscal deficit as the key indicator of government borrowing and the FRBM Act as its legal discipline framework.',
    sections: [
      p('1. The Union Budget: constitutional basis and structure', 'must',
        'The Union Budget, formally the "Annual Financial Statement" under Article 112 of the Constitution (covered under Indian Polity/Parliament), is presented annually (conventionally on 1 February in recent practice) by the Finance Minister, detailing the government\'s estimated receipts and expenditure for the coming financial year (India\'s financial year runs 1 April to 31 March). It is structured around two main accounts: the Revenue Account (day-to-day government income like taxes, and day-to-day expenditure like salaries and subsidies, which does not create or reduce assets/liabilities) and the Capital Account (expenditure creating long-term assets like infrastructure, and receipts from borrowing or asset sales/disinvestment).'),
      p('2. Fiscal deficit and related deficit concepts', 'must',
        'The Fiscal Deficit is the difference between the government\'s total expenditure and its total receipts (excluding borrowings) — essentially, how much the government must borrow to cover its spending — and is the single most-watched deficit indicator, usually expressed as a percentage of GDP. The Revenue Deficit is the excess of revenue expenditure over revenue receipts specifically (ignoring capital items), indicating the government is borrowing merely to fund day-to-day expenses rather than asset creation, generally considered a less desirable form of deficit than one driven by capital spending. The Primary Deficit is the fiscal deficit minus interest payments on past debt, isolating the current year\'s borrowing need from the burden of past borrowing.'),
      p('3. The FRBM Act and fiscal discipline', 'understand',
        'The Fiscal Responsibility and Budget Management (FRBM) Act, 2003, set targets for reducing fiscal and revenue deficits over time, aiming to instil fiscal discipline and reduce the risk of unsustainable government debt accumulation — while specific numerical targets have been revised and sometimes relaxed (including for exceptional circumstances), the Act\'s existence and basic purpose (legally mandated fiscal discipline) is the durable, testable fact, distinct from whatever the currently applicable target percentage happens to be.'),
      s('4. What to memorize', 'must',
        'Union Budget = Article 112, presented annually (~1 February), India\'s financial year = 1 April-31 March',
        'Revenue Account (day-to-day income/expenditure) vs. Capital Account (asset-creating expenditure, borrowing/disinvestment receipts)',
        'Fiscal Deficit = total expenditure − total receipts (excl. borrowing) = borrowing need',
        'Revenue Deficit = revenue expenditure − revenue receipts; Primary Deficit = fiscal deficit − interest payments',
        'FRBM Act, 2003 = legal framework for fiscal discipline/deficit targets'),
      s('5. Exam traps', 'trap',
        'Fiscal Deficit and Revenue Deficit measure different things — Fiscal Deficit is the total borrowing requirement, Revenue Deficit is specifically about day-to-day expenses exceeding day-to-day income.',
        'India\'s financial year runs April-March, not January-December — relevant whenever a question references "this financial year."'),
      s('6. 30-second revision', 'revision',
        'Union Budget=Article 112, ~1 Feb, FY=Apr-Mar. Revenue A/c=day-to-day; Capital A/c=asset-creating. Fiscal Deficit=total borrowing need. Revenue Deficit=day-to-day shortfall. Primary Deficit=fiscal deficit−interest. FRBM Act 2003=fiscal discipline law.')
    ],
    sourceNote: SRC
  },

  'Taxation & GST': {
    priority: 'MUST KNOW', title: 'Taxation & GST',
    summary: 'Direct taxes (income tax, corporate tax) are borne directly by the payer, while indirect taxes (GST) are passed on to the final consumer — GST, introduced in 2017 via the 101st Amendment, unified most indirect taxes into a single destination-based tax.',
    sections: [
      p('1. Direct vs. indirect taxes', 'must',
        'Direct taxes are levied directly on individuals or entities and cannot be shifted to someone else — income tax (on individuals) and corporate tax (on companies) are the primary examples, and their burden falls exactly on whoever is legally taxed. Indirect taxes are levied on goods and services and can be, and typically are, passed on to the final consumer through the price of the product — GST is the primary current example, having replaced most of India\'s older indirect tax structure. This direct-versus-indirect distinction, and correctly classifying a given tax into one category, is a fundamental and frequently tested framework.'),
      p('2. GST: structure and constitutional basis', 'must',
        'The Goods and Services Tax (GST), introduced from 1 July 2017, is a destination-based, multi-stage, comprehensive indirect tax that replaced a patchwork of earlier central and state indirect taxes (excise duty, service tax, VAT, and others) with a single unified tax, enabled constitutionally by the 101st Constitutional Amendment (2016), which inserted Articles 246A, 269A and 279A (covered under Indian Polity/Federalism). GST operates in a dual structure: CGST (Central GST) and SGST (State GST) apply to intra-state transactions (with revenue split between Centre and State), while IGST (Integrated GST) applies to inter-state transactions (collected by the Centre and apportioned to the destination state) — hence "destination-based," since tax revenue accrues to the state where goods/services are ultimately consumed, not where they are produced.'),
      p('3. The GST Council', 'understand',
        'The GST Council (Article 279A, covered in depth under Indian Polity/Constitutional Bodies and Federalism), chaired by the Union Finance Minister with state Finance Ministers as members, makes recommendations on GST rates, exemptions and administrative rules — its distinctive weighted-voting structure (Union = one-third weight, States collectively = two-thirds, decisions need a three-fourths majority of weighted votes) is a frequently tested detail that connects this economy topic directly back to the Polity syllabus\'s federalism material.'),
      s('4. What to memorize', 'must',
        'Direct tax = income/corporate tax (cannot be shifted); Indirect tax = GST (can be passed to consumer)',
        'GST introduced 1 July 2017; enabled by 101st Amendment (Articles 246A, 269A, 279A)',
        'CGST+SGST = intra-state; IGST = inter-state; GST = "destination-based" (revenue to consuming state)',
        'GST Council = Article 279A, Union FM chair, weighted voting (Union 1/3, States 2/3, 3/4 majority needed)'),
      s('5. Exam traps', 'trap',
        'GST is "destination-based" — revenue goes to the state where goods/services are consumed, not where produced, a frequently tested specific term.',
        'The 101st Amendment (GST), not the 102nd (NCBC) or another amendment, is the constitutional basis for GST — do not confuse amendment numbers across the Polity/Economy overlap.'),
      s('6. 30-second revision', 'revision',
        'Direct tax=income/corporate(can\'t shift). Indirect tax=GST(shiftable). GST from 1 July 2017, 101st Amendment. CGST+SGST=intra-state; IGST=inter-state. Destination-based. GST Council=279A, weighted voting.')
    ],
    sourceNote: SRC
  },

  'Agriculture & Food Security': {
    priority: 'IMPORTANT', title: 'Agriculture & Food Security',
    summary: 'India\'s food security architecture rests on Minimum Support Price (MSP) procurement, buffer stocks managed by the Food Corporation of India, and the Public Distribution System — anchored legally by the National Food Security Act, 2013.',
    sections: [
      p('1. Minimum Support Price (MSP) and procurement', 'must',
        'The Minimum Support Price (MSP) is a government-guaranteed floor price for specified crops, announced before each sowing season, designed to protect farmers from distress sales during periods of market price crashes — it is a price GUARANTEE, not a mandatory purchase requirement (the government procures directly only for certain crops, mainly through agencies like the Food Corporation of India), a distinction frequently tested since MSP does not automatically mean the government buys everything at that price. The MSP mechanism has been a major and recurring policy debate topic in recent years around whether it should be made a fully legal entitlement.'),
      p('2. The Food Corporation of India and buffer stocks', 'must',
        'The Food Corporation of India (FCI), established under the Food Corporations Act, 1964, is the central agency responsible for procuring foodgrains (mainly wheat and rice) at MSP, maintaining buffer stocks (a strategic food reserve to stabilise prices and ensure availability during shortages), and distributing grain through the Public Distribution System — FCI\'s procurement-storage-distribution role together forms the operational backbone of India\'s food security system.'),
      p('3. The Public Distribution System and food security law', 'must',
        'The Public Distribution System (PDS) distributes subsidised foodgrains and other essentials to the population through a network of Fair Price Shops (ration shops), historically criticised for leakage and inefficiency, prompting reforms including linking ration cards to Aadhaar for better targeting. The National Food Security Act (NFSA), 2013, gave a significant legal entitlement dimension to this system, guaranteeing subsidised foodgrain to a specified large share of the population (roughly two-thirds nationally, split between "priority households" and "Antyodaya" — the poorest-of-the-poor category, entitled to a larger fixed quantity) — making the NFSA the key legal-framework fact anchoring this topic.'),
      s('4. What to memorize', 'must',
        'MSP = guaranteed floor price (not a mandatory purchase requirement), announced pre-sowing',
        'Food Corporation of India (FCI, est. 1964) = procurement + buffer stocks + PDS distribution',
        'Public Distribution System (PDS) = subsidised foodgrain via Fair Price Shops',
        'National Food Security Act, 2013 = legal entitlement framework; Antyodaya = poorest-of-the-poor category with larger fixed entitlement'),
      s('5. Exam traps', 'trap',
        'MSP is a price guarantee/floor, not a legal guarantee that the government will purchase every unit of a crop at that price — a frequently tested nuance.',
        'The National Food Security Act is from 2013, distinct from the older, non-legally-binding PDS framework that preceded it.'),
      s('6. 30-second revision', 'revision',
        'MSP=guaranteed floor price, not mandatory purchase. FCI(1964)=procurement+buffer stock+PDS. PDS=Fair Price Shops. NFSA 2013=legal entitlement, priority households+Antyodaya.')
    ],
    sourceNote: SRC
  },

  'Industry & Infrastructure': {
    priority: 'IMPORTANT', title: 'Industry & Infrastructure',
    summary: 'The 1991 economic liberalisation (LPG reforms) fundamentally restructured India\'s industrial policy, while later flagship programmes like Make in India and the Production-Linked Incentive (PLI) scheme aim to boost domestic manufacturing.',
    sections: [
      p('1. The 1991 economic reforms (LPG)', 'must',
        'India\'s 1991 economic reforms, triggered by a severe balance-of-payments crisis, are conventionally summarised as "LPG": Liberalisation (reducing government licensing/permit requirements for private industry — the "License Raj" system that had required extensive government permission for industrial activity), Privatisation (reducing state ownership/control in favour of private enterprise in various sectors), and Globalisation (opening the economy to foreign trade and investment, reducing tariffs and import restrictions) — Finance Minister Manmohan Singh (later Prime Minister) is the figure most closely associated with implementing these reforms under Prime Minister P.V. Narasimha Rao\'s government, and 1991 is the single most important year-marker in modern Indian economic history for this reason.'),
      p('2. Make in India and PLI schemes', 'must',
        'Make in India, launched in 2014, is a flagship government initiative aimed at boosting domestic manufacturing and attracting foreign investment into manufacturing specifically (as distinct from services, where India had already been more internationally competitive). The Production-Linked Incentive (PLI) scheme, launched across multiple sectors (electronics, pharmaceuticals, textiles and others) from 2020 onward, provides direct financial incentives to companies based on incremental production/sales achieved, aiming to boost domestic manufacturing scale and reduce import dependence in strategic sectors — both schemes reflect a sustained post-2014 policy emphasis on manufacturing-sector growth.'),
      p('3. Infrastructure development approach', 'understand',
        'India\'s infrastructure development increasingly uses Public-Private Partnership (PPP) models, where private capital and expertise combine with public oversight/land/regulatory support to build infrastructure (highways, ports, airports) — a structural shift from the earlier fully public-sector-driven infrastructure model, paralleling the broader liberalisation-era shift toward greater private-sector participation across the economy.'),
      s('4. What to memorize', 'must',
        '1991 reforms = "LPG": Liberalisation, Privatisation, Globalisation; triggered by balance-of-payments crisis; Manmohan Singh (FM) under PM Narasimha Rao',
        'Make in India = 2014, manufacturing/FDI focus',
        'PLI scheme = from 2020, incentives tied to incremental production',
        'PPP = Public-Private Partnership model for infrastructure development'),
      s('5. Exam traps', 'trap',
        'Manmohan Singh was Finance Minister (not Prime Minister) during the 1991 reforms — he became Prime Minister only much later (2004).',
        'Make in India (2014) and the PLI scheme (2020 onward) are distinct, sequential initiatives, not the same programme.'),
      s('6. 30-second revision', 'revision',
        '1991 reforms=LPG(Liberalisation/Privatisation/Globalisation), triggered by BoP crisis, Manmohan Singh(FM)+Narasimha Rao(PM). Make in India=2014. PLI=2020+. PPP=infrastructure model.')
    ],
    sourceNote: SRC
  },

  'External Sector & Trade': {
    priority: 'IMPORTANT', title: 'External Sector & Trade',
    summary: 'The Balance of Payments (current account + capital account) tracks India\'s economic transactions with the rest of the world, with Foreign Direct Investment (FDI) versus Foreign Portfolio Investment (FPI) as the key inbound-capital distinction.',
    sections: [
      p('1. Balance of Payments: current and capital accounts', 'must',
        'The Balance of Payments (BoP) is a systematic record of all economic transactions between a country\'s residents and the rest of the world over a given period, divided into two main accounts: the Current Account (records trade in goods and services, income flows, and transfers — its balance, the Current Account Deficit or Surplus, is closely watched, with India typically running a deficit due to its large goods-import bill, especially oil) and the Capital Account (records capital flows — foreign investment, loans, and changes in foreign exchange reserves) — together, these two accounts must balance by definition, though individual components can be in surplus or deficit.'),
      p('2. FDI vs. FPI', 'must',
        'Foreign Direct Investment (FDI) involves a foreign entity making a long-term investment with significant control or management influence in an Indian business (setting up operations, acquiring substantial ownership stakes), generally considered more stable and growth-supportive since it reflects committed, long-term capital. Foreign Portfolio Investment (FPI), by contrast, involves foreign investment in Indian financial assets (stocks, bonds) without seeking management control, is more liquid and can be withdrawn quickly ("hot money"), making it more volatile and a potential source of financial instability during sudden outflows — this FDI-stable-vs-FPI-volatile distinction is a standard, frequently tested comparison.'),
      p('3. Exchange rate and trade policy basics', 'understand',
        'India follows a managed floating exchange rate system, where the rupee\'s value is primarily determined by market forces (supply and demand) but the RBI intervenes periodically to prevent excessive volatility, rather than either a fully fixed rate (pegged to another currency) or a fully free-floating rate (entirely market-determined with no intervention). A trade deficit occurs when a country\'s imports exceed its exports (India\'s standard condition, driven substantially by oil and gold imports), while a trade surplus is the reverse.'),
      s('4. What to memorize', 'must',
        'Balance of Payments = Current Account (trade+income+transfers) + Capital Account (investment+loans+reserves)',
        'India typically runs a Current Account Deficit (CAD), driven substantially by oil imports',
        'FDI = long-term, management control, stable; FPI = short-term, no management control, volatile ("hot money")',
        'India = managed floating exchange rate (market-driven + periodic RBI intervention)'),
      s('5. Exam traps', 'trap',
        'FDI and FPI are frequently confused — FDI implies management control and long-term commitment, FPI does not and is far more easily withdrawn.',
        'India runs a Current Account Deficit as the norm, not a surplus — driven heavily by oil import dependence.'),
      s('6. 30-second revision', 'revision',
        'BoP = Current A/c(trade+income) + Capital A/c(investment+reserves). India=typical CAD (oil imports). FDI=long-term/control/stable. FPI=short-term/no control/volatile. India=managed floating exchange rate.')
    ],
    sourceNote: SRC
  },

  'Poverty, Employment & Schemes': {
    priority: 'IMPORTANT', title: 'Poverty, Employment & Schemes',
    summary: 'MGNREGA (a legal employment guarantee) and the broader poverty-measurement debate (Tendulkar and Rangarajan Committee methodologies) anchor this topic, alongside India\'s persistent challenge of disguised unemployment in agriculture.',
    sections: [
      p('1. MGNREGA: a legal employment guarantee', 'must',
        'The Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), 2005, is a landmark law guaranteeing up to 100 days of wage employment per year to every rural household willing to do unskilled manual work, making it a distinctive legal RIGHT to employment (demand-driven, meaning the government is legally obligated to provide work when demanded) rather than a discretionary welfare scheme — this legal-entitlement structure, similar in spirit to the National Food Security Act\'s approach (covered under Agriculture & Food Security), is the single most important fact about MGNREGA to remember precisely, since many other employment schemes are NOT legal entitlements in the same binding way.'),
      p('2. Measuring poverty: Tendulkar and Rangarajan methodologies', 'must',
        'India has used different official methodologies over time to estimate poverty: the Tendulkar Committee (2009) revised the poverty line calculation methodology to include not just calorie intake but also expenditure on health, education and other essentials, moving away from the older, narrower calorie-based poverty line; the Rangarajan Committee (2014) further revised the methodology, generally estimating a higher poverty line (and hence a higher poverty percentage) than the Tendulkar methodology had — this committee-succession and the general direction of revision (each successive methodology tending to identify MORE people as poor, reflecting a more comprehensive definition of poverty) is a frequently tested sequence.'),
      p('3. Disguised unemployment and the informal sector', 'understand',
        'Disguised unemployment refers to a situation where more people are employed in an activity (typically agriculture) than are actually needed to perform it efficiently — removing some workers would not reduce total output, since their marginal productivity is effectively zero, but they appear "employed" in official statistics — this is considered a chronic, structural feature of Indian agriculture given the sector\'s outsized workforce share relative to its output (covered under Basic Concepts). India\'s large informal sector (unorganised employment without formal contracts, social security or regulatory protection) compounds measurement challenges for both employment and poverty statistics, since a large share of economic activity falls outside easily measurable formal-sector data.'),
      s('4. What to memorize', 'must',
        'MGNREGA (2005) = legal RIGHT to up to 100 days of rural wage employment per household, demand-driven',
        'Tendulkar Committee (2009) → Rangarajan Committee (2014): poverty-measurement methodology revisions, each broadening the definition',
        'Disguised unemployment = more workers than needed (near-zero marginal productivity), chronic in Indian agriculture',
        'Informal/unorganised sector = large share of Indian employment, complicates statistics'),
      s('5. Exam traps', 'trap',
        'MGNREGA is a LEGAL entitlement/right (demand-driven, legally guaranteed), unlike many other employment schemes which are discretionary — a frequently tested distinguishing feature.',
        'The Rangarajan Committee methodology (2014) came AFTER the Tendulkar Committee (2009), generally estimating a higher poverty line — do not reverse this sequence.'),
      s('6. 30-second revision', 'revision',
        'MGNREGA(2005)=legal right, 100 days, demand-driven. Tendulkar(2009)→Rangarajan(2014)=poverty-line methodology revisions (broadening). Disguised unemployment=near-zero marginal productivity, chronic in agriculture. Informal sector=large, hard to measure.')
    ],
    sourceNote: SRC
  }
};
