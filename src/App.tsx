import { Provider } from 'react-redux';
import store from './redux/store';
import { GamePlayPage } from './pages';

export default function App() {
  return (
    <Provider store={store}>
      <GamePlayPage />
    </Provider>
  );
}