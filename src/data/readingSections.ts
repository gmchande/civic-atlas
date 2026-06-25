import type { ReadingSection } from '../types';

const HISTORY_URL =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada/read-online/canadas-history.html';
const WHO_WE_ARE_URL =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada/read-online/who-are-canadians.html';
const MODERN_CANADA_URL =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada/read-online/modern-canada.html';
const REGIONS_URL =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada/read-online/canadas-regions.html';

export const readingSections: ReadingSection[] = [
  {
    id: 'before-europeans',
    title: 'Before Europeans',
    chapter: 'who-we-are',
    sourceTitle: 'Who We Are',
    sourceUrl: WHO_WE_ARE_URL,
    guideLocation: "Who We Are > Aboriginal Peoples; Canada's History > Aboriginal Peoples",
    mapYear: 1608,
    eventIds: [],
    guideSummary:
      'Indigenous peoples were already living across the land long before European explorers arrived.',
    plainExplanation:
      'Start here so the map does not feel like empty land waiting for European labels. First Nations, Inuit, and Métis peoples are central to the story of Canada. The boundary map begins later because this app is showing colonial and constitutional changes, not a complete map of Indigenous homelands.',
    mapFocus:
      'Use the first map as context, not as a full picture of who was already here.',
    testMemory: [
      'Indigenous peoples were here long before European arrival.',
      'The guide names First Nations, Inuit, and Métis peoples.',
      'The app boundary map is not a map of all Indigenous territories.',
    ],
    terms: [
      {
        term: 'First Nations',
        meaning: 'Indigenous peoples who are not Inuit or Métis, with many distinct nations and communities.',
      },
      {
        term: 'Inuit',
        meaning: 'Indigenous peoples whose homeland includes Arctic regions across northern Canada.',
      },
      {
        term: 'Métis',
        meaning: 'A distinct Indigenous people with mixed Indigenous and European ancestry, culture, and political history.',
      },
    ],
    confusionBuster:
      'A colonial boundary map is not the same thing as a map of Indigenous presence.',
  },
  {
    id: 'first-europeans-and-canada-name',
    title: 'First Europeans and the Name Canada',
    chapter: 'canadas-history',
    sourceTitle: "Canada's History",
    sourceUrl: HISTORY_URL,
    guideLocation: "Canada's History > The First Europeans; Exploring a River, Naming Canada",
    year: 1000,
    endYear: 1542,
    mapYear: 1608,
    eventIds: ['vikings-lanse', 'cabot-1497', 'cartier-1534'],
    guideSummary:
      "The guide moves from Norse contact to Atlantic mapping, then to Cartier's St. Lawrence voyages and the word kanata.",
    plainExplanation:
      "This is the contact-and-naming step before New France. Vikings reached the Atlantic north about 1,000 years ago, Cabot mapped the Atlantic shore in 1497, and Cartier's St. Lawrence voyages helped put the name Canada on European maps.",
    mapFocus:
      "Follow the markers from Newfoundland and Labrador to the St. Lawrence. The boundary layer is later, but the highlighted events show the earlier route into the story.",
    testMemory: [
      "L'Anse aux Meadows is connected with Vikings about 1,000 years ago.",
      "John Cabot mapped Canada's Atlantic shore in 1497.",
      'Jacques Cartier explored the St. Lawrence River.',
      'Kanata meant village and became Canada.',
    ],
    terms: [
      {
        term: 'Kanata',
        meaning: 'An Iroquoian word meaning village; it is the source of the name Canada.',
      },
      {
        term: 'St. Lawrence River',
        meaning: 'The river route that becomes central to French settlement and early Canada.',
      },
    ],
    confusionBuster:
      'European contact starts before permanent French settlement. New France comes next.',
  },
  {
    id: 'new-france-and-acadia',
    title: 'New France and Acadia',
    chapter: 'canadas-history',
    sourceTitle: "Canada's History",
    sourceUrl: HISTORY_URL,
    guideLocation: "Canada's History > Royal New France",
    year: 1604,
    endYear: 1608,
    mapYear: 1608,
    eventIds: ['port-royal-1604', 'quebec-city-1608'],
    guideSummary:
      'French settlement begins in Acadia and then takes root at Quebec City on the St. Lawrence.',
    plainExplanation:
      'French Canada starts in two places worth keeping separate: Acadia on the Atlantic, and Quebec City on the St. Lawrence. Later names like Quebec, Canada, Acadia, and French Canada make more sense once those early centres are separate in your head.',
    mapFocus:
      'Look east for Port-Royal in present-day Nova Scotia, then follow the St. Lawrence to Quebec City.',
    testMemory: [
      'Port-Royal begins the Acadian presence in 1604.',
      'Samuel de Champlain builds Quebec City in 1608.',
      'New France grew along the St. Lawrence River.',
    ],
    terms: [
      {
        term: 'New France',
        meaning: "France's North American colony centred on the St. Lawrence and interior trade routes.",
      },
      {
        term: 'Acadia',
        meaning: 'French settlement region in the Atlantic area, especially present-day Nova Scotia and nearby lands.',
      },
    ],
    confusionBuster:
      'New France is not modern Canada. It is a French colony that later gets reorganized under British rule.',
  },
  {
    id: 'hudsons-bay-and-colonial-competition',
    title: "Hudson's Bay and the Fur-Trade Rivals",
    chapter: 'canadas-history',
    sourceTitle: "Canada's History",
    sourceUrl: HISTORY_URL,
    guideLocation: "Canada's History > Struggle for a Continent",
    year: 1670,
    endYear: 1759,
    mapYear: 1670,
    eventIds: ['hbc-1670'],
    guideSummary:
      "The Hudson's Bay Company receives trading rights over the Hudson Bay watershed while French and British interests compete across North America.",
    plainExplanation:
      'Canada does not grow only from the St. Lawrence. A huge northern and western fur-trade network also matters. The Hudson Bay watershed helps explain why western and northern Canada later enter the story through company lands, trading posts, and Indigenous alliances.',
    mapFocus:
      "Notice how Rupert's Land sits north and west of New France, creating another major path into the future map of Canada.",
    testMemory: [
      "The Hudson's Bay Company charter dates to 1670.",
      'Voyageurs and coureurs des bois connected trade routes through the interior.',
      'The fur trade pushed Canada west and north.',
    ],
    terms: [
      {
        term: "Rupert's Land",
        meaning: "The Hudson's Bay Company trading territory draining into Hudson Bay.",
      },
      {
        term: 'Voyageurs',
        meaning: 'Canoe-travelling fur traders who moved goods and knowledge through the interior.',
      },
    ],
  },
  {
    id: 'province-of-quebec-after-conquest',
    title: 'Province of Quebec After Conquest',
    chapter: 'canadas-history',
    sourceTitle: "Canada's History",
    sourceUrl: HISTORY_URL,
    guideLocation: "Canada's History > The Province of Quebec",
    year: 1759,
    endYear: 1763,
    mapYear: 1763,
    eventIds: ['plains-of-abraham-1759'],
    guideSummary:
      'After Britain defeats France, former French Canada is reorganized as the Province of Quebec.',
    plainExplanation:
      "Here the name 'Quebec' flips from a French settlement to a British colony. French-speaking Catholic Canadiens remain in place, but the empire ruling the map has changed. That is why the guide moves from New France into British North America here.",
    mapFocus:
      'Look at the St. Lawrence colony and compare it with the much larger French and British claims around it.',
    testMemory: [
      'The Battle of the Plains of Abraham happens at Quebec City in 1759.',
      "The battle marks the end of France's empire in America.",
      'Britain renames the colony the Province of Quebec after the war.',
    ],
    terms: [
      {
        term: 'Province of Quebec',
        meaning: 'The British colony created after the conquest of New France.',
      },
      {
        term: 'Canadiens',
        meaning: 'French-speaking Catholic inhabitants of the former French colony.',
      },
    ],
    confusionBuster:
      'Province of Quebec in this period is not the same thing as the modern province of Quebec.',
  },
  {
    id: 'quebec-act',
    title: 'The Quebec Act',
    chapter: 'canadas-history',
    sourceTitle: "Canada's History",
    sourceUrl: HISTORY_URL,
    guideLocation: "Canada's History > A Tradition of Accommodation",
    year: 1774,
    mapYear: 1774,
    eventIds: ['quebec-act-1774'],
    guideSummary:
      'The Quebec Act protects major French Catholic and civil-law institutions while keeping British criminal law.',
    plainExplanation:
      'The guide treats this as a foundation of Canadian accommodation. Britain governs the colony, but it adjusts British institutions to the French-speaking Catholic majority instead of simply trying to erase them.',
    mapFocus:
      'Compare 1763 and 1774: the Province of Quebec expands while its legal and religious settlement becomes clearer.',
    testMemory: [
      'Quebec Act: Catholic religious freedom.',
      'Quebec Act: French civil law restored.',
      'Quebec Act: British criminal law maintained.',
    ],
    terms: [
      {
        term: 'Quebec Act',
        meaning: 'The 1774 act that protected major French Canadian rights under British rule.',
      },
      {
        term: 'Civil law',
        meaning: 'Law for private matters such as property and family relations.',
      },
    ],
    confusionBuster:
      'This is still the British Province of Quebec, not the present-day provincial map.',
  },
  {
    id: 'loyalists-and-two-canadas',
    title: 'Loyalists and the Two Canadas',
    chapter: 'canadas-history',
    sourceTitle: "Canada's History",
    sourceUrl: HISTORY_URL,
    guideLocation: "Canada's History > United Empire Loyalists; The Beginnings of Democracy",
    year: 1776,
    endYear: 1791,
    mapYear: 1791,
    eventIds: ['american-independence-1776', 'constitutional-act-1791'],
    guideSummary:
      'After the American Revolution, Loyalists move north and the Constitutional Act divides Quebec into Upper Canada and Lower Canada.',
    plainExplanation:
      'This section explains why two Canadas appear before modern Canada exists. Loyalist settlement strengthens English-speaking institutions in the west, while the French-speaking St. Lawrence colony remains centred in the east.',
    mapFocus:
      'Upper Canada is west and upriver; Lower Canada is east and downriver along the St. Lawrence.',
    testMemory: [
      'More than 40,000 Loyalists came north after American independence.',
      'Upper Canada later becomes Ontario.',
      'Lower Canada later becomes Quebec.',
      'The name Canada becomes official in this period.',
    ],
    terms: [
      {
        term: 'Upper Canada',
        meaning: 'The western colony that later becomes Ontario.',
      },
      {
        term: 'Lower Canada',
        meaning: 'The eastern St. Lawrence colony that later becomes Quebec.',
      },
      {
        term: 'Loyalists',
        meaning: 'People loyal to the Crown who moved north after the American Revolution.',
      },
    ],
    confusionBuster:
      'Upper and Lower are river terms, not simple north-south labels.',
  },
  {
    id: 'war-of-1812',
    title: 'War of 1812',
    chapter: 'canadas-history',
    sourceTitle: "Canada's History",
    sourceUrl: HISTORY_URL,
    guideLocation: "Canada's History > The War of 1812: The Fight for Canada",
    year: 1812,
    endYear: 1814,
    mapYear: 1791,
    eventIds: [
      'war-1812-detroit',
      'war-1812-queenston',
      'war-1812-chateauguay',
      'war-1812-york',
      'war-1812-beaver-dams',
      'war-1812-washington',
    ],
    guideSummary:
      'The United States invades, British troops, First Nations, and Canadian volunteers defend Canada, and the invasion fails.',
    plainExplanation:
      'This section turns a list of battles into one simple point: the American attempt to conquer Canada failed. The guide uses the war to explain why Canada stayed separate from the United States and why the border matters.',
    mapFocus:
      'Use the Upper Canada and Lower Canada map as the closest boundary context, then follow the battle markers around Detroit, Niagara, Montreal, Toronto, and Washington.',
    testMemory: [
      'The United States invaded Canada in 1812.',
      'Sir Isaac Brock and Chief Tecumseh are key figures.',
      'Laura Secord warned British forces before Beaver Dams.',
      'The present Canada-U.S. border is partly an outcome of the war.',
    ],
    terms: [
      {
        term: 'War of 1812',
        meaning: 'The war in which the United States tried and failed to conquer Canada.',
      },
      {
        term: 'Chief Tecumseh',
        meaning: 'A Shawnee leader who supported British forces against the American invasion.',
      },
    ],
    confusionBuster:
      'The map shows the closest colonial boundary context. The Province of Canada does not exist yet.',
  },
  {
    id: 'province-of-canada-and-responsible-government',
    title: 'Province of Canada and Responsible Government',
    chapter: 'canadas-history',
    sourceTitle: "Canada's History",
    sourceUrl: HISTORY_URL,
    guideLocation: "Canada's History > Rebellions of 1837-38; Responsible Government",
    year: 1837,
    endYear: 1849,
    mapYear: 1841,
    eventIds: ['rebellions-1837'],
    guideSummary:
      'After the rebellions, Upper and Lower Canada are merged into the Province of Canada while reformers push toward responsible government.',
    plainExplanation:
      'This is the big naming trap. The Province of Canada is not the modern country. It is one pre-Confederation colony made from the former Upper and Lower Canada, often described as Canada West and Canada East.',
    mapFocus:
      'Look for one merged Province of Canada with two remembered halves: Canada West and Canada East.',
    testMemory: [
      'The rebellions happen in 1837-38 near Montreal and Toronto.',
      'Upper and Lower Canada merge into the Province of Canada in 1840-41.',
      'Canada West later becomes Ontario.',
      'Canada East later becomes Quebec.',
      'Responsible government means the government needs support from elected representatives.',
    ],
    terms: [
      {
        term: 'Province of Canada',
        meaning: 'The pre-Confederation colony made by merging Upper and Lower Canada.',
      },
      {
        term: 'Canada West',
        meaning: 'Former Upper Canada; later Ontario.',
      },
      {
        term: 'Canada East',
        meaning: 'Former Lower Canada; later Quebec.',
      },
    ],
    confusionBuster:
      'Province of Canada is not modern Canada. Modern Canada begins at Confederation in 1867.',
  },
  {
    id: 'confederation',
    title: 'Confederation',
    chapter: 'canadas-history',
    sourceTitle: "Canada's History",
    sourceUrl: HISTORY_URL,
    guideLocation: "Canada's History > Confederation",
    year: 1864,
    endYear: 1867,
    mapYear: 1867,
    eventIds: ['confederation-conferences-1864', 'confederation-1867'],
    guideSummary:
      'Representatives from Nova Scotia, New Brunswick, and the Province of Canada work together to form the Dominion of Canada.',
    plainExplanation:
      'Confederation creates a new country, but not the full modern map. The old Province of Canada splits into Ontario and Quebec, and those two join Nova Scotia and New Brunswick as the four original provinces.',
    mapFocus:
      'Look for only four provinces inside the new Dominion: Ontario, Quebec, Nova Scotia, and New Brunswick.',
    testMemory: [
      'Canada is born on July 1, 1867.',
      'The four original provinces are Ontario, Quebec, Nova Scotia, and New Brunswick.',
      'Sir John A. Macdonald becomes the first Prime Minister.',
      'Not PEI, not Newfoundland, and not the West yet.',
    ],
    terms: [
      {
        term: 'Confederation',
        meaning: 'The 1867 union that created the Dominion of Canada.',
      },
      {
        term: 'Dominion of Canada',
        meaning: 'The constitutional name used for the new country created in 1867.',
      },
      {
        term: 'British North America Act',
        meaning: 'The 1867 act that created the Canadian federation.',
      },
    ],
    confusionBuster:
      'Confederation starts Canada as a country, but the map is still much smaller than Canada today.',
  },
  {
    id: 'manitoba-and-northwest',
    title: 'Manitoba and the Northwest',
    chapter: 'canadas-history',
    sourceTitle: "Canada's History",
    sourceUrl: HISTORY_URL,
    guideLocation: "Canada's History > Expansion of the Dominion; Challenge in the West",
    year: 1869,
    endYear: 1870,
    mapYear: 1870,
    eventIds: ['red-river-1869', 'manitoba-1870'],
    guideSummary:
      "Canada takes over the northwest from the Hudson's Bay Company, the Red River conflict follows, and Manitoba becomes a province.",
    plainExplanation:
      'The West does not simply appear peacefully as a blank space on the map. The Métis of Red River were not consulted, Louis Riel led resistance, and Manitoba entered Canada as a small new province beside a huge Northwest Territories.',
    mapFocus:
      'Notice how tiny early Manitoba is compared with the enormous Northwest Territories around it.',
    testMemory: [
      'Manitoba is created in 1870.',
      'Louis Riel is central to Manitoba entering Confederation.',
      'The Northwest Territories are added to Canada in 1870.',
    ],
    terms: [
      {
        term: 'Métis',
        meaning: 'A people with mixed Indigenous and European ancestry and a distinct culture and political history.',
      },
      {
        term: 'Red River',
        meaning: 'The Manitoba-area community and conflict connected with Louis Riel.',
      },
    ],
    confusionBuster:
      'The West joins through conflict, negotiation, company land transfer, and new territorial administration.',
  },
  {
    id: 'british-columbia-and-railway',
    title: 'British Columbia and the Railway Promise',
    chapter: 'canadas-history',
    sourceTitle: "Canada's History",
    sourceUrl: HISTORY_URL,
    guideLocation: "Canada's History > A Railway from Sea to Sea",
    year: 1871,
    endYear: 1885,
    mapYear: 1871,
    eventIds: ['bc-joins-1871'],
    guideSummary:
      'British Columbia joins Canada after Ottawa promises a railway to the West Coast.',
    plainExplanation:
      'British Columbia is the Pacific piece of Confederation, and the railway promise is the key reason it joins. The later CPR last spike makes that promise visible as a coast-to-coast connection.',
    mapFocus:
      'Look at the gap between the eastern provinces and British Columbia. The promised railway is what is supposed to bind that distance.',
    testMemory: [
      'British Columbia joins Confederation in 1871.',
      'British Columbia joined because Ottawa promised a railway to the coast.',
      'The CPR last spike is driven in 1885.',
    ],
    terms: [
      {
        term: 'Transcontinental railway',
        meaning: 'A railway link across the continent connecting British Columbia with eastern Canada.',
      },
      {
        term: 'CPR',
        meaning: 'Canadian Pacific Railway, completed at Craigellachie, B.C. in 1885.',
      },
    ],
    confusionBuster:
      'B.C. joins before the railway is completed. The promise comes first; the last spike comes later.',
  },
  {
    id: 'prince-edward-island',
    title: 'Prince Edward Island',
    chapter: 'canadas-history',
    sourceTitle: "Canada's History",
    sourceUrl: HISTORY_URL,
    guideLocation: "Canada's History > Expansion of the Dominion",
    year: 1873,
    mapYear: 1873,
    eventIds: ['pei-joins-1873'],
    guideSummary:
      'Prince Edward Island joins Canada after Confederation, even though Charlottetown is remembered as a birthplace of Confederation.',
    plainExplanation:
      'This is a perfect test trap. PEI matters early because Confederation talks happened in Charlottetown, but it does not join the new country until 1873.',
    mapFocus:
      'Look at the Atlantic region and add PEI after the original four provinces are already in place.',
    testMemory: [
      'PEI joins Confederation in 1873.',
      'Charlottetown is remembered as a birthplace of Confederation.',
      'PEI is not one of the four original provinces.',
    ],
    terms: [
      {
        term: 'Birthplace of Confederation',
        meaning: 'A common description of PEI because early Confederation talks happened in Charlottetown.',
      },
      {
        term: 'Charlottetown Conference',
        meaning: 'The 1864 meeting that helped begin the Confederation process.',
      },
    ],
    confusionBuster:
      'Birthplace of Confederation does not mean original province.',
  },
  {
    id: 'north-and-prairies-fill-in',
    title: 'Yukon, Alberta, and Saskatchewan',
    chapter: 'canadas-history',
    sourceTitle: "Canada's History",
    sourceUrl: HISTORY_URL,
    guideLocation: "Canada's History > Expansion of the Dominion; Challenge in the West; Moving Westward",
    year: 1873,
    endYear: 1905,
    mapYear: 1905,
    eventIds: ['nwmp-1873', 'northwest-rebellion-1885', 'cpr-last-spike-1885', 'yukon-created-1898', 'ab-sk-created-1905'],
    guideSummary:
      'After the first western steps, the North and Prairies become more recognizable: Yukon is created in 1898, and Alberta and Saskatchewan become provinces in 1905.',
    plainExplanation:
      'This is the fill-in stage after the big Confederation jump west. The map changes from a few provinces plus a vast territory into a more familiar Prairie and northern shape. The Gold Rush explains Yukon; settlement and agriculture explain Alberta and Saskatchewan.',
    mapFocus:
      'Compare the enormous Northwest Territories with the new Yukon, Alberta, and Saskatchewan shapes.',
    testMemory: [
      'The North West Mounted Police are created in 1873.',
      'The CPR last spike is driven in 1885.',
      'Yukon is created in 1898 during the Gold Rush.',
      'Alberta and Saskatchewan become provinces in 1905.',
    ],
    terms: [
      {
        term: 'North West Mounted Police',
        meaning: 'The police force created in 1873 to police the West and support negotiations.',
      },
      {
        term: 'Prairie provinces',
        meaning: 'Manitoba, Saskatchewan, and Alberta.',
      },
    ],
    confusionBuster:
      'Alberta and Saskatchewan are provinces. Yukon remains a territory.',
  },
  {
    id: 'world-war-one-and-the-vote',
    title: 'First World War and the Vote',
    chapter: 'canadas-history',
    sourceTitle: "Canada's History",
    sourceUrl: HISTORY_URL,
    guideLocation: "Canada's History > The First World War; Women Get the Vote",
    year: 1914,
    endYear: 1918,
    mapYear: 1905,
    eventIds: ['wwi-begins-1914', 'women-vote-manitoba-1916', 'vimy-ridge-1917', 'women-federal-vote-1917', 'battle-amiens-1918'],
    guideSummary:
      "More than 600,000 Canadians serve in the First World War, Vimy becomes a national memory, and women's voting rights expand.",
    plainExplanation:
      'This is less about changing provincial borders and more about Canada acting as a country. The overseas battle markers explain national memory; the Manitoba and Ottawa markers explain how voting rights expanded during the same period.',
    mapFocus:
      'The boundary map stays at the 1905 shape, while the highlighted events jump between Canada and Europe.',
    testMemory: [
      'More than 600,000 Canadians served in the First World War.',
      'Vimy Ridge is remembered as a major Canadian victory.',
      'Manitoba granted women the vote in 1916.',
      'Most Canadian women gained the federal vote by 1918.',
    ],
    terms: [
      {
        term: 'Vimy Ridge',
        meaning: 'A 1917 Canadian victory in France remembered as a national milestone.',
      },
      {
        term: 'Suffrage',
        meaning: 'The right to vote.',
      },
    ],
  },
  {
    id: 'second-world-war-and-newfoundland',
    title: 'Second World War and Newfoundland',
    chapter: 'canadas-history',
    sourceTitle: "Canada's History",
    sourceUrl: HISTORY_URL,
    guideLocation: "Canada's History > The Second World War; Expansion of the Dominion",
    year: 1939,
    endYear: 1949,
    mapYear: 1949,
    eventIds: ['wwii-begins-1939', 'hong-kong-1941', 'dieppe-1942', 'juno-beach-1944', 'liberation-netherlands-1945', 'oil-alberta-1947', 'newfoundland-joins-1949'],
    guideSummary:
      'Canada and Newfoundlanders serve in the Second World War, then Newfoundland and Labrador joins Canada in 1949.',
    plainExplanation:
      'The Second World War section explains sacrifice and international role. The map then gives you a clean test anchor: Newfoundland and Labrador is the last province to join Confederation.',
    mapFocus:
      'Notice the 1949 map finally includes Newfoundland and Labrador, while the active war markers show how much of this story happens overseas.',
    testMemory: [
      'More than one million Canadians and Newfoundlanders served in the Second World War.',
      'Canadians landed at Juno Beach on D-Day.',
      'Canada helped liberate the Netherlands.',
      'Newfoundland and Labrador joined in 1949.',
    ],
    terms: [
      {
        term: 'Juno Beach',
        meaning: 'The Normandy beach captured by Canadian troops on D-Day.',
      },
      {
        term: 'Newfoundland and Labrador',
        meaning: 'The last province to join Canada, in 1949.',
      },
    ],
    confusionBuster:
      'Newfoundland and Labrador is not one of the original four provinces.',
  },
  {
    id: 'modern-rights-language-and-constitution',
    title: 'Modern Rights, Language, and Constitution',
    chapter: 'modern-canada',
    sourceTitle: 'Modern Canada',
    sourceUrl: MODERN_CANADA_URL,
    guideLocation: 'Modern Canada > Canada and Quebec; A Changing Society',
    year: 1960,
    endYear: 1988,
    mapYear: 1949,
    eventIds: ['aboriginal-vote-1960', 'new-flag-1965', 'official-languages-1969', 'o-canada-anthem-1980', 'constitution-1982', 'free-trade-1988'],
    guideSummary:
      'The modern guide material connects voting rights, official languages, national symbols, the Charter, and trade.',
    plainExplanation:
      'This section is a bridge from history into modern civic Canada. The shape of the map barely changes, but the country changes through rights, language policy, symbols, constitutional law, and economic ties.',
    mapFocus:
      'Stay on the post-1949 Canada map and use Ottawa-heavy markers as signals that this part is mostly institutional change.',
    testMemory: [
      'Indigenous people gained the federal vote in 1960.',
      'The maple leaf flag was first raised in 1965.',
      'The Official Languages Act passed in 1969.',
      'The Constitution was amended and the Charter entrenched in 1982.',
    ],
    terms: [
      {
        term: 'Official Languages Act',
        meaning: 'The 1969 law guaranteeing French and English federal services.',
      },
      {
        term: 'Charter of Rights and Freedoms',
        meaning: 'The rights document entrenched in the Constitution in 1982.',
      },
    ],
  },
  {
    id: 'nunavut-and-modern-north',
    title: 'Nunavut and the Modern North',
    chapter: 'regions',
    sourceTitle: 'Regions of Canada',
    sourceUrl: REGIONS_URL,
    guideLocation: 'Regions of Canada > The Northern Territories',
    year: 1999,
    mapYear: 1999,
    eventIds: ['frobisher-1576', 'nunavut-1999'],
    guideSummary:
      'Nunavut is created in 1999 from the eastern part of the Northwest Territories, with Iqaluit as its capital.',
    plainExplanation:
      'This is the last big map-shape change in the reader. Nunavut is not a province; it is a modern territory tied to Inuit homeland, language, and self-government.',
    mapFocus:
      'Compare the northern map before and after 1999. The eastern Arctic becomes Nunavut.',
    testMemory: [
      'Nunavut was created in 1999.',
      'Nunavut means our land in Inuktitut.',
      'Iqaluit is the capital.',
      'Nunavut is a territory, not a province.',
    ],
    terms: [
      {
        term: 'Nunavut',
        meaning: 'A northern territory whose name means our land in Inuktitut.',
      },
      {
        term: 'Iqaluit',
        meaning: 'The capital of Nunavut, formerly known as Frobisher Bay.',
      },
    ],
    confusionBuster:
      'The familiar modern map arrives late. Nunavut is created more than a century after Confederation.',
  },
];
