import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CAEDFF',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      alignContent: 'center',
      flexDirection: 'column',
      gap: 20
    },
    one: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: "center",
        alignContent: 'center',
        marginTop: 60,
        gap: 15,
    },
    two: {
        backgroundColor: 'white',
        height: 80,
        width: 350,
        alignContent: "center",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderRadius: 20
    },
    two2: {
        height: 50,
        width: 350,
        alignContent: "center",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderRadius: 20
    },
    three: {
        backgroundColor: '#ef6a25',
        height: 250,
        width: 360,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    row1: {
        width: 350,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
    },
    row2: {
        width: 350,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 17,
        columnGap: 10
    },
    four: {
        height: 180,
        width: 370,
        justifyContent: 'center',
        gap: 2,
        flexDirection: 'row',
        flexWrap: "wrap",
        alignContent: 'center'
    },
    five: {
        backgroundColor: 'white',
        height: 80,
        width: 400,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center'
    },

    six: {
        backgroundColor: 'white',
        width: 390,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        alignItems: 'baseline'

    },
    seven: {
        backgroundColor: 'white',
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        alignItems: 'baseline',

    },
    dot: {
        height: 10,
        justifyContent: 'center'
    }
  });