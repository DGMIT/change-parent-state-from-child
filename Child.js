import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View,
  TouchableOpacity
} from 'react-native';

type Props = {};
export default class Child extends Component<Props> {
  render() {
    return (
      <View>
      <TouchableOpacity onPress={()=>this.props.onPress(this.props.seed + 10)}>
        <View style={{ width: 200, height: 100, borderRadius: 10, borderWidth: 1, padding: 10, }}>
            <Text style={{ fontSize: 20, textAlign: 'center'}}>PUSH TO +10 TO PARENT's STATE VALUE</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.onPress(this.props.seed - 10)}>
        <View style={{ width: 200, height: 100, borderRadius: 10, borderWidth: 1, padding: 10, }}>
            <Text style={{ fontSize: 20, textAlign: 'center'}}>PUSH TO -10 TO PARENT's STATE VALUE</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  }
}
