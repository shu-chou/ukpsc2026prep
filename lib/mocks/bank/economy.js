const S = 'economy';
const ST = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'];

// [difficulty, question, options, answerIndex, explanation, fixedOptionOrder?]
const rows = {
  'Basic Concepts': [
    ['easy', 'Which branch of economics studies the economy as a whole, including aggregate output and inflation?', ['Macroeconomics', 'Microeconomics', 'Behavioural economics', 'Development economics'], 0, 'Microeconomics, by contrast, studies individual economic units.'],
    ['easy', 'Which sector of the economy includes agriculture, mining and fishing?', ['Primary sector', 'Secondary sector', 'Tertiary sector', 'Quaternary sector'], 0, 'Extraction of raw materials directly from nature.'],
    ['easy', 'Which sector includes banking, trade, transport and IT services?', ['Tertiary sector', 'Primary sector', 'Secondary sector', 'None of these'], 0, 'India\'s GDP is now dominated by this sector.'],
    ['medium', 'India is best described, in terms of its economic structure, as a', ['Mixed economy', 'Purely market economy', 'Purely command economy', 'Barter economy'], 0, 'Combines private enterprise with state intervention.'],
    ['medium', 'A key structural feature of the Indian economy is that agriculture', ['Employs a disproportionately large share of the workforce relative to its GDP contribution', 'Contributes the largest share of GDP', 'Employs almost no workforce today', 'Has the same employment and GDP share'], 0, 'A frequently tested employment-output mismatch.'],
    ['hard', 'Consider the following statements:\n1. Services (tertiary sector) contribute the largest share to India\'s GDP today.\n2. The Secondary sector includes agriculture and mining.\nWhich of the statements is/are correct?', ST, 0, 'Agriculture and mining belong to the Primary sector, not the Secondary sector.', true]
  ],

  'National Income': [
    ['easy', 'GDP measures the total value of goods and services produced', ['Within a country\'s domestic territory, regardless of who produces them', 'By a country\'s citizens, regardless of location', 'Only by government-owned enterprises', 'Only in the formal/organised sector'], 0, 'Distinct from GNP, which is citizen/resident-based.'],
    ['easy', 'Which body is officially responsible for compiling and releasing India\'s GDP statistics?', ['National Statistical Office (NSO)', 'Reserve Bank of India', 'NITI Aayog', 'Comptroller and Auditor General'], 0, 'Operates under the Ministry of Statistics and Programme Implementation.'],
    ['medium', 'GNP differs from GDP by additionally accounting for', ['Net income from abroad', 'Depreciation of capital assets', 'Government subsidies only', 'Foreign exchange reserves'], 0, 'GNP = GDP + net income from abroad.'],
    ['medium', 'NNP is calculated by subtracting which item from GNP?', ['Depreciation', 'Taxes', 'Foreign investment', 'Government expenditure'], 0, 'Accounts for wear and tear of capital assets.'],
    ['medium', 'Which measure of GDP strips out the effect of price changes/inflation to show genuine output growth?', ['Real GDP', 'Nominal GDP', 'Gross GDP', 'Per capita GDP'], 0, 'Valued at constant, base-year prices.'],
    ['medium', 'Nominal GDP is valued at', ['Current market prices', 'Constant base-year prices', 'Purchasing power parity only', 'Fixed international prices'], 0, 'Includes the effect of inflation, unlike Real GDP.'],
    ['hard', 'Consider the following statements:\n1. Real GDP is the more meaningful figure for comparing economic growth across years.\n2. Nominal GDP growth always reflects genuine increases in actual production.\nWhich of the statements is/are correct?', ST, 0, 'Nominal GDP growth can simply reflect rising prices rather than rising actual production.', true]
  ],

  'Planning & NITI Aayog': [
    ['easy', 'India\'s Five-Year Plan framework, running from 1951 to 2017, was administered by which body?', ['The Planning Commission', 'NITI Aayog', 'The Finance Commission', 'The GST Council'], 0, 'Established in 1950.'],
    ['easy', 'NITI Aayog replaced the Planning Commission in which year?', ['2015', '2010', '2017', '1991'], 0, 'Marked a shift toward cooperative federalism.'],
    ['easy', 'Who serves as the ex-officio Chairperson of NITI Aayog?', ['The Prime Minister', 'The Finance Minister', 'The RBI Governor', 'The Cabinet Secretary'], 0, 'Reflects its cooperative-federalism structure.'],
    ['medium', 'The First Five-Year Plan (1951-56) prioritised which sector, given post-independence needs?', ['Agriculture', 'Heavy industry', 'Information technology', 'Services'], 0, 'Urgent need to boost food production after independence.'],
    ['medium', 'The Second Five-Year Plan (1956-61), prioritising heavy industry, is associated with which economist\'s model?', ['P.C. Mahalanobis', 'Amartya Sen', 'Manmohan Singh', 'Raghuram Rajan'], 0, 'A frequently tested standalone association.'],
    ['medium', 'How does NITI Aayog\'s role differ functionally from the Planning Commission\'s?', ['NITI Aayog has an advisory/monitoring role, without direct fund allocation power', 'NITI Aayog allocates central funds to states exactly as the Planning Commission did', 'NITI Aayog has more direct control over state budgets', 'There is no functional difference between the two'], 0, 'A key distinction in India\'s planning-institution history.'],
    ['hard', 'Consider the following statements:\n1. NITI Aayog\'s Governing Council includes all state Chief Ministers.\n2. The Planning Commission was established in 1950.\nWhich of the statements is/are correct?', ST, 2, 'Both statements are correct.', true]
  ],

  'Banking & RBI': [
    ['easy', 'The Reserve Bank of India was established in which year?', ['1935', '1947', '1949', '1969'], 0, 'Under the Reserve Bank of India Act, 1934; nationalised in 1949.'],
    ['easy', 'Where is the Reserve Bank of India headquartered?', ['Mumbai', 'New Delhi', 'Kolkata', 'Chennai'], 0, 'India\'s central bank.'],
    ['easy', 'The rate at which RBI lends short-term funds to commercial banks is called the', ['Repo Rate', 'Reverse Repo Rate', 'Bank Rate for Deposits', 'Prime Lending Rate'], 0, 'RBI\'s primary monetary policy tool.'],
    ['medium', 'Raising the Repo Rate typically has which effect on the economy?', ['Makes borrowing costlier, cooling inflation and economic activity', 'Makes borrowing cheaper, stimulating inflation', 'Has no effect on inflation', 'Directly increases government spending'], 0, 'A contractionary monetary policy tool.'],
    ['medium', 'The Cash Reserve Ratio (CRR) refers to', ['The minimum percentage of a bank\'s deposits that must be kept with RBI as reserves', 'The minimum percentage of deposits banks must hold in liquid assets themselves', 'The interest rate banks charge each other', 'The rate at which RBI borrows from banks'], 0, 'Distinct from SLR, which banks hold themselves.'],
    ['medium', 'The Statutory Liquidity Ratio (SLR) refers to', ['The minimum percentage of deposits banks must maintain in liquid assets like cash, gold or approved securities', 'The reserve banks must keep with RBI', 'The rate RBI charges for emergency lending', 'The tax rate on bank profits'], 0, 'Held by the banks themselves, unlike CRR.'],
    ['medium', 'Since 2016, India\'s key policy interest rates are set by which body?', ['The Monetary Policy Committee (MPC)', 'The RBI Governor alone', 'The Finance Ministry alone', 'The GST Council'], 0, 'A six-member body with an inflation-targeting mandate.'],
    ['hard', 'Consider the following statements:\n1. The Reverse Repo Rate is the rate at which RBI lends to banks.\n2. The Monetary Policy Committee includes both RBI members and external members appointed by the government.\nWhich of the statements is/are correct?', ST, 1, 'The Reverse Repo Rate is the rate at which RBI BORROWS from banks, the mirror-image of the Repo Rate.', true]
  ],

  'Money & Inflation': [
    ['easy', 'Which index does the RBI officially target for its inflation-targeting monetary policy mandate?', ['Consumer Price Index (CPI)', 'Wholesale Price Index (WPI)', 'Human Development Index', 'Index of Industrial Production'], 0, 'Tracks retail prices for a representative consumer basket.'],
    ['easy', 'The Wholesale Price Index (WPI), unlike CPI, covers', ['Only goods, excluding services', 'Only services, excluding goods', 'Both goods and services equally', 'Only agricultural products'], 0, 'A specific, frequently tested distinction from CPI.'],
    ['medium', 'Demand-pull inflation occurs when', ['Aggregate demand outpaces aggregate supply', 'Rising production costs force producers to raise prices', 'The government reduces the money supply', 'Exports exceed imports significantly'], 0, 'Often summarised as "too much money chasing too few goods."'],
    ['medium', 'Cost-push inflation is typically triggered by', ['Rising input/production costs, such as an oil-price spike', 'Excess consumer demand alone', 'A fall in government spending', 'An increase in interest rates'], 0, 'Distinct causal mechanism from demand-pull inflation.'],
    ['medium', 'A sustained fall in the general price level is called', ['Deflation', 'Stagflation', 'Disinflation', 'Reflation'], 0, 'Generally considered harmful, discouraging spending and investment.'],
    ['medium', 'Stagflation refers to the unusual combination of', ['High inflation alongside stagnant growth and high unemployment', 'Low inflation alongside rapid economic growth', 'Falling prices alongside full employment', 'High growth alongside low inflation'], 0, 'Defies the conventional inflation-growth tradeoff.'],
    ['hard', 'Consider the following statements:\n1. Core inflation excludes volatile items like food and fuel prices.\n2. CPI is used by RBI while WPI includes services but CPI does not.\nWhich of the statements is/are correct?', ST, 0, 'It is CPI that includes services and WPI that excludes them, the reverse of what statement 2 claims.', true]
  ],

  'Budget & Fiscal Policy': [
    ['easy', 'The Union Budget is presented under which Article of the Constitution?', ['Article 112', 'Article 110', 'Article 280', 'Article 360'], 0, 'Formally called the "Annual Financial Statement."'],
    ['easy', 'India\'s financial year runs from', ['1 April to 31 March', '1 January to 31 December', '1 July to 30 June', '1 October to 30 September'], 0, 'Relevant whenever budget figures reference "this financial year."'],
    ['medium', 'The Fiscal Deficit represents', ['The difference between total expenditure and total receipts (excluding borrowings) — the government\'s borrowing need', 'Only the deficit in revenue expenditure', 'The trade deficit with other countries', 'The difference between imports and exports'], 0, 'The single most-watched deficit indicator, usually as % of GDP.'],
    ['medium', 'The Revenue Deficit specifically measures', ['The excess of revenue expenditure over revenue receipts', 'The excess of capital expenditure over capital receipts', 'Total government borrowing including capital items', 'The trade deficit'], 0, 'Indicates borrowing to fund day-to-day expenses rather than asset creation.'],
    ['medium', 'The Primary Deficit is calculated as', ['Fiscal Deficit minus interest payments on past debt', 'Fiscal Deficit plus interest payments', 'Revenue Deficit minus capital expenditure', 'Total expenditure minus tax revenue only'], 0, 'Isolates the current year\'s borrowing need from the burden of past debt.'],
    ['medium', 'The FRBM Act, 2003, primarily aims to', ['Instil fiscal discipline by setting deficit-reduction targets', 'Regulate the banking sector', 'Set GST rates', 'Determine RBI\'s monetary policy'], 0, 'Fiscal Responsibility and Budget Management Act.'],
    ['hard', 'Consider the following statements:\n1. Capital Account expenditure creates long-term assets like infrastructure.\n2. Revenue Account transactions include borrowing and disinvestment receipts.\nWhich of the statements is/are correct?', ST, 0, 'Borrowing and disinvestment receipts belong to the Capital Account, not the Revenue Account.', true]
  ],

  'Taxation & GST': [
    ['easy', 'Income tax is an example of which type of tax?', ['Direct tax', 'Indirect tax', 'Wealth tax exclusively', 'Corporate tax exclusively'], 0, 'Levied directly on the individual and cannot be shifted.'],
    ['easy', 'GST is an example of which type of tax?', ['Indirect tax', 'Direct tax', 'Wealth tax', 'Capital gains tax'], 0, 'Can be passed on to the final consumer through the product\'s price.'],
    ['easy', 'GST was introduced in India with effect from which date?', ['1 July 2017', '1 April 2016', '1 January 2018', '1 July 2016'], 0, 'A destination-based, multi-stage indirect tax.'],
    ['medium', 'GST was constitutionally enabled by which amendment?', ['101st Amendment', '102nd Amendment', '91st Amendment', '73rd Amendment'], 0, 'Inserted Articles 246A, 269A and 279A.'],
    ['medium', 'CGST and SGST apply to which type of transaction?', ['Intra-state transactions', 'Inter-state transactions', 'International trade only', 'Government transactions only'], 0, 'IGST, by contrast, applies to inter-state transactions.'],
    ['medium', 'GST is described as a "destination-based" tax because', ['Tax revenue accrues to the state where goods/services are ultimately consumed', 'Tax revenue accrues to the state where goods are produced', 'It applies only to exported goods', 'It is collected only by the central government'], 0, 'A frequently tested specific term.'],
    ['medium', 'The GST Council, established under Article 279A, is chaired by', ['The Union Finance Minister', 'The Prime Minister', 'The RBI Governor', 'The Comptroller and Auditor General'], 0, 'With state Finance Ministers as members.'],
    ['hard', 'Consider the following statements:\n1. In the GST Council, decisions require a three-fourths majority of weighted votes.\n2. In GST Council voting, the Union holds two-thirds of the weighted vote.\nWhich of the statements is/are correct?', ST, 0, 'The Union holds one-third of the weighted vote; States collectively hold two-thirds.', true]
  ],

  'Agriculture & Food Security': [
    ['easy', 'The Minimum Support Price (MSP) is best described as', ['A government-guaranteed floor price for specified crops', 'A mandatory purchase requirement for all crops', 'A tax levied on farmers', 'A subsidy for fertiliser purchase only'], 0, 'Protects farmers from distress sales during price crashes.'],
    ['easy', 'Which agency is primarily responsible for procuring foodgrains at MSP and maintaining buffer stocks?', ['Food Corporation of India (FCI)', 'Reserve Bank of India', 'NITI Aayog', 'Ministry of Finance'], 0, 'Established under the Food Corporations Act, 1964.'],
    ['medium', 'The National Food Security Act was enacted in which year?', ['2013', '2005', '2017', '2009'], 0, 'Gave a legal entitlement dimension to India\'s food distribution system.'],
    ['medium', 'Under the National Food Security Act, which category is entitled to a larger fixed quantity of subsidised foodgrain as the poorest-of-the-poor?', ['Antyodaya', 'Priority households', 'General category', 'BPL only'], 0, 'A specific classification within the NFSA framework.'],
    ['medium', 'Foodgrains are distributed to the public through which system?', ['The Public Distribution System (PDS)', 'The GST Council', 'MGNREGA', 'The Green Revolution programme'], 0, 'Via a network of Fair Price Shops.'],
    ['hard', 'Consider the following statements:\n1. MSP guarantees that the government will purchase every unit of every crop at the announced price.\n2. The Food Corporation of India was established in 1964.\nWhich of the statements is/are correct?', ST, 1, 'MSP is a price guarantee, but the government does not purchase every unit of every crop — procurement is limited mainly to certain crops.', true]
  ],

  'Industry & Infrastructure': [
    ['easy', 'India\'s 1991 economic reforms are commonly summarised by which acronym?', ['LPG (Liberalisation, Privatisation, Globalisation)', 'FDI (Foreign Direct Investment)', 'GST (Goods and Services Tax)', 'PLI (Production-Linked Incentive)'], 0, 'Triggered by a severe balance-of-payments crisis.'],
    ['easy', 'Who was the Finance Minister most closely associated with implementing the 1991 economic reforms?', ['Manmohan Singh', 'P.V. Narasimha Rao', 'Atal Bihari Vajpayee', 'Yashwant Sinha'], 0, 'Later became Prime Minister of India (2004-2014).'],
    ['medium', 'The "Make in India" initiative, launched in 2014, primarily aims to', ['Boost domestic manufacturing and attract foreign investment into manufacturing', 'Reduce all foreign investment into India', 'Focus exclusively on the services sector', 'Replace the GST system'], 0, 'Distinct from India\'s earlier strength in services exports.'],
    ['medium', 'The Production-Linked Incentive (PLI) scheme provides incentives to companies based on', ['Incremental production/sales achieved', 'Total tax paid', 'Number of employees hired', 'Export value alone'], 0, 'Launched across multiple sectors from 2020 onward.'],
    ['medium', 'Public-Private Partnership (PPP) models in infrastructure development combine', ['Private capital/expertise with public oversight and support', 'Only government funding with no private involvement', 'Only foreign government funding', 'Cooperative societies with state governments'], 0, 'A shift from the earlier fully public-sector-driven model.'],
    ['hard', 'Consider the following statements:\n1. Manmohan Singh was Prime Minister of India during the 1991 economic reforms.\n2. The PLI scheme and Make in India were launched in the same year.\nWhich of the statements is/are correct?', ST, 3, 'Manmohan Singh was Finance Minister (not PM) in 1991; Make in India (2014) and PLI (2020 onward) were launched in different years.', true]
  ],

  'External Sector & Trade': [
    ['easy', 'The Balance of Payments is divided into which two main accounts?', ['Current Account and Capital Account', 'Revenue Account and Capital Account', 'Trade Account and Budget Account', 'Fiscal Account and Monetary Account'], 0, 'A systematic record of a country\'s economic transactions with the rest of the world.'],
    ['easy', 'India typically runs a deficit in which account, driven substantially by oil imports?', ['Current Account', 'Capital Account', 'Revenue Account', 'Fiscal Account'], 0, 'Known as the Current Account Deficit (CAD).'],
    ['medium', 'Foreign Direct Investment (FDI) is generally considered more stable than Foreign Portfolio Investment (FPI) because', ['FDI involves long-term investment with management control', 'FDI can be withdrawn instantly', 'FDI applies only to government bonds', 'FDI does not require any capital commitment'], 0, 'FPI, by contrast, is more liquid and can be withdrawn quickly.'],
    ['medium', 'Foreign Portfolio Investment (FPI) is sometimes referred to as "hot money" because it', ['Can be withdrawn quickly, making it volatile', 'Always stays invested for decades', 'Is illegal in most countries', 'Only applies to real estate investment'], 0, 'A potential source of financial instability during sudden outflows.'],
    ['medium', 'India follows which type of exchange rate system?', ['Managed floating exchange rate', 'Fully fixed exchange rate', 'Fully free-floating exchange rate with no RBI intervention', 'A gold-standard-pegged rate'], 0, 'Market-driven with periodic RBI intervention to limit volatility.'],
    ['hard', 'Consider the following statements:\n1. A trade deficit occurs when a country\'s exports exceed its imports.\n2. FDI generally implies significant control or management influence in the invested business.\nWhich of the statements is/are correct?', ST, 1, 'A trade deficit occurs when imports EXCEED exports — the definition in statement 1 is reversed.', true]
  ],

  'Poverty, Employment & Schemes': [
    ['easy', 'MGNREGA guarantees up to how many days of wage employment per year to a rural household?', ['100 days', '50 days', '365 days', '200 days'], 0, 'A legal right to unskilled manual work, demand-driven.'],
    ['easy', 'MGNREGA was enacted in which year?', ['2005', '2013', '1991', '2014'], 0, 'A landmark employment guarantee law.'],
    ['medium', 'MGNREGA is distinctive among employment schemes because it', ['Is a legal, demand-driven right to employment', 'Is a discretionary welfare scheme with no legal guarantee', 'Applies only to urban households', 'Guarantees permanent government jobs'], 0, 'The government is legally obligated to provide work when demanded.'],
    ['medium', 'Which committee revised India\'s poverty-line methodology in 2009 to include expenditure on health and education, not just calorie intake?', ['Tendulkar Committee', 'Rangarajan Committee', 'Mahalanobis Committee', 'Swaminathan Committee'], 0, 'Moved away from the older, narrower calorie-based poverty line.'],
    ['medium', 'The Rangarajan Committee (2014) revised poverty-line estimates in which general direction compared to the Tendulkar methodology?', ['Estimated a higher poverty line (more people counted as poor)', 'Estimated a lower poverty line (fewer people counted as poor)', 'Produced identical estimates to the Tendulkar Committee', 'Eliminated the concept of a poverty line altogether'], 0, 'Reflects a more comprehensive definition of poverty.'],
    ['medium', 'Disguised unemployment refers to a situation where', ['More people are employed in an activity than actually needed, with near-zero marginal productivity', 'Workers are unemployed but not counted in official statistics', 'Workers are employed in high-productivity urban jobs', 'Unemployment benefits are being disguised as wages'], 0, 'Considered a chronic, structural feature of Indian agriculture.'],
    ['hard', 'Consider the following statements:\n1. The Tendulkar Committee report came after the Rangarajan Committee report.\n2. India\'s large informal sector complicates the measurement of both employment and poverty statistics.\nWhich of the statements is/are correct?', ST, 1, 'The Tendulkar Committee (2009) came BEFORE the Rangarajan Committee (2014), not after.', true]
  ]
};

export const economyBank = Object.entries(rows).flatMap(([topic, list]) =>
  list.map(([difficulty, q, options, answer, explanation, fixed]) => ({
    subject: S, topic, difficulty, q, options, answer, explanation, fixed: Boolean(fixed)
  }))
);
