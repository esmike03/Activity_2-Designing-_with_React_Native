import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles } from './style/Styles.js';

export default function App() {
  return (

    <View style={styles.container}>
      <View style={styles.one}>
        <Image source={require('./assets/images/smart.png')}
        style={{marginRight: 90,height: 40, width: 150, resizeMode: 'contain'}}/>   
        <Image source={require('./assets/images/message.png')}
        style={{height: 45, width: 40, resizeMode: 'contain'}}/>
        <Image source={require('./assets/images/acc.png')}
        style={{height: 35, width: 40, resizeMode: 'contain'}}/>
      </View>

      <View style={styles.two}>
        <Image source={require('./assets/images/giftbox.png')}
        style={{resizeMode: 'contain', width:40, height:40}}/>
        <Text>
        <Text style={{fontWeight: 'bold'}}>Mag Invite ng ka-Tropa sa Smart app</Text>
        {'\n'}
        <Text style={{fontSize: 10}}>Get up to 50 Gigapoints for Sharing Smart app</Text>
        </Text>
        <Text style={{fontSize: 20}}>{">"}</Text>
      </View>

      <View style={styles.three}>
        
        <View style={styles.row1}>

          <Text style={{color: 'white', fontSize: 10}}>
          Load{'\n'}
          <Text style={{fontWeight: 'bold', fontSize: 30}}>
           P0.50
          </Text>
          {'\n'}Exp 08-AUG-2024 05:37PM
          </Text>

          <Image source={require('./assets/images/plus.png')}
        style={{height: 35, width: 35, resizeMode: 'contain'}}/>
       
        <Text style={{color: 'white', fontSize: 10}}>
        Points{'\n'}
        <Text style={{fontWeight: 'bold', fontSize: 30}}>
         25.85
        </Text>
        {'\n'}20.20 Points Exp 31-Dec-2023
        </Text>

        <Image source={require('./assets/images/gift3.png')}
        style={{height: 35, width: 35, resizeMode: 'contain'}}/>
        </View>
          
        <View style={styles.row2}>

          <Text style={{color: 'white', fontSize: 15}}>
          Subscribe to{'\n'}
          <Text style={{fontWeight: 900, fontSize: 23}}>
           NO ACTIVE PROMO
          </Text>
          </Text>

          <View style={
            {backgroundColor: '#1495cf',
            marginTop: 8,
             width: 190, 
             height: 25,
             borderRadius: 50,
             justifyContent: "space-evenly",
             alignContent: 'center',
             alignItems: 'center'}}>
            <Text style={{fontSize: 13,fontWeight: '400', color: 'white'}}>Buy Double GIGA STORIES+ 130</Text>
          </View>
       
        </View>

        <View style={styles.row1}>

        <Image source={require('./assets/images/tnt.png')}
        style={{height: 30, width: 30, resizeMode: 'contain'}}/>
        
        <Text style={{color: 'white', fontSize: 14,}}>
        <Text style={{fontWeight: 900}}>
        TNT
        </Text>{'\n'}
        <Text style={{fontSize: 14}}>
         09460257723
        </Text>
        </Text>

        <View style={
          {backgroundColor: '#c45c34',
           width: 70, 
           marginTop: 18,
           height: 15,
           borderRadius: 5,
           justifyContent: "space-evenly",
           alignContent: 'center',
           alignItems: 'center', flexDirection: 'row'}}>
           <Image source={require('./assets/images/check.png')}
           style={{resizeMode: 'contain', width:9, height:9}}/>
          <Text style={{fontSize: 10,fontWeight: 900, color: 'white'}}>REGISTERED</Text>
        </View>

        <View style={
          {backgroundColor: '#1495cf',
           width: 130, 
           height: 35,
           borderRadius: 50,
           justifyContent: "space-evenly",
           alignContent: 'center',
           alignItems: 'center', flexDirection: 'row'}}>
           <Image source={require('./assets/images/checklist.png')}
           style={{resizeMode: 'contain', width:20, height:25}}/>
          <Text style={{fontSize: 13,fontWeight: 900, color: 'white'}}>CHECK USAGE</Text>
        </View>
      </View>
      </View>

      <View style= {[styles.dot]}>
        <Image source={require('./assets/images/more.png')}
        style={{resizeMode: 'contain', width:60, height:50}}/>
      </View>
       
      <View style={[styles.two2]}>
        <Image source={require('./assets/images/offers.png')}
        style={{resizeMode: 'contain', width:350, height:90}}/>
      </View>

      <View style={styles.four}>
        <Image source={require('./assets/images/1.png')}
        style={{resizeMode: 'contain', width:85, height:85}}/>
        <Image source={require('./assets/images/2.png')}
        style={{resizeMode: 'contain', width:85, height:85}}/>
        <Image source={require('./assets/images/3.png')}
        style={{resizeMode: 'contain', width:85, height:85}}/>
        <Image source={require('./assets/images/5.png')}
        style={{resizeMode: 'contain', width:85, height:85}}/>
        <Image source={require('./assets/images/4.png')}
        style={{resizeMode: 'contain', width:85, height:85}}/>
        <Image source={require('./assets/images/6.png')}
        style={{resizeMode: 'contain', width:85, height:85}}/>
        <Image source={require('./assets/images/7.png')}
        style={{resizeMode: 'contain', width:85, height:85}}/>
        <Image source={require('./assets/images/8.png')}
        style={{resizeMode: 'contain', width:85, height:85}}/>
      </View>

      <View style={styles.five}>
        <View style={styles.six}>
            <Image source={require('./assets/images/gift2.png')}
            style={{resizeMode: 'contain', width: 35, height:35}}/>
            <Image source={require('./assets/images/wallet.png')}
            style={{resizeMode: 'contain', width: 35, height:35}}/>
            <Image source={require('./assets/images/home.png')}
            style={{resizeMode: 'contain', width: 35, height:35}}/>
            <Image source={require('./assets/images/give.png')}
            style={{resizeMode: 'contain', width: 35, height:35}}/>
            <Image source={require('./assets/images/atm.png')}
            style={{resizeMode: 'contain', width: 35, height:35}}/>
        </View>

        <View style={styles.seven}>
          <Text style={{fontSize:14}}>GigaPoints </Text>
          <Text style={{fontSize:14}}>GigaPay </Text>
          <Text style={{fontSize:14}}> Home       </Text>
          <Text style={{fontSize:14}}>Pasa </Text>
          <Text style={{fontSize:14}}>  Accounts </Text>
    </View>
        
      </View>
      <StatusBar style="auto" />
    </View>

  );
}

