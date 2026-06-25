export interface EraGuide {
  year: number;
  question: string;
  whatChanged: string[];
  whyItMatters: string;
  terms: { term: string; meaning: string }[];
  remember: string[];
}

export const eraGuides: Record<number, EraGuide> = {
  1608: {
    year: 1608,
    question: 'How did French settlement become permanent?',
    whatChanged: [
      'Quebec City becomes the anchor of New France on the St. Lawrence.',
      'French settlement grows around trade, alliances, missions, and river routes.',
      'Atlantic Acadia develops separately from the St. Lawrence colony.',
    ],
    whyItMatters:
      'This is the starting shape for many later names in the guide: New France, Acadia, Quebec, and the St. Lawrence corridor.',
    terms: [
      { term: 'New France', meaning: 'France\'s North American colony centred on the St. Lawrence and interior trade routes.' },
      { term: 'Acadia', meaning: 'French settlement region in the Atlantic area, especially present-day Nova Scotia and nearby lands.' },
    ],
    remember: [
      'Samuel de Champlain founded Quebec City in 1608.',
      'The St. Lawrence River is the main route through early French Canada.',
    ],
  },
  1670: {
    year: 1670,
    question: 'Why does Rupert\'s Land suddenly cover so much of the map?',
    whatChanged: [
      'The Hudson\'s Bay Company receives trading rights over the Hudson Bay drainage basin.',
      'British commercial power now sits to the north and west of New France.',
      'Fur trade routes connect European traders with First Nations knowledge and alliances.',
    ],
    whyItMatters:
      'Later western and northern Canada grows partly out of this enormous HBC trading territory, not only from the original eastern colonies.',
    terms: [
      { term: 'Rupert\'s Land', meaning: 'The HBC trading territory draining into Hudson Bay.' },
      { term: 'Voyageurs', meaning: 'Canoe-travelling fur traders who moved goods and knowledge through the interior.' },
    ],
    remember: [
      'The Hudson\'s Bay Company charter dates to 1670.',
      'The fur trade connects territory, economy, and Indigenous alliances.',
    ],
  },
  1713: {
    year: 1713,
    question: 'Why do French and British claims overlap in the east?',
    whatChanged: [
      'Britain gains key Atlantic claims after the Treaty of Utrecht.',
      'New France remains strong along the St. Lawrence and interior routes.',
      'The Atlantic colonies become a pressure point between French and British power.',
    ],
    whyItMatters:
      'The map now explains why later wars and migrations focus so heavily on Quebec, Acadia, Nova Scotia, and Newfoundland.',
    terms: [
      { term: 'Treaty of Utrecht', meaning: 'The 1713 agreement that shifted several French claims to Britain.' },
      { term: 'Nova Scotia', meaning: 'A British Atlantic colony that had earlier French Acadian roots.' },
    ],
    remember: [
      'Atlantic Canada changes hands before the St. Lawrence does.',
      'French and British North America coexist before Britain conquers New France.',
    ],
  },
  1763: {
    year: 1763,
    question: 'What changed after Britain defeated France?',
    whatChanged: [
      'Britain reorganizes former French lands after the Seven Years\' War.',
      'The Province of Quebec replaces New France as the main St. Lawrence colony.',
      'The Royal Proclamation sets a British framework for settlement and Indigenous reserve governance.',
    ],
    whyItMatters:
      'The guide shifts here from French empire to British North America, while French language, religion, and civil traditions remain central.',
    terms: [
      { term: 'Province of Quebec', meaning: 'The British colony created after the conquest of New France.' },
      { term: 'Royal Proclamation', meaning: 'The 1763 British policy that reorganized territory after the war.' },
    ],
    remember: [
      'The Battle of the Plains of Abraham was in 1759.',
      'Britain formally takes control of former French Canada before the Quebec Act.',
    ],
  },
  1774: {
    year: 1774,
    question: 'Why does Quebec expand again under British rule?',
    whatChanged: [
      'The Quebec Act expands the Province of Quebec into the interior.',
      'French civil law and Catholic religious rights are protected.',
      'British criminal law remains in place.',
    ],
    whyItMatters:
      'This is one of the guide\'s key examples of compromise: British government with protected French Canadian institutions.',
    terms: [
      { term: 'Quebec Act', meaning: 'The 1774 act that protected major French Canadian rights under British rule.' },
      { term: 'Civil law', meaning: 'Law governing private matters such as property and family relations.' },
    ],
    remember: [
      'Quebec Act: Catholic rights, French civil law, British criminal law.',
      'It helped shape Canada\'s bilingual and bijural inheritance.',
    ],
  },
  1791: {
    year: 1791,
    question: 'Why are there now two Canadas?',
    whatChanged: [
      'The Constitutional Act divides Quebec into Upper Canada and Lower Canada.',
      'Each colony receives an elected legislative assembly.',
      'Loyalist settlement strengthens British institutions in Upper Canada.',
    ],
    whyItMatters:
      'This is the cleanest map moment for remembering that Upper Canada becomes Ontario and Lower Canada becomes Quebec.',
    terms: [
      { term: 'Upper Canada', meaning: 'The western colony that later becomes Ontario.' },
      { term: 'Lower Canada', meaning: 'The eastern St. Lawrence colony that later becomes Quebec.' },
    ],
    remember: [
      'Upper Canada is upriver and west; Lower Canada is downriver and east.',
      'The name Canada becomes official in this period.',
    ],
  },
  1841: {
    year: 1841,
    question: 'What was the Province of Canada?',
    whatChanged: [
      'Upper and Lower Canada merge into one Province of Canada.',
      'The two halves are commonly called Canada West and Canada East.',
      'Political reform movements push toward responsible government.',
    ],
    whyItMatters:
      'Province of Canada is not the modern country. It is the pre-Confederation colony that later splits into Ontario and Quebec.',
    terms: [
      { term: 'Canada West', meaning: 'Former Upper Canada; later Ontario.' },
      { term: 'Canada East', meaning: 'Former Lower Canada; later Quebec.' },
    ],
    remember: [
      '1841: one Province of Canada, two named halves.',
      'This union sets up the political deadlock that Confederation later tries to solve.',
    ],
  },
  1867: {
    year: 1867,
    question: 'What did Confederation actually create?',
    whatChanged: [
      'Ontario, Quebec, Nova Scotia, and New Brunswick form the Dominion of Canada.',
      'The Province of Canada splits into Ontario and Quebec.',
      'The West and North are not provinces yet.',
    ],
    whyItMatters:
      'The citizenship guide treats Confederation as a founding constitutional moment, but the map shows Canada is still geographically incomplete.',
    terms: [
      { term: 'Confederation', meaning: 'The 1867 union that created the Dominion of Canada.' },
      { term: 'British North America Act', meaning: 'The constitutional act that created the new federation.' },
    ],
    remember: [
      'Confederation starts with four provinces.',
      'Sir John A. Macdonald becomes Canada\'s first prime minister.',
    ],
  },
  1870: {
    year: 1870,
    question: 'How did Canada move into the West?',
    whatChanged: [
      'Canada acquires Rupert\'s Land and the North-Western Territory.',
      'Manitoba becomes a province after the Red River Resistance.',
      'The Northwest Territories cover a vast part of the country.',
    ],
    whyItMatters:
      'The small shape of early Manitoba beside the huge Northwest Territories makes western expansion much easier to remember.',
    terms: [
      { term: 'Métis', meaning: 'A people with mixed Indigenous and European ancestry and distinct culture and political history.' },
      { term: 'Red River Resistance', meaning: 'The conflict and negotiation connected with Manitoba joining Canada.' },
    ],
    remember: [
      'Louis Riel is central to Manitoba entering Confederation.',
      '1870 adds both Manitoba and the Northwest Territories.',
    ],
  },
  1871: {
    year: 1871,
    question: 'Why did British Columbia join?',
    whatChanged: [
      'British Columbia enters Confederation on the Pacific coast.',
      'The federal promise of a railway helps connect the west to the rest of Canada.',
      'Canada now spans from the Atlantic colonies toward the Pacific.',
    ],
    whyItMatters:
      'The railway promise is the key test connection: distance, trade, and political union all meet here.',
    terms: [
      { term: 'Pacific province', meaning: 'British Columbia, Canada\'s province on the Pacific Ocean.' },
      { term: 'Transcontinental railway', meaning: 'The railway link promised to connect British Columbia with eastern Canada.' },
    ],
    remember: [
      'British Columbia joins in 1871.',
      'The railway promise is the reason this date matters.',
    ],
  },
  1873: {
    year: 1873,
    question: 'Why does Prince Edward Island matter if it joins later?',
    whatChanged: [
      'Prince Edward Island becomes Canada\'s eighth province.',
      'Charlottetown remains important because early Confederation talks happened there.',
      'The Atlantic region gains its fourth province in Canada.',
    ],
    whyItMatters:
      'PEI is both late to join and central to the origin story, which is exactly why it is easy to mix up.',
    terms: [
      { term: 'Charlottetown Conference', meaning: 'The 1864 meeting remembered as a birthplace of Confederation.' },
      { term: 'Birthplace of Confederation', meaning: 'A common description of PEI because of the Charlottetown talks.' },
    ],
    remember: [
      'PEI joins in 1873.',
      'Charlottetown matters before PEI formally joins Canada.',
    ],
  },
  1898: {
    year: 1898,
    question: 'Why was Yukon created separately?',
    whatChanged: [
      'The Yukon Territory is created during the Klondike Gold Rush.',
      'Northern administration becomes more urgent as population and mining activity surge.',
      'Canada\'s northern map starts to separate into recognizable territories.',
    ],
    whyItMatters:
      'The gold rush gives you the reason for the date, not just another territory name to memorize.',
    terms: [
      { term: 'Klondike Gold Rush', meaning: 'The 1890s rush of miners into Yukon seeking gold.' },
      { term: 'Yukon Territory', meaning: 'The northern territory created in 1898.' },
    ],
    remember: [
      'Yukon is tied to the Klondike Gold Rush.',
      'The date is 1898.',
    ],
  },
  1905: {
    year: 1905,
    question: 'Why do Alberta and Saskatchewan appear together?',
    whatChanged: [
      'Alberta and Saskatchewan are created from the Northwest Territories.',
      'Prairie settlement and agriculture are expanding quickly.',
      'The West becomes more province-shaped instead of mostly territory-shaped.',
    ],
    whyItMatters:
      'This is the prairie-province moment: two new provinces at once, both carved from the Northwest Territories.',
    terms: [
      { term: 'Prairie provinces', meaning: 'Manitoba, Saskatchewan, and Alberta.' },
      { term: 'Northwest Territories', meaning: 'The large territory from which Alberta and Saskatchewan were created.' },
    ],
    remember: [
      'Alberta and Saskatchewan both become provinces in 1905.',
      'Prairie agriculture is the context for this expansion.',
    ],
  },
  1949: {
    year: 1949,
    question: 'Why does Newfoundland join so late?',
    whatChanged: [
      'Newfoundland and Labrador joins Canada as its newest province.',
      'Canada now includes the Atlantic island colony that had remained outside Confederation.',
      'The country reaches the familiar ten-province shape.',
    ],
    whyItMatters:
      'This date prevents a common mistake: Newfoundland was not part of the original Confederation.',
    terms: [
      { term: 'Newfoundland and Labrador', meaning: 'The province that joined Canada in 1949.' },
      { term: 'Confederation referendum', meaning: 'The vote process that led Newfoundland to join Canada.' },
    ],
    remember: [
      'Newfoundland and Labrador joins in 1949.',
      'It is the last province to join Canada.',
    ],
  },
  1999: {
    year: 1999,
    question: 'Why was Nunavut created?',
    whatChanged: [
      'Nunavut is created from the eastern Northwest Territories.',
      'The new territory reflects Inuit homeland, language, and self-government goals.',
      'Canada\'s modern territorial map takes its current shape.',
    ],
    whyItMatters:
      'Nunavut is not a province. It is a modern territory created through a major land-claims and self-government process.',
    terms: [
      { term: 'Nunavut', meaning: 'A territory whose name means "our land" in Inuktitut.' },
      { term: 'Consensus government', meaning: 'A territorial governing style without party caucuses in the usual provincial/federal sense.' },
    ],
    remember: [
      'Nunavut is created in 1999.',
      'Its population is majority Inuit.',
    ],
  },
};
