import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <Home />
    </Fragment>
  );
}
