//import Screens
import HomeScreen from "./screens/HomeScreen";
import AddNewContactScreen from "./screens/AddNewContactScreen";
import EditContactScreen from "./screens/EditContactScreen";
import ViewContactScreen from "./screens/ViewContactScreen";


//import React-Naviagtion
import {createAppContainer,createStackNavigator} from "react-navigation";


//create navigator to navigate to screens
const MainNavigator=createStackNavigator(
  {
    Home:{screen:HomeScreen},
    Add:{screen:AddNewContactScreen},
    Edit:{screen:EditContactScreen},
    View:{screen:ViewContactScreen}
  },
  {
    defaultNavigationOptions:{
      headerTintColor:"#fff",
      headerStyle:{
        backgroundColor:"#45CE30"
      },
      headerTitleStyle:{
        color:"#fff"
      }
    }
  }
)
const App=createAppContainer(MainNavigator);
export default App;