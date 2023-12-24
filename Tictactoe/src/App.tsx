import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {Icons} from './components/Icons';
// import box from './components/box';

function App(): React.JSX.Element {
  const [iscross, setiscross] = useState<boolean>(false);
  const [gamewiner, setgamewinner] = useState<string>('');
  const [gamestate, setgamestate] = useState(new Array(9).fill('empty', 0, 9));
  const reloadgame = () => {
    setiscross(false);
    setgamewinner('');
    setgamestate(new Array(9).fill('empty', 0, 9));
  };
  const Gamewinner = () => {
    if (
      gamestate[0] === gamestate[1] &&
      gamestate[0] === gamestate[2] &&
      gamestate[0] !== 'empty'
    ) {
      setgamewinner(`${gamestate[0]} won the game! 🥳`);
    } else if (
      gamestate[3] !== 'empty' &&
      gamestate[3] === gamestate[4] &&
      gamestate[4] === gamestate[5]
    ) {
      setgamewinner(`${gamestate[3]} won the game! 🥳`);
    } else if (
      gamestate[6] !== 'empty' &&
      gamestate[6] === gamestate[7] &&
      gamestate[7] === gamestate[8]
    ) {
      setgamewinner(`${gamestate[6]} won the game! 🥳`);
    } else if (
      gamestate[0] !== 'empty' &&
      gamestate[0] === gamestate[3] &&
      gamestate[3] === gamestate[6]
    ) {
      setgamewinner(`${gamestate[0]} won the game! 🥳`);
    } else if (
      gamestate[1] !== 'empty' &&
      gamestate[1] === gamestate[4] &&
      gamestate[4] === gamestate[7]
    ) {
      setgamewinner(`${gamestate[1]} won the game! 🥳`);
    } else if (
      gamestate[2] !== 'empty' &&
      gamestate[2] === gamestate[5] &&
      gamestate[5] === gamestate[8]
    ) {
      setgamewinner(`${gamestate[2]} won the game! 🥳`);
    } else if (
      gamestate[0] !== 'empty' &&
      gamestate[0] === gamestate[4] &&
      gamestate[4] === gamestate[8]
    ) {
      setgamewinner(`${gamestate[0]} won the game! 🥳`);
    } else if (
      gamestate[2] !== 'empty' &&
      gamestate[2] === gamestate[4] &&
      gamestate[4] === gamestate[6]
    ) {
      setgamewinner(`${gamestate[2]} won the game! 🥳`);
    } else if (!gamestate.includes('empty', 0)) {
      setgamewinner('Draw game... ⌛️');
    }
  };
  const onchangeitem = (itemnumber: number) => {
    if (gamewiner) {
      reloadgame();
      Snackbar.show({
        text: `${gamewiner}`,
        backgroundColor: '#000000',
        textColor: '#FFFFFF',
      });
      setgamewinner('');
    }
    if (gamestate[itemnumber] === 'empty') {
      gamestate[itemnumber] = iscross ? 'cross' : 'circle';
      setiscross(!iscross);
    } else {
      return Snackbar.show({
        text: 'Select another field',
        backgroundColor: 'red',
        textColor: '#FFF',
        marginBottom: 1,
      });
    }
    Gamewinner();
  };
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'yellow'} />
      <View style={styles.main}>
        {gamewiner ? (
          <View style={styles.header}>
            <Text style={styles.headertext}>{gamewiner}</Text>
          </View>
        ) : (
          <View style={styles.header}>
            <Text style={styles.headertext}>{iscross ? 'X' : 'O'}'s turn</Text>
          </View>
        )}
      </View>
      <FlatList
        numColumns={3}
        style={styles.fields}
        data={gamestate}
        renderItem={({item, index}) => (
          <Pressable
            style={styles.card}
            key={index}
            onPress={() => onchangeitem(index)}>
            <Icons name={item} />
          </Pressable>
        )}
      />
      <Pressable onPress={() => reloadgame()} style={styles.button}>
        <Text style={styles.buttontext}>
          {gamewiner ? 'Start New Game' : 'Reload The Game'}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    backgroundColor: 'black',
  },
  header: {
    // flex: 1,
    alignItems: 'center',
    padding: 10,
    // marginVertical: 8,
    backgroundColor: 'yellow',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  fields: {margin: 12},
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 0.5,
    borderColor: '#333',
  },
  headertext: {
    color: 'black',
    fontSize: 20,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    alignItems: 'center',
    padding: 6,
  },
  buttontext: {
    color: 'white',
    fontSize: 20,
    padding: 16,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'purple',
    elevation: 10,
  },
});

export default App;
