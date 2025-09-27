// types.ts

// Stack navigation (auth + main)
export type RootStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Main: undefined; // loads BottomTabs
};

// Bottom tab navigation (inside Main)
export type RootTabParamList = {
  Home: undefined;
  Journal: undefined;
  Meditation: undefined;
  Profile: undefined;
};
