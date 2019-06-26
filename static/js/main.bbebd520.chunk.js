(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},29:function(e,t){e.exports={APIKey:"4eff9afb"}},41:function(e,t,a){e.exports=a.p+"static/media/spinner.8261a237.gif"},44:function(e,t,a){e.exports=a(75)},49:function(e,t,a){},55:function(e,t,a){e.exports=a.p+"static/media/film.6c20af3b.png"},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),l=(a(49),a(4)),i=a(5),s=a(7),m=a(6),u=a(8),d=a(12),p=a(15),b=a(16);a(18);var h=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-light md-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header  "},r.a.createElement(p.b,{className:"navbar-brand text-white",to:"/"},r.a.createElement("img",{alt:"logo",style:{width:"200px"},className:"logo",src:a(55)}))))))};var v=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"footer p-3 mt-4 text-left bg-light text-dark text-center"},"Developed By: ",r.a.createElement("span",{className:"font-weight-light"},"Volfrant Bezati"),", Using React Js & and Redux JS integrated with external movies data API ",r.a.createElement("a",{href:"http://www.omdbapi.com",target:"_blank",rel:"noopener noreferrer"},"OMDB")))))},E=a(28),f=a.n(E),g=a(29),O=function(){return{type:"LOADING"}},y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e){a.props.searchMovie(e.target.value)},a.onSubmit=function(e){e.preventDefault(),a.props.fetchMovies(a.props.text),a.props.setLoading()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{id:"searchForm",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",className:"form-control",name:"searchText",placeholder:"Search Movies, TV Series ...",onChange:this.onChange}),r.a.createElement("i",{className:"fa fa-search"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block btn-bg mt-3"},"SEARCH"))))}}]),t}(n.Component),j=Object(d.b)(function(e){return{text:e.movies.text}},{searchMovie:function(e){return function(t){t({type:"SEARCH_MOVIE",payload:e})}},fetchMovies:function(e){return function(t){f.a.get("http://www.omdbapi.com/?apikey=".concat(g.APIKey,"&s=").concat(e)).then(function(e){return t({type:"FETCH_MOVIES",payload:e.data})}).catch(function(e){return console.log(e)})}},setLoading:O})(y),N=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.movie;return r.a.createElement("div",{className:"col-lg-2 col-md-3 mb-5"},r.a.createElement("div",{className:"card card-body bg-dark text-center h-100"},r.a.createElement("img",{className:"w-100 mb-2",src:e.Poster,alt:"Movie Poster"}),r.a.createElement("h6",{className:"text-light card-title"},e.Title," - ",e.Year," "),r.a.createElement(p.b,{className:"btn btn-primary",to:"/movie/"+e.imdbID}," Learn More ")))}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this.props.movies;return e="True"===t.Response?t.Search.map(function(e,t){return r.a.createElement(N,{key:t,movie:e})}):null,r.a.createElement("div",{className:"row p-5"},e)}}]),t}(n.Component),x=Object(d.b)(function(e){return{movies:e.movies.movies}})(w),k=a(41),M=a.n(k);var I=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:M.a,style:{width:"100px",margin:"auto",display:"block"},alt:"loading..."}))},C=(a(73),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.loading;return r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(j,null),e?r.a.createElement(I,null):r.a.createElement(x,null))}}]),t}(n.Component)),S=Object(d.b)(function(e){return{loading:e.movies.loading}})(C),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.setLoading()}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.movie,n=r.a.createElement("div",{className:"container p-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 card card-body"},r.a.createElement("img",{src:a.Poster,className:"thumbnail",alt:"Poster",style:{width:"100%"}})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h2",{className:"mb-4"},a.Title),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Genre:")," ",a.Genre),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Released:")," ",a.Released),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Rated:")," ",a.Rated),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"IMDB Rating:")," ",a.imdbRating),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Director:")," ",a.Director),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Writer:")," ",a.Writer),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Actors:")," ",a.Actors)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card card-body bg-dark my-5 text-light"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,"About "),a.Plot,r.a.createElement("hr",null),r.a.createElement("a",{href:"https://www.imdb.com/title/"+a.imdbID,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary mr-3"},"View on IMDB"),r.a.createElement(p.b,{to:"/",className:"btn btn-default text-light"},"Go Back To Search"))))),c=t?r.a.createElement(I,null):n;return r.a.createElement("div",null,c)}}]),t}(n.Component),D=Object(d.b)(function(e){return{loading:e.movies.loading,movie:e.movies.movie}},{fetchMovie:function(e){return function(t){f.a.get("http://www.omdbapi.com/?apikey=".concat(g.APIKey,"&i=").concat(e)).then(function(e){return t({type:"FETCH_MOVIE",payload:e.data})}).catch(function(e){return console.log(e)})}},setLoading:O})(A),R=a(14),T=a(42),P=a(43),V=a(20),B={text:"",movies:[],loading:!1,movie:[]},_=Object(R.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVIE":return Object(V.a)({},e,{text:t.payload,loading:!1});case"FETCH_MOVIES":return Object(V.a)({},e,{movies:t.payload,loading:!1});case"FETCH_MOVIE":return Object(V.a)({},e,{movie:t.payload,loading:!1});case"LOADING":return Object(V.a)({},e,{loading:!0});default:return e}}}),H=[T.a],L=Object(R.createStore)(_,{},Object(P.composeWithDevTools)(R.applyMiddleware.apply(void 0,H))),F=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:L},r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(b.a,{exact:!0,path:"/",component:S}),r.a.createElement(b.a,{exact:!0,path:"/movie/:id",component:D}),r.a.createElement(v,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(74);o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.bbebd520.chunk.js.map