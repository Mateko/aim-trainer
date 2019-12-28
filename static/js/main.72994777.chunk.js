(this["webpackJsonpaim-trainer"]=this["webpackJsonpaim-trainer"]||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),i=a.n(s),c=a(11),l=a(10),o=a(5),u=a(6),m=a(8),h=a(7),d=a(14),f=a(9),g=a(23),_={Easy:{10:11,30:33,60:66},Medium:{10:15,30:46,60:92},Hard:{10:24,30:73,60:146}},p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={hidden:!0},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({hidden:!1})}),this.props.waitBeforeShow)}},{key:"render",value:function(){return this.state.hidden?null:this.props.children}}]),t}(r.a.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={width:a.props.position[0],height:a.props.position[1],destroyed:!1},a.destroyTarget=function(){a.setState({width:0,height:0,destroyed:!0})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.waitTime,n=t.countScore,s=this.state.width+"px",i=this.state.height+"px";return r.a.createElement(p,{waitBeforeShow:a},r.a.createElement("div",{className:"game__container"},r.a.createElement("div",{className:"game__target ".concat(this.state.destroyed?null:"game__traget--display"),style:{left:s,top:i},onClick:function(){n(),e.destroyTarget()}})))}}]),t}(r.a.Component),b=function(e){var t=e.width,a=e.height,n=e.gameDifficult,s=e.gameDuration,i=e.countScore,c=function(e,t,a,n){var r=_[a][n],s=new Array(r).fill([0,0]),i=function(e){return Math.floor(Math.random()*e)+1};console.log(e,t);var c,l=s.map((function(){return[i(e-34),i(t-34)]}));switch(a){case"Hard":c=500;break;case"Medium":c=800;break;case"Easy":default:c=1e3}return[l,c]}(t,a,n,s),l=Object(g.a)(c,2),o=l[0],u=l[1];return o.map((function(e,t){return r.a.createElement(E,{key:e,position:e,waitTime:u*t*.8,countScore:i})}))},v=function(e){var t=1e3*e.gameDuration-2e3;return[5,4,3,2,1].map((function(e,a){return r.a.createElement(p,{waitBeforeShow:t+1e3*a},r.a.createElement("div",{className:"game__counter game__counter--animation"},e))}))},N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={width:0,height:0,score:0,goToScoreBoard:!1},a.countScore=function(){a.setState({score:a.state.score+1})},a.checkTime=function(){var e=1e3*a.props.location.state.gameDuration+3e3;setTimeout((function(){return a.setState({goToScoreBoard:!0})}),e)},a.showTargets=function(e,t,n,s){if(0!==e&&0!==t)return r.a.createElement(b,{width:e,height:t,gameDuration:n,gameDifficult:s,countScore:a.countScore})},a.countScore=a.countScore.bind(Object(d.a)(a)),a.gameBoard=r.a.createRef(),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){if(this.gameBoard.current){var e=this.gameBoard.current.offsetWidth,t=this.gameBoard.current.offsetHeight;this.checkTime(),this.setState({width:e,height:t})}}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.score===t.score}},{key:"render",value:function(){var e=this.state,t=e.width,a=e.height,n=e.score,s=this.props.location.state,i=s.gameDuration,c=s.gameDifficult;return this.state.goToScoreBoard?r.a.createElement(l.a,{to:{pathname:"/result",state:{gameDuration:i,gameDifficult:c,score:n}}}):r.a.createElement("main",{className:"page",ref:this.gameBoard},r.a.createElement("section",{className:"game"},this.showTargets(t,a,i,c),r.a.createElement(v,{gameDuration:i})))}}]),t}(r.a.Component),y=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__logo"},r.a.createElement("i",{className:"material-icons header__icon"},"control_camera"),r.a.createElement("p",{className:"header__text"},"Aim trainer")))},D=function(e){var t=e.gameDifficult,a=e.gameDuration;return null!==t&null!==a?r.a.createElement("div",null,r.a.createElement("div",{className:"settings__border settings_border--complete"}),r.a.createElement("div",{className:"settings__container"},r.a.createElement(c.b,{className:"settings__button",to:{pathname:"/game",state:{gameDuration:a,gameDifficult:t}}},"Start game"))):null!==t||null!==a?r.a.createElement("div",{className:"settings__border settings__border--half"}):null},w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={gameDuration:null,gameDifficult:null},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"setDifficult",value:function(e){this.setState({gameDifficult:e.target.value})}},{key:"setTime",value:function(e){this.setState({gameDuration:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.gameDuration,a=e.gameDifficult;return r.a.createElement("main",{className:"page"},r.a.createElement(y,null),r.a.createElement("section",{className:"settings"},r.a.createElement("h4",{className:"settings__header"},"Time: ",t?t+" seconds":null),r.a.createElement("div",{className:"settings__container"},r.a.createElement("button",{type:"button",className:"settings__time",value:10,onClick:this.setTime.bind(this)},"10s"),r.a.createElement("button",{className:"settings__time",type:"button",value:30,onClick:this.setTime.bind(this)},"30s"),r.a.createElement("button",{className:"settings__time",type:"button",value:60,onClick:this.setTime.bind(this)},"60s")),r.a.createElement("h4",{className:"settings__header"},"Level of difficulty: ",a),r.a.createElement("div",{className:"settings__container"},r.a.createElement("button",{className:"settings__difficult",type:"button",value:"Easy",onClick:this.setDifficult.bind(this)},"Easy"),r.a.createElement("button",{className:"settings__difficult",type:"button",value:"Medium",onClick:this.setDifficult.bind(this)},"Medium"),r.a.createElement("button",{className:"settings__difficult",type:"button",value:"Hard",onClick:this.setDifficult.bind(this)},"Hard")),r.a.createElement(D,{gameDifficult:a,gameDuration:t})))}}]),t}(r.a.Component),S=function(e){var t=e.location.state,a=t.gameDuration,n=t.gameDifficult,s=t.score,i=function(e,t,a){return Math.round(a/_[t][e]*100)}(a,n,s),l=function(e,t){return _[t][e]}(a,n);return r.a.createElement("main",{className:"page"},r.a.createElement(y,null),r.a.createElement("section",{className:"result"},r.a.createElement("div",{className:"result__container"},r.a.createElement("h1",{className:"result__header result__header--main"},"Time end!")),r.a.createElement("div",{className:"result__container"},r.a.createElement("h2",{className:"result__header"},"Mode:",r.a.createElement("span",{className:"result__settings"},n))),r.a.createElement("div",{className:"result__container"},r.a.createElement("h2",{className:"result__header"},"Time:",r.a.createElement("span",{className:"result__settings"},a,"s"))),r.a.createElement("div",{className:"result__container"},r.a.createElement("h2",{className:"result__header"},"Score:"),r.a.createElement("h3",{className:"result__header"},r.a.createElement("span",{className:"result__score"},s," / ",l))),r.a.createElement("div",{className:"result__container"},r.a.createElement("h2",{className:"result__header"},"Accuracy:",r.a.createElement("span",{className:"result__score"},i,"%"))),r.a.createElement("div",{className:"result__container"},r.a.createElement(c.b,{className:"result__button",to:"/"},"Play Again!"))))},k=(a(34),function(){return r.a.createElement(c.a,{basename:"/aim-trainer"},r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",exact:!0,component:w}),r.a.createElement(l.b,{path:"/game",component:N}),r.a.createElement(l.b,{path:"/result",component:S}),"/>"))});i.a.render(r.a.createElement(k,null),document.querySelector("#root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.72994777.chunk.js.map