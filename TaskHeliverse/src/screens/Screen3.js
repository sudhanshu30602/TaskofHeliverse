import React, { useEffect, useState } from 'react';
import { View, Text, Button, ImageBackground, Image} from 'react-native';

const Screen3 = ({ navigation }) => {
  const [count, setCount] = useState(15000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{flex:1}}> 
     <ImageBackground
        style={{height:'100%', width:'100%'}}
        source={require('../assests/award_bg.png')}>

        <View style={{height:'88%', width:'100%', alignItems:'center', justifyContent:'flex-end'}}>
          <View style={{height:'35%', width:'100%', alignItems:'center', justifyContent:'center'}}>
               <View style={{height:'15%', marginBottom: 30}}>
                <Text style={{fontSize:30, color:'yellow', fontWeight:'bold'}}> Four Gave You Some Love</Text>
                </View>
                <View style={{height:'80%',width:'100%', justifyContent:'center', alignItems:'center', marginLeft: 60}}>
                <ImageBackground 
                 style={{height:'90%', width:'73%', justifyContent:'center', alignItems:'center'}}
                 source={require('../assests/main-heart.png')}
                > 
                    <Text style={{fontSize:35, color:'yellow', fontWeight:'bold', marginRight: 70}}>{count}</Text>
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

export default Screen3;
