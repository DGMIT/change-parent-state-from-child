# change-parent-state-from-child
an example for passing event &amp; params from child to parent


ㅁ react-native <br/>
부모 컴포넌트에서 자식 컴포넌트에 state 값과 이벤트메소드를 넘기고 
자식 컴포넌트에서 부모 컴포넌트의 state 값을 이벤트메소드를 이용해 수정하는 예제 프로젝트

<img src="http://repo-cdn.dgmit.net:53535/github/change-parent-state-from-child/run_example.png"/>


ㅁ 부모컴포넌트 (App.js)
<pre>
<code>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">import React, {Component} from &#39;react&#39;;
import {Text, View} from &#39;react-native&#39;;
import Child from &#39;./Child&#39;;


type Props = {};
export default class App extends Component<span style="color: #007700">&lt;Props&gt;</span> {
  constructor(props) {
      super(props);
      this._onPress = this._onPress.bind(this);

      this.state = {
        fromChildText: 0,
      }
  }

  _onPress = (pText) =&gt; {
    this.setState({ fromChildText: pText });
  }

  render() {
    return (
      <span style="color: #007700">&lt;View</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">{{</span> <span style="color: #0000CC">flex:</span> <span style="color: #0000CC">1</span><span style="color: #FF0000; background-color: #FFAAAA">,</span> <span style="color: #0000CC">justifyContent:</span> <span style="color: #FF0000; background-color: #FFAAAA">&#39;</span><span style="color: #0000CC">center</span><span style="color: #FF0000; background-color: #FFAAAA">&#39;,</span> <span style="color: #0000CC">alignItems:</span> <span style="color: #FF0000; background-color: #FFAAAA">&#39;</span><span style="color: #0000CC">center</span><span style="color: #FF0000; background-color: #FFAAAA">&#39;,</span> <span style="color: #0000CC">flexDirection:</span> <span style="color: #FF0000; background-color: #FFAAAA">&#39;</span><span style="color: #0000CC">column</span><span style="color: #FF0000; background-color: #FFAAAA">&#39;</span> <span style="color: #FF0000; background-color: #FFAAAA">}}</span><span style="color: #007700">&gt;</span>
        <span style="color: #007700">&lt;Text&gt;</span>Changing parent&#39;s state value from child component<span style="color: #007700">&lt;/Text&gt;</span>
        <span style="color: #007700">&lt;Text</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">{{</span> <span style="color: #0000CC">fontSize:</span> <span style="color: #0000CC">50</span> <span style="color: #FF0000; background-color: #FFAAAA">}}</span><span style="color: #007700">&gt;</span>{this.state.fromChildText}<span style="color: #007700">&lt;/Text&gt;</span>
        <span style="color: #007700">&lt;Child</span> <span style="color: #0000CC">onPress=</span><span style="background-color: #fff0f0">{(pText)=</span><span style="color: #007700">&gt;</span>this._onPress(pText)} seed={this.state.fromChildText}/&gt;
      <span style="color: #007700">&lt;/View&gt;</span>
    );
  }
}
</pre></div>

  </code>
</pre>

ㅁ 자식컴포넌트 (Child.js)
<pre>
<code>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">import React, {Component} from &#39;react&#39;;
import {
  Platform, StyleSheet, Text, View,
  TouchableOpacity
} from &#39;react-native&#39;;

type Props = {};
export default class Child extends Component<span style="color: #007700">&lt;Props&gt;</span> {
  render() {
    return (
      <span style="color: #007700">&lt;View&gt;</span>
      <span style="color: #007700">&lt;TouchableOpacity</span> <span style="color: #0000CC">onPress=</span><span style="background-color: #fff0f0">{()=</span><span style="color: #007700">&gt;</span>this.props.onPress(this.props.seed + 10)}&gt;
        <span style="color: #007700">&lt;View</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">{{</span> <span style="color: #0000CC">width:</span> <span style="color: #0000CC">200</span><span style="color: #FF0000; background-color: #FFAAAA">,</span> <span style="color: #0000CC">height:</span> <span style="color: #0000CC">100</span><span style="color: #FF0000; background-color: #FFAAAA">,</span> <span style="color: #0000CC">borderRadius:</span> <span style="color: #0000CC">10</span><span style="color: #FF0000; background-color: #FFAAAA">,</span> <span style="color: #0000CC">borderWidth:</span> <span style="color: #0000CC">1</span><span style="color: #FF0000; background-color: #FFAAAA">,</span> <span style="color: #0000CC">padding:</span> <span style="color: #0000CC">10</span><span style="color: #FF0000; background-color: #FFAAAA">,</span> <span style="color: #FF0000; background-color: #FFAAAA">}}</span><span style="color: #007700">&gt;</span>
            <span style="color: #007700">&lt;Text</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">{{</span> <span style="color: #0000CC">fontSize:</span> <span style="color: #0000CC">20</span><span style="color: #FF0000; background-color: #FFAAAA">,</span> <span style="color: #0000CC">textAlign:</span> <span style="color: #FF0000; background-color: #FFAAAA">&#39;</span><span style="color: #0000CC">center</span><span style="color: #FF0000; background-color: #FFAAAA">&#39;}}</span><span style="color: #007700">&gt;</span>ADD 10 TO PARENT&#39;s STATE VALUE<span style="color: #007700">&lt;/Text&gt;</span>
        <span style="color: #007700">&lt;/View&gt;</span>
      <span style="color: #007700">&lt;/TouchableOpacity&gt;</span>
      <span style="color: #007700">&lt;TouchableOpacity</span> <span style="color: #0000CC">onPress=</span><span style="background-color: #fff0f0">{()=</span><span style="color: #007700">&gt;</span>this.props.onPress(this.props.seed - 10)}&gt;
        <span style="color: #007700">&lt;View</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">{{</span> <span style="color: #0000CC">width:</span> <span style="color: #0000CC">200</span><span style="color: #FF0000; background-color: #FFAAAA">,</span> <span style="color: #0000CC">height:</span> <span style="color: #0000CC">100</span><span style="color: #FF0000; background-color: #FFAAAA">,</span> <span style="color: #0000CC">borderRadius:</span> <span style="color: #0000CC">10</span><span style="color: #FF0000; background-color: #FFAAAA">,</span> <span style="color: #0000CC">borderWidth:</span> <span style="color: #0000CC">1</span><span style="color: #FF0000; background-color: #FFAAAA">,</span> <span style="color: #0000CC">padding:</span> <span style="color: #0000CC">10</span><span style="color: #FF0000; background-color: #FFAAAA">,</span> <span style="color: #FF0000; background-color: #FFAAAA">}}</span><span style="color: #007700">&gt;</span>
            <span style="color: #007700">&lt;Text</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">{{</span> <span style="color: #0000CC">fontSize:</span> <span style="color: #0000CC">20</span><span style="color: #FF0000; background-color: #FFAAAA">,</span> <span style="color: #0000CC">textAlign:</span> <span style="color: #FF0000; background-color: #FFAAAA">&#39;</span><span style="color: #0000CC">center</span><span style="color: #FF0000; background-color: #FFAAAA">&#39;}}</span><span style="color: #007700">&gt;</span>SUBSTRACT 10 TO PARENT&#39;s STATE VALUE<span style="color: #007700">&lt;/Text&gt;</span>
        <span style="color: #007700">&lt;/View&gt;</span>
      <span style="color: #007700">&lt;/TouchableOpacity&gt;</span>
      <span style="color: #007700">&lt;/View&gt;</span>
    );
  }
}
</pre></div>
  </code>
</pre>
