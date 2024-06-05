import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {useNavigation} from '@react-navigation/native'
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');


export function Inicial() {
    const navigation = useNavigation()

    const[sensorProximo, setSensorProximo] = useState(null);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    
    const [la, setLa] = useState(null)
    const [lo, setLo] = useState(null)

    const [distance1, setDistance1] = useState(null); // Distância até o ponto fixo 1
    const [distance2, setDistance2] = useState(null); // Distância até o ponto fixo 2
    const [temp, setTemp] = useState(null)
    const [x, setX] = useState(null)


    const initialRegion = {
        latitude: -22.9140639,
        longitude: -47.068686,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    };

    const haversine = (lat1, lon1, lat2, lon2) => {
        const toRad = (value) => (value * Math.PI) / 180;

        const R = 6371000; // Raio da Terra em metros
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distância em metros

        return d;
    };

    const fixedPoints = [
        {
            id: 1,
            latitude: -22.9140639, // Exemplo de coordenada 1
            longitude: -47.068065, // Exemplo de coordenada 1
        },
        {
            id: 2,
            latitude: -22.9141804, // Exemplo de coordenada 2
            longitude: -47.0683294, // Exemplo de coordenada 2
        }
    ];

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            const locationSubscription = await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High,
                    timeInterval: 1000,
                    distanceInterval: 1,
                },
                (newLocation) => {
                    setLocation(newLocation.coords);
                    setLa(newLocation.coords.latitude)
                    setLo(newLocation.coords.longitude)

                    // Calcular a distância entre a localização atual e os pontos fixos
                    const distanceToFixedPoint1 = haversine(la, lo, fixedPoints[0]['latitude'], fixedPoints[0]['longitude']);
                    const distanceToFixedPoint2 = haversine(la, lo, fixedPoints[1]['latitude'], fixedPoints[1]['longitude']);
                    setDistance1(distanceToFixedPoint1);
                    setDistance2(distanceToFixedPoint2);
                    if (distanceToFixedPoint1 <= distanceToFixedPoint2) {
                        const sensor = fixedPoints[0]
                        setSensorProximo(sensor)
                        console.log(`Latitude: ${sensor.latitude}`)
                        console.log(`Longitude: ${sensor.longitude}`)
                        
                        setTemp(fixedPoints[0]['temp'])
                    } else {
                        const sensor = fixedPoints[0]
                        setSensorProximo(fixedPoints[1])
                        console.log(`Latitude: ${sensor.latitude}`)
                        console.log(`Longitude: ${sensor.longitude}`)
                        setTemp(fixedPoints[1]['temp'])
                    }

                }

            );

            return () => {
                locationSubscription.remove();
            };
        })();
    }, []);

    let text = 'Waiting...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = `Latitude: ${location.latitude}, Longitude: ${location.longitude}`;

    }

    return (
        <View style={estilos.container}>
            <MapView
                style={estilos.map}
                initialRegion={initialRegion}
            >
                <Marker coordinate={{ latitude: -22.915, longitude: -47.0678 }} />
                {fixedPoints.map(point => (
                    <Marker
                        key={point.id}
                        coordinate={{ latitude: point.latitude, longitude: point.longitude }}
                        pinColor="blue" // Cor do marcador para os pontos fixos
                    />
                ))}
                {location && (
                    <Marker
                        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                        pinColor="red" // Cor do marcador para a localização atual
                    />
                )}
            </MapView>

            <View style={estilos.cxs}>
                <View style={estilos.cx}><Text style={estilos.cxTxt}>Latitude: </Text><Text style={estilos.cxTxt}>{la}</Text></View>
                <View style={estilos.cx}><Text style={estilos.cxTxt}>Longitude: </Text><Text style={estilos.cxTxt}>{lo}</Text></View>
                <View style={estilos.cx}><Text style={estilos.cxTxt}>Distância até o ponto fixo 1: </Text>{distance1 !== null && <Text style={estilos.cxTxt}>{distance1.toFixed(1)} metros</Text>}</View>
                <View style={estilos.cx}><Text style={estilos.cxTxt}>Distância até o ponto fixo 2: </Text>{distance1 !== null && <Text style={estilos.cxTxt}>{distance1.toFixed(2)} metros</Text>}</View>
                <View style={estilos.cx}><Text style={estilos.cxTxt}>Temperatura:</Text><Text style={estilos.cxTxt}>{temp}ºC</Text></View>
            </View>
        </View>
    );
}


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '100%',
    height: 80,
    // backgroundColor:"#ff0",
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: width - 40,
    height: height / 2,
    borderRadius: 10,
  },
  button: {
    width: "70%",
    height: 40,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white'
  },
  cxs: {
    // backgroundColor: '#f00',
    width: '80%'
  },
  cx: {
    // backgroundColor: '#ff0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 8,
    borderWidth: 1,
    padding: 5,
    borderColor: '#999'
  },
  cxTxt: {
    fontSize: 12,
  }
});




// import {StyleSheet, View, ImageBackground} from 'react-native'
// import {Cabecalho} from '../componentes/Cabecalho'
// import { Botao } from '../componentes/Botao';
// import { 
//   requestForegroundPermissionsAsync, 
//   getCurrentPositionAsync, 
//   LocationObject, 
//   watchPositionAsync,
//   LocationAccuracy} from 'expo-location';
// import { useEffect, useState, useRef } from 'react';
// import MapView, { Marker } from 'react-native-maps';

// export const Inicial = () => {
//   const [location, setLocation] = useState<LocationObject | null>(null);


//   const mapRef = useRef<MapView>(null);

// async function requestLocationPermission(){
//   const {granted} = await requestForegroundPermissionsAsync();

//   if(granted){
//     const currentPosition = await getCurrentPositionAsync();
//     setLocation(currentPosition);

   
//   }
  
// }

// useEffect(()=>{
//   requestLocationPermission();

// },[]);

// useEffect(() => {
//   watchPositionAsync({
//     accuracy: LocationAccuracy.Highest,
//     timeInterval:1000,
//     distanceInterval:1
//   }, (response) =>{
//     setLocation(response);
//     mapRef.current?.animateCamera({
//       pitch: 70,
//       center: response.coords
//     })

//   });
// }, []);

//   return (
//     <View style={estilos.conteiner}>

//       {
//           location &&
//             <MapView
//             ref={mapRef}
//             style={estilos.map}
//             initialRegion={{
//               latitude:location.coords.latitude,
//               longitude:location.coords.longitude,
//               latitudeDelta: 0.005,
//               longitudeDelta: 0.005
//         }}
//         >
//           <Marker
//             coordinate={{
//               latitude:location.coords.latitude,
//               longitude:location.coords.longitude,
//             }}
//           />
//           </MapView>
//       }
     

//     </View>
//   );
// }

// const estilos = StyleSheet.create({
//   conteiner: {
//     flex: 1,
//     backgroundColor: '#080a0c'
//   },
//   fundo: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     resizeMode: 'cover'
// },
//   map:{
//     flex:1,
//     width:'100%',
//   }
// });

