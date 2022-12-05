import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HOME_TAB_SCREENS } from '..'

const Tab = createBottomTabNavigator()

export const HomeScreen = ({route, navigation}) => {
  return (
    <Tab.Navigator>
      {HOME_TAB_SCREENS.map(screen => (
        <Tab.Screen name={screen.name} component={screen.component} options={{title: screen.title}}/>
      ))}
    </Tab.Navigator>
  )
}