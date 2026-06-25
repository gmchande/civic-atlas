import type { ReadingSection } from '../types';

const HISTORY_URL =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada/read-online/canadas-history.html';

export const readingSections: ReadingSection[] = [
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
      'This is the beginning of the French map story. Acadia is the Atlantic thread, while Quebec City becomes the St. Lawrence anchor for New France. Later names like Quebec, Canada, Acadia, and French Canada make more sense once these two early centers are separate in your head.',
    mapFocus:
      'Look east for Port-Royal in present-day Nova Scotia, then follow the St. Lawrence to Quebec City.',
    testMemory: [
      'Port-Royal begins the Acadian presence in 1604.',
      'Samuel de Champlain builds Quebec City in 1608.',
      'The St. Lawrence River is the spine of early French Canada.',
    ],
    terms: [
      {
        term: 'New France',
        meaning: "France's North American colony centered on the St. Lawrence and interior trade routes.",
      },
      {
        term: 'Acadia',
        meaning: 'French settlement region in the Atlantic area, especially present-day Nova Scotia and nearby lands.',
      },
    ],
    confusionBuster:
      'New France is not modern Canada. It is a French colonial geography that later gets reorganized under British rule.',
  },
  {
    id: 'hudsons-bay-and-colonial-competition',
    title: "Hudson's Bay and Colonial Competition",
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
      'Canada does not grow only from the St. Lawrence. A huge northern and western fur-trade geography also matters. The Hudson Bay watershed helps explain why western and northern Canada later enter the story through company lands, trading posts, and Indigenous alliances.',
    mapFocus:
      "Notice how Rupert's Land sits north and west of New France, creating another major path into the future map of Canada.",
    testMemory: [
      "The Hudson's Bay Company charter dates to 1670.",
      'Voyageurs and coureurs des bois connected trade routes through the interior.',
      'Fur trade geography helps explain later western expansion.',
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
      'This is where the label Quebec changes from a French center into a British colony name. French-speaking Catholic Canadiens remain in place, but the empire ruling the map has changed. That is why the guide moves from New France into British North America here.',
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
      'This section explains why two Canadas appear before modern Canada exists. Loyalist settlement strengthens English-speaking institutions in the west, while the French-speaking St. Lawrence colony remains centered in the east.',
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
      'The West does not simply appear peacefully as a blank space on the map. The Metis of Red River were not consulted, Louis Riel led resistance, and Manitoba entered Canada as a small new province beside a huge Northwest Territories.',
    mapFocus:
      'Notice how tiny early Manitoba is compared with the enormous Northwest Territories around it.',
    testMemory: [
      'Manitoba is created in 1870.',
      'Louis Riel is central to Manitoba entering Confederation.',
      'The Northwest Territories are added to Canada in 1870.',
    ],
    terms: [
      {
        term: 'Metis',
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
      'The promise of a transcontinental railway is the key test connection.',
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
];
