import { TagFieldset, TagInput, TagMessageEnd } from "../declarations/form";
import { Step } from "../declarations/step";

const onGenerateTagInput = (step: Step) => {
  const { id, question, answers, previousStepId, previousStepValue } = step;

  if (previousStepId && previousStepValue) {
    return {
      [`cf-conditional-${previousStepId}`]: `${previousStepValue?.toLowerCase()}-${previousStepId}`,
      "cf-questions": question,
      name: id,
      tag: "input",
      type: "radio",
      value: `${answers[0].toLowerCase()}-${id}`,
      "cf-label": answers[0],
    };
  } else
    return {
      "cf-questions": question,
      name: id,
      tag: "input",
      type: "radio",
      value: `${answers[0].toLowerCase()}-${id}`,
      "cf-label": answers[0],
    };
};

const onGenerateTagFieldset = (step: Step) => {
  const { id, question, answers, previousStepId, previousStepValue } = step;

  const children: TagInput[] = answers.map((answer) => {
    if (previousStepId && previousStepValue) {
      return {
        [`cf-conditional-${previousStepId}`]: `${previousStepValue?.toLowerCase()}-${previousStepId}`,
        name: id,
        tag: "input",
        type: "radio",
        value: `${answer.toLowerCase()}-${id}`,
        "cf-label": answer,
      };
    } else
      return {
        name: id,
        tag: "input",
        type: "radio",
        value: `${answer.toLowerCase()}-${id}`,
        "cf-label": answer,
      };
  });
  const tag: TagFieldset = {
    "cf-questions": question,
    tag: "fieldset",
    children,
  };

  return tag;
};

const onGenerateTagMessageEnd = (step: Step) => {
  const { message, previousStepId, previousStepValue } = step;

  const tag: TagMessageEnd = {
    [`cf-conditional-${previousStepId}`]: `${previousStepValue?.toLowerCase()}-${previousStepId}`,
    "cf-questions": message as string,
    tag: "cf-robot-message",
  };

  return tag;
};

export const utilityFormGenerator = (
  stepList: Step[]
): Array<TagInput | TagFieldset> => {
  return stepList.reduce((initialList: any[], step: Step) => {
    let tag = {};
    if (step.end) tag = onGenerateTagMessageEnd(step);
    else {
      if (step.answers.length === 1) tag = onGenerateTagInput(step);
      if (step.answers.length > 1) tag = onGenerateTagFieldset(step);
    }
    const newList = [...initialList, tag];

    return newList;
  }, []);
};
