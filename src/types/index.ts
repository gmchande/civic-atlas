export type EventCategory =
  | 'exploration'
  | 'military'
  | 'political'
  | 'cultural'
  | 'infrastructure'
  | 'settlement';

export interface HistoricalEvent {
  id: string;
  year: number;
  endYear?: number;
  title: string;
  description: string;
  lat: number;
  lng: number;
  category: EventCategory;
  keyPeople?: string[];
  testFacts?: string[];
}

export type ReadingChapter =
  | 'who-we-are'
  | 'canadas-history'
  | 'modern-canada'
  | 'symbols'
  | 'regions';

export interface ReadingSection {
  id: string;
  title: string;
  chapter: ReadingChapter;
  sourceTitle: string;
  sourceUrl: string;
  sourceAnchor?: string;
  sourceVersionDate?: string;
  guideLocation: string;
  year?: number;
  endYear?: number;
  mapYear: number;
  eventIds: string[];
  guideSummary: string;
  plainExplanation: string;
  mapFocus: string;
  testMemory: string[];
  terms: { term: string; meaning: string }[];
  confusionBuster?: string;
}

export interface Province {
  code: string;
  name: string;
  capital: string;
  region: 'atlantic' | 'central' | 'prairie' | 'west-coast' | 'north';
  joinedYear: number;
  population: string;
  industries: string[];
  facts: string[];
  geographicFeatures?: string[];
}

export interface Era {
  year: number;
  label: string;
  description: string;
  newEntities: string[];
}

export interface GovernmentNode {
  name: string;
  description: string;
  facts: string[];
  children?: GovernmentNode[];
}

export interface Symbol {
  id: string;
  name: string;
  description: string;
  testFacts: string[];
  category: 'flag' | 'emblem' | 'institution' | 'sport' | 'honour' | 'anthem';
}

export type QuizFormat = 'multiple-choice' | 'map-tap' | 'timeline-ordering';
export type ContentCategory =
  | 'history'
  | 'geography'
  | 'government'
  | 'rights'
  | 'symbols'
  | 'economy'
  | 'culture';

export interface QuizQuestion {
  id: string;
  format: QuizFormat;
  category: ContentCategory;
  difficulty: 1 | 2 | 3;
  question: string;
  options?: string[];
  answer: string | string[];
  explanation?: string;
}

export interface SpacedRepetitionCard {
  questionId: string;
  dueDate: number;
  interval: number;
  easeFactor: number;
  repetitions: number;
  lastReview: number;
}
