import {NavigationProp} from '@react-navigation/native';

export enum ScreenNames {
  Main = 'Main',
  MoreStack = 'MoreStack',
  Settings = 'Settings',
}

export enum TabBarScreens {
  quiz = 'quiz',
  liveSession = 'liveSession',
}

export enum AuthScreens {
  Login = 'Login',
  Register = 'Register',
}

export type StackParamList<T extends string[]> = Record<
  T[number],
  undefined | {title: string; url: string}
>;
export type RootStackParamList = StackParamList<
  Array<
    | keyof typeof ScreenNames
    | keyof typeof AuthScreens
    | keyof typeof TabBarScreens
  >
>;
export type StackNavigation = NavigationProp<RootStackParamList>;
