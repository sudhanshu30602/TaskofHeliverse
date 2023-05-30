import React, { useEffect, useState } from 'react';
import { View, Text, Animated, Button, Image, ImageBackground } from 'react-native';

const Screen2 = ({ navigation }) => {
  const [isUserEntering, setUserEntering] = useState(false);
  const [isUserLeaving, setUserLeaving] = useState(false);

  useEffect(() => {
    const enterAnimation = Animated.timing(new Animated.Value(0), {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });

    const leaveAnimation = Animated.timing(new Animated.Value(0), {
      toValue: -1,
      duration: 1000,
      useNativeDriver: true,
    });

    if (isUserEntering) {
      Animated.sequence([enterAnimation, leaveAnimation]).start(() => {
      navigation.navigate('Screen3');
      });
    }

    return () => {
      enterAnimation.stop();
      leaveAnimation.stop();
    };
  }, [isUserEntering, navigation]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setUserEntering(true);
    }, 20000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{flex:1}}>
    <>
      <Animated.View
        style={{
          transform: [
            {
              translateX: Animated.multiply(
                new Animated.Value(-200),
                new Animated.Value(isUserLeaving ? 1 : 0)
              ),
            },
          ],
        }}
      >
      </Animated.View>
      </>
      <ImageBackground
        style={{height:'100%', width:'100%'}}
        source={require('../assests/award_bg.png')}>
        <View style={{height:'88%', width:'100%', alignItems:'center', justifyContent:'flex-end'}}>
        <View style={{height: '15%',width: '100%',flexDirection:'row' }}>
             <View style = {{height:'100%',width:'40%',}}>
              <Image style={{height: '95%', width:'60%', borderRadius:60, marginLeft:20}} source={require('../assests/avtar2.png')}/>
             </View>
             <View style={{height:'100%', width:'60%', justifyContent:'space-evenly', alignItems:'center'}}>
              <View>
                 <Text style={{fontSize:40, color:'yellow'}}>D-Lister</Text>  
              </View>
              <View>
                <Text  style={{fontSize:20, color:'white'}}> Sally </Text>
              </View>
             </View>
          </View>
          <View style={{height:'35%', width:'100%', alignItems:'center', justifyContent:'center'}}>
               <View style={{height:'15%',}}>
                <Text style={{fontSize:30, color:'yellow', fontWeight:'bold'}}> Gave You Some Love</Text>
                </View>
                <View style={{height:'80%',width:'100%', justifyContent:'center', alignItems:'center', }}>
                <ImageBackground 
                 style={{height:'90%', width:'73%', justifyContent:'center', alignItems:'center', marginLeft:60}}
                 source={require('../assests/main-heart.png')}
                > 
                    <Text style={{fontSize:35, color:'yellow', fontWeight:'bold', marginRight:80}}>15000</Text>
                </ImageBackground>
                </View>
          </View>
        
        <View style={{height:'40%', width:'25%', alignItems:'center',}}>
            <Image
             style={{height:'100%', width:'100%'}}
             source={require('../assests/girlClap.png')}
            >
            </Image>
            <Image
              style={{width:'420%'}}
              source={require('../assests/awardPlatform.png')}
            >
            </Image>
        </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Screen2;
