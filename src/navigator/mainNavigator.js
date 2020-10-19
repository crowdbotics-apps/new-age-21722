import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList150724Navigator from '../features/ArticleList150724/navigator';
import ArticleList150723Navigator from '../features/ArticleList150723/navigator';
import ArticleList150722Navigator from '../features/ArticleList150722/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList150724: { screen: ArticleList150724Navigator },
ArticleList150723: { screen: ArticleList150723Navigator },
ArticleList150722: { screen: ArticleList150722Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
