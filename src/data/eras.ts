import type { Era } from '../types';

export const eras: Era[] = [
  {
    year: 1608,
    label: 'Royal New France',
    description:
      'Samuel de Champlain founded Quebec City in 1608, establishing a permanent French presence along the St. Lawrence River.',
    newEntities: ['New France'],
  },
  {
    year: 1670,
    label: "Hudson's Bay Charter",
    description:
      "King Charles II granted the Hudson's Bay Company trading rights over Rupert's Land in 1670, creating a British imperial counterweight to New France.",
    newEntities: ["Rupert's Land"],
  },
  {
    year: 1713,
    label: 'French and British Coexistence',
    description:
      'After the Treaty of Utrecht, Britain gained major Atlantic claims while New France remained across the St. Lawrence and interior. French and British empires coexisted, with additional contested frontier zones.',
    newEntities: ['Nova Scotia', 'Newfoundland'],
  },
  {
    year: 1763,
    label: 'Province of Quebec (Post-Conquest)',
    description:
      "Following France's defeat, Britain reorganized its holdings under the Royal Proclamation and established the Province of Quebec. The large interior shown with an overlay marks Indigenous reserve governance under the British Crown.",
    newEntities: ['Province of Quebec'],
  },
  {
    year: 1774,
    label: 'Quebec Act',
    description:
      'The Quebec Act expanded and stabilized the Province of Quebec while preserving French civil law and Catholic religious rights under British rule, incorporating much of the earlier reserved interior into Quebec administration.',
    newEntities: ['Province of Quebec (expanded)'],
  },
  {
    year: 1791,
    label: 'Upper and Lower Canada',
    description:
      'The Constitutional Act divided Quebec into Upper Canada and Lower Canada, creating separate colonial governments with elected assemblies.',
    newEntities: ['Upper Canada', 'Lower Canada'],
  },
  {
    year: 1841,
    label: 'Province of Canada',
    description:
      'After the Union Act, Upper and Lower Canada were merged into the Province of Canada, commonly known as Canada West and Canada East.',
    newEntities: ['Canada West', 'Canada East'],
  },
  {
    year: 1867,
    label: 'Confederation',
    description:
      'The Dominion of Canada was born on July 1, 1867, when the British North America Act united four provinces into a new country. Sir John A. Macdonald became the first Prime Minister.',
    newEntities: ['Ontario', 'Quebec', 'Nova Scotia', 'New Brunswick'],
  },
  {
    year: 1870,
    label: 'Manitoba & Northwest Territories',
    description:
      'After the Red River Rebellion led by Louis Riel, Manitoba was established as a new province and the vast Northwest Territories were added to the Dominion.',
    newEntities: ['Manitoba', 'Northwest Territories'],
  },
  {
    year: 1871,
    label: 'British Columbia Joins',
    description:
      'British Columbia joined Confederation after Ottawa promised to build a railway to the West Coast, linking the Pacific province to the rest of Canada.',
    newEntities: ['British Columbia'],
  },
  {
    year: 1873,
    label: 'Prince Edward Island Joins',
    description:
      'Prince Edward Island, the birthplace of Confederation where the initial conferences were held, officially joined Canada as the eighth province.',
    newEntities: ['Prince Edward Island'],
  },
  {
    year: 1898,
    label: 'Yukon Territory Created',
    description:
      'The Yukon Territory was created during the Klondike Gold Rush of the 1890s, when thousands of miners flooded the region seeking their fortunes.',
    newEntities: ['Yukon Territory'],
  },
  {
    year: 1905,
    label: 'Alberta & Saskatchewan Created',
    description:
      'Alberta and Saskatchewan were carved out of the Northwest Territories as new provinces, reflecting the rapid western settlement and agricultural boom of the early 1900s.',
    newEntities: ['Alberta', 'Saskatchewan'],
  },
  {
    year: 1949,
    label: 'Newfoundland & Labrador Joins',
    description:
      'Newfoundland and Labrador, the oldest colony of the British Empire, became the last province to join Confederation, completing Canada from sea to sea.',
    newEntities: ['Newfoundland and Labrador'],
  },
  {
    year: 1999,
    label: 'Nunavut Created',
    description:
      'Nunavut, meaning "our land" in Inuktitut, was carved from the eastern part of the Northwest Territories. It has a population that is about 85% Inuit and operates by consensus government.',
    newEntities: ['Nunavut'],
  },
];
