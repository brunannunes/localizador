import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Inicial } from '../telas/Inicial'
import {Usuarios} from '../telas/Usuarios'
import {AmbientesEquipamentos} from '../telas/AmbientesEquipamentos'
import { House, MapPin , UserCircle } from 'phosphor-react-native';

const { Navigator, Screen } = createBottomTabNavigator()

export function RotasTab(){
    return(
        <Navigator screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#6c757d',
            tabBarStyle: {
                backgroundColor: '#4f030a',
                borderTopColor: 0,
                paddingBottom: 10,
                paddingTop: 10
            }
        }}>

            <Screen 
                name='inicial'
                component={Inicial}
                options={{
                    tabBarIcon: ({color, size}) => (
                       <House  size={22} color='#fff'/>
                    )
                }}
            />

            <Screen 
                name='usuarios'
                component={Usuarios}
                options={{
                    tabBarIcon: ({color, size}) => (
                       <MapPin size={22} color='#fff'/>
                    )
                }}                
            />

            <Screen 
                name='ambiente'
                component={AmbientesEquipamentos}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <UserCircle size={22} color='#fff'/>
                    )
                }}                
            />

        </Navigator>
    )
}