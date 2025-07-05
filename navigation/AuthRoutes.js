import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import IngredientListScreen from '../screens/ingredient/ListScreen';
import IngredientDetailScreen from '../screens/ingredient/DetailScreen';
import DetailRecipeScreen from '../screens/recipes/DetailScreen'
import ShopListScreen from '../screens/shop/ShopListScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import FavouriteScreen from '../screens/main/FavouriteScreen';
import HelpScreen from '../screens/about/HelpScreen';
import TermsScreen from '../screens/about/TermsScreen'
import DrawerMenu from './DrawerMenu';
import { COLORS } from '../layout/GlobalTheme';
import { useAuth } from '../context/AuthContext';




const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackComponent = createStackNavigator();

export default function AuthRoutes() {

    const { logout } = useAuth()

    const handleLogout = async () => {
        await logout();
        navigation.navigate('Welcome');
    };

    const componentScreenTab = [
        {
            titulo: 'Recipes',
            imageIcon: require('../assets/recipe.png'),
            componente: HomeScreen

        },

        {
            titulo: 'Ingredients',
            imageIcon: require('../assets/ingredient.png'),
            componente: IngredientListScreen

        },
        {
            titulo: 'Cart',
            imageIcon: require('../assets/shopping.png'),
            componente: ShopListScreen

        },


    ]


    const TabNavigator = () => {
        return (

            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        position: 'absolute',
                        borderRadius: 20,
                        height: 60,
                        bottom: 1,
                        margin: 15,
                        shadowOpacity: 0.30,
                        shadowRadius: 4.65,
                        elevation: 8,
                    }
                }}
            >
                {
                    componentScreenTab.map(screen => (
                        <Tab.Screen name={screen.titulo} component={screen.componente}
                            key={screen.titulo}
                            options={{
                                tabBarIcon: ({ focused }) => (
                                    <View style={{
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <View style={{
                                            backgroundColor: focused ? COLORS.primary : null,
                                            borderRadius: 40,
                                            borderColor: focused ? '#D67F38' : null,
                                            borderWidth: focused ? 2 : null,
                                            width: focused ? 50 : 25,
                                            height: focused ? 50 : 25,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            top: focused ? 0 : 10
                                        }}
                                        >
                                            <Image
                                                source={screen.imageIcon}
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    tintColor: focused ? COLORS.white : "#808080"

                                                }}
                                            />
                                        </View>
                                        <Text
                                            style={{
                                                width: 50,
                                                textAlign: 'center',
                                                top: focused ? 0 : 10,
                                                color: focused ? COLORS.primary : "#808080",
                                                fontSize: 9
                                            }}
                                        >
                                            {screen.titulo}
                                        </Text>
                                    </View>
                                )
                            }}
                        />
                    ))}
            </Tab.Navigator>

        )
    }

    const StackRecipe = () => {
        return (
            <StackComponent.Navigator
                initialRouteName={"Main"}
                detachInactiveScreens={true}
                screenOptions={{
                    headerShown: false,
                    cardStyle: { backgroundColor: "transparent", flex: 1 },
                    //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            >
                <StackComponent.Screen
                    name="Main"
                    component={TabNavigator}
                />
                <StackComponent.Screen
                    name="DetailRecipe"
                    component={DetailRecipeScreen}
                    options={{
                        tabBarStyle: { display: 'none' }
                    }

                    }
                />
                <StackComponent.Screen
                    name="DetailIngredient"
                    component={IngredientDetailScreen}
                    options={{
                        tabBarStyle: { display: 'none' }
                    }

                    }
                />
            </StackComponent.Navigator >
        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#FFf" }}>
            <SafeAreaView style={{ height: "100%", backgroundColor: "#FFF" }}>
                <Drawer.Navigator
                    initialRouteName="Home"
                    drawerContent={() => <DrawerMenu homeNavigate={'Home'} />}
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Drawer.Screen name="Home" component={StackRecipe} />
                    <Drawer.Screen name="Profile" component={ProfileScreen} />
                    <Drawer.Screen name="Favourite" component={FavouriteScreen} />
                    <Drawer.Screen name="Help" component={HelpScreen} />
                    <Drawer.Screen name="Terms" component={TermsScreen} />
                    <Drawer.Screen name="Logout" component={handleLogout} />
                </Drawer.Navigator>
            </SafeAreaView>
        </SafeAreaView>
    )
} 
