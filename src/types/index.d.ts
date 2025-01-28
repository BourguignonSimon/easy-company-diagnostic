export interface Question {
  id: string;
  type: 'scale' | 'multiple_choice' | 'text';
  question: string;
  scale?: number[];
  labels?: string[];
  options?: string[];
  multiple?: boolean;
  max_selections?: number;
  kpi_ref: string;
}

export interface Section {
  id: string;
  title: string;
  questions: Question[];
}

export interface DiagnosticForm {
  title: string;
  version: string;
  estimated_time: string;
  sections: Section[];
}

export interface DiagnosticResult {
  scores: {
    [key: string]: number;
  };
  recommendations: string[];
}
