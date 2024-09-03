import { useState } from 'react';

import { Grid } from './components/Grid/Grid';
import { History } from './components/History/History';
import { Title } from './components/Title/Title';

import styles from './App.module.scss';

function App() {
  const [moves, setMoves] = useState<[number?, number?][]>([]);

  return (
    <div className={styles.app}>
      <Title title={'Tic-tac-toe'} />
      <div className={styles.gameZone}>
        <History moves={moves} />
        <Grid
          onChange={(cellIds) => setMoves((moves) => [...moves, cellIds])}
          onRestart={() => setMoves([])}
        />
      </div>
    </div>
  );
}

export default App;
