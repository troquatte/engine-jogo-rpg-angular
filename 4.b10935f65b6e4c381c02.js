(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ow3J:function(t,i,o){"use strict";o.r(i),o.d(i,"PageModule",function(){return _});var n=o("ofXK"),e=o("tyNb"),s=o("fXoL");let a=(()=>{class t{constructor(){this.playAmbientSound=new Audio,this.playAmbientStartVolume=.2,this.playAmbientVolume=this.playAmbientStartVolume,this.playObjectsSound=new Audio,this.playObjectsStartVolume=.1,this.playObjectsSoundVolume=this.playObjectsStartVolume,this.pausedAllSound=!1}getPlayAmbientSound(){this.playAmbientSound.src?this.playAmbientSound.play():(this.playAmbientSound.src="./assets/sounds/ambients/music-ambient.mp3",this.playAmbientSound.volume=this.playAmbientVolume)}getPlayObjectsSound(t){this.playObjectsSound.src=t,this.playObjectsSound.volume&&(this.playObjectsSound.volume=this.playObjectsSoundVolume),this.playObjectsSound.play()}getPouseAllSound(){return this.pausedAllSound?(this.playAmbientSound.volume=this.playAmbientStartVolume,this.playObjectsSound.volume=this.playObjectsStartVolume,this.pausedAllSound=!1):(this.playAmbientSound.volume=0,this.playObjectsSound.volume=0,this.pausedAllSound=!0)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=s.Ab({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function r(t,i){if(1&t){const t=s.Ib();s.Hb(0,"img",2),s.Nb("click",function(){return s.Vb(t),s.Pb().toggleSound()}),s.Gb()}}function p(t,i){if(1&t){const t=s.Ib();s.Hb(0,"img",3),s.Nb("click",function(){return s.Vb(t),s.Pb().toggleSound()}),s.Gb()}}let c=(()=>{class t{constructor(t){this.soundMapService=t,this.soundType=this.soundMapService.pausedAllSound}ngOnInit(){}toggleSound(){this.soundType=this.soundMapService.getPouseAllSound()}}return t.\u0275fac=function(i){return new(i||t)(s.Eb(a))},t.\u0275cmp=s.yb({type:t,selectors:[["game-button-sound"]],decls:2,vars:2,consts:[["src","./assets/images/details/actions/sound/sound-switch-off.png",3,"click",4,"ngIf"],["src","./assets/images/details/actions/sound/sound-switch-on.png",3,"click",4,"ngIf"],["src","./assets/images/details/actions/sound/sound-switch-off.png",3,"click"],["src","./assets/images/details/actions/sound/sound-switch-on.png",3,"click"]],template:function(t,i){1&t&&(s.Yb(0,r,1,0,"img",0),s.Yb(1,p,1,0,"img",1)),2&t&&(s.Qb("ngIf",i.soundType),s.vb(1),s.Qb("ngIf",!i.soundType))},directives:[n.i],styles:["[_nghost-%COMP%]{z-index:1;position:fixed;display:block;right:10px;top:15px}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;width:50px}"]}),t})();var l=o("HDdC");let u=(()=>{class t{constructor(){this.myHero={y:0,x:0,mapaId:1,avatar:""},this.captain="url('../../../assets/images/heroes/captain.jpg')",this.gamePlayHero=this.myHero}selectHero(t){switch(t){case"captain":this.myHero.avatar=this.captain}return this.myHero}getGamePlayHero(){return new l.a(t=>{if(this.gamePlayHero)return t.next(this.gamePlayHero)})}setGamePlayHero(){return this.myHero}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=s.Ab({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const d=function(t,i,o){return{top:t,left:i,background:o}};let m=(()=>{class t{constructor(t){this.positionHeroService=t,this.positionHero=this.positionHeroService.selectHero("captain")}ngOnInit(){this.positionHeroService.getGamePlayHero().subscribe(t=>this.positionHero=t)}}return t.\u0275fac=function(i){return new(i||t)(s.Eb(u))},t.\u0275cmp=s.yb({type:t,selectors:[["game-hero"]],decls:1,vars:5,consts:[[1,"hero",3,"ngStyle"]],template:function(t,i){1&t&&s.Fb(0,"div",0),2&t&&s.Qb("ngStyle",s.Sb(1,d,i.positionHero.x+"px",i.positionHero.y+"px",i.positionHero.avatar))},directives:[n.j],styles:[".hero[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;border:5px solid #fff;background-repeat:no-repeat;position:absolute;box-shadow:0 10px 10px 0 rgba(0,0,0,.8);transition:1s ease-out;z-index:10}"]}),t})(),b=(()=>{class t{constructor(){this.initialPositionMap=0,this.initialPositionHeroMap={y:0,x:0}}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=s.Ab({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),h=(()=>{class t extends b{constructor(t){super(),this.positionHeroService=t,this.positionMap=[{id:1,y:0,x:this.initialPositionMap+0,width:564,height:564,disabled:!0,background:"url(assets/images/maps/mapa-baixo.jpg)",positionTips:[{id:1,y:420,x:420,event:"Voc\xea \xe9 bix\xe3o mesmo quer saber mais sobre o assunto? Arrasta pra cima!"}],positionFromTo:[{id:1,from:{mapaId:1,y:100,x:510},to:{mapaId:2,y:85,x:70}}]},{id:2,y:0,x:this.initialPositionMap+564,width:564,height:564,disabled:!1,background:"url(assets/images/maps/mapa.jpg)",positionTips:[{id:5,y:320,x:320,event:"Aeeeeee Funfouuuu"}],positionFromTo:[{id:3,from:{mapaId:2,y:100,x:30},to:{mapaId:1,y:85,x:430}}]}],this.initialPositionHeroMap={y:100,x:100}}getPositionMap(){return this.positionHeroService.setGamePlayHero().y=this.initialPositionHeroMap.y,this.positionHeroService.setGamePlayHero().x=this.initialPositionHeroMap.x,this.positionMap}}return t.\u0275fac=function(i){return new(i||t)(s.Kb(u))},t.\u0275prov=s.Ab({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),g=(()=>{class t extends b{constructor(t){super(),this.positionHeroService=t,this.positionMap=[{id:1,y:0,x:this.initialPositionMap+0,width:564,height:564,disabled:!0,background:"url(assets/images/maps/mapa.jpg)"}],this.initialPositionHeroMap={y:100,x:200}}getPositionMap(){return this.positionHeroService.setGamePlayHero().y=this.initialPositionHeroMap.y,this.positionHeroService.setGamePlayHero().x=this.initialPositionHeroMap.x,this.positionMap}}return t.\u0275fac=function(i){return new(i||t)(s.Kb(u))},t.\u0275prov=s.Ab({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),y=(()=>{class t{constructor(t,i){this.positionMapPhaseOneService=t,this.positionMapPhaseTwoService=i}switchMaps(t){return new l.a(i=>{switch(t){case"1":i.next(this.positionMapPhaseOneService.getPositionMap());break;case"2":i.next(this.positionMapPhaseTwoService.getPositionMap())}})}}return t.\u0275fac=function(i){return new(i||t)(s.Kb(h),s.Kb(g))},t.\u0275prov=s.Ab({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const f=function(t,i){return{top:t,left:i}};function M(t,i){if(1&t){const t=s.Ib();s.Hb(0,"article",5),s.Fb(1,"img",6),s.Hb(2,"ul"),s.Hb(3,"li",7),s.Nb("click",function(){s.Vb(t);const o=i.$implicit;return s.Pb(3).moveHeroToMap(o.id)}),s.Zb(4," Checar "),s.Gb(),s.Gb(),s.Gb()}if(2&t){const t=i.$implicit;s.Qb("ngStyle",s.Rb(1,f,t.x+"px",t.y+"px"))}}function x(t,i){if(1&t){const t=s.Ib();s.Hb(0,"article",8),s.Nb("click",function(){s.Vb(t);const o=i.$implicit;return s.Pb(3).moveHeroFromToMap(o.to.mapaId)}),s.Fb(1,"img",9),s.Gb()}if(2&t){const t=i.$implicit;s.Qb("ngStyle",s.Rb(1,f,t.from.x+"px",t.from.y+"px"))}}const P=function(t,i,o,n,e){return{top:t,left:i,width:o,height:n,background:e}};function v(t,i){if(1&t&&(s.Hb(0,"section",2),s.Yb(1,M,5,4,"article",3),s.Yb(2,x,2,4,"article",4),s.Gb()),2&t){const t=s.Pb().$implicit;s.Qb("ngStyle",s.Tb(3,P,t.x+"px",t.y+"px",t.width+"px",t.height+"px",t.background)),s.vb(1),s.Qb("ngForOf",t.positionTips),s.vb(1),s.Qb("ngForOf",t.positionFromTo)}}function S(t,i){1&t&&s.Yb(0,v,3,9,"section",1),2&t&&s.Qb("ngIf",i.$implicit.disabled)}let H=(()=>{class t{constructor(t,i,o,n){this.routerMapsService=t,this.positionHeroService=i,this.activatedRoute=o,this.soundMapService=n,this.positionHero=this.positionHeroService.selectHero(),this.stageMap="1",this.positionMap=[]}ngOnInit(){this.activatedRoute.params.subscribe(t=>{t.id&&(this.stageMap=t.id)},t=>console.log(t)),this.positionHeroService.getGamePlayHero().subscribe(t=>{this.positionHero=t}),this.routerMapsService.switchMaps(this.stageMap).subscribe(t=>{this.positionMap=t})}ngDoCheck(){this.soundMapService.getPlayAmbientSound()}moveHeroToMap(t){let i=this.positionMap.find(t=>this.positionHero.mapaId===t.id);if(null==i?void 0:i.positionTips){let o=i.positionTips.find(i=>i.id===t);o&&(this.positionHero.x=i.x+o.x-45,this.positionHero.y=i.y+o.y-45,setTimeout(()=>{this.soundMapService.getPlayObjectsSound("./assets/sounds/check.mp3")},1e3))}}moveHeroFromToMap(t){let i=this.positionMap.find(t=>this.positionHero.mapaId===t.id);if(null==i?void 0:i.positionFromTo){let o=i.positionFromTo.find(i=>i.to.mapaId===t);if(o){this.positionHero.x=o.from.x+i.x-45,this.positionHero.y=o.from.y+i.y-45,this.positionHero.mapaId=o.to.mapaId;let n=this.positionMap.find(t=>(null==o?void 0:o.to.mapaId)==t.id);(null==n?void 0:n.id)==t&&(n.disabled=!0),this.soundMapService.getPlayObjectsSound("./assets/sounds/open-door.mp3"),setTimeout(()=>{n&&o&&(this.positionHero.x=n.x+o.to.x,this.positionHero.y=n.y+o.to.y)},2e3)}}}}return t.\u0275fac=function(i){return new(i||t)(s.Eb(y),s.Eb(u),s.Eb(e.a),s.Eb(a))},t.\u0275cmp=s.yb({type:t,selectors:[["game-map"]],decls:1,vars:1,consts:[["ngFor","","async","",3,"ngForOf"],["class","mapa",3,"ngStyle",4,"ngIf"],[1,"mapa",3,"ngStyle"],["class","tips-mapa",3,"ngStyle",4,"ngFor","ngForOf"],["class","next-mapa",3,"ngStyle","click",4,"ngFor","ngForOf"],[1,"tips-mapa",3,"ngStyle"],["src","./assets/images/details/actions/btn/btn-tips.png","alt","Detalhes no Mapa"],[3,"click"],[1,"next-mapa",3,"ngStyle","click"],["src","./assets/images/details/actions/btn/btn-next-map.png","alt","Pr\xf3ximo Mapa"]],template:function(t,i){1&t&&s.Yb(0,S,1,1,"ng-template",0),2&t&&s.Qb("ngForOf",i.positionMap)},directives:[n.h,n.i,n.j],styles:[".mapa[_ngcontent-%COMP%], .mapa[_ngcontent-%COMP%]   .next-mapa[_ngcontent-%COMP%], .mapa[_ngcontent-%COMP%]   .tips-mapa[_ngcontent-%COMP%]{position:absolute;box-shadow:0 10px 10px 0 rgba(0,0,0,.8)}.mapa[_ngcontent-%COMP%]   .next-mapa[_ngcontent-%COMP%], .mapa[_ngcontent-%COMP%]   .tips-mapa[_ngcontent-%COMP%]{width:20px;height:20px;display:flex;align-items:center;justify-content:center;z-index:9999;cursor:pointer}.mapa[_ngcontent-%COMP%]   .next-mapa[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .mapa[_ngcontent-%COMP%]   .tips-mapa[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:none;list-style:none;position:absolute;margin:0;left:0;padding:2px 25px}.mapa[_ngcontent-%COMP%]   .next-mapa[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .mapa[_ngcontent-%COMP%]   .tips-mapa[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px 10px;background:#fff;border-left:5px solid #f18e05;border-radius:20px 0 0 20px}.mapa[_ngcontent-%COMP%]   .next-mapa[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%], .mapa[_ngcontent-%COMP%]   .tips-mapa[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%]{display:block}"]}),t})(),O=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s.yb({type:t,selectors:[["app-game-play"]],decls:3,vars:0,template:function(t,i){1&t&&(s.Fb(0,"game-button-sound"),s.Fb(1,"game-hero"),s.Fb(2,"game-map"))},directives:[c,m,H],styles:["[_nghost-%COMP%]{position:relative;display:block;height:100%;width:100%}  body{background:url(background-maps.816aec491a49b92c293b.png)!important;background-size:cover!important}"]}),t})();const w=[{path:"",component:O},{path:":id",component:O}];let C=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.Cb({type:t}),t.\u0275inj=s.Bb({imports:[[e.b.forChild(w)],e.b]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.Cb({type:t}),t.\u0275inj=s.Bb({imports:[[n.b]]}),t})(),_=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.Cb({type:t}),t.\u0275inj=s.Bb({imports:[[n.b,C,k]]}),t})()}}]);