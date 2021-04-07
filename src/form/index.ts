// #region ::: IMPORT
import { Step } from "../declarations/step";
import { utilityFormGenerator } from "../utils/formGenerator";
import select from "./flowSelect.json";
import first from "./flowFirst.json";
import mobile from "./flowMobile.json";
import satispay from "./flowSatispay.json";
import bancomatPay from "./flowBancomatPay.json";
import creditCard from "./flowCreditCard.json";
import pagoBancomat from "./flowPagoBancomat.json";
import last from "./flowLast.json";
// #endregion

const flowSelect = utilityFormGenerator(select.stepList as Step[]);
const flowFirst = utilityFormGenerator(first.stepList as Step[]);
const flowMobile = utilityFormGenerator(mobile.stepList as Step[]);
const flowSatispay = utilityFormGenerator(satispay.stepList as Step[]);
const flowBancomatPay = utilityFormGenerator(bancomatPay.stepList as Step[]);
const flowCreditCard = utilityFormGenerator(creditCard.stepList as Step[]);
const flowPagoBancomat = utilityFormGenerator(pagoBancomat.stepList as Step[]);
const flowLast = utilityFormGenerator(last.stepList as Step[]);

export const formList = [
  ...flowSelect,
  ...flowFirst,
  ...flowMobile,
  ...flowSatispay,
  ...flowBancomatPay,
  ...flowPagoBancomat,
  ...flowCreditCard,
  ...flowLast,
];
