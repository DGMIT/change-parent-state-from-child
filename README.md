# change-parent-state-from-child
an example for passing event &amp; params from child to parent


ㅁ react-native <br/>
부모 컴포넌트에서 자식 컴포넌트에 state 값과 이벤트메소드를 넘기고 
자식 컴포넌트에서 부모 컴포넌트의 state 값을 이벤트메소드를 이용해 수정하는 예제 프로젝트

<img src="http://repo-cdn.dgmit.net:53535/github/change-parent-state-from-child/run_example.png"/>


ㅁ 부모컴포넌트 (App.js)
<pre>
<code>
<!-- HTML generated using hilite.me --><div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #6ab825; font-weight: bold">import</span> <span style="color: #d0d0d0">React,</span> <span style="color: #d0d0d0">{Component}</span> <span style="color: #d0d0d0">from</span> <span style="color: #ed9d13">&#39;react&#39;</span><span style="color: #d0d0d0">;</span>
<span style="color: #6ab825; font-weight: bold">import</span> <span style="color: #d0d0d0">{Text,</span> <span style="color: #d0d0d0">View}</span> <span style="color: #d0d0d0">from</span> <span style="color: #ed9d13">&#39;react-native&#39;</span><span style="color: #d0d0d0">;</span>
<span style="color: #6ab825; font-weight: bold">import</span> <span style="color: #d0d0d0">Child</span> <span style="color: #d0d0d0">from</span> <span style="color: #ed9d13">&#39;./Child&#39;</span><span style="color: #d0d0d0">;</span>


<span style="color: #d0d0d0">type</span> <span style="color: #d0d0d0">Props</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">{};</span>
<span style="color: #6ab825; font-weight: bold">export</span> <span style="color: #6ab825; font-weight: bold">default</span> <span style="color: #6ab825; font-weight: bold">class</span> <span style="color: #d0d0d0">App</span> <span style="color: #6ab825; font-weight: bold">extends</span> <span style="color: #d0d0d0">Component&lt;Props&gt;</span> <span style="color: #d0d0d0">{</span>
  <span style="color: #d0d0d0">constructor(props)</span> <span style="color: #d0d0d0">{</span>
      <span style="color: #6ab825; font-weight: bold">super</span><span style="color: #d0d0d0">(props);</span>
      <span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">._onPress</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">._onPress.bind(</span><span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">);</span>

      <span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.state</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">{</span>
        <span style="color: #d0d0d0">fromChildText:</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">,</span>
      <span style="color: #d0d0d0">}</span>
  <span style="color: #d0d0d0">}</span>

  <span style="color: #d0d0d0">_onPress</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">(pText)</span> <span style="color: #d0d0d0">=&gt;</span> <span style="color: #d0d0d0">{</span>
    <span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.setState({</span> <span style="color: #d0d0d0">fromChildText:</span> <span style="color: #d0d0d0">pText</span> <span style="color: #d0d0d0">});</span>
  <span style="color: #d0d0d0">}</span>

  <span style="color: #d0d0d0">render()</span> <span style="color: #d0d0d0">{</span>
    <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">(</span>
      <span style="color: #d0d0d0">&lt;View</span> <span style="color: #d0d0d0">style={{</span> <span style="color: #d0d0d0">flex:</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">justifyContent:</span> <span style="color: #ed9d13">&#39;center&#39;</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">alignItems:</span> <span style="color: #ed9d13">&#39;center&#39;</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">flexDirection:</span> <span style="color: #ed9d13">&#39;column&#39;</span> <span style="color: #d0d0d0">}}&gt;</span>
        <span style="color: #d0d0d0">&lt;Text&gt;Changing</span> <span style="color: #d0d0d0">parent</span><span style="color: #a61717; background-color: #e3d2d2">&#39;</span><span style="color: #d0d0d0">s</span> <span style="color: #d0d0d0">state</span> <span style="color: #d0d0d0">value</span> <span style="color: #d0d0d0">from</span> <span style="color: #d0d0d0">child</span> <span style="color: #d0d0d0">component&lt;</span><span style="color: #a61717; background-color: #e3d2d2">/Text&gt;</span>
        <span style="color: #d0d0d0">&lt;Text</span> <span style="color: #d0d0d0">style={{</span> <span style="color: #d0d0d0">fontSize:</span> <span style="color: #3677a9">50</span> <span style="color: #d0d0d0">}}&gt;{</span><span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.state.fromChildText}&lt;</span><span style="color: #a61717; background-color: #e3d2d2">/Text&gt;</span>
        <span style="color: #d0d0d0">&lt;Child</span> <span style="color: #d0d0d0">onPress={(pText)=&gt;</span><span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">._onPress(pText)}</span> <span style="color: #d0d0d0">seed={</span><span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.state.fromChildText}/&gt;</span>
      <span style="color: #d0d0d0">&lt;</span><span style="color: #a61717; background-color: #e3d2d2">/View&gt;</span>
    <span style="color: #d0d0d0">);</span>
  <span style="color: #d0d0d0">}</span>
<span style="color: #d0d0d0">}</span>
</pre></div>

  </code>
</pre>

ㅁ 자식컴포넌트 (Child.js)
<pre>
<code>
<!-- HTML generated using hilite.me --><div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #6ab825; font-weight: bold">import</span> <span style="color: #d0d0d0">React,</span> <span style="color: #d0d0d0">{Component}</span> <span style="color: #d0d0d0">from</span> <span style="color: #ed9d13">&#39;react&#39;</span><span style="color: #d0d0d0">;</span>
<span style="color: #6ab825; font-weight: bold">import</span> <span style="color: #d0d0d0">{</span>
  <span style="color: #d0d0d0">Platform,</span> <span style="color: #d0d0d0">StyleSheet,</span> <span style="color: #d0d0d0">Text,</span> <span style="color: #d0d0d0">View,</span>
  <span style="color: #d0d0d0">TouchableOpacity</span>
<span style="color: #d0d0d0">}</span> <span style="color: #d0d0d0">from</span> <span style="color: #ed9d13">&#39;react-native&#39;</span><span style="color: #d0d0d0">;</span>

<span style="color: #d0d0d0">type</span> <span style="color: #d0d0d0">Props</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">{};</span>
<span style="color: #6ab825; font-weight: bold">export</span> <span style="color: #6ab825; font-weight: bold">default</span> <span style="color: #6ab825; font-weight: bold">class</span> <span style="color: #d0d0d0">Child</span> <span style="color: #6ab825; font-weight: bold">extends</span> <span style="color: #d0d0d0">Component&lt;Props&gt;</span> <span style="color: #d0d0d0">{</span>
  <span style="color: #d0d0d0">render()</span> <span style="color: #d0d0d0">{</span>
    <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">(</span>
      <span style="color: #d0d0d0">&lt;View&gt;</span>
      <span style="color: #d0d0d0">&lt;TouchableOpacity</span> <span style="color: #d0d0d0">onPress={()=&gt;</span><span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.props.onPress(</span><span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.props.seed</span> <span style="color: #d0d0d0">+</span> <span style="color: #3677a9">10</span><span style="color: #d0d0d0">)}&gt;</span>
        <span style="color: #d0d0d0">&lt;View</span> <span style="color: #d0d0d0">style={{</span> <span style="color: #d0d0d0">width:</span> <span style="color: #3677a9">200</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">height:</span> <span style="color: #3677a9">100</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">borderRadius:</span> <span style="color: #3677a9">10</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">borderWidth:</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">padding:</span> <span style="color: #3677a9">10</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">}}&gt;</span>
            <span style="color: #d0d0d0">&lt;Text</span> <span style="color: #d0d0d0">style={{</span> <span style="color: #d0d0d0">fontSize:</span> <span style="color: #3677a9">20</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">textAlign:</span> <span style="color: #ed9d13">&#39;center&#39;</span><span style="color: #d0d0d0">}}&gt;ADD</span> <span style="color: #3677a9">10</span> <span style="color: #d0d0d0">TO</span> <span style="color: #d0d0d0">PARENT</span><span style="color: #ed9d13">&#39;s STATE VALUE&lt;/Text&gt;</span>
<span style="color: #ed9d13">        &lt;/View&gt;</span>
<span style="color: #ed9d13">      &lt;/TouchableOpacity&gt;</span>
<span style="color: #ed9d13">      &lt;TouchableOpacity onPress={()=&gt;this.props.onPress(this.props.seed - 10)}&gt;</span>
<span style="color: #ed9d13">        &lt;View style={{ width: 200, height: 100, borderRadius: 10, borderWidth: 1, padding: 10, }}&gt;</span>
<span style="color: #ed9d13">            &lt;Text style={{ fontSize: 20, textAlign: &#39;</span><span style="color: #d0d0d0">center</span><span style="color: #ed9d13">&#39;}}&gt;SUBSTRACT 10 TO PARENT&#39;</span><span style="color: #d0d0d0">s</span> <span style="color: #d0d0d0">STATE</span> <span style="color: #d0d0d0">VALUE&lt;</span><span style="color: #a61717; background-color: #e3d2d2">/Text&gt;</span>
        <span style="color: #d0d0d0">&lt;</span><span style="color: #a61717; background-color: #e3d2d2">/View&gt;</span>
      <span style="color: #d0d0d0">&lt;</span><span style="color: #a61717; background-color: #e3d2d2">/TouchableOpacity&gt;</span>
      <span style="color: #d0d0d0">&lt;</span><span style="color: #a61717; background-color: #e3d2d2">/View&gt;</span>
    <span style="color: #d0d0d0">);</span>
  <span style="color: #d0d0d0">}</span>
<span style="color: #d0d0d0">}</span>
</pre></div>

  </code>
</pre>
