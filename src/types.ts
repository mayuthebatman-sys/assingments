/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ReportSection {
  id: string;
  title: string;
  learningOutcome: string;
  criteria: string[];
  content: string; // Markdown supported
  readingTime: string;
}

export interface SlideData {
  id: number;
  title: string;
  duration: string; // e.g. "1.5 mins"
  bullets: string[];
  visualPrompt: string; // Description of the slide's visual layout
  speakerNotes: string; // The detailed notes requested in report appendix
}

export interface SimulationMetrics {
  employeeMorale: number; // 0 - 100
  decisionSpeed: number;  // 0 - 100
  innovationRate: number; // 0 - 100
  operationalAgility: number; // 0 - 100
  longTermGrowth: number; // 0 - 100
}

export interface CompanyProfile {
  id: string;
  name: string;
  type: string;
  ownership: string;
  primaryLeadershipStyle: string;
  primaryManagementTheory: string;
  cultureType: string;
  marketPosition: string;
  keyChallenge: string;
  metrics: SimulationMetrics;
}

export interface DiagnosticState {
  selectedPainPoints: string[];
  selectedTheory: string;
  targetCompany: string;
  loading: boolean;
  result: string | null;
  error: string | null;
}
