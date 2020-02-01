import React, {useContext} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
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
// @ts-ignore
import anniversaryConfetti from '../../../assets/images/anniversary_confetti.png';
// @ts-ignore
import {Layout, Icon, withStyles, Text} from '@ui-kitten/components';
import {ThemedIcon} from '../../components/Icon/ThemedIcon';
import {ThemeContext} from '../../functions/theme';
// @ts-ignore
import gettingToSST from '../../../assets/images/getting_to_sst.png';
import {CategoryCard} from '../../components/Card/Category';
import {DetailCard} from '../../components/Card/Detail';
import {TouchableShadow} from '../../components/Shadow/Touchable';

import {PageHeader} from '../../components/PageHeader';

class HomePage extends React.Component<NavigationInjectedProps> {
  static contextType = ThemeContext;
  static navigationOptions = {
    header: null,
  };
  private _confettiView: any;

  componentDidMount(): void {
    // Events.getCategories().then((res) => {
    //   alert(JSON.stringify(res))
    // })
  }

  render() {
    return (
      <Layout
        style={{
          flex: 1,
        }}>
        <ThemeContext.Consumer>
          {theme => (
            <StatusBar
              barStyle={
                theme.theme === 'light' ? 'dark-content' : 'light-content'
              }
            />
          )}
        </ThemeContext.Consumer>
        <SafeAreaView
          style={{
            flex: 1,
          }}>
          <PageHeader
            navigation={this.props.navigation}
            title="Credits"
            subtitle="The App"
            searchTrue={false}
          />
          {/* Insert Image */}
          <Layout style={{paddingVertical: 40, paddingHorizontal: 20}}>
            <Header>SST Inc.</Header>
            <Text>
              Qin Guan {'\n'}Yee Jia Chen {'\n'}Jonathan Tan Jiayi {'\n'}Shannen
              Samuel Rajoo {'\n'}Ryan Theodore The {'\n'}
            </Text>
            <Header>Images</Header>
            <Text>
            https://icons8.com/ouch/ {'\n'}https://undraw.co/ {'\n'}
            </Text>
            <Header>
              Fonts
            </Header>
            <Text>
              IBM Plex Sans {'\n'}Raleway {'\n'}
            </Text>
          </Layout>
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
