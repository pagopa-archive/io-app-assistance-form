export {};

declare global {
  interface Window {
    sendMessagesToRN: (data: any) => void;
  }
}
