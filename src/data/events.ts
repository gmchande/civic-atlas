import type { HistoricalEvent } from '../types';

export const events: HistoricalEvent[] = [
  // ── Pre-Contact & Early European Contact ──────────────────────────────
  {
    id: 'vikings-lanse',
    year: 1000,
    title: 'Vikings at L\'Anse aux Meadows',
    description:
      'Vikings from Iceland who colonized Greenland reached Labrador and the island of Newfoundland. The remains of their settlement at L\'Anse aux Meadows are a UNESCO World Heritage site.',
    lat: 51.59,
    lng: -55.53,
    category: 'settlement',
    testFacts: [
      'L\'Anse aux Meadows is a World Heritage site.',
      'Vikings from Iceland reached Newfoundland around 1000 AD.',
    ],
  },
  {
    id: 'cabot-1497',
    year: 1497,
    title: 'John Cabot Maps Atlantic Shore',
    description:
      'John Cabot, an Italian immigrant to England, was the first to map Canada\'s Atlantic shore, setting foot on Newfoundland or Cape Breton Island and claiming the New Founde Land for England.',
    lat: 47.56,
    lng: -52.71,
    category: 'exploration',
    keyPeople: ['John Cabot'],
    testFacts: [
      'John Cabot was the first to draw a map of Canada\'s East Coast.',
      'He claimed the land for England in 1497.',
    ],
  },
  {
    id: 'cartier-1534',
    year: 1534,
    endYear: 1542,
    title: 'Jacques Cartier Explores St. Lawrence',
    description:
      'Jacques Cartier made three voyages across the Atlantic, claiming the land for King Francis I of France. He heard the Iroquoian word "kanata" meaning "village," which gave Canada its name.',
    lat: 46.81,
    lng: -71.21,
    category: 'exploration',
    keyPeople: ['Jacques Cartier'],
    testFacts: [
      'Cartier claimed the land for France.',
      'The word "kanata" (meaning "village") gave Canada its name.',
      'Cartier was the first European to explore the St. Lawrence River.',
    ],
  },
  {
    id: 'frobisher-1576',
    year: 1576,
    title: 'Frobisher Explores the Arctic',
    description:
      'Martin Frobisher penetrated the uncharted Arctic for Queen Elizabeth I, reaching what is now Frobisher Bay (Iqaluit).',
    lat: 63.75,
    lng: -68.52,
    category: 'exploration',
    keyPeople: ['Martin Frobisher'],
    testFacts: [
      'Frobisher Bay (now Iqaluit) is named after him.',
    ],
  },

  // ── New France and Colonial Era ───────────────────────────────────────
  {
    id: 'port-royal-1604',
    year: 1604,
    title: 'First European Settlement at Port-Royal',
    description:
      'The first European settlement north of Florida was established by Pierre de Monts and Samuel de Champlain at Port-Royal in Acadia (present-day Nova Scotia). Acadians began settling in the Maritime provinces.',
    lat: 44.74,
    lng: -65.51,
    category: 'settlement',
    keyPeople: ['Pierre de Monts', 'Samuel de Champlain'],
    testFacts: [
      'Port-Royal was the first permanent European settlement north of Florida.',
      'This began the Acadian presence in the Maritime provinces.',
    ],
  },
  {
    id: 'quebec-city-1608',
    year: 1608,
    title: 'Champlain Builds Fortress at Quebec City',
    description:
      'Samuel de Champlain built a fortress at what is now Quebec City, establishing a permanent French presence. He allied the colony with the Algonquin, Montagnais and Huron peoples.',
    lat: 46.81,
    lng: -71.21,
    category: 'settlement',
    keyPeople: ['Samuel de Champlain'],
    testFacts: [
      'Champlain is known as the "Father of New France."',
      'Quebec City was founded in 1608.',
    ],
  },
  {
    id: 'hbc-1670',
    year: 1670,
    title: "Hudson's Bay Company Trading Rights",
    description:
      "King Charles II of England granted the Hudson's Bay Company exclusive trading rights over the watershed draining into Hudson Bay. The Company competed with Montreal-based traders for the next 100 years.",
    lat: 56.0,
    lng: -85.0,
    category: 'political',
    keyPeople: ['King Charles II'],
    testFacts: [
      "The Hudson's Bay Company was granted exclusive trading rights in 1670.",
      'Voyageurs and coureurs des bois travelled by canoe forming alliances with First Nations.',
    ],
  },
  {
    id: 'frontenac-1690',
    year: 1690,
    title: 'Frontenac Refuses to Surrender Quebec',
    description:
      'Count Frontenac refused to surrender Quebec to the English, declaring: "My only reply will be from the mouths of my cannons!"',
    lat: 46.81,
    lng: -71.21,
    category: 'military',
    keyPeople: ['Count Frontenac'],
    testFacts: [
      'Frontenac\'s famous quote: "My only reply will be from the mouths of my cannons!"',
    ],
  },
  {
    id: 'halifax-assembly-1758',
    year: 1758,
    title: 'First Representative Assembly in Halifax',
    description:
      'The first representative assembly in Canada was elected in Halifax, Nova Scotia, beginning Canada\'s tradition of democratic institutions.',
    lat: 44.65,
    lng: -63.57,
    category: 'political',
    testFacts: [
      'Halifax, Nova Scotia, had the first elected assembly in Canada (1758).',
    ],
  },
  {
    id: 'plains-of-abraham-1759',
    year: 1759,
    title: 'Battle of the Plains of Abraham',
    description:
      'The British defeated the French in the Battle of the Plains of Abraham at Quebec City, marking the end of France\'s empire in America. Both commanders — Brigadier James Wolfe and Marquis de Montcalm — were killed.',
    lat: 46.8,
    lng: -71.22,
    category: 'military',
    keyPeople: ['Brigadier James Wolfe', 'Marquis de Montcalm'],
    testFacts: [
      'This battle ended France\'s empire in America.',
      'Both commanding generals were killed in the battle.',
      'The battle took place in 1759 at Quebec City.',
    ],
  },

  // ── British North America ─────────────────────────────────────────────
  {
    id: 'quebec-act-1774',
    year: 1774,
    title: 'Quebec Act',
    description:
      'The Quebec Act allowed religious freedom for Catholics, permitted them to hold public office, restored French civil law and maintained British criminal law. It is one of the constitutional foundations of Canada.',
    lat: 46.81,
    lng: -71.21,
    category: 'political',
    testFacts: [
      'The Quebec Act of 1774 allowed religious freedom for Catholics.',
      'It restored French civil law while maintaining British criminal law.',
    ],
  },
  {
    id: 'american-independence-1776',
    year: 1776,
    title: 'American Independence & Loyalist Migration',
    description:
      'The 13 British colonies declared independence and formed the United States. More than 40,000 Loyalists fled to Nova Scotia and Quebec, including Joseph Brant who led Loyalist Mohawk Indians into Canada and ~3,000 black Loyalists.',
    lat: 44.65,
    lng: -63.57,
    category: 'political',
    keyPeople: ['Joseph Brant'],
    testFacts: [
      'Over 40,000 Loyalists fled to Canada after American independence.',
      'About 3,000 black Loyalists came north seeking a better life.',
      'Joseph Brant led thousands of Loyalist Mohawk Indians into Canada.',
    ],
  },
  {
    id: 'constitutional-act-1791',
    year: 1791,
    title: 'Constitutional Act Divides Quebec',
    description:
      'The Constitutional Act divided the Province of Quebec into Upper Canada (Ontario) and Lower Canada (Quebec), granting legislative assemblies elected by the people for the first time.',
    lat: 46.81,
    lng: -71.21,
    category: 'political',
    testFacts: [
      'Upper Canada became Ontario; Lower Canada became Quebec.',
      'The Act granted the first elected legislative assemblies.',
      'The name "Canada" became official at this time.',
    ],
  },
  {
    id: 'abolition-1793',
    year: 1793,
    title: 'Upper Canada Moves Toward Abolition of Slavery',
    description:
      'Upper Canada, led by Lieutenant Governor John Graves Simcoe, became the first province in the British Empire to move toward abolition of slavery.',
    lat: 43.65,
    lng: -79.38,
    category: 'political',
    keyPeople: ['John Graves Simcoe'],
    testFacts: [
      'Upper Canada was the first province in the British Empire to move toward abolishing slavery.',
      'Simcoe was Upper Canada\'s first Lieutenant Governor and founded York (Toronto).',
    ],
  },
  {
    id: 'war-1812-detroit',
    year: 1812,
    title: 'War of 1812: Capture of Detroit',
    description:
      'The United States launched an invasion of Canada in June 1812. In July, Major-General Sir Isaac Brock, aided by Chief Tecumseh and his Shawnee warriors, captured Detroit.',
    lat: 42.33,
    lng: -83.05,
    category: 'military',
    keyPeople: ['Sir Isaac Brock', 'Chief Tecumseh'],
    testFacts: [
      'Brock captured Detroit with help from Chief Tecumseh.',
      'The War of 1812 began when the U.S. invaded Canada.',
    ],
  },
  {
    id: 'war-1812-queenston',
    year: 1812,
    title: 'Battle of Queenston Heights',
    description:
      'Sir Isaac Brock was killed while defending against an American attack at Queenston Heights near Niagara Falls. Despite his death, the Americans lost the battle.',
    lat: 43.16,
    lng: -79.05,
    category: 'military',
    keyPeople: ['Sir Isaac Brock'],
    testFacts: [
      'Brock was killed at Queenston Heights defending Canada.',
      'The Americans lost the battle despite killing Brock.',
    ],
  },
  {
    id: 'war-1812-chateauguay',
    year: 1813,
    title: 'Battle of Chateauguay',
    description:
      'Lieutenant-Colonel Charles de Salaberry and 460 soldiers, mostly French Canadiens, turned back 4,000 American invaders at Chateauguay, south of Montreal.',
    lat: 45.38,
    lng: -73.75,
    category: 'military',
    keyPeople: ['Charles de Salaberry'],
    testFacts: [
      'De Salaberry\'s 460 troops (mostly French Canadiens) defeated 4,000 Americans.',
    ],
  },
  {
    id: 'war-1812-york',
    year: 1813,
    title: 'Americans Burn York (Toronto)',
    description:
      'American forces burned Government House and the Parliament Buildings in York (now Toronto).',
    lat: 43.65,
    lng: -79.38,
    category: 'military',
    testFacts: [
      'Americans burned the Parliament Buildings in York (Toronto) in 1813.',
    ],
  },
  {
    id: 'war-1812-beaver-dams',
    year: 1813,
    title: 'Battle of Beaver Dams & Laura Secord',
    description:
      'Laura Secord walked 19 miles (30 km) to warn Lieutenant James FitzGibbon of a planned American attack. Her bravery contributed to the British victory at Beaver Dams.',
    lat: 43.12,
    lng: -79.22,
    category: 'military',
    keyPeople: ['Laura Secord', 'James FitzGibbon'],
    testFacts: [
      'Laura Secord walked 30 km to warn of an American attack.',
      'Her warning contributed to the British victory at Beaver Dams.',
    ],
  },
  {
    id: 'war-1812-washington',
    year: 1814,
    title: 'Burning of the White House',
    description:
      'Major-General Robert Ross led an expedition from Nova Scotia that burned down the White House and other public buildings in Washington, D.C., in retaliation for the burning of York.',
    lat: 38.9,
    lng: -77.04,
    category: 'military',
    keyPeople: ['Robert Ross'],
    testFacts: [
      'Canadian/British forces burned the White House in 1814 in retaliation for the burning of York.',
    ],
  },
  {
    id: 'rebellions-1837',
    year: 1837,
    endYear: 1838,
    title: 'Rebellions in Upper and Lower Canada',
    description:
      'Armed rebellions broke out in the area outside Montreal and in Toronto. The rebels did not have enough public support and were defeated by British troops and Canadian volunteers.',
    lat: 45.5,
    lng: -73.57,
    category: 'military',
    testFacts: [
      'Rebellions occurred in 1837-38 near Montreal and Toronto.',
      'The rebels were defeated due to lack of public support.',
    ],
  },
  {
    id: 'responsible-gov-1847',
    year: 1847,
    endYear: 1848,
    title: 'Nova Scotia Achieves Responsible Government',
    description:
      'Nova Scotia became the first British North American colony to attain full responsible government, through the efforts of reformer Joseph Howe.',
    lat: 44.65,
    lng: -63.57,
    category: 'political',
    keyPeople: ['Joseph Howe'],
    testFacts: [
      'Nova Scotia was the first colony in British North America to achieve responsible government.',
      'Joseph Howe championed responsible government in Nova Scotia.',
    ],
  },
  {
    id: 'responsible-gov-canada-1849',
    year: 1849,
    title: 'Responsible Government in the Canadas',
    description:
      'Lord Elgin introduced responsible government in United Canada. Sir Louis-Hippolyte La Fontaine became the first head of a responsible government (similar to a prime minister) in the Canadas.',
    lat: 45.5,
    lng: -73.57,
    category: 'political',
    keyPeople: ['Lord Elgin', 'Sir Louis-Hippolyte La Fontaine', 'Robert Baldwin'],
    testFacts: [
      'La Fontaine was the first leader of responsible government in the Canadas (1849).',
      'Responsible government means the government must resign if it loses a confidence vote.',
    ],
  },
  {
    id: 'ottawa-capital-1857',
    year: 1857,
    title: 'Queen Victoria Chooses Ottawa as Capital',
    description:
      'Queen Victoria chose Ottawa as the capital of Canada.',
    lat: 45.42,
    lng: -75.7,
    category: 'political',
    keyPeople: ['Queen Victoria'],
    testFacts: [
      'Ottawa was chosen as the capital by Queen Victoria in 1857.',
    ],
  },
  {
    id: 'confederation-conferences-1864',
    year: 1864,
    endYear: 1867,
    title: 'Confederation Conferences',
    description:
      'The Fathers of Confederation held conferences at Charlottetown and Quebec City to work toward establishing a new country. They created two levels of government: federal and provincial.',
    lat: 46.24,
    lng: -63.13,
    category: 'political',
    keyPeople: ['Fathers of Confederation'],
    testFacts: [
      'Confederation conferences were held at Charlottetown and Quebec City.',
      'The Fathers of Confederation created federal and provincial levels of government.',
    ],
  },

  // ── Confederation and Expansion ───────────────────────────────────────
  {
    id: 'confederation-1867',
    year: 1867,
    title: 'Confederation — Dominion of Canada Born',
    description:
      'The British North America Act united Ontario, Quebec, Nova Scotia and New Brunswick into the Dominion of Canada on July 1, 1867. Sir John A. Macdonald became the first Prime Minister.',
    lat: 45.42,
    lng: -75.7,
    category: 'political',
    keyPeople: [
      'Sir John A. Macdonald',
      'Sir George-Etienne Cartier',
      'Sir Leonard Tilley',
    ],
    testFacts: [
      'Canada was born on July 1, 1867.',
      'The four original provinces were Ontario, Quebec, Nova Scotia and New Brunswick.',
      'Sir John A. Macdonald was the first Prime Minister.',
      'Sir Leonard Tilley suggested the term "Dominion of Canada," inspired by Psalm 72.',
    ],
  },
  {
    id: 'red-river-1869',
    year: 1869,
    title: 'Red River Rebellion',
    description:
      'Louis Riel led an armed uprising and seized Fort Garry (the territorial capital) after the Métis of the Red River were not consulted on the transfer of land from the Hudson\'s Bay Company.',
    lat: 49.88,
    lng: -97.13,
    category: 'military',
    keyPeople: ['Louis Riel'],
    testFacts: [
      'Louis Riel led the Red River Rebellion in 1869.',
      'The Métis were not consulted about the transfer of their lands.',
      'Riel seized Fort Garry, the territorial capital.',
    ],
  },
  {
    id: 'manitoba-1870',
    year: 1870,
    title: 'Manitoba Created',
    description:
      'Manitoba was established as a new province after the Red River Rebellion. The Northwest Territories were also added to the Dominion.',
    lat: 49.88,
    lng: -97.13,
    category: 'political',
    keyPeople: ['Louis Riel'],
    testFacts: [
      'Manitoba was created in 1870 as a result of the Red River Rebellion.',
      'Louis Riel is considered the father of Manitoba.',
    ],
  },
  {
    id: 'bc-joins-1871',
    year: 1871,
    title: 'British Columbia Joins Confederation',
    description:
      'British Columbia joined Canada after Ottawa promised to build a railway to the West Coast.',
    lat: 48.43,
    lng: -123.37,
    category: 'political',
    testFacts: [
      'B.C. joined Confederation in 1871 on the promise of a transcontinental railway.',
    ],
  },
  {
    id: 'pei-joins-1873',
    year: 1873,
    title: 'Prince Edward Island Joins Confederation',
    description:
      'Prince Edward Island, the birthplace of Confederation, officially joined Canada.',
    lat: 46.24,
    lng: -63.13,
    category: 'political',
    testFacts: [
      'P.E.I. joined Confederation in 1873.',
      'P.E.I. is called the birthplace of Confederation.',
    ],
  },
  {
    id: 'nwmp-1873',
    year: 1873,
    title: 'North West Mounted Police Established',
    description:
      'Prime Minister Macdonald established the North West Mounted Police (NWMP) to pacify the West and assist in negotiations with the Indians. They founded Fort Calgary, Fort MacLeod, and Regina became their headquarters.',
    lat: 50.45,
    lng: -104.62,
    category: 'political',
    keyPeople: ['Sir John A. Macdonald'],
    testFacts: [
      'The NWMP (later RCMP) was established in 1873.',
      'Regina became the NWMP headquarters.',
      'The Mounties are one of Canada\'s best-known symbols.',
    ],
  },
  {
    id: 'northwest-rebellion-1885',
    year: 1885,
    title: 'North-West Rebellion',
    description:
      'A second Métis rebellion in present-day Saskatchewan led to Louis Riel\'s trial and execution for high treason, a decision strongly opposed in Quebec. Gabriel Dumont led the Métis military forces.',
    lat: 52.77,
    lng: -108.28,
    category: 'military',
    keyPeople: ['Louis Riel', 'Gabriel Dumont'],
    testFacts: [
      'Riel was tried and executed for high treason in 1885.',
      'His execution was strongly opposed in Quebec.',
      'Riel is seen by many as a hero and defender of Métis rights.',
    ],
  },
  {
    id: 'cpr-last-spike-1885',
    year: 1885,
    title: 'CPR Last Spike at Craigellachie',
    description:
      'Donald Smith (Lord Strathcona) drove the last spike of the Canadian Pacific Railway at Craigellachie, B.C. on November 7, 1885. The railway was built by European and Chinese labour and fulfilled a national dream.',
    lat: 50.96,
    lng: -118.98,
    category: 'infrastructure',
    keyPeople: ['Donald Smith (Lord Strathcona)'],
    testFacts: [
      'The CPR was completed on November 7, 1885, at Craigellachie, B.C.',
      'Donald Smith drove the last spike.',
      'The railway was built by British, American, European and Chinese labour.',
      'After completion, Chinese workers were subject to the discriminatory Head Tax.',
    ],
  },
  {
    id: 'banff-1885',
    year: 1885,
    title: 'Banff National Park Established',
    description:
      'Banff National Park was established in Alberta, becoming Canada\'s first national park.',
    lat: 51.18,
    lng: -115.57,
    category: 'cultural',
    testFacts: [
      'Banff was established in 1885 as Canada\'s first national park.',
    ],
  },
  {
    id: 'yukon-created-1898',
    year: 1898,
    title: 'Yukon Territory Created',
    description:
      'The Yukon Territory was created during the Gold Rush of the 1890s, when thousands of miners flooded the region.',
    lat: 60.72,
    lng: -135.06,
    category: 'political',
    testFacts: [
      'The Yukon was created in 1898 during the Gold Rush.',
    ],
  },
  {
    id: 'boer-war-1899',
    year: 1899,
    endYear: 1902,
    title: 'Boer War — Canadians Volunteer',
    description:
      'Over 7,000 Canadians volunteered to fight in the South African War (Boer War) and over 260 died. Canadians took part in the battles of Paardeberg and Lillefontein.',
    lat: -31.75,
    lng: 25.65,
    category: 'military',
    testFacts: [
      'Over 7,000 Canadians volunteered for the Boer War; over 260 died.',
    ],
  },
  {
    id: 'ab-sk-created-1905',
    year: 1905,
    title: 'Alberta and Saskatchewan Created',
    description:
      'Alberta and Saskatchewan were carved out of the Northwest Territories as new provinces during the western settlement boom.',
    lat: 52.0,
    lng: -109.0,
    category: 'political',
    testFacts: [
      'Alberta and Saskatchewan became provinces in 1905.',
    ],
  },

  // ── First World War ───────────────────────────────────────────────────
  {
    id: 'wwi-begins-1914',
    year: 1914,
    endYear: 1918,
    title: 'Canada Enters World War I',
    description:
      'When Britain declared war on Germany, Ottawa formed the Canadian Expeditionary Force. More than 600,000 Canadians served out of a total population of 8 million. In total, 60,000 Canadians were killed and 170,000 wounded.',
    lat: 50.62,
    lng: 3.08,
    category: 'military',
    testFacts: [
      'More than 600,000 Canadians served in WWI.',
      '60,000 Canadians were killed and 170,000 wounded.',
    ],
  },
  {
    id: 'women-vote-manitoba-1916',
    year: 1916,
    title: 'Manitoba Grants Women the Vote',
    description:
      'Manitoba became the first province to grant voting rights to women.',
    lat: 49.88,
    lng: -97.13,
    category: 'political',
    testFacts: [
      'Manitoba was the first province to give women the vote (1916).',
    ],
  },
  {
    id: 'vimy-ridge-1917',
    year: 1917,
    title: 'Battle of Vimy Ridge',
    description:
      'The Canadian Corps captured Vimy Ridge on April 9, 1917, with 10,000 killed or wounded. Canadians earned the reputation as "shock troops of the British Empire." One officer said he witnessed "the birth of a nation."',
    lat: 50.38,
    lng: 2.77,
    category: 'military',
    testFacts: [
      'Vimy Ridge was captured on April 9, 1917.',
      '10,000 Canadians were killed or wounded at Vimy Ridge.',
      'Canadians were called "shock troops of the British Empire."',
      'April 9 is celebrated as Vimy Day.',
    ],
  },
  {
    id: 'women-federal-vote-1917',
    year: 1917,
    endYear: 1918,
    title: 'Women Get Federal Vote',
    description:
      'The federal government of Sir Robert Borden gave women the right to vote in federal elections — first to nurses at the battle front, then women related to servicemen, and by 1918 most Canadian female citizens aged 21+.',
    lat: 45.42,
    lng: -75.7,
    category: 'political',
    keyPeople: ['Sir Robert Borden', 'Dr. Emily Stowe'],
    testFacts: [
      'In 1917, nurses and women related to servicemen got the federal vote.',
      'By 1918, most Canadian women aged 21+ could vote federally.',
      'Dr. Emily Stowe founded the women\'s suffrage movement in Canada.',
    ],
  },
  {
    id: 'battle-amiens-1918',
    year: 1918,
    title: 'Battle of Amiens',
    description:
      'The Battle of Amiens on August 8, 1918 was called "the black day of the German Army" by Germany. Under General Sir Arthur Currie, the Canadian Corps advanced in the last hundred days of the war.',
    lat: 49.89,
    lng: 2.3,
    category: 'military',
    keyPeople: ['General Sir Arthur Currie'],
    testFacts: [
      'Amiens was called "the black day of the German Army."',
      'General Sir Arthur Currie was Canada\'s greatest soldier.',
    ],
  },

  // ── Between the Wars ─────────────────────────────────────────────────
  {
    id: 'group-of-seven-1920',
    year: 1920,
    title: 'Group of Seven Founded',
    description:
      'The Group of Seven was founded, developing a distinctive style of painting to capture Canada\'s rugged wilderness landscapes.',
    lat: 43.65,
    lng: -79.38,
    category: 'cultural',
    testFacts: [
      'The Group of Seven was founded in 1920.',
      'They developed a painting style to capture Canadian wilderness.',
    ],
  },
  {
    id: 'peace-tower-1927',
    year: 1927,
    title: 'Peace Tower Completed',
    description:
      'The Peace Tower on Parliament Hill was completed in memory of the First World War. The Memorial Chamber within contains the Books of Remembrance.',
    lat: 45.42,
    lng: -75.7,
    category: 'infrastructure',
    testFacts: [
      'The Peace Tower was completed in 1927 in memory of WWI.',
      'The Memorial Chamber contains the Books of Remembrance.',
    ],
  },
  {
    id: 'great-depression-1929',
    year: 1929,
    endYear: 1939,
    title: 'Stock Market Crash & Great Depression',
    description:
      'The stock market crash of 1929 led to the Great Depression. Unemployment reached 27% in 1933. The Bank of Canada was created in 1934 to manage the money supply.',
    lat: 45.5,
    lng: -73.57,
    category: 'political',
    testFacts: [
      'Unemployment reached 27% in 1933.',
      'The Bank of Canada was created in 1934.',
    ],
  },

  // ── Second World War ──────────────────────────────────────────────────
  {
    id: 'wwii-begins-1939',
    year: 1939,
    endYear: 1945,
    title: 'Canada Enters World War II',
    description:
      'Canada joined the Allies when Hitler invaded Poland. More than one million Canadians and Newfoundlanders served; 44,000 were killed.',
    lat: 45.42,
    lng: -75.7,
    category: 'military',
    testFacts: [
      'Over 1 million Canadians served in WWII; 44,000 were killed.',
      'Canada had the third-largest navy in the world by war\'s end.',
    ],
  },
  {
    id: 'hong-kong-1941',
    year: 1941,
    title: 'Defence of Hong Kong',
    description:
      'Canadians fought bravely in the unsuccessful defence of Hong Kong from attack by Imperial Japan.',
    lat: 22.32,
    lng: 114.17,
    category: 'military',
    testFacts: [
      'Canadians fought in the unsuccessful defence of Hong Kong in 1941.',
    ],
  },
  {
    id: 'dieppe-1942',
    year: 1942,
    title: 'Raid on Dieppe',
    description:
      'A failed Canadian raid on Nazi-controlled Dieppe on the coast of France. The lessons learned contributed to the success of D-Day two years later.',
    lat: 49.92,
    lng: 1.08,
    category: 'military',
    testFacts: [
      'The Dieppe raid of 1942 was a costly failure but provided lessons for D-Day.',
    ],
  },
  {
    id: 'juno-beach-1944',
    year: 1944,
    title: 'D-Day: Canadians Storm Juno Beach',
    description:
      'On June 6, 1944 (D-Day), 15,000 Canadian troops stormed and captured Juno Beach from the German Army in Normandy. Approximately one in ten Allied soldiers on D-Day was Canadian.',
    lat: 49.34,
    lng: -0.46,
    category: 'military',
    testFacts: [
      'D-Day was June 6, 1944.',
      '15,000 Canadian troops stormed Juno Beach.',
      'Approximately 1 in 10 Allied soldiers on D-Day was Canadian.',
    ],
  },
  {
    id: 'liberation-netherlands-1945',
    year: 1944,
    endYear: 1945,
    title: 'Liberation of the Netherlands',
    description:
      'The Canadian Army liberated the Netherlands in 1944-45 and helped force the German surrender on May 8, 1945.',
    lat: 52.09,
    lng: 5.12,
    category: 'military',
    testFacts: [
      'Canada liberated the Netherlands in 1944-45.',
      'The Dutch send tulips to Ottawa each year in gratitude.',
    ],
  },

  // ── Modern Canada ─────────────────────────────────────────────────────
  {
    id: 'oil-alberta-1947',
    year: 1947,
    title: 'Discovery of Oil in Alberta',
    description:
      'The discovery of oil in Alberta in 1947 began Canada\'s modern energy industry and transformed Alberta\'s economy.',
    lat: 53.54,
    lng: -113.49,
    category: 'infrastructure',
    testFacts: [
      'Oil was discovered in Alberta in 1947, beginning Canada\'s modern energy industry.',
    ],
  },
  {
    id: 'newfoundland-joins-1949',
    year: 1949,
    title: 'Newfoundland and Labrador Joins Confederation',
    description:
      'Newfoundland and Labrador became the last province to join Confederation, the oldest colony of the British Empire.',
    lat: 47.56,
    lng: -52.71,
    category: 'political',
    testFacts: [
      'Newfoundland joined Confederation in 1949, the last province to join.',
    ],
  },
  {
    id: 'korean-war-1950',
    year: 1950,
    endYear: 1953,
    title: 'Korean War',
    description:
      'Canada participated in the Korean War under the United Nations. 500 Canadians died and 1,000 were wounded.',
    lat: 37.57,
    lng: 126.98,
    category: 'military',
    testFacts: [
      '500 Canadians died and 1,000 were wounded in the Korean War.',
    ],
  },
  {
    id: 'aboriginal-vote-1960',
    year: 1960,
    title: 'Indigenous People Granted the Vote',
    description:
      'Indigenous people were granted the right to vote in federal elections, extending the franchise to all adult Canadians.',
    lat: 45.42,
    lng: -75.7,
    category: 'political',
    testFacts: [
      'Indigenous people gained the federal vote in 1960.',
    ],
  },
  {
    id: 'new-flag-1965',
    year: 1965,
    title: 'New Canadian Flag Raised',
    description:
      'The new red-white-red Canadian flag with the maple leaf was raised for the first time. The red-white-red pattern comes from the flag of the Royal Military College, Kingston, founded in 1876.',
    lat: 45.42,
    lng: -75.7,
    category: 'cultural',
    testFacts: [
      'The current Canadian flag was first raised in 1965.',
      'The red-white-red pattern comes from the Royal Military College flag.',
      'Red and white were confirmed as national colours in 1921.',
    ],
  },
  {
    id: 'order-of-canada-1967',
    year: 1967,
    title: 'Order of Canada Established',
    description:
      'The Order of Canada was established in 1967, the centennial of Confederation, as Canada\'s own honours system.',
    lat: 45.42,
    lng: -75.7,
    category: 'political',
    testFacts: [
      'The Order of Canada was established in 1967 (centennial of Confederation).',
    ],
  },
  {
    id: 'official-languages-1969',
    year: 1969,
    title: 'Official Languages Act',
    description:
      'Parliament passed the Official Languages Act, guaranteeing French and English services in the federal government across Canada.',
    lat: 45.42,
    lng: -75.7,
    category: 'political',
    testFacts: [
      'The Official Languages Act (1969) guarantees French and English services in the federal government.',
    ],
  },
  {
    id: 'summit-series-1972',
    year: 1972,
    title: 'Canada-Soviet Summit Series',
    description:
      'Paul Henderson scored the winning goal in the Canada-Soviet Summit Series, often called "the goal heard around the world."',
    lat: 43.65,
    lng: -79.38,
    category: 'cultural',
    keyPeople: ['Paul Henderson'],
    testFacts: [
      'Paul Henderson scored "the goal heard around the world" in 1972.',
    ],
  },
  {
    id: 'terry-fox-1980',
    year: 1980,
    title: 'Terry Fox — Marathon of Hope',
    description:
      'Terry Fox, who lost his right leg to cancer at age 18, began a cross-country run from St. John\'s, Newfoundland to raise money for cancer research. He became a national hero.',
    lat: 47.56,
    lng: -52.71,
    category: 'cultural',
    keyPeople: ['Terry Fox'],
    testFacts: [
      'Terry Fox began the Marathon of Hope in 1980.',
      'He lost his right leg to cancer at age 18.',
      'His legacy continues through yearly fundraising events.',
    ],
  },
  {
    id: 'o-canada-anthem-1980',
    year: 1980,
    title: 'O Canada Proclaimed National Anthem',
    description:
      'O Canada was officially proclaimed as the national anthem. It was first sung in Quebec City in 1880, a full century earlier.',
    lat: 45.42,
    lng: -75.7,
    category: 'cultural',
    testFacts: [
      'O Canada was proclaimed the national anthem in 1980.',
      'It was first sung in Quebec City in 1880.',
    ],
  },
  {
    id: 'constitution-1982',
    year: 1982,
    title: 'Constitution Amended — Charter of Rights',
    description:
      'The Constitution was amended and the Canadian Charter of Rights and Freedoms was entrenched, beginning with the words: "Whereas Canada is founded upon principles that recognize the supremacy of God and the rule of law."',
    lat: 45.42,
    lng: -75.7,
    category: 'political',
    keyPeople: ['Queen Elizabeth II'],
    testFacts: [
      'The Constitution was amended in 1982.',
      'The Charter of Rights and Freedoms was entrenched.',
      'Quebec did not agree to the amendment.',
      'Before 1982, July 1 was called "Dominion Day."',
    ],
  },
  {
    id: 'rick-hansen-1985',
    year: 1985,
    title: 'Rick Hansen — Man in Motion World Tour',
    description:
      'Rick Hansen circled the globe in a wheelchair to raise funds for spinal cord research.',
    lat: 49.28,
    lng: -123.12,
    category: 'cultural',
    keyPeople: ['Rick Hansen'],
    testFacts: [
      'Rick Hansen wheeled around the world in 1985 for spinal cord research.',
    ],
  },
  {
    id: 'free-trade-1988',
    year: 1988,
    title: 'Canada-U.S. Free Trade Agreement',
    description:
      'Canada enacted free trade with the United States, later expanded to include Mexico through NAFTA in 1994.',
    lat: 45.42,
    lng: -75.7,
    category: 'political',
    testFacts: [
      'Canada enacted free trade with the U.S. in 1988.',
      'NAFTA, including Mexico, followed in 1994.',
    ],
  },
  {
    id: 'nunavut-1999',
    year: 1999,
    title: 'Nunavut Created',
    description:
      'Nunavut, meaning "our land" in Inuktitut, was established from the eastern part of the Northwest Territories with its capital at Iqaluit. The population is about 85% Inuit.',
    lat: 63.75,
    lng: -68.52,
    category: 'political',
    testFacts: [
      'Nunavut was created in 1999.',
      '"Nunavut" means "our land" in Inuktitut.',
      'The capital is Iqaluit, formerly Frobisher Bay.',
      'The population is about 85% Inuit.',
    ],
  },
];
