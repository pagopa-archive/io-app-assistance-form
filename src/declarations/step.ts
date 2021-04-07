export interface Step {
  id: string;
  question: string;
  answers: string[];
  previousStepId?: string;
  previousStepValue?: string;
  message?: string;
  end?: boolean;
}
