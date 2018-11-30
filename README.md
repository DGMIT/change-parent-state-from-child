# change-parent-state-from-child
an example for passing event &amp; params from child to parent


ㅁ react-native <br/>
부모 컴포넌트에서 자식 컴포넌트에 state 값과 이벤트메소드를 넘기고 
자식 컴포넌트에서 부모 컴포넌트의 state 값을 이벤트메소드를 이용해 수정하는 예제 프로젝트

<img src="http://repo-cdn.dgmit.net:53535/github/change-parent-state-from-child/run_example.png"/>


ㅁ 부모컴포넌트 (App.js)
<pre>
<code>
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
  </code>
</pre>

ㅁ 자식컴포넌트 (Child.js)
<pre>
<code>
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
            <Text style={{ fontSize: 20, textAlign: 'center'}}>ADD 10 TO PARENT's STATE VALUE</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.onPress(this.props.seed - 10)}>
        <View style={{ width: 200, height: 100, borderRadius: 10, borderWidth: 1, padding: 10, }}>
            <Text style={{ fontSize: 20, textAlign: 'center'}}>SUBSTRACT 10 TO PARENT's STATE VALUE</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  }
}
  </code>
</pre>
