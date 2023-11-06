import { createContext, useReducer } from "react";

type Props = {
  appList: any[];
};

type Action = {
  type: string;
  payload?: any;
};

type Reducer = (prevState: Props, action: Action) => Props;

const initialState: Props = {
  appList: [],
};

const reducer: Reducer = (prevState: Props, action: Action): Props => {
  switch (action.type) {
    case "appList":
      return { ...prevState, [action.type]: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

type Context = {
  state: Props;
  dispatch: any;
};

export const GlobalContext = createContext<Context>({
  state: initialState,
  dispatch: null,
});

export const GlobalContextProvider = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer<Reducer>(reducer, initialState);


  // handlers
  // returns
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
