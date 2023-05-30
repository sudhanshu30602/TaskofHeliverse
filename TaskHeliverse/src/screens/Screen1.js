import React, { useEffect } from 'react';
import { View, Text, Button, ImageBackground, Image } from 'react-native';
import Screen2 from './Screen2';

const Screen1 = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate(Screen2);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={{flex:1}}> 
    <ImageBackground
       style={{height:'100%', width:'100%'}}
       source={require('../assests/award_bg.png')}>

       <View style={{height:'88%', width:'100%', alignItems:'center', justifyContent:'flex-end' , marginBottom:150}}>
       <Image
                style={{height:'20%', width:'30%', justifyContent:'center', alignItems:'center',}}
                source={require('../assests/castingLogo.png')}
               > 
               </Image>
         <View style={{height:'40%', width:'100%', alignItems:'center', justifyContent:'center'}}>
         <View style={{height:'60%',width:'90%', justifyContent:'center', alignItems:'center', marginLeft: 30}}>
               <Text style={{fontSize:30, color:'pink', marginBottom:125}}>CASTING CALL</Text>
               </View>
              <View style={{height:'15%', marginBottom: 30}}>
               <Text style={{fontSize:30, color:'yellow', fontWeight:'bold'}}> Four Gave You Some Love</Text>
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

export default Screen1;
