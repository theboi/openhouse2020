import React, {useContext} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {HeaderSmall} from '../../components/Text/HeaderSmall';
import {Header} from '../../components/Text/Header';
//@ts-ignore
import Confetti from 'react-native-confetti';
//@ts-ignore
import pvpTalk from '../../../assets/images/pvp_talk.png';
import {SpecialEventCard} from '../../components/Card/SpecialEvent';
import {NavigationInjectedProps} from 'react-navigation';
import {EventCard} from '../../components/Card/Event';
import {EventCatCard} from '../../components/Card/EventCategory';

// @ts-ignore
import anniversaryConfetti from '../../../assets/images/anniversary_confetti.png';
// @ts-ignore
import {Layout, Icon, withStyles, Text} from '@ui-kitten/components';
import {ThemedIcon} from '../../components/Icon/ThemedIcon';
import {ThemeContext} from '../../functions/theme';
// @ts-ignore
import gettingToSST from '../../../assets/images/getting_to_sst.png';
import { FlatList } from 'react-native-gesture-handler';

class HomePage extends React.Component<NavigationInjectedProps> {
  static contextType = ThemeContext;
  static navigationOptions = {
    header: null,
  };
  private _confettiView: any;

  render() {
    return (
      <Layout
        style={{
          flex: 1,
        }}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        <SafeAreaView
          style={{
            flex: 1,
          }}>
          <View
            style={{
              paddingTop: 10,
              paddingLeft: 25,
              paddingRight: 25,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <HeaderSmall
                style={{
                  ...Platform.select({
                    ios: {
                      fontFamily: 'Raleway',
                    },
                    android: {
                      fontWeight: undefined,
                      fontFamily: 'Raleway 700',
                    },
                  }),
                }}>
                D I S C O V E R
              </HeaderSmall>
              <Header
                style={{
                  ...Platform.select({
                    ios: {
                      fontWeight: '700',
                      fontFamily: 'Raleway',
                    },
                    android: {
                      fontWeight: undefined,
                      fontFamily: 'Raleway 700',
                    },
                  }),
                  marginTop: 5,
                }}>
                Events
              </Header>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexDirection: 'row',
              }}>
              <ThemeContext.Consumer>
                {theme => (
                  <TouchableOpacity
                    style={{marginRight: 15}}
                    onPress={() => {
                      theme.toggleTheme();
                    }}>
                    <ThemedIcon name={'search'} size={30} />
                  </TouchableOpacity>
                )}
              </ThemeContext.Consumer>
              <TouchableOpacity
                onPress={() => this.props.navigation.openDrawer()}>
                <Layout
                  style={{
                    padding: 10,
                    borderRadius: 25,
                    elevation: 10,
                    shadowColor: 'black',
                    shadowOffset: {width: 0, height: 0},
                    shadowOpacity: 0.16,
                    shadowRadius: 10,
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 20,
                  }}>
                  <ThemedIcon name={'menu'} size={30} />
                </Layout>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 25,
              paddingRight: 25,
              paddingLeft: 25,
              paddingTop: 25,
            }}>
            <SpecialEventCard
              image={pvpTalk}
              title={'PVP Talk'}
              subtitle={'Auditorium'}
              time={`10.30am to\n11.30am`}
            />
            <ThemeContext.Consumer>
              {theme => (
                <EventCard
                  style={{
                    backgroundColor:
                      theme.theme === 'light'
                        ? 'rgba(18, 113, 237, 0.24)'
                        : '#0D57CB',
                  }}
                  onPress={() => {
                    this.props.navigation.navigate('Anniversary');
                  }}>
                  <View
                    style={{
                      marginLeft: 25,
                      marginRight: 25,
                      flex: 1,
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      category={'h5'}
                      style={{
                        opacity: 0.75,
                        ...Platform.select({
                          android: {
                            fontFamily: 'Raleway 700',
                          },
                          ios: {
                            fontFamily: 'Raleway',
                            fontWeight: '700',
                          },
                        }),
                        lineHeight: 25,
                        marginTop: 20,
                        marginBottom: 20,
                      }}>
                      {`Getting to\nSST`}
                    </Text>
                    <View
                      style={{
                        marginTop: 5,
                        marginBottom: 5,
                      }}>
                      <Image
                        source={gettingToSST}
                        style={{
                          resizeMode: 'contain',
                          height: '100%',
                        }}
                      />
                    </View>
                  </View>
                </EventCard>
              )}
            </ThemeContext.Consumer>
            <EventCard
              image={anniversaryConfetti}
              title={`10 Years of\nTransforming Learning`}
              onPress={() => {
                this.props.navigation.navigate('Anniversary');
              }}
            />
            <Header
              variant={4}
              style={{
                ...Platform.select({
                  ios: {
                    fontWeight: '700',
                    fontFamily: 'Raleway',
                  },
                  android: {
                    fontWeight: undefined,
                    fontFamily: 'Raleway 700',
                  },
                }),
                //app builds tho hmmm..........
                marginTop: 20,
              }}>
              Categories
            </Header>
            <View
            style={{
              flexDirection: 'row'
              }}>
              <EventCatCard
                title="Essential"
                icon="book-outline"
                onPress={() => {
                  this.props.navigation.navigate('Anniversary');
                }}
              />
              <EventCatCard
                title="Hands On"
                icon="book-outline"
                onPress={() => {
                  this.props.navigation.navigate('Anniversary');
                }}
              />
              <EventCatCard
                title="Hands On"
                icon="book-outline"
                onPress={() => {
                  this.props.navigation.navigate('Anniversary');
                }}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
        <Confetti
          ref={(node: any) => (this._confettiView = node)}
          colors={['#E60233', '#0077C8', '#5F6A72']}
          duration={3000}
        />
      </Layout>
    );
  }
}

export default HomePage;
