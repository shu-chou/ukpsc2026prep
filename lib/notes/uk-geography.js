const p = (heading, type, ...paragraphs) => ({ heading, type, paragraphs });
const s = (heading, type, ...bullets) => ({ heading, type, bullets });

// Progressive rewrite of lib/data.js's uttarakhandGeography into explanatory paragraphs.
// Topics not yet listed here fall back to the original bullet version (see the merge
// in the page components) — this file only needs to contain the topics done so far.
export const uttarakhandGeographyExplained = {
  'Location & Extent': {
    priority: 'MUST KNOW', title: 'Geographical Location & Extent',
    summary: 'Start with the state\'s position, boundaries, extent and strategic setting. These facts form the base for understanding climate, drainage, settlement and resources.',
    sections: [
      p('1. Location and boundaries', 'understand',
        'Uttarakhand is a Himalayan state in northern India, lying in what government sources describe as the Central Himalayan zone. It extends roughly from 28°43′ N to 31°27′ N and 77°34′ E to 81°02′ E (different official sources round these endpoints slightly differently, so learn this commonly used range), covering a total geographical area of 53,483 km². Its four neighbours form a simple clockwise set worth remembering together: Uttar Pradesh to the south, Nepal to the east, China (Tibet) to the north and northeast, and Himachal Pradesh to the west — of these, only Nepal and China are international borders, which gives the state real strategic weight.'),
      p('2. Formation, and why the location matters', 'understand',
        'The state was carved out of the northern part of Uttar Pradesh on 9 November 2000, initially named Uttaranchal, a name changed to Uttarakhand a little over six years later, on 1 January 2007 — two separate dates that are easy to conflate but shouldn\'t be. Administratively it is organised into two major regions, Garhwal and Kumaon.',
        'What makes this location matter beyond the basic facts is the huge north-south relief range packed into a fairly narrow state: that range alone produces enormous variation in temperature, vegetation, agriculture and settlement from south to north, and gives Uttarakhand its importance for glaciers, river systems, forests, biodiversity, hydropower and tourism. The same steep slopes and deep valleys that create this variety also make the terrain fragile and prone to landslides and erosion, a theme that resurfaces across almost every other geography topic.'),
      s('3. What to memorize', 'must',
        'Area: 53,483 km²', 'Formation: 9 November 2000', 'Old name: Uttaranchal', 'Name changed to Uttarakhand: 1 January 2007',
        'Latitude: about 28°43′ N–31°27′ N', 'Longitude: about 77°34′ E–81°02′ E',
        'International neighbours: Nepal and China', 'National neighbours: Uttar Pradesh and Himachal Pradesh', 'Two major regions/divisions: Garhwal and Kumaon'),
      s('4. Exam traps', 'trap',
        'Do not confuse the state\'s formation date (9 November 2000) with the later renaming to Uttarakhand (1 January 2007).',
        'Do not treat Nepal and China as national neighbours; they are international neighbours.',
        'Do not confuse geographical area with forest area or hilly area.',
        'For boundary questions, remember the simple clockwise set: UP → Nepal → China → Himachal Pradesh.'),
      s('5. 30-second revision', 'revision',
        'Uttarakhand = Himalayan state → 53,483 km² → formed 9 Nov 2000 → Uttaranchal renamed Uttarakhand in 2007 → borders UP, Himachal Pradesh, Nepal, China → Garhwal + Kumaon.')
    ],
    sourceNote: 'Prepared from Uttarakhand government sources and aligned to the UKPSC geography syllabus.'
  },

  'Physiography': {
    priority: 'MUST KNOW', title: 'Physiography of Uttarakhand',
    summary: 'For Prelims, understand the major relief sequence and the relationship between altitude, terrain, climate, vegetation and human activity, rather than memorising every local landform.',
    sections: [
      p('1. The big picture', 'understand',
        'Uttarakhand is overwhelmingly mountainous: rugged rock, deep valleys, high peaks and steep slopes dominate the landscape, and this relief is really the foundation for most of the rest of the state\'s geography. Altitude shapes temperature, temperature and moisture together shape vegetation, and vegetation in turn shapes agriculture and settlement — which is why the single most useful fact to fix before learning individual ranges, peaks and valleys is the south-to-north relief sequence: Terai, then Shiwalik, then Lesser Himalaya, then Greater Himalaya.'),
      p('2. The belts, south to north', 'understand',
        'At the southern edge, the Bhabar is a coarse, highly permeable piedmont belt right along the Himalayan foothills, porous enough that streams can actually vanish into it; the Terai lies just south of the Bhabar and is comparatively wetter, with finer sediments and more surface water, since it is here that the streams which disappeared in the Bhabar tend to re-emerge. The two are related foothill belts but shouldn\'t be treated as interchangeable.',
        'Moving north, the Shiwalik is the southernmost Himalayan range proper, young in geological terms and structurally fragile, with high erosion potential. The Lesser Himalaya is the middle mountainous zone, holding most of the state\'s valleys, settlements, agriculture, horticulture and tourism activity. And the Greater Himalaya is the highest belt, home to the tallest peaks, glaciers and snow-covered terrain, with only sparse settlement at its highest elevations.'),
      p('3. Why this sequence matters', 'understand',
        'This relief framework drives themes that recur throughout the rest of the syllabus: steep slopes encourage rapid runoff and deeply incised valleys, which is why relief controls drainage; altitude creates the vertical variation in climate and natural vegetation Uttarakhand is known for; and mountain relief limits where roads, settlements, agriculture and hydropower projects can actually be built, while making the state more exposed to landslides and erosion at the same time. It is worth resisting the temptation to memorise long lists of individual peaks and valleys before this basic sequence is solid, since the sequence and its consequences are what tends to be tested first.'),
      s('4. What to memorize', 'must',
        'South → north: Terai → Shiwalik → Lesser Himalaya → Greater Himalaya', 'Bhabar ≠ Terai',
        'Shiwalik = southern, young/fragile belt', 'Lesser Himalaya = middle mountainous belt with extensive human activity',
        'Greater Himalaya = highest belt, snow/glacier-dominated at high elevations'),
      s('5. Exam traps', 'trap',
        'Do not reverse the Himalayan belt sequence.', 'Do not equate Bhabar with Terai.',
        'Do not assume the highest belt has the highest population density; harsh climate and terrain restrict settlement at high elevations.',
        'Do not memorise long lists of peaks and valleys before understanding the physiographic framework.'),
      s('6. 30-second revision', 'revision',
        'South → North = Terai → Shiwalik → Lesser Himalaya → Greater Himalaya. Altitude ↑ → temperature generally ↓ → vegetation changes → agriculture/settlement changes → snow/glacier at the highest elevations.')
    ],
    sourceNote: 'Prepared as a UKPSC-focused conceptual layer from the official Uttarakhand geography syllabus and Uttarakhand government geographic descriptions.'
  },

  'Climate': {
    priority: 'MUST KNOW', title: 'Climate of Uttarakhand',
    summary: 'Uttarakhand shows strong climatic variation because elevation rises dramatically from the southern plains to the high Himalaya. Focus on the altitude–temperature relationship, monsoon rainfall, winter precipitation, relief effects, and how climate connects to vegetation, agriculture, rivers and disasters.',
    sections: [
      p('1. Why climate varies so much here', 'understand',
        'Uttarakhand has no single climate — conditions vary sharply with altitude, relief and location, following one simple but important relationship: as altitude increases, temperature generally falls, and that single fact then drives changes in vegetation, agriculture and settlement pattern all the way up the slope. The southern plains and foothills stay comparatively warm year-round, while the higher Himalaya experiences severe winters and heavy snowfall even as lower valleys stay much milder. Altitude is the single most important control on climate here, though relief (which forces moisture-laden air upward), the direction a slope faces, and the state\'s two main weather systems, the southwest monsoon and western disturbances, all shape the picture further.'),
      p('2. The four seasons', 'must',
        'The year splits into four recognisable seasons: a cold winter from December to February, when temperatures drop sharply in the mountains and western disturbances can bring rain or snow; a warming pre-monsoon or summer from March to May, felt most in the plains and lower valleys; the main southwest monsoon season from June to September, by far the most important period for rainfall; and a post-monsoon phase in October-November as the rains taper off and temperatures start falling again toward winter.'),
      p('3. The southwest monsoon and orographic rainfall', 'understand',
        'Most of the state\'s annual rainfall arrives with the southwest monsoon between June and September, and the mechanism behind it is a textbook example of orographic rainfall: moist monsoon winds hit the Himalayan relief, are forced upward, cool as they rise, and release their moisture as they go. This is also why rainfall is never uniform across the state — elevation, slope orientation and local topography all change how much lift the air gets in any given spot. Combined with steep, fragile slopes, this heavy monsoon rainfall is also the main driver of landslides, flash floods and erosion in the hills.'),
      p('4. Western Disturbances and winter precipitation', 'understand',
        'Winter precipitation works differently, and comes mainly from Western Disturbances, weather systems that approach the subcontinent from the west and northwest rather than from the monsoon direction. These systems bring rain at lower and middle elevations and snow higher up, and the snow they deposit is what sustains the state\'s glaciers and much of its water availability through the rest of the year — a good reason not to assume all winter precipitation falls as snow, since altitude decides that too.'),
      p('5. How climate connects to the rest of the syllabus', 'understand',
        'Because climate here is really altitude in disguise, it ends up driving almost every other geography topic: it decides which vegetation zones exist at which elevation, which crops and horticultural produce can be grown where, how much water rivers carry from monsoon rain and glacier melt, how exposed different areas are to landslides and flash floods, when and where tourism is viable, and why dense permanent settlement thins out sharply above a certain elevation.'),
      s('6. What to memorize', 'must',
        'Main rainy season: Southwest Monsoon, June to September', 'Important winter weather mechanism: Western Disturbances',
        'Altitude ↑ → temperature generally ↓', 'Himalayan relief + moisture-bearing winds → orographic rainfall',
        'Heavy monsoon rainfall + steep slopes = greater landslide/flash-flood risk'),
      s('7. Exam traps', 'trap',
        'Do not assume Uttarakhand has the same climate everywhere; altitude creates major climatic differences.',
        'Do not confuse the Southwest Monsoon with Western Disturbances: monsoon dominates summer rainfall, western disturbances matter most for winter precipitation.',
        'Do not assume all winter precipitation falls as snow; lower elevations may receive rain while higher elevations receive snow.',
        'Do not study climate as an isolated chapter — expect it connected to vegetation, agriculture, rivers, glaciers, tourism and disasters.'),
      s('8. 30-second revision', 'revision',
        'Uttarakhand climate = altitude + Himalayan relief + monsoon + western disturbances. Altitude ↑ → temperature ↓. June–September = main monsoon. Mountains force moist air upward → orographic rainfall. Western Disturbances → winter rain/snow. Climate controls vegetation, agriculture, river flow and settlement.')
    ],
    sourceNote: 'UKPSC-focused climate notes structured around Uttarakhand\'s altitude, Himalayan relief, southwest monsoon, western disturbances and their geographical effects. Detailed climate-change issues are covered separately under Environment & Natural Resources.'
  }
};
