// #region ::: IMPORT
import { FC, useCallback, useEffect, useRef } from "react";
import { ConversationalForm } from "conversational-form";
import { formList } from "./form";
// #endregion

export const App: FC = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const onAttachToReport = (data: any) => console.log(data);

  // WAITING FOR INTEGRATION WITH APP
  // const onAbortRequestAssistance = () => {};

  const initConversationalForm = useCallback(() => {
    const CF = ConversationalForm.startTheConversation({
      options: {
        submitCallback: () => onAttachToReport(CF.getFormData(true)),
        preventAutoFocus: true,
      },
      tags: formList,
    });
    if (ref && ref.current) ref.current.appendChild(CF.el);
  }, []);

  useEffect(() => initConversationalForm(), [initConversationalForm]);

  return <div id="cf-context" className="wrapper" ref={ref}></div>;
};
