// @flow

type Alert = (message: string) => Promise<void>;

export default function useAlert(): Alert {
  return async (message) => {
    alert(message);
  };
}
