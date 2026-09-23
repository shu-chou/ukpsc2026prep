const SRC = 'CSAT (Paper II) tests aptitude and reasoning rather than static factual recall, so these notes focus on techniques, formulas and worked examples rather than facts to memorise. UKPSC prelims CSAT is generally qualifying in nature (a minimum threshold, not counted toward merit ranking) but must still be cleared — treat speed and accuracy on familiar question types as the practical goal, not exhaustive theory.';

const p = (heading, type, ...paragraphs) => ({ heading, type, paragraphs });
const s = (heading, type, ...bullets) => ({ heading, type, bullets });

export const csatTopics = {
  'Reading Comprehension': {
    priority: 'MUST KNOW', title: 'Reading Comprehension',
    summary: 'RC passages test whether you can extract stated facts, inferred meaning, and the author\'s tone/purpose accurately under time pressure — the discipline of answering strictly from the passage (not outside knowledge or assumption) is the single biggest skill this topic tests.',
    sections: [
      p('1. The three question types in RC', 'must',
        'RC questions generally fall into three types, each requiring a different reading strategy: Direct/factual questions ask for information explicitly stated in the passage — the answer is a near-exact match to specific passage text, and the main risk is picking a plausible-sounding option that isn\'t actually what the passage said. Inferential questions ask what the passage IMPLIES without stating directly — the correct answer must still be strictly supportable by the passage\'s actual content, not by outside knowledge or a "reasonable guess" about the topic in general. Tone/purpose questions ask about the author\'s attitude (critical, neutral, appreciative, sceptical) or the passage\'s overall purpose (to inform, to argue, to compare) — these require reading the passage\'s word choice and structure, not just its factual content.'),
      p('2. A disciplined reading approach', 'must',
        'The most reliable approach for CSAT-style RC under time pressure is: read the passage once at a moderate pace to grasp its overall structure and main argument (not memorising every detail), then go to the questions and return to the specific passage section relevant to each one rather than relying on memory — for short passages (under 150 words), reading the questions first and then the passage can save time by focusing attention on what actually matters. The single most common wrong-answer trap in RC is selecting an option that is FACTUALLY TRUE in the real world but NOT STATED OR SUPPORTED BY THIS SPECIFIC PASSAGE — CSAT RC answers must be justified from the given text alone, regardless of what you may separately know to be true.'),
      p('3. Vocabulary-in-context and elimination strategy', 'understand',
        'Some RC questions ask for the meaning of a word "as used in the passage" — this requires inferring meaning from the surrounding sentence\'s context, since many words have multiple possible meanings and the passage will have used one specific sense. When uncertain between two close options, the elimination strategy (actively ruling out options that contain any unsupported claim, absolute language like "always" or "never" without passage support, or a reversal of what the passage actually said) is generally more reliable than trying to positively confirm the "best" answer from scratch.'),
      s('4. What to memorize', 'must',
        'Three question types: direct/factual (exact passage match), inferential (implied but passage-supportable), tone/purpose (author\'s attitude/aim)',
        'Golden rule: answer from the PASSAGE, not outside knowledge, even if an option is separately true in reality',
        'Elimination strategy: rule out options with unsupported claims, absolute language, or reversed meaning'),
      s('5. Exam traps', 'trap',
        'The most common RC trap: an option that is true in general knowledge but not actually stated/supported by THIS passage — always verify against the given text.',
        'Absolute-language options ("always," "never," "completely") are frequently wrong unless the passage itself uses similarly absolute language.'),
      s('6. 30-second revision', 'revision',
        'RC types: factual, inferential, tone/purpose. Answer strictly from the passage. Eliminate options with unsupported claims or absolute language.')
    ],
    sourceNote: SRC
  },

  'Logical Reasoning': {
    priority: 'MUST KNOW', title: 'Logical Reasoning',
    summary: 'Syllogisms (using Venn diagrams), blood relations, and coding-decoding are the three most frequently tested logical reasoning formats — each has a specific systematic technique that removes the need to "just think it through" under time pressure.',
    sections: [
      p('1. Syllogisms: the Venn diagram method', 'must',
        'A syllogism gives two or more statements (premises) about categories — e.g., "All cats are animals; Some animals are pets" — and asks which conclusions necessarily follow. The reliable technique is drawing a Venn diagram for each statement and checking which conclusions are TRUE IN EVERY POSSIBLE VALID DIAGRAM, not just one diagram you happen to draw first — a conclusion is only valid if there is no possible way to draw the diagrams (consistent with the given statements) where that conclusion is false. Worked example: "All roses are flowers; All flowers are plants" strictly implies "All roses are plants" (a valid syllogistic chain, since every rose sits inside flowers, which sits inside plants) — but it does NOT imply "All plants are roses" (the reverse direction is not guaranteed by the original statements).'),
      p('2. Blood relations', 'must',
        'Blood relation questions describe a chain of family relationships and ask you to identify a specific relationship at the end — the reliable technique is drawing a simple family tree diagram as you read each clue, rather than trying to hold the whole chain in your head. Worked example: "A is B\'s father. B is C\'s sister. D is C\'s mother." Drawing this out: D (mother) — A (father) are C\'s parents; B is C\'s sister, meaning B is also D and A\'s child. So A is B\'s father (given) and also C\'s father, since C and B share the same parents. Systematically diagramming avoids the error of assuming an unstated relationship (e.g., assuming A and D are married, which the clues support but do not explicitly need for the specific question being asked).'),
      p('3. Coding-decoding', 'understand',
        'Coding-decoding questions establish a pattern (letters shifted by a fixed number, words substituted by other words, or numbers assigned by a rule) using one example, then ask you to apply the same pattern to a new word/number. Worked example: if "CAT" is coded as "DBU" (each letter shifted forward by 1: C→D, A→B, T→U), then "DOG" would code to "EPH" (D→E, O→P, G→H) — the key technique is identifying the EXACT rule from the given example first (shift amount, direction, or substitution logic) before applying it, rather than guessing the pattern from partial information.'),
      s('4. What to memorize', 'must',
        'Syllogisms: draw Venn diagrams, a conclusion is valid only if true in EVERY possible diagram consistent with the premises',
        'Blood relations: draw a family tree diagram as you read each clue',
        'Coding-decoding: identify the exact rule (shift/substitution) from the given example before applying it to the new item'),
      s('5. Exam traps', 'trap',
        '"All A are B" does NOT imply "All B are A" — a very frequently tested syllogism reversal error.',
        'In blood relations, do not assume unstated relationships (like marriage) unless the clues make them logically necessary for the specific question asked.'),
      s('6. 30-second revision', 'revision',
        'Syllogisms=Venn diagrams, check EVERY valid arrangement. Blood relations=draw family tree. Coding-decoding=find exact rule from example first, then apply.')
    ],
    sourceNote: SRC
  },

  'Analytical Reasoning': {
    priority: 'MUST KNOW', title: 'Analytical Reasoning',
    summary: 'Seating arrangements, direction sense and series completion each reward a systematic, diagram-based or rule-based approach over intuitive guessing — the goal is converting word-based clues into a visual or numeric structure you can check clue-by-clue.',
    sections: [
      p('1. Seating arrangements', 'must',
        'Seating arrangement puzzles (linear or circular) give several clues about who sits where relative to others, and ask you to determine the final arrangement or answer a specific positional question. The reliable technique: draw the seats first (a row of blanks for linear, a circle of blanks for circular arrangements), then place the clues one at a time, starting with the most restrictive/specific clue (e.g., "X sits at the leftmost end" is more useful to place first than "Y sits somewhere to the left of Z"), filling in what you\'re certain about before tackling clues that allow multiple possibilities. For circular arrangements, always clarify at the start whether the arrangement faces INWARD (toward the centre) or OUTWARD, since "left" and "right" reverse between the two.'),
      p('2. Direction sense', 'must',
        'Direction sense questions describe a sequence of movements (e.g., "walk 5 km north, then turn right and walk 3 km, then turn left and walk 2 km") and ask for the final direction/distance from the starting point. The reliable technique is plotting each step on a simple compass-based grid (treating North as up, East as right) rather than trying to track direction changes mentally — remember that "turn right" and "turn left" are relative to the direction you are CURRENTLY facing, not fixed compass directions, so each turn must be tracked relative to your immediately preceding direction of travel. Worked example: starting facing North, turning right means you now face East; turning right again from East means you now face South — a 90-degree clockwise rotation each time you "turn right."'),
      p('3. Series completion', 'understand',
        'Number and letter series questions give a sequence following a hidden rule and ask for the next term(s). The reliable approach is checking, in order, the most common rule types: a constant arithmetic difference (2, 5, 8, 11... adding 3 each time), a constant ratio/multiplication (2, 6, 18, 54... multiplying by 3 each time), alternating patterns (two interleaved series, like 1, 10, 2, 9, 3, 8... where odd positions increase and even positions decrease), or a pattern based on squares/cubes (1, 4, 9, 16... perfect squares) — checking these common patterns systematically, rather than guessing, resolves the large majority of series questions quickly.'),
      s('4. What to memorize', 'must',
        'Seating: draw the seats first, place the most restrictive clues first, clarify inward/outward facing for circular arrangements',
        'Direction sense: plot on a compass grid, turns are relative to CURRENT facing direction, not fixed compass points',
        'Series: check arithmetic difference, ratio/multiplication, alternating pattern, and squares/cubes systematically'),
      s('5. Exam traps', 'trap',
        'In circular seating arrangements, "left" and "right" reverse depending on whether people face inward or outward — always confirm this at the start.',
        '"Turn right" in direction-sense questions is always relative to your current facing direction, not a fixed compass direction — a frequent source of errors when tracking multiple turns.'),
      s('6. 30-second revision', 'revision',
        'Seating=diagram first, most restrictive clue first, confirm inward/outward. Direction=compass grid, turns relative to current facing. Series=check difference/ratio/alternating/squares-cubes systematically.')
    ],
    sourceNote: SRC
  },

  'Number System & Arithmetic': {
    priority: 'MUST KNOW', title: 'Number System & Arithmetic',
    summary: 'Divisibility rules, LCM/HCF, and basic number classification (prime, composite, rational/irrational) are the foundational tools that speed up almost every other quantitative CSAT topic.',
    sections: [
      p('1. Divisibility rules', 'must',
        'A small set of divisibility rules resolve most number-property questions instantly without long division: a number is divisible by 2 if its last digit is even; by 3 if the sum of its digits is divisible by 3; by 4 if its last two digits form a number divisible by 4; by 5 if it ends in 0 or 5; by 6 if it\'s divisible by both 2 and 3; by 9 if the sum of its digits is divisible by 9; and by 11 if the difference between the sum of digits in odd positions and even positions is divisible by 11 (or 0) — these rules, applied mentally, are far faster than actual division under exam time pressure.'),
      p('2. LCM and HCF', 'must',
        'The Highest Common Factor (HCF, also called GCD) of two or more numbers is the largest number that divides all of them exactly; the Least Common Multiple (LCM) is the smallest number that all of them divide into exactly — a key relationship worth memorising: for any two numbers, HCF × LCM = the product of the two numbers, a shortcut that lets you find one value if you already know the other plus the two original numbers. Worked example: for 12 and 18, HCF = 6 (largest number dividing both), and since 12 × 18 = 216, LCM = 216 ÷ 6 = 36 (verify: 36 is indeed the smallest number both 12 and 18 divide into evenly).'),
      p('3. Number classification', 'understand',
        'Numbers are classified into nested categories worth knowing precisely: Natural numbers (1, 2, 3...) are the counting numbers; Whole numbers add zero to natural numbers (0, 1, 2, 3...); Integers add negative numbers (...-2, -1, 0, 1, 2...); Rational numbers can be expressed as a fraction of two integers (including all integers, and terminating or repeating decimals); Irrational numbers cannot be expressed as such a fraction (like √2 or π, non-terminating, non-repeating decimals) — Prime numbers have exactly two distinct factors (1 and themselves; note that 1 itself is NOT prime, and 2 is the only even prime number), while Composite numbers have more than two factors.'),
      s('4. What to memorize', 'must',
        'Divisibility: 2(even)/3(digit sum÷3)/4(last 2 digits÷4)/5(ends 0,5)/9(digit sum÷9)/11(alternating digit-sum difference÷11)',
        'HCF × LCM = product of the two numbers (for any two numbers)',
        'Number hierarchy: Natural ⊂ Whole ⊂ Integers ⊂ Rational; Irrational = separate, non-fraction-expressible',
        'Prime = exactly 2 factors; 1 is NOT prime; 2 is the ONLY even prime'),
      s('5. Exam traps', 'trap',
        '1 is NOT a prime number (it has only one factor, itself) — a very frequently tested exception.',
        '2 is the only EVEN prime number — every other prime is odd, a frequently tested standalone fact.'),
      s('6. 30-second revision', 'revision',
        'Divisibility rules for 2,3,4,5,9,11 (memorize each). HCF×LCM=product of the two numbers. Natural⊂Whole⊂Integer⊂Rational; Irrational=separate. Prime=2 factors exactly, 1 is not prime, 2 is the only even prime.')
    ],
    sourceNote: SRC
  },

  'Percentage, Ratio & Profit-Loss': {
    priority: 'MUST KNOW', title: 'Percentage, Ratio & Profit-Loss',
    summary: 'Percentage change, ratio-proportion, and the profit/loss/discount formula family (built around Cost Price and Selling Price) are the three interlocking topics that dominate CSAT\'s quantitative-aptitude section by question volume.',
    sections: [
      p('1. Percentages and percentage change', 'must',
        'A percentage is simply a fraction expressed out of 100 (x% = x/100); the core percentage-CHANGE formula is: Percentage Change = [(New Value − Old Value) / Old Value] × 100, positive for an increase, negative for a decrease. A critical trap worth internalising: a value that increases by 20% and then decreases by 20% does NOT return to its original value — because the second 20% is calculated on the NEW (larger) base, not the original one. Worked example: 100 increased by 20% = 120; then 120 decreased by 20% = 120 − 24 = 96, not 100 — this successive-percentage-change trap (where each percentage applies to a different base value) is one of the single most frequently tested percentage concepts.'),
      p('2. Ratio and proportion', 'must',
        'A ratio compares two quantities of the same kind (e.g., 3:4 means for every 3 units of one quantity, there are 4 of the other); a proportion states that two ratios are equal (a:b = c:d, which can be cross-multiplied: a×d = b×c, a technique for solving for an unknown value in the proportion). Worked example: if the ratio of boys to girls in a class is 3:5, and there are 24 boys, then since 3 corresponds to 24, each "unit" of the ratio equals 24÷3 = 8, so girls = 5×8 = 40 — this "find the value of one unit, then scale" technique resolves the large majority of ratio word problems quickly.'),
      p('3. Profit, loss and discount', 'must',
        'Profit/Loss questions revolve around two core values: Cost Price (CP, what an item cost to acquire/produce) and Selling Price (SP, what it was sold for) — Profit = SP − CP (when SP > CP), Loss = CP − SP (when CP > SP), and Profit/Loss Percentage is always calculated ON THE COST PRICE, not the selling price: Profit% = (Profit/CP) × 100. Discount is calculated on the Marked Price (MP, the listed/labelled price before any reduction): Selling Price = Marked Price − Discount, and Discount% = (Discount/MP) × 100 — a frequent trap is calculating a discount or profit percentage on the wrong base value (SP instead of CP for profit; CP instead of MP for discount), so always identify which base the question is asking about.'),
      s('4. What to memorize', 'must',
        'Percentage change = [(New − Old)/Old] × 100; successive % changes do NOT cancel out (each applies to a different base)',
        'Ratio a:b = c:d → cross-multiply a×d = b×c; "find one unit, then scale" for ratio word problems',
        'Profit%/Loss% is ALWAYS calculated on Cost Price (CP); Discount% is ALWAYS calculated on Marked Price (MP)'),
      s('5. Exam traps', 'trap',
        'A 20% increase followed by a 20% decrease does NOT return to the original value — the second percentage applies to a new, different base value.',
        'Profit/Loss percentage uses Cost Price as the base, NOT Selling Price — a very frequently tested base-value error.'),
      s('6. 30-second revision', 'revision',
        '%Change=[(New-Old)/Old]×100, successive changes don\'t cancel. Ratio: cross-multiply, find one unit then scale. Profit%=on CP. Discount%=on MP. Never mix up the base value.')
    ],
    sourceNote: SRC
  },

  'Time, Speed & Work': {
    priority: 'MUST KNOW', title: 'Time, Speed & Work',
    summary: 'Speed = Distance/Time, relative speed for two moving objects, and the "work rate" technique (treating work as a fraction completed per unit time) are the three core tools for this consistently tested topic.',
    sections: [
      p('1. Speed, distance and time', 'must',
        'The foundational relationship is Speed = Distance/Time, rearrangeable as Distance = Speed × Time or Time = Distance/Speed depending on what\'s being asked. A key unit-conversion fact worth memorising directly (since it recurs constantly): to convert km/h to m/s, multiply by 5/18; to convert m/s to km/h, multiply by 18/5 — Worked example: a speed of 36 km/h equals 36 × 5/18 = 10 m/s. Average speed for a journey with different speeds over EQUAL distances (not equal time) is the harmonic mean, not the simple average: for a journey covered at speed A one way and speed B the return way (equal distance each way), Average Speed = 2AB/(A+B), NOT simply (A+B)/2 — a frequently tested distinction, since the simple average is only correct when time (not distance) is equal in each leg.'),
      p('2. Relative speed', 'must',
        'When two objects move toward each other, their relative speed (the rate at which the distance between them closes) is the SUM of their individual speeds; when two objects move in the same direction, their relative speed (the rate at which one catches up to the other) is the DIFFERENCE of their individual speeds. Worked example: two trains moving toward each other at 60 km/h and 40 km/h close the distance between them at 60+40 = 100 km/h combined; if instead both move in the same direction, the faster one gains on the slower one at only 60−40 = 20 km/h — this sum-for-opposite, difference-for-same-direction rule is the single most tested relative-speed concept.'),
      p('3. Time and work', 'must',
        'The standard technique treats work as a fraction completed per unit time: if a person can complete a job in "n" days working alone, they complete 1/n of the job per day (their individual work rate) — when multiple people work together, their individual rates simply ADD together to find the combined rate. Worked example: if A can finish a job in 10 days (rate = 1/10 per day) and B can finish the same job in 15 days (rate = 1/15 per day), working together their combined rate is 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6 of the job per day, so together they finish the job in 6 days — this add-the-rates technique is far more reliable than trying to average the individual times (10 and 15 do NOT simply average to give the combined time).'),
      s('4. What to memorize', 'must',
        'Speed = Distance/Time; km/h → m/s: ×(5/18); m/s → km/h: ×(18/5)',
        'Average speed for equal DISTANCE legs = 2AB/(A+B), NOT the simple average (A+B)/2',
        'Relative speed: opposite directions = SUM of speeds; same direction = DIFFERENCE of speeds',
        'Work rate = 1/(days to complete alone); combined rate = sum of individual rates; combined time = 1/(combined rate)'),
      s('5. Exam traps', 'trap',
        'Average speed over EQUAL DISTANCES (not equal time) uses the harmonic-mean formula 2AB/(A+B), not the simple average — a very frequently tested and frequently miscalculated distinction.',
        'For two people working together, you cannot simply average their individual completion times — you must add their work RATES (1/time), then invert the sum.'),
      s('6. 30-second revision', 'revision',
        'Speed=Dist/Time. km/h↔m/s: ×5/18 or ×18/5. Equal-distance avg speed=2AB/(A+B), not simple average. Relative speed: opposite=sum, same direction=difference. Work: rate=1/days, combined rate=sum of rates.')
    ],
    sourceNote: SRC
  },

  'Data Interpretation': {
    priority: 'MUST KNOW', title: 'Data Interpretation',
    summary: 'DI questions present data in tables, bar graphs or pie charts and test whether you can accurately extract, compare and calculate (percentages, ratios, averages) from that data under time pressure — the core skill is careful reading, not complex math.',
    sections: [
      p('1. Reading tables and bar graphs accurately', 'must',
        'Table-based DI questions require carefully matching the correct row and column before doing any calculation — the most common error is reading the wrong cell (right row, wrong column, or vice versa) rather than making an actual arithmetic mistake, so a habit of double-checking which row/column a value comes from before calculating is worth building deliberately. Bar graph questions similarly require reading the axis scale carefully (bars are sometimes scaled in units of 100s or 1000s, clearly marked on the axis, and misreading the scale is a common error distinct from misreading the bar height itself).'),
      p('2. Pie charts and percentage-of-a-whole', 'must',
        'Pie chart questions represent data as percentages (or degrees, since a full circle = 360°, so 1% = 3.6°) of a whole, and commonly ask you to convert a percentage share into an actual quantity given the total, or to compare two categories\' shares directly. Worked example: if a pie chart shows a category taking up 90° of the circle, that category represents 90/360 = 25% of the whole; if the total represented by the whole pie chart is 800, that category\'s actual value is 25% of 800 = 200 — converting between degrees, percentages and actual values is the core recurring pie-chart skill.'),
      p('3. Common calculation types in DI', 'understand',
        'Beyond simply reading values, DI questions typically ask for: percentage change between two data points (using the same formula covered under Percentage, Ratio & Profit-Loss), ratios between two categories (simplify to lowest terms), averages across multiple categories/years (sum of values ÷ number of values), and sometimes multi-step questions combining several of these (e.g., "find the percentage change in the ratio of A to B between Year 1 and Year 2") — recognising which underlying calculation a DI question is really asking for, often disguised in wordy phrasing, is more important than any DI-specific formula beyond what\'s already covered elsewhere in this syllabus.'),
      s('4. What to memorize', 'must',
        'Table/bar graph: double-check row/column and axis scale BEFORE calculating, not after',
        'Pie chart: full circle = 360° = 100%; so 1% = 3.6°; convert degrees→percentage→actual value as needed',
        'DI calculation types are usually just percentage change, ratio, or average — dressed in wordy phrasing'),
      s('5. Exam traps', 'trap',
        'The most common DI error is misreading which row/column or which bar/segment a value comes from, not making an arithmetic mistake — verify you\'re reading the right data point before calculating.',
        'Bar graph axes are sometimes scaled in units of 100s or 1000s (marked on the axis) — a frequently overlooked detail that causes answers to be off by a large, obvious-in-hindsight factor.'),
      s('6. 30-second revision', 'revision',
        'Tables/bars: verify row/column and axis scale first. Pie chart: 360°=100%, 1%=3.6°. DI questions = percentage change/ratio/average, just wordier — identify which calculation is actually being asked.')
    ],
    sourceNote: SRC
  },

  'Decision Making': {
    priority: 'IMPORTANT', title: 'Decision Making',
    summary: 'Decision-making questions present a workplace or civic scenario with several response options and ask for the "most appropriate" course of action — the best answer typically balances legality/rules, fairness to all stakeholders, and practical effectiveness, rather than being the most extreme or the most passive option.',
    sections: [
      p('1. What decision-making questions actually test', 'must',
        'Unlike other CSAT topics, Decision Making questions do not have a single objectively provable correct answer the way a maths problem does — they test judgment, typically in a scenario involving a conflict of interest, an ethical dilemma, or a resource-constraint at work or in civic life, with 4-5 possible responses ranging from clearly poor to clearly good. The general principle for identifying the "most appropriate" response: it should be lawful/within-the-rules, fair to all reasonably affected parties (not just the most powerful or the most vocal), and practically implementable (not just theoretically ideal but impossible to actually execute) — options that are extreme (either overly harsh/punitive or overly passive/avoidant) are usually NOT the intended best answer.'),
      p('2. Common wrong-answer patterns to avoid', 'must',
        'Several option-types are reliable signals of a WRONG answer in decision-making scenarios: options involving bypassing established procedure or authority without genuine justification (even if it seems like it would "solve" the problem faster); options that ignore or dismiss a stakeholder\'s legitimate concern entirely; options that involve taking no action or indefinitely delaying a decision when the scenario clearly calls for a response; and options that involve an extreme, disproportionate reaction (harsh punishment, public confrontation) to a moderate problem — the best answer is usually the most BALANCED, PROCEDURALLY SOUND response among the given options, not the most decisive-sounding or the most cautious-sounding one.'),
      p('3. A practical worked approach', 'understand',
        'When facing a decision-making scenario, a reliable practical approach is: first identify who the stakeholders are and what each one\'s legitimate interest is; then eliminate any option that is clearly illegal, clearly unfair to a stakeholder with a legitimate interest, or clearly impossible to implement in practice; then, among the remaining options, choose the one that addresses the core problem most directly while causing the least unnecessary harm or disruption to uninvolved parties — this elimination-based approach (similar to the RC elimination strategy) is generally more reliable than trying to identify the "perfect" answer from intuition alone.'),
      s('4. What to memorize', 'must',
        'Best answer = lawful + fair to all legitimate stakeholders + practically implementable',
        'Avoid: bypassing procedure without justification, ignoring a stakeholder\'s legitimate concern, taking no action when action is clearly needed, disproportionate/extreme reactions',
        'Approach: identify stakeholders → eliminate illegal/unfair/impossible options → choose the most balanced remaining option'),
      s('5. Exam traps', 'trap',
        'The most "decisive-sounding" or most "cautious-sounding" option is often a trap — the intended best answer usually balances multiple considerations rather than optimising for just one (speed, safety, authority, etc.).',
        'Options that completely dismiss a stakeholder\'s legitimate concern are almost always wrong, even if that stakeholder is not the main authority figure in the scenario.'),
      s('6. 30-second revision', 'revision',
        'Best answer=lawful+fair+practical. Avoid extreme/procedure-bypassing/stakeholder-dismissing/no-action options. Approach: identify stakeholders, eliminate bad options, pick the most balanced remaining one.')
    ],
    sourceNote: SRC
  }
};
