(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/add-icon.1d0be7a6.svg"},13:function(e,t,a){e.exports=a.p+"static/media/subitem-icon.65cb6e2d.svg"},14:function(e,t,a){var n={"./activation-icon.svg":36,"./add-icon.svg":12,"./conv-icon.svg":37,"./dense-icon.svg":38,"./flatten-icon.svg":39,"./noise-icon.svg":40,"./pool-icon.svg":41,"./recurrent-icon.svg":42,"./start-icon.svg":43,"./subitem-icon.svg":13,"./trash-icon.svg":44};function i(e){var t=s(e);return a(t)}function s(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=14},22:function(e,t,a){e.exports=a(306)},27:function(e,t,a){},29:function(e,t,a){},306:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(15),r=a.n(s),o=(a(27),a(21)),c=a(7),l=a(2),d=a(3),u=a(5),p=a(4),m=a(6),h=a(1),g=(a(29),a(308)),v=a(20),f=a(16),b=a.n(f),y=["conv","pool","noise","dense","flatten"],A=a(12),k=a(33),E=a(34),O=a(13),S=a(35),D={start:{color:"#4fcebd",gradient:{l:"#61ffbe",r:"#3ea0bd"},shortname:"start",fullname:"Input Layer",icon:"./img/start-icon.svg",parameters:{"input shape":{dim:3,values:[25,25,1]}},parameterOptions:[{title:"input shape",type:"diminput",min:1,max:999}]},conv:{color:"#b266d5",gradient:{l:"#d585be",r:"#9149eb"},shortname:"conv",fullname:"Convolution Layer",icon:"./img/conv-icon.svg",parameters:{"input shape":{dim:2,values:[3,3]},"filter count":10,stride:1,padding:"Same",activation:"ReLU",alpha:.1},parameterOptions:[{title:"filter count",type:"number",min:1,max:999,depends:null},{title:"filter shape",type:"diminput",min:1,max:999,depends:null},{title:"stride",type:"number",min:1,max:999,depends:null},{title:"padding",type:"dropdown",options:["Same","Valid","Causal"],depends:null},{title:"activation",type:"dropdown",options:["Softmax","ReLU","LeakyReLU","Tanh","Sigmoid","None"],depends:null},{title:"alpha",type:"number",min:1,max:999,depends:{title:"activation",option:"LeakyReLU"}}]},pool:{color:"#4a9fe9",gradient:{l:"#4fceff",r:"#4671d3"},shortname:"pool",fullname:"Pooling Layer",icon:"./img/pool-icon.svg",parameters:{size:2,stride:2,type:"Max Pooling",padding:"Same"},parameterOptions:[{title:"size",type:"number",min:1,max:999},{title:"stride",type:"number",min:1,max:999},{title:"type",type:"dropdown",options:["Max Pooling","Avg Pooling"]},{title:"padding",type:"dropdown",options:["Same","Zeros"]}]},dense:{color:"#f98829",gradient:{l:"#feae1f",r:"#f56333"},shortname:"dense",fullname:"Dense Layer",icon:"./img/dense-icon.svg",parameters:{"neuron count":10,activation:"ReLU",alpha:.1},parameterOptions:[{title:"neuron count",type:"number",min:1,max:999},{title:"activation",type:"dropdown",options:["Softmax","ReLU","LeakyReLU","tanh","Sigmoid"]},{title:"alpha",type:"number",min:1,max:999,depends:{title:"activation",option:"LeakyReLU"}}]},recurrent:{color:"#ff6ac3",gradient:{l:"#ff94d8",r:"#ff3ead"},shortname:"recurrent",fullname:"Recurrent Layer",icon:"./img/recurrent-icon.svg",parameters:{count:10,activation:"ReLU"},parameterOptions:[{title:"count",type:"number",min:1,max:999},{title:"activation",type:"dropdown",options:["ReLU","LeakyReLU","tanh","Sigmoid"]}]},noise:{color:"#787878",gradient:{l:"#a1a1a1",r:"#4f4f4f"},shortname:"noise",fullname:"Noise Layer",icon:"./img/noise-icon.svg",parameters:{type:"GaussianNoise",stddev:0,"dropout rate":0,alpha:0,rate:0,seed:0},parameterOptions:[{title:"type",type:"dropdown",options:["GaussianNoise","GaussianDropout","AlphaDropout"]},{title:"stddev",type:"number",min:1,max:999,depends:{title:"type",option:"GaussianNoise"}},{title:"dropout rate",type:"number",min:1,max:999,depends:{title:"type",option:"GaussianDropout"}},{title:"alpha",type:"number",min:1,max:999,depends:{title:"type",option:"AlphaDropout"}},{title:"rate",type:"number",min:1,max:999,depends:{title:"type",option:"AlphaDropout"}},{title:"seed",type:"number",min:1,max:999,depends:{title:"type",option:"AlphaDropout"}}]},activation:{color:"#63bc62",gradient:{l:"#83e356",r:"#41946f"},shortname:"activation",fullname:"Activation Layer",icon:"./img/activation-icon.svg",parameters:{activation:"ReLU",alpha:.1},parameterOptions:[{title:"activation",type:"dropdown",options:["Softmax","ReLU","LeakyReLU","Tanh","Sigmoid"],depends:null},{title:"alpha",type:"number",min:1,max:999,depends:{title:"activation",option:"LeakyReLU"}}]},flatten:{color:"#e85283",gradient:{l:"#f68399",r:"#dc2770"},shortname:"flatten",fullname:"Flatten",icon:"./img/activation-icon.svg",parameters:{},parameterOptions:[]}};function w(e,t){var a=parseInt(e.slice(1),16),n=t<0?0:255,i=t<0?-1*t:t,s=a>>16,r=a>>8&255,o=255&a;return"#"+(16777216+65536*(Math.round((n-s)*i)+s)+256*(Math.round((n-r)*i)+r)+(Math.round((n-o)*i)+o)).toString(16).slice(1)}function I(e,t){var a;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return 3===(a=e.substring(1).split("")).length&&(a=[a[0],a[0],a[1],a[1],a[2],a[2]]),"rgba("+[(a="0x"+a.join(""))>>16&255,a>>8&255,255&a].join(",")+","+t+")";throw new Error("Bad Hex")}function C(e,t,a){return{background:"linear-gradient(to "+a+","+e+" 0%,"+t+" 100%)"}}var R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={animate:!0,angle:0,l:a.props.l,r:a.props.r},a.updateAnimationState=a.updateAnimationState.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.rAF=requestAnimationFrame(this.updateAnimationState)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.rAF)}},{key:"updateAnimationState",value:function(){this.state.animate&&(this.setState(function(e){return{angle:e.angle+1}}),this.rAF=requestAnimationFrame(this.updateAnimationState),this.state.angle>120&&this.setState({animate:!1}))}},{key:"render",value:function(){return i.a.createElement(B,{angle:this.state.angle,l:this.state.l,r:this.state.r})}}]),t}(i.a.Component),B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={l:a.props.l,r:a.props.r},a.canvasRef=i.a.createRef(),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.angle,t=this.canvasRef.current,a=t.getContext("2d"),n=t.width,i=t.height;a.save();var s,r,o=a.createLinearGradient(0,0,n,0);for(o.addColorStop("0",D[this.state.l].color),o.addColorStop("1",D[this.state.r].color),a.clearRect(0,0,n,i),a.beginPath(),a.moveTo(0,i/2),s=0;s<=n;s+=5)r=40*Math.sin((s+30*e)*Math.PI/180)/e+i/2,a.lineTo(s,r);a.setLineDash([25,30]),a.strokeStyle=o,a.lineCap="round",a.lineWidth=10,a.stroke(),a.restore()}},{key:"render",value:function(){return i.a.createElement("canvas",{class:"connector",ref:this.canvasRef})}}]),t}(i.a.Component),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={dim:a.props.dim,values:a.props.values},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleKeyPress",value:function(e){"Enter"===e.key&&e.target.blur(!1)}},{key:"handleFocus",value:function(e){e.target.select()}},{key:"updateDim",value:function(e){var t=this.state.dim,a=this.state.values.slice();e&t<4?(t=this.state.dim+1,a.push(1)):!e&t>2&&(t=this.state.dim-1,a.pop(1)),this.setState({dim:t,values:a}),this.props.updateFunction(t,a)}},{key:"handleChange",value:function(e,t){var a=Object.assign({},this.state);a.values[t]=e.target.value,this.setState(a),this.props.updateFunction(this.state.dim,this.state.values)}},{key:"getButtons",value:function(e){var t=this,a=[];return a.push(i.a.createElement("button",{onClick:function(){return t.updateDim(!0)}},i.a.createElement("img",{src:k,alt:""}))),this.state.values.length>2?a.push(i.a.createElement("button",{onClick:function(){return t.updateDim(!1)}},i.a.createElement("img",{src:E,alt:""}))):a.push(i.a.createElement("button",{class:"disabled",onClick:function(){return t.updateDim(!1)}},i.a.createElement("img",{src:E,alt:""}))),i.a.createElement("div",{class:"buttoncontainer"},a)}},{key:"render",value:function(){var e=this,t=[];t.push(this.getButtons(!1)),t.push(i.a.createElement("input",{onFocus:this.handleFocus,onKeyPress:this.handleKeyPress,class:"diminputbox",onChange:function(t){return e.handleChange(t,0)},type:"number",defaultValue:this.state.values[0]}));for(var a=function(){var a=n;t.push(" x "),t.push(i.a.createElement("input",{key:n,onFocus:e.handleFocus,onKeyPress:e.handleKeyPress,class:"diminputbox",onChange:function(t){return e.handleChange(t,a)},type:"number",defaultValue:e.state.values[n]}))},n=1;n<this.state.values.length;n++)a();return i.a.createElement("div",{class:"dimensioninput"},t)}}]),t}(i.a.Component),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={name:a.props.type,parameters:Object.assign({},D[a.props.type].parameters),index:a.props.index},a.input=i.a.createRef(),a.onUpdate=a.onUpdate.bind(Object(h.a)(Object(h.a)(a))),a.updateParent=a.updateParent.bind(Object(h.a)(Object(h.a)(a))),a.updateParent(),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"updateParent",value:function(){Object.assign({},this.state);this.props.updateParentData(this.props.index,this.state)}},{key:"onUpdate",value:function(e,t){var a=Object.assign({},this.state);a.parameters["input shape"]={dim:e,values:t},this.setState(a),this.updateParent()}},{key:"inputField",value:function(e){var t=this,a=null;if(null!=e.depends&&(a=i.a.createElement("img",{src:O,alt:""})),"dropdown"===e.type){for(var n=[],s=0;s<e.options.length;s++)n.push(i.a.createElement("option",{key:s,value:e.options[s]},e.options[s]));return i.a.createElement("li",null,a,e.title,":\xa0",i.a.createElement("select",{name:"type",defaultValue:this.state.parameters[e.title],onChange:function(a){return t.handleChange(e.title,a)}},n))}return"diminput"===e.type?i.a.createElement("li",null,a,e.title,":\xa0",i.a.createElement(j,{updateFunction:this.onUpdate,dim:this.state.parameters["input shape"].dim,values:this.state.parameters["input shape"].values})):i.a.createElement("li",null,a,e.title,":\xa0",i.a.createElement("input",{onFocus:this.handleFocus,type:"number",onKeyPress:this.handleKeyPress,onChange:function(a){return t.handleChange(e.title,a)},defaultValue:this.state.parameters[e.title]}))}},{key:"handleChange",value:function(e,t){var a=Object.assign({},this.state);a.parameters[e]=t.target.value,this.setState(a),this.updateParent()}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&e.target.blur(!1)}},{key:"handleFocus",value:function(e){e.target.select()}},{key:"toggleEditMenu",value:function(){this.props.selected(this.props.index),this.props.getSelectedIndex()}},{key:"getOptions",value:function(){if(null===this.state.parameters)return null;for(var e=[],t=Object.keys(this.state.parameters),a=0;a<t.length;a++)if(null!=D[this.state.name].parameterOptions[a].depends){var n=D[this.state.name].parameterOptions[a].depends.title,s=D[this.state.name].parameterOptions[a].depends.option;this.state.parameters[n]===s&&e.push(this.inputField(D[this.state.name].parameterOptions[a]))}else e.push(this.inputField(D[this.state.name].parameterOptions[a]));return i.a.createElement("ul",null,i.a.createElement("hr",null),e)}},{key:"editMenu",value:function(){if(this.props.getSelectedIndex()===this.props.index)return i.a.createElement("div",{class:"menudropdown"},i.a.createElement("div",{class:"menuconnector"},i.a.createElement("div",{class:"menuconnectorline",style:{"border-bottom-color":D[this.state.name].color}})),i.a.createElement("div",{class:"editmenu",style:C(D[this.state.name].color,w(D[this.state.name].color,-.2),"bottom")},i.a.createElement("h1",null,D[this.state.name].fullname),this.getOptions()))}},{key:"render",value:function(){var e=this,t=a(14)("./"+this.state.name+"-icon.svg");return i.a.createElement("div",{class:"layermenu"},i.a.createElement("div",{class:"layer",style:C(D[this.state.name].gradient.l,D[this.state.name].gradient.r,"bottom"),onClick:function(){return e.toggleEditMenu()}},i.a.createElement("img",{src:t,alt:""})),this.editMenu())}}]),t}(i.a.Component),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={color:a.props.color,menuItems:a.props.menuItems,onClick:a.props.onClick,onHover:a.props.onHover,menuVisible:!1},a.setMenuVisibility=a.setMenuVisibility.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"setMenuVisibility",value:function(e){this.setState({menuVisible:e})}},{key:"menuVisibility",value:function(){return this.state.menuVisible?{visibility:"visible"}:{visibility:"hidden"}}},{key:"menuHeight",value:function(){return this.state.menuVisible?{height:"100%"}:{height:"0%"}}},{key:"drawMenuItems",value:function(){for(var e=this,t=[],n=function(){var n,r,o=e.state.menuItems[s].slice(),c=a(14)("./"+o+"-icon.svg");t.push(i.a.createElement("div",{class:"menuitem",key:s,style:(n=D[o].color,r="right",{background:"linear-gradient(to "+r+","+I(n,.2)+" 0%,"+I(n,.1)+" 100%)","border-color":n,color:w(n,.5)}),onClick:function(){return e.state.onClick(o)}},i.a.createElement("img",{src:c,alt:""}),D[o].fullname))},s=0;s<this.state.menuItems.length;s++)n();return i.a.createElement("div",{class:"menu",id:"menu",style:this.menuVisibility()},t)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{class:"addmenu",style:this.menuHeight(),onMouseEnter:function(){return e.setMenuVisibility(!0)},onMouseLeave:function(){return e.setMenuVisibility(!1)}},i.a.createElement("div",{class:"add",style:C(D[this.state.color].gradient.l,D[this.state.color].gradient.r,"bottom"),onMouseEnter:function(){return e.state.onHover(null)},onClick:function(){return e.setMenuVisibility(!0)}},i.a.createElement("img",{alt:"",src:A})),this.drawMenuItems())}}]),t}(i.a.Component),Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).updateCodeData=a.updateCodeData.bind(Object(h.a)(Object(h.a)(a))),a.addLayer=a.addLayer.bind(Object(h.a)(Object(h.a)(a))),a.selected=a.selected.bind(Object(h.a)(Object(h.a)(a))),a.deleteLayer=a.deleteLayer.bind(Object(h.a)(Object(h.a)(a))),a.getSelectedIndex=a.getSelectedIndex.bind(Object(h.a)(Object(h.a)(a))),a.generateCode=a.generateCode.bind(Object(h.a)(Object(h.a)(a))),a.state={items:[i.a.createElement(L,{index:0,selected:a.selected,deleteLayer:a.deleteLayer,getSelectedIndex:a.getSelectedIndex,type:"start",updateParentData:a.updateCodeData})],selected:null,codeData:{},codeStr:""},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"updateCodeData",value:function(e,t){var a=Object.assign({},this.state);a.codeData[e]=t,this.setState(a),this.generateCode(),this.render()}},{key:"getSelectedIndex",value:function(){return this.state.selected}},{key:"selected",value:function(e){var t;e!==this.state.selected&&(t=e),e===this.state.selected&&(t=null);var a=this.state.items.slice().map(function(e,t){return Object(c.a)({},e,{props:Object(c.a)({},e.props)})});this.setState({items:a,selected:t})}},{key:"deleteLayer",value:function(e){var t=Object.assign({},this.state);t.items.splice(e,1),t.items.push(i.a.createElement(L,{index:null,selected:this.selected,deleteLayer:this.deleteLayer,getSelectedIndex:this.getSelectedIndex,type:"conv",updateParentData:this.updateCodeData}));t.items.map(function(e,t){return Object(c.a)({},e,{props:Object(c.a)({},e.props,{index:t})})});this.setState(t)}},{key:"addLayer",value:function(e){this.selected(null),this.state.items.push(i.a.createElement(L,{index:null,selected:this.selected,deleteLayer:this.deleteLayer,getSelectedIndex:this.getSelectedIndex,type:e,updateParentData:this.updateCodeData}));var t=this.state.items.map(function(e,t){return Object(c.a)({},e,{props:Object(c.a)({},e.props,{index:t})})});this.setState({items:t})}},{key:"drawItems",value:function(){for(var e=this.state.items.slice(),t=1;t<this.state.items.length;t++)e.splice(2*t-1,0,i.a.createElement(R,{key:t,l:this.state.items[t-1].props.type,r:this.state.items[t].props.type}));return e.push(i.a.createElement(x,{menuItems:y,color:this.state.items[this.state.items.length-1].props.type,onClick:this.addLayer,onHover:this.selected})),e}},{key:"formatCode",value:function(e,t,a,n){var i="",s="";switch(1===e&&(s+="input_shape=["+n.values+"]"),t){case"conv":i="Conv",2===n.dim?i+="1D":3===n.dim?i+="2D":i+="3D";a.Length;for(var r in 1===e&&(s+=","),a)switch(r){case"input shape":s+="kernel_size=["+a[r].values+"]";break;case"filter count":s+=",filters="+a[r];break;case"stride":s+=",strides="+a[r];break;case"padding":s+=",padding='"+a[r].toLowerCase()+"'";break;case"activation":if("None"===a[r])break;s+=",activation='"+a[r].toLowerCase()+"'","LeakyReLU"===a[r]&&(s+=",alpha="+a.alpha)}break;case"pool":for(var r in"Max Pooling"===a.type&&(i+="MaxPooling"),"Avg Pooling"===a.type&&(i+="AvgPooling"),2===n.dim?i+="1D":3===n.dim?i+="2D":i+="3D",a)switch(r){case"size":s+="pool_size="+a[r];break;case"stride":s+=",strides="+a[r];break;case"padding":s+=",padding='"+a[r].toLowerCase()+"'";break;case"activation":s+=",activation='"+a[r].toLowerCase()+"'","LeakyReLU"===a[r]&&(s+=",alpha="+a.alpha)}break;case"noise":switch(i=a.type,a.type){case"GaussianNoise":s+="stddev="+a.stddev;break;case"GaussianDropout":s+="rate="+a["dropout rate"];break;case"AlphaDropout":s+="alpha="+a.alpha,s+=",rate="+a.rate,s+=",seed="+a.seed}break;case"recurrent":i="RNN";break;case"dense":for(var r in i="Dense",a)switch(r){case"neuron count":s+=a[r];break;case"activation":s+=",activation='"+a[r].toLowerCase()+"'","LeakyReLU"===a[r]&&(s+=",alpha="+a.alpha)}break;case"flatten":i="Flatten"}return{body:i+"("+s,header:i}}},{key:"generateCode",value:function(){var e,t="",a="",n=[];for(var i in t+="model = Sequential()\n",this.state.codeData)this.state.codeData[i].name,e=this.formatCode(i,this.state.codeData[i].name,this.state.codeData[i].parameters,this.state.codeData[0].parameters["input shape"]),n.push(e.header),i>0&&(t+="model.add("+e.body+"))\n");for(a+="import keras\n",a+="from keras.models import Sequential",(n=Object(o.a)(new Set(n))).length>1&&(a+="\nfrom keras.layers import "),i=0;i<n.length;i++)i>1&&(a+=", "),a+=n[i];a+="\n\n";var s=Object.assign({},this.state);s.codeStr=a+t,this.setState(s)}},{key:"copyAnimation",value:function(){b()("Copied to Clipboard!")}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{class:"header"},i.a.createElement("h2",null,"Sequential Model Constructor for Keras"),i.a.createElement("img",{onClick:function(){return window.open("https://github.com/tylerpharand/construct")},src:S,alt:""})),i.a.createElement("div",{class:"container",id:"container"},this.drawItems()),i.a.createElement("div",{class:"codeView"},i.a.createElement(g.a,{class:"codeBox",language:"python",style:v.androidstudio},this.state.codeStr),i.a.createElement("button",{onClick:function(){!function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(e.state.codeStr),e.copyAnimation()}},"Copy")))}}]),t}(i.a.Component),V=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(Q,null))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,t,a){e.exports=a.p+"static/media/arrow-up.83293fb7.svg"},34:function(e,t,a){e.exports=a.p+"static/media/arrow-down.0cf9f8b3.svg"},35:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAk60lEQVR42u2deZxcRbn3v0VAYLKRhJBAQgMSDCAgoqJEEWQRAX1BZREEX4wQEVC0E2YyM+oF7juZ6ZlklBvAgBBkU8BwMeCN7CDbhWAQZDEsCmQhCYmTDQYwZOr9o7tneqmqU3XWnsz5fT4zfbq2U/X0+Z1nqTp1IEWKFFqIpDswUDBz2fKPALsDewETgLHAiMLfDsBgYAgwvHA8GKgraeIdYDOC9cCG3j/BSmAFsAxYCbwlBG9M3XncyqTHvCUgJUgEmLl0+SRgb2Df3k/BbsBWgRsXHt8BkU/biOBV4AUEfwOemzpm3P1Jy6a/ISVIQMxcsnwscATwJSBPDKEhQhjStidIX54oK/8K8L8IHgMenjp63GtJya4/ICWID8x8461vI/gicBjIiUop2qa5wpYgQlFGnbYMeAD4E4J7po4aty5yAfYjpASxwMzX39oTOBnBCcDBwFZ9kpNWF60x3QVBNIg3aTYDjyG4a+rIcbPCl2T/Q0oQDWb+860xwJnAaQgOAtQXmIoglWVNaa6IiiDKsfEUglunjhj3ixB63i+REqQEM//x1iDgeOBs4FgEW/dmGi8kqbvAypGEieVOCtXxh8ACBNdN3WHcH0IYRb9BShBg5mtvjQamAFMQZHozrC8kSzMrBoKI4FrDyxRbiWAOcNXU4Vt+KHlAE2Tmq2/tC/wEwRnAdr0ZzhdSQgQJ1/+wHGvv8SaQ84RgZnbY+GdCGFlNYkASZOYrb30K+FnB6a6WhPPFFKOj7leD2GgSF41SGHfhfPcjyGWHjt/i5lkGFEFmvvzWJAQ/B46pGr0fc6PiYolFixg0iHAhg22e8Zyy8pxPAT/PDh1/b8BR1gwGBEE6Fq84XAh5MXBY1agDaQ7ctUiEBAELDRIaQUrIUV3mz0Bzdsj4xwOONnFs0QTpWLxiL+CXwHFCSPWIQyWL1LdtSnOBDUH8mlN+CaIvOw+ozw4e/3rAUSeG4GuDahQdf1+RQ/IicByALF670n+bvVBe5GE0nAC8SOyfHAAnAS91di9rSXqYYYqnX6PjpRXHAVcWFge6/ai6PL/RrKQ1SFQRraIs3eT4JnBetm78goASiBVbDEE6XlwxGpiN4NSqkbnf+fTHLtGspJ10P0TxzHeUYXXe70H+KLv9rv1iDmWLMLE6XlhxIvAScCq2ppR0PA4LQdq0ma1Pul1PTSJPBl7sfH/pKSGOIDL0aw3S8fyK4QiuAL5dNhqPu3wgLRLGfIhfqYcVwQoQvRKlgQgns6z4vSxYMg/B97Pb7trlUyKRo98SpONvKw5BcDOwhx9TqMqG9qqryo/bDwk6SRg4oqUJ7SrnhVRtKGWzHDg9u+2uj/iUSqTolyZWx99WNAGPAnsEakhapAc1s+IObtmQwLauqZ5XuypyqDEOwUOd/156ScySskK/0iAdz60cAdyIkMeX9d5PVMYrEuOqReLWIEEjWEG0h1/TylvT3IfgtOw2u/7Lp4RCR7/RIB3PrjwQWAQcjyxIVOWQ26ZhKOcHvXX71T3HHa7DsycHCI4GnunctPTTSQ+ziH5BkI5nV54EPIEsMalMJMEmTfRNHuJR15U4UUfComjXxfewqmPRUXW9DIJHOj9cenLII/SFmidIx19XXozk98D2QIW8NSSxJYsqz/biDjIzH8FsvnC5s6vKVo7HZYbd5Tx29bcHbuv8cMlPgwsqGGraHuh4ZuWN5J/VqO5t792rYo2VcwRKum1yYGoraj/Ea5LQxkcw+SmaNOU6NisZaX4b71n3Ujlelx2UmexDWqGgZgnSsWjlfQiOquqlX5J4EcSrnk1btUYQG3JYjFsIvxe69EEqpQzvzQ7KHONDYoFRcwTpWLRyNHA/cIDbRJbFXc6PFlGWx+Ji8yBJrRDEU7Z+Nax0k6dJdnk8BRybHZRZ60NyvlFTPkjHX1aOR/IEcEBZhpfNLnr/udn3lZEnv854P13Iq4XJOfcitmrOw+Vmo9slBj4LPNK5ecnoOEVRMwRpf3rVBOAx8vvW5mEblpX4u0hLfoiqiJZtmLhW4TJB6NWOFSkszu9pakqvc+2H4MHOnvhIUhMEaX961XjgfikLS9RVMEWaei9gj6iW6rMy7GtLAq+2k4LNzLYpv1J7SE0bWgJIB/OtFJ7kKObvB/GRJHGCtC9cVfQ5dlNepLYhWD8kkV5tBRmZsOuvz6bLvkbpSTppB+ndhmuoWF12P+D+zp4lwyMcOVADBAHuQTJReSfXXcyeppUlSRT1pNeFm7SG0HfdvX9aM8zgewibBl3hoT3UeQcACzp7ltQRIRIlSPtTq+4GPqmSiPIRWa9JPJs7vy1pXEynuM0sU/s2F5qtGWbrx/RqD4V5ZRElCzChOAn4badcMshJfg5IjCDtT62aCxyjv+g1d3PrdVcWS1GU8KFFvOYHwoafC9zB0RY27ZeNVZpDyNoQeiByFHECcLUPKVohEYK0P7lqOpLv9iZ4kcS3/e7DaVedxzW/NHwcp0lmWiZSIRKTeRUI1kQMhRzFcpM75ZL6YB0P1o3Q0P7kqq8C8ymS03JW1WnP2apjab67KduQdpNvxWM/s+qu0tdc1FX9dJkgdB13VZpD1CpMclSX6QFOzIrMXY5SdTxNhGj/31X7kN9Sf6iyB8aLJ8iaKY+lEspPGfwJPdsZ5T68R+n7B2F9IX0QsENBbkMRjKJE+/fKxXYG3ZUcRllb3HwqzhEBOYrYCBycFZnFFq1YITaCtD+xagiCvwATq85svSTD55IQcNMivceWWsSeID0IXgNeBl4BFpN/JdorwJpp48d9aCPLmW8tHwTsBOwC7CYE+yHYB8E+5CfTBvnSIq5a00t7KDWegSB+JiSrsZg8STZalQ7llCGg/YlVtwCnam1f6xnXmEii0iIuZl6+/CZgEciHENwPLJyWGfdOlHKetWr5EASfI/+KuC8iOATBRxR9s5erF/GDRqyCaQ0V/gB8IysygT3AWAjS/viqCxDMVp7R5buNKQD+f1gTSezrdAG3IbgTeHja7ru8F4eMdZi1ZvkQBMcBX0dwHIJhyn4jEVtVpmEgTIimVfgEAZifFZkTg8ovcoK0P/72ASAXIthWe9YwSKIrV/Vp8EdcfJHyc21CMB+4CcGCaXvssilqufrBrK7l2yI4EjgLwQm9miUMx7y2yFHEyVmRmRdEZpESpP2xt7cr+B0fz6c4RnQsVLY/R1rRD39a5G1gDoI50/bcZUWUsgwbs9YtH4ngbOAHIHev0h425NDKCztyVJ7HT74Z7wM7Z0Vmnd8GoibIbOCC8jM5PCdhRSbXux/2d0E9Sf6OoA24Zdpeu/w7ShlGjVnrl28lhPwGgnrgM+Fqj8Q0Rymey4rMgX4rR0aQ9kff/hKCB9Vni4kkYPgxNT+0OcKzEEErcOe0j+3SE5XskkLnxmVfQXAJcLDxphI0YhUfOYr4UVZkZvupGCVBXgd2V57Fhii2ppiN4x6cJK+DvPCivXcJdRKqFtH5zjKB4JtAB6Lw+5lkpfoEfGuPaK7IfwF7ZkVmvWvFSJaatD/y9uVQIlzD6lnnpe2qlb6FtqQyXdFO6Xot8zL4TcAMJB8fCOQAyA4ZL7ODx88D9gF+BnxgvNkoYdAc8ZMDYBQww0/F0LvU/sjbnwOeAIS9E+7gvNs67sE1yZMIJl+0785/D1tG/Qmd3cs+huAqhDy8IBeMn37NqugnHDYDe2dF5jWXSuFrEMnVvcO12WNKFqRTeTfXPfOh0xImTeL2XMhm4D+AQwc6OQCydeNfQcgjyb8u+33Af8RKh1hm4xgETEu0a+1/fnsqMLOqZa95jrI0Swc+7BBwXou8Cpxx0f47LwxTLlsKOj9Yuh9wK4J9rSNWyWuOUmwExmRFxnryNjQN0v7w22PI33mrodMCSs0gHDSPqYzFcx1l7YnbkRyUkkOP7La7voDgM8DvehN15PDyN7DIDx9DKbyz0hZhmlgzkCWrdHUkqISyjKXJ5bnDiRVJeoBm4OSLDtg50nVSWwKyH9m1G8G3gQYE/kLdNuSJDl9y7WpgtD+0+kCQz5S55U5mleHYzy4ZqjkM9UzxOgSnXXTg2LvDkMNAQ+eHS48FeQvF9V1F1J7mKMWirMhY7x4flgZpBiGUYVNKvtvsPVVVVng45Vg44QLZQ7lWkyxBMiklh39kt971TwgOB1ZZV0qWHAAfcykcuLvtD63eF3ihui3NnV93ZsvJQE9tUvpdr0leQPDliw4a26/WT9UqOjcv+ShwL7BnQvMcrqizddSDaxBJPVI19BI/wua5cq/JwEoHXqtxFG2Wa5KFSA5LyREesoMy/wQOR/APbaHaIQeA9VZBgQjS/uDqPaDwegLtHlXYm11Wu5gonHeb+Y182gsgvnzRp8fW7FtV+yuygzLLgMOhhCSCpB1yHTbbFgymQSQN5CdgStMqUJCQrTYxEa20TSnM5arJ8gaSL9d/ZozzepwUdshulVkGHA2sqEFSFCGBbtvCvofR/sDqscASYBt3u1Oq7yyi0H2vtT9eUa7qsusQTKo/eMyAnxmPA509S/ZH8GdgRNJ9UWBpVmQytoWDaJDzgW0A77u+SqtIkZ+B0JlIXmkmv6S8bA+Sk1JyxIfsVpnngZMAq00oYsYLLoX9E0RyriINbZqSRB6ml6pdJRk07eQ/p9d/bswDvseZwheyIvMgcGHS/VDgcZfCvgjSfv/qycCOxplxm4tdV1dVtvS4R5dfpU1uRxbWhqWIHVmRuRKYm3Q/KnCnS2G/GuT83iMvMlhtHVrQAJWmV2X7VqZXUZuIxUjOqj9kTJybf6aoxnnkN8SrBbyUFZnnXSo4E6T9vtWfRnKQNmRrqzmM5TXmklWEC8jbvqfXTxqTrq1KGFmR+QA4Lel+FOD82K0fDdLne/iZ99CVr7r4K/wKDJ9QWe4/6j+/0199iTBF6MiKzHwg0PY7IeBN4DeulZwI0n7v6u2RnFKWaD2LXVHexUcxmWnVfssTQM6HAFNEi1OBJB8lmJ4VmfddK7lqkK8DQ83Pcyhg8kVM6UD5RKOgbIF1tRP/PnBW/Rd2sp4pTREPsiLTA5wIvJ3A6edlReYWPxVdCfKdqhTTw1C22gD0ZlMVBPRUzKH0/bXWH7rTqwGFmSIiZEVmBXAK8c6PLAbO8VvZjSCSI53Dty5axeRb6HyUPo3yGjI1rWodWZH5M3AW+HzYyg3LgeOD7KxoTZD2e1Z/D9ga8NYOrhEoL01jNOV6tcn59Yft9EFwmaaIGlmRuRk4HYjy93oF+GJWZP4ZpBF7DSI5QZHmHXY1mWBYpoPZLIP76g/f6d4ggkgRL7Iicyv51b9vRND8ncBng5ID3EysI638Ci8fQ1fP1J5XOiI1rfohsiLzJLA/cDnh+CWrgO9kReaEIGZVKaxW87bfvfpo8k+MldeUFi245rtsV5lPe7r+iNEHhyGMFMmhUy6ZQH7fqjNxeKCpgDeBXwFXZEUm1Mnhra1KSY7sPRa9aeWfxbxK0lTmV7ddXV9VXmrS8rusp+jnKOx4eG6nXDINOB44BvgcMIHiqvE+bAReBB4FFgCPFMLIocOOIPCF3iPTBV9KGi8y6OrbkKIv7Q0kf4hCMCmSQUED3Fr4o1Mu2QoYA70vYFqfFZm1cfXH08TKLVhdB6wDtrF6wbyfM7mYYeVlp9UfNXpW5FJKMWBho0EmUVBxlZuwiUpzqyyz4rtJe7iYYX3luqm9pdQptjDYEORwXUYpYYSOEDrtoMv3IlvRDJP8tv7o0bGp2hQDEzYEOdSmIdUWn6LS6e7NKK1oyCstI6o+r49dWikGHGwIcpDfxq1MMltTrDwA8CbS7dHJFCn8wEiQ3P+s3gfJkLC2cFESxjUMnE+7uf6Y0emTgikih5cG2Rfwvoh9ooowlV/0Yd/bY5RRigEMO4KUQudT2Myqe0BWLCsp0zB9ba9Ekj4tmCIWeBFkolUrugWFURAGHqk/NjWvUsQDdw3iApv5EZfm8u09Gq1IUqTog5kgkr2U6UE0Q6nJ5DVXosZDsUgmRQoMl2buj6vHAu6vCAjLiVe386+G40bvGIdgUqQAswbZy7qVUui8A1fiqP2ZRXEIJUWKIkwEmRDqmUxutQ158vXTDahTxAoTQXaLrRf25Hk5tj6lSIGZICOT7hxQSZ7FSXcnxcCC6Zn0Wnz5SbrnVYpYodcgsoIgyb9S692Gr45elnQnUgwsmEysIWXf/M5dh0eslBwpYoeJIMNDOUOQRSHl5NoYvThSpCiHiSCDk+5cBbk2JN2dFAMPJifddW+iqJESJEXsMBFkiHUr8SB9v3mK2GEiSDg+SHhICZIidgR5T3rceDfpDqQYeOhPBEk+aJBiwMFEkFozaWrN5EsxAGAiSK29QjklSIrYYSJId9Kdq8CwpDuQYuDBRJBac4pTgqSIHf3JBxmadAdSDDz0Jx9kfNIdSDHwYCJIre2cPjh31+qUJCliRW0TpPq10v42kkiRwidMBOmKpQfS8FeNvWOVTooBD9Ny9zdDPVM4m4XabYWaIkVIMBHkNefWotoxt6/dfaIVR4oU5TARRL1BQpzbRlefy/fLfFKk8AOtD9LwtdErkbxj4RcEg6p9/bl2zM1fHWxD7RQpHOC1mjeabXZMhJOedY6ISzgpUngR5CXfLbtFpzT1Rd8fvX9WLxVNkSIMeBHEbqtP6fHdto1SUqj2C8qXOTR3x5rkd+lKMSDgX4Po/IbAGsITOyP5RIIySzGA4EWQ6t3U/TrrpWQwa4jq79Um2slJCy7FwIDnLTs3f/VG/OxwIq2aV9SxyJe8AXy04Zs7pu8qTBEpbJ5Jt3ujrNJksqmDPsRbmtdTlrc7kklJCy/Flg8bgjyiTK26uA2EsIlmqcwrDGXhrGRFl2IgwIYgDwOmsCvBXl2L3tHXkkgA4vTcvH/V4isaUmxBsCHIE0g2eZJAdZFLj3QvLWHWOHVIJictwBRbNqxu/bk/rHkM+Lwy08ZNlg7pVWlCnyd5HZjQcMqonsgllSIRtEzuFuTXDBZv5j3Nc+s2xXX+rS3LVRNEd3ELTb5thKosTZS/T7267B5ITgDuiEtgKaJFy+Tu4cCxwHHAp8g/4jCooswHwPPkr8sFwIPNc+s2R9EfOw1yx5qjgPuUmX4ufGW6sKtXzOvLX9hw6qjPRiGcFPGhZXL3RCALnAls71h9OXAlcHnz3LpQ3wJg7V3n7ljzLpWvRFDd2YUiTVfeixQ6jVR9fGTDt0Y9GKZgUsSDgsa4BLiACk3hA6uBRmBu89y6UObIXPbmvR9QO80mZxzUTnalb6Ezo0yrfnvLiOlhCCNFvGiZ3P1p4FngQoKTA2A0cA1wV8vk7lAinPYEkdzpOXeBTX4hLGy7dstEvL78o3O/6zo6DIGkiActk7u/BTwO7B5B88cDT7dM7p4QtCGnCYzcf6/ZRKlj72I+actp8rx8l9LJyXzaa8B+DaeP/CCoUFJEi5bJ3acDNxL92wWWA4c1z637h98G3DooecBwFy+BwrewWYioa6+qrHJycgKShhCEmiJCtEzuPgT4DfG8emMc8D9BzC3XTt7Qe6Q1kYTdBKAXlH5MBTGqSdaYu6kr3TurRtEyuXsM8N/ANjGediIw129lV4LcgSx9maZiyYlumYgKNk8dqtZ66Z367ZD8JndjVxgOX4oQ0fK97q2AO4GxCZz+xIJZ5wwngjR8c8f3gNs8o0qgN6dUZVHUK9MYGuKVrvLty5uEpD4MqaYIFb8HDk7w/LmWyd2u8yt+7EAxp2yBokuI1itkq3LAS9vrMbRTTpJLcjd0fTKgQFOEhJazu09E8I2g61oDYjzwPddKzgRpOGnUIiSLfD9ZWITWnFL4GapPVRt9edsg+W3u+q5ae5X1gEPL2d3bAb8D+n7W5EhygWsFv5GEK6tSbCJVoLn7F5fQK+qiqGuntfYGrstd15Vu8JAkBFcC25V8D+UpCZ+Y2DK5+1MuFXwRpOHkUXOBNYBbpEpZrlRKQl2uMq30KcPSvGr/5CRgqj9ZpgiKlnO6zwW+ayRC/CQ53qWw/1i0ZI4VMbSmkSFk65VW+Wl+6CqXm9uVbjYXM1rO6T4GmN2bUEmEyvtifET5vEvhIJM1VwD/NpZQXswKaegu+soyJnNNZ5LBVkjm5a7tSl+dEBNapnR/AsFtVD5OUfnTh/hgqgP2dynsmyANp4xaCVzneQenJB1LP6M0rwe9FjIdl3+OQPKn3DVdYwKJNoUnWqZ0TwDuAYZpL3hTevRE2bllcve2toWDTfdLcsDmku+qMnpy6I5t/BdVWbN5tzuS+3K/7hoeaMwptGiZ0p0hv4dB341Id8EnSxLr+ZBABGk4ddTrwE2AwQFXzJno7vgmbQLmNkw+SeFTSvaXUtzbdvXadLOHkDHj+93jgQfJr38KB9ERxfqNycEXjEnakSWXq8kBr65b/qlKkw7lDRpE9mmxg5E80jZn7c6Bx54CgBnndu+B4GFgT20hFy1SmRc+SdbaFgxMkIZvjXoJmGdYZdsH0zwG2GkFk8bR1C0hRzF9P+DJtjlr03eNBMSMH3QfgOAxYE/h52ryIolQHAfDe81z66xfcR7OkmPJDBBSkW5evOgnMmXTVkmaghzFzwySJ9p+tfbYUGQwADHjvO6jEDwK7FIUsZEkrv6Iql5wkix2KRwKQRpOG/UscF1Zou3CRV0dHUwOfQXhlOQob2c4kj+2XbG2qe2KtemMuwNmnN99AXA3MKwyT9hc8H4QjjZ52qVwmA+tNCHZaOWEl343mUlgp0UUdbWao5qEWwEtwO1tl6+1dt4GKmb8sLtuxgXd1yOYjWCQci5DeGgSME8c2tbzR5J7XQqHRpCG00auIr87RR6mC1unKSRqswu8SafzOXTnqW7z60ixqG32uiSXZNc0Zvzo3Y+DfAr4jk15T01SVcFHOTdt8g55rRd6l6yR+23X35AVs5U2foTLJKDu2GRWeYaMe5852YzkUiQzpl+4w4dhy6c/YsaF7wokPwTakeQn2aRQ3pxUn9J0Q3RJ9yrnXe+a5rl157iMPfzngiVTertqax6ZzDDTsXe0Sj+/ojcFB5HXhI+2XbZuwL+XfcaP390LeBjBZcC2fX6ArHacVZ/CoElc01Xl7LXJZiDnOv5IHNPcTV2XA+f3JgTRDqXfDeWNmsMzYKCttwlJO9Ay/Sc7vBeFrGoVM37y7vZAPZJGYFv1TUYZHfTQ7hr4Ddro6lTXndM8t+4Hrs1FFrnJ3dT1OvnlHeoOh0GUMhVuYVb5+ZHzRPmnlPywceoOC6KSV61gRvZdAZyCpA3V71f1aSE/+o6l10XvbjbZ1F8DTGieW7feVR7REeTGri+RX3oQPzlsSSI96pXd/QTAU0hagTsbpw33c3+racyY+s5xIFqQHOgpu7JPYZZ5RVrsJIEfN19bd5kfmUQa+8/d2DUbuCBKJ11K4V0u4N1P9pSIKp/298Id9pbGi4abl/zXOFovekcAJyD5mZQcpL3ZJE0SXZp3/eear6070K98oiXIDV3bAX9B8nHjQH1okapQrqv2KN3+1FBfQY7Sz7eBOUjmNDYMXxGlLMNGa/07w4GzkFxAftM9szYOamop0px9ElO6Gh8gGdt8bd06v3KKfPY4d0PXAUgWUuro6QbrdQcqfHciR2V+eUhXH+FSnUtfZxNSzAduQrKgsXFYbC94cUHr9HcGAUci+b/A15GFZd/u41XKyrg9U2Va2fk0CE6SU5qvqft9EJnFsrwid33XBcBso3YoTbONVnnV0ZLEt2mlMd/KLowu8nuH3Qk83Ng0LNHoV2vTxsFIjgBxIvmXDY0yjTuYFqmShVr+lKdHRJK7mq+p+z9B5Rfb+qPc9V23IjmlaoA2Id3Cdy05VPVsydGbXn1sf7FoNdK/6WER8BDwALCw8afDrFeS+kHrzzYOQ/IZ4FAkXwS+gGQbK82pkrOn1lDIwut3UBz78kn06XcBJzRfE/wdIfER5DddQ4GnkUzUDs6WHDamlDJP2P3gWGqP3voWF1MePUheAxYjeYX8ytJXCn9rGn8+zOo1Yq2XbBiEZCz5Fcm7gdgbySeAA5Ga0GwYBLH284Txt9Qdh0SSl4GDm68J501Tsa5gzV3XtQ/wFDDU1hkHn+SoShPeBPJlalj6M6Z+9uV1AxsKfxsLn5Df/GAY+SfhhgE7IAsbIlT2U3dBO5pO0pZQNnKx+d3KzmuAmSQbyZPDaUm7CbEv8c5d1/VVJPMpLnPxuMNYmVWlx9pP+7kSj8hVRb1QCWIPXT88TUcHLSID+nrxmls9SL7WfE1dqJO5cbyjoQwN3x35R6DZc+Cqu7jWxPE6q8PKXtuL1FYrxY0wbnm966dCHoDlUnXnVcB5/DhsckACBAFomDyyjeKWQUV4aQ4UZb3uzsW7oI2ZUEzSmXOuCKohwoLpCT7dZ2jntRywYsGhkSTVeVc2/7puNhEg0afoctd23Q0c48ussjK1LEKOXlrL9Ok12WjroJrSdPATgHD0Q8AxWIEu3Z8/AtiEgP/Y/Ou6rzlIzgmJaJAiGr438itI/to7WC9yeMHGTPITKVPeYYVb35JClVkj1fku2kRo6uvSkXbmlaKMhyZ5DMGpUYovUYIUcAySl8FCc3jdIcvgYFp5EcrVP9G1Y3O+uGBpO+QfnZVOdZzOqSNWybGGJH8Bvtp8dV13lGJKnCANZ49cDRwlJW86Rasw5Qs3bYKF7+HLiU8IfnYOKS1jq0VU5UxaRFffoo0KkrwAHNd8tfvydVckThCAhnNGLgOOAt4A3OxVmzCmrnzh02qepQw1Zl6pzJiSIVWbQW6dt9IitiQRjvVKjgskeQE4ovnqutURSbMMNUEQgOlTRr4GHAq82psYm1kSwHaoGaL4GINJU9jkBemqAzFK8LQQ8ZEDaoggANOnjFiG5PPAc0ZyuN7ZPcO6hjrG82nOEQdpqi6eCE8qDfMiLhd6kLkVwULg6Kar4iNH5TBqCm1Xrb0PyVFAeCFdRZrz47pFsbnMnpvGYErzguusfln/bNeZOcjKa5z+Q79/appTd5wPCQVGTWmQUkz//oijyT9f0QcbcqApr6jnb1LQMgDg1Y+oYBO2NYV7DWMr0yL+TKTy89u1cV1S5IAaJgjA9HNHnAlcDFiGdlHftcK8oINGuJL2WXROstSkRzHLrutP9fHFTb+qmxyzhLTdq1m0Xbn2JOAGZMWLT0yq2muG2DZy5WXG6eZq0LRp4/PYQmVi2crAdjxhyM7YrrKd94DvNF1ZN8+HVEJFTWuQIqafN2IeMIliGBjsyBEUNu0Jj+9xwdYBltov+v7bRrRcx6422ZYi+EItkAP6CUEApp834lngIGCBNTmMF7jLvIcBQWbpk4C1j4L2grde6Wvtp/SS5B7gk01X1D2TtJhUXe03aLt8bROIS8lvE+o2mYjfaIyjKYdFu1ikm6Ako2Uky1ReNx5dgMNJjsrjHhCXNl1ed4kPKUSKfkkQgLbL101CcjO63Rtdf1jPH9JxZbCqLYiYIBXjsiaKRZhbkRYSSZYBZzbNHvywDwlEjn5jYlVi+gU7PEH+GeybqzJtyREUYfs8oXWoAC9zyiZSFcVMel87twIH1Co5whxqomj7r3XfQHIVsCOgvfv5fnw3avPKK8+2jmskq7SOTTRLke9Ti3QBP2r6r8HVN7cawxZBEIC2y9aNBi6nuLVQUHKUHQu7Cydugijbt3yW3sUPMbTjQ663NV02ONJnOMLEFkOQItp+ue544EokGSAEe9njmXhVnqoMRE8QVZ9tP6WHbIJrkaVIfth02eD5PkeaCLY4ghTR9ot17cCPkWwTmvYoTXc1r3RlbPJwqOeLII67j7hpkfeBjqZfDv65zxEmii2WIABtnes+BlwmJV+JzLyynUlWfbfNw6Gebai3Ks1i8aChDU3o/PamXww+yefIagJbNEGKaJ217igQPwUOA/zNfegu9i1CgxQ//QQwUGmRB5A0N/1i8FM+R1UzGBAEKaJ11vpDkTQDxwDROudgT5AgYeIwCRLAWQeQkqdANDZ1Dn4owIhqCgOKIEW0zlx/MPn3up/QmxjEvLK58KPQHqq6yRDkQeA/G2cNeTjASGoSA5IgRbR2rN8X+AmSM4DtgOAXC5q0JAmi6quLmaUe/2YkdwG5xplDngwwgprGgCZIEa3t60cDU4ApveHhoAQx1TOV84M4tYhkNXBNY8eQpoC97hdICVKC1tz6QcDxwBSk+ApYLIYM6n945dkgKoL0pW9Gci9wfWP7kFsD9rZfISWIBq1tG8YCZwCnITkI8K89TOW88mzghyDavDINshC4rTE3ZFbAHvZbpASxQGvrhj2BkwtO/WcB4eR/6NJs8mwQHkE2A48jxTxgfmPbkCVhy7K/ISWID7TO2HAGksPJv95sYlWB/kWQNwvm091IHmxsHbouYvH1K6QECYjW/7dhLPldIQ8HDgH2RlY8RuBFgPgIshnJS8ATSB5rbBl6U5Ky6w9ICRIBWv9zw+eBicC+wEQk+wK7o3v+JhqCrAFeRLIYeB5Y1Hjp0C02HBsVUoLEhNZLN3wE+CiwFzABGAOMAEYgGQEMLvwNB4YUjrcraWID+Ut/HbC+5G8tkqXAEuDNwueSxoujfZtuihQpUqRIkcKE/w/yJj50ZHuoPAAAAABJRU5ErkJggg=="},36:function(e,t,a){e.exports=a.p+"static/media/activation-icon.01f80f3e.svg"},37:function(e,t,a){e.exports=a.p+"static/media/conv-icon.65eaab18.svg"},38:function(e,t,a){e.exports=a.p+"static/media/dense-icon.35d4f30a.svg"},39:function(e,t,a){e.exports=a.p+"static/media/flatten-icon.d0e59bea.svg"},40:function(e,t,a){e.exports=a.p+"static/media/noise-icon.b7b9b2d8.svg"},41:function(e,t,a){e.exports=a.p+"static/media/pool-icon.58fea31a.svg"},42:function(e,t,a){e.exports=a.p+"static/media/recurrent-icon.dfcb7513.svg"},43:function(e,t,a){e.exports=a.p+"static/media/start-icon.92fed1fb.svg"},44:function(e,t,a){e.exports=a.p+"static/media/trash-icon.b8c4771c.svg"}},[[22,2,1]]]);
//# sourceMappingURL=main.9c6febb6.chunk.js.map