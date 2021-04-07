export interface TagInput {
  "cf-questions"?: string;
  name: string;
  tag: "input";
  type: string;
  value: string;
  "cf-label": string;
}

export interface TagFieldset {
  "cf-questions": string;
  tag: "fieldset";
  children: TagInput[];
}

export interface TagMessageEnd {
  [conditional: string]: string;
  "cf-questions": string;
  tag: "cf-robot-message";
}
