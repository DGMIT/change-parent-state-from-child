import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Child from './Child';


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
      super(props);
      this._onPress = this._onPress.bind(this);

      this.state = {
        fromChildText: 0,
      }
  }

  _onPress = (pText) => {
    this.setState({ fromChildText: pText });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Text>Changing parent's state value from child component</Text>
        <Text style={{ fontSize: 50 }}>{this.state.fromChildText}</Text>
        <Child onPress={(pText)=>this._onPress(pText)} seed={this.state.fromChildText}/>
      </View>
    );
  }
}
