var InfoBubble=function(){function b(n){Lib.CssClass.remove(n,"b_hide")}function k(n){Lib.CssClass.add(n,"b_hide")}function d(n,t,i){var r=(new Date).getTime();!t||i||l!==null&&r-l<lt?Lib.CssClass.add(n,"infobubble_showNoDelay"):Lib.CssClass.add(n,"infobubble_fadeIn");sj_evt.fire("infobubble_show",n)}function a(n){Lib.CssClass.remove(n,"infobubble_showNoDelay");Lib.CssClass.remove(n,"infobubble_fadeIn")}function h(n){var t=n.getBoundingClientRect();return new p(t.left,t.top,t.bottom-t.top,t.right-t.left)}function vt(n){if(n){var t=_ge(n);if(t)return h(t)}return null}function g(n){Lib.CssClass.remove(n,"ifbb_tri_bottom");Lib.CssClass.add(n,"ifbb_tri_top")}function nt(n){Lib.CssClass.remove(n,"ifbb_tri_top");Lib.CssClass.add(n,"ifbb_tri_bottom")}function tt(n){Lib.CssClass.remove(n,"ifbb_tri_right");Lib.CssClass.add(n,"ifbb_tri_left")}function it(n){Lib.CssClass.remove(n,"ifbb_tri_left");Lib.CssClass.add(n,"ifbb_tri_right")}function yt(n){Lib.CssClass.remove(n,"tri_center");Lib.CssClass.remove(n,"tri_right");Lib.CssClass.add(n,"tri_left")}function rt(n){Lib.CssClass.remove(n,"tri_left");Lib.CssClass.remove(n,"tri_right");Lib.CssClass.add(n,"tri_center")}function pt(n){Lib.CssClass.remove(n,"tri_left");Lib.CssClass.remove(n,"tri_center");Lib.CssClass.add(n,"tri_right")}function wt(n){Lib.CssClass.remove(n,"tri_middle");Lib.CssClass.remove(n,"tri_bottom");Lib.CssClass.add(n,"tri_top")}function bt(n){Lib.CssClass.remove(n,"tri_top");Lib.CssClass.remove(n,"tri_bottom");Lib.CssClass.add(n,"tri_middle")}function kt(n){Lib.CssClass.remove(n,"tri_top");Lib.CssClass.remove(n,"tri_middle");Lib.CssClass.add(n,"tri_bottom")}function dt(n){Lib.CssClass.remove(n,"ifbb_tri_top");Lib.CssClass.remove(n,"ifbb_tri_bottom");Lib.CssClass.remove(n,"ifbb_tri_left");Lib.CssClass.remove(n,"ifbb_tri_right");Lib.CssClass.remove(n,"tri_left");Lib.CssClass.remove(n,"tri_right");Lib.CssClass.remove(n,"tri_top");Lib.CssClass.remove(n,"tri_bottom");n.style.top="";n.style.right="";n.style.bottom="";n.style.left="";n.style.width=""}function ut(){return _w.innerHeight||_d.documentElement.clientHeight||_d.body.clientHeight}function ft(){return _w.innerWidth||_d.documentElement.clientWidth||_d.body.clientWidth}function e(n){return n+_w.pageYOffset}function gt(n){return _d.body.scrollWidth>ft()&&(n-=ct),n-_w.pageYOffset}function f(n){return n+_w.pageXOffset}function et(n){return _d.body.scrollHeight>ut()&&(n-=ht),n-_w.pageXOffset}function ni(){var n=sj_ce("div"),i,t,r;return n.style.visibility="hidden",n.style.width="100px",_d.body.appendChild(n),i=n.offsetWidth,n.style.overflow="scroll",t=sj_ce("div"),t.style.width="100%",n.appendChild(t),r=t.offsetWidth,_d.body.removeChild(n),i-r}function ti(){var n=sj_ce("div"),i,t,r;return n.style.visibility="hidden",n.style.height="100px",_d.body.appendChild(n),i=n.offsetHeight,n.style.overflow="scroll",t=sj_ce("div"),t.style.height="100%",n.appendChild(t),r=t.offsetHeight,_d.body.removeChild(n),i-r}function ii(n,t,i,r,u,f,e,o,h,c,l){if(!s[n]){var a=new at(n,t,i,r,u,f,e,o,h,c,l);s[n]=a}}function ri(t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,b,k,d,g,nt,tt,it){var rt=function(t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,b,k,d,g,nt,tt,it){if(!n[t]){var rt=new w(t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,b,k,d,g,nt,tt,it);n[t]=rt;sj_evt.fire(t+"_ready")}},ut=[t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,b,k,d,g,nt,tt,it],ft=_ge(t);typeof SmartRendering!="undefined"?SmartRendering.LoadElementWhenDisplayed(this,ft,rt,ut):rt.apply(this,ut)}function ui(t,i){i===void 0&&(i=!0);n[t]&&n[t].setFocus(i)}function ot(i){return n[i]&&n[i].getStatus()===t.Shown}function fi(t,i){if(i===void 0&&(i=!0),ot(t))return n[t].hide(!0,i),!0;return!1}var i=8,u=16,st=16,c=20,v=50,o=14,ht=ni(),ct=ti(),lt=300,y=12,s=[],n=[],l=null,p=function(){function n(n,t,i,r){this.left=n;this.top=t;this.height=i;this.width=r}return n}(),at=function(){function i(n,t,i,r,u,f,e,o,s,h,c){(this.id=n,this.bubbleId=t,this.node=_ge(n),this.anchor=_ge(i),this.enableInfoBubbleItemToggle=c,this.node&&_ge(this.bubbleId))&&(this.anchor==null&&(this.anchor=this.node),this.init(r,u,f,e,o,s,h))}return i.prototype.getAnchorLocation=function(){return h(this.anchor)},i.prototype.hideBubbles=function(){for(var t in n)n.hasOwnProperty(t)&&n[t].hide(!0)},i.prototype.itemClick=function(){this.enableInfoBubbleItemToggle&&n[this.bubbleId].getStatus()===t.Shown?n[this.bubbleId].hide(!0):n[this.bubbleId].show(!1);sj_pd(event);sj_sp(event)},i.prototype.cleanShowDelayTimeout=function(){this.showBubbleItemTimeout&&(sb_ct(this.showBubbleItemTimeout),this.showBubbleItemTimeout=null)},i.prototype.init=function(t,i,r,u,f,e,o){var s=this;t&&(f?sj_evt.bind(this.id+"_click",function(){sj_evt.bind(s.bubbleId+"_ready",function(){s.itemClick()},!0)},!0):sj_be(this.node,"click",function(){s.itemClick()}));i&&(sj_be(this.node,"mouseenter",function(){if(n[s.bubbleId].clearHideBubbleItemTimeout(),e&&e>0){s.cleanShowDelayTimeout();var t=s;s.showBubbleItemTimeout=sb_st(function(){n[t.bubbleId].show(!0,o)},e)}else n[s.bubbleId].show(!0,o)}),sj_be(this.node,"keyup",function(t){if(n[s.bubbleId].clearHideBubbleItemTimeout(),t.keyCode==9)if(e&&e>0){s.cleanShowDelayTimeout();var i=s;s.showBubbleItemTimeout=sb_st(function(){n[i.bubbleId].show(!1,o)},e)}else n[s.bubbleId].show(!1,o)}));r&&(sj_be(this.node,"click",function(t){for(var i in n)n.hasOwnProperty(i)&&i!=s.bubbleId&&n[i].hide(!0);sj_sp(t)}),sj_evt.bind("slideexp_movestart",this.hideBubbles),sj_evt.bind("customScrolled",this.hideBubbles));u&&(sj_be(this.node,"mouseleave",function(){s.cleanShowDelayTimeout();n[s.bubbleId].hide()}),sj_be(this.node,"keydown",function(t){t.keyCode==27&&(s.cleanShowDelayTimeout(),n[s.bubbleId].hide())}),sj_be(this.node,"focusout",function(t){var u=sj_ev(t),i=u.relatedTarget,r=_ge(s.bubbleId);i!==null&&(s.node.contains(i)||r==null||r.contains(i))||(s.cleanShowDelayTimeout(),n[s.bubbleId].hide())}))},i}(),t,r,w;return function(n){n[n.Hidden=0]="Hidden";n[n.Showing=1]="Showing";n[n.Shown=2]="Shown";n[n.Hiding=3]="Hiding"}(t||(t={})),function(n){n[n.Top=0]="Top";n[n.Right=1]="Right";n[n.Bottom=2]="Bottom";n[n.Left=3]="Left"}(r||(r={})),w=function(){function n(n,i,u,f,e,o,s,h,c,l,a,v,y,p,w,b,k,d,g,nt,tt,it){var ft,et,rt,ut;(it===void 0&&(it=0),this.hideBubbleItemTimeout=null,this.triangleHorizontalPlacingOrder=[0,-1,1],this.triangleVerticalPlacingOrder=[0,-1,1],this.state=t.Hidden,this.timerId=-1,this.actualWidth=0,this.actualHeight=0,this.hideBubbleDelayTimeAfterLeave=null,this.hideOnlyByClick=!1,this.hideOnlyByCustom=!1,this.id=n,this.itemId=i,this.locatorId=u,this.width=f,this.border=e,this.anchorVerticalOffsetPixel=o,this.enableOverlay=h,this.enableFullWidth=c,this.enableUnfixedTriangle=l,this.enableBubbleHeader=a,this.enableClickOutsideToClose=v,this.enableHoverOutsideToClose=y,this.enableDynamicWidth=p,this.disableInitialFocus=w,this.toolTipMaxWidth=b,this.showBubbleWithNoFadeInWhenHover=k,this.disableListenFocusEvent=d,this.centerAlignBubbleToElementId=g,this.setFocusOnInfobubble=nt,this.enableClickInsideToClose=tt,this.hideBubbleDelayTimeAfterLeave=it,this.node=_ge(n),this.node)&&(et=(ft=_w.getComputedStyle(this.node,null))===null||ft===void 0?void 0:ft.getPropertyValue("padding-left"),this.padding=et?parseInt(et):st,this.extraWidth=this.padding+this.border,rt=a?1:0,this.beforeNode=this.node.children[rt],this.closeNode=this.node.children[rt+1],this.content=this.node.children[rt+2],this.afterNode=this.node.children[rt+3],this.locatorNode=_ge(this.locatorId),this.locatorNode&&this.locatorNode.appendChild(this.node),this.enableCenterAlignToElement=this.centerAlignBubbleToElementId!==undefined&&this.centerAlignBubbleToElementId!==null&&this.centerAlignBubbleToElementId!=="",this.appns=this.node.getAttribute("data-appns"),this.k=this.node.getAttribute("data-k"),this.partnerInfo=this.node.getAttribute("data-partnerInfo"),this.infoBubblePosition=this.getPosition(this.node.getAttribute("data-ibp")),ut=this.getPosition(this.node.getAttribute("data-trp")),this.infoBubblePosition==r.Left||this.infoBubblePosition==r.Right?ut==r.Top?this.triangleVerticalPlacingOrder=[1,0,-1]:ut==r.Bottom&&(this.triangleVerticalPlacingOrder=[-1,0,1]):ut==r.Left?this.triangleHorizontalPlacingOrder=[-1,0,1]:ut==r.Right&&(this.triangleHorizontalPlacingOrder=[1,0,-1]),this.init(s))}return n.prototype.getPosition=function(n){return n==="top"?r.Top:n==="right"?r.Right:n==="bottom"?r.Bottom:n==="left"?r.Left:void 0},n.prototype.getStatus=function(){return this.state},n.prototype.show=function(n,i){this.clearHideBubbleItemTimeout();switch(this.state){case t.Hidden:this.state=t.Showing;this.showBubble(n);break;case t.Hiding:sb_ct(this.timerId);d(this.node,n,i);this.state=t.Shown}},n.prototype.hide=function(n,i,r){var u=this,f;if(n===void 0&&(n=!1),i===void 0&&(i=!1),r===void 0&&(r=!1),f=function(){if((u.clearHideBubbleItemTimeout(),!u.hideOnlyByClick||n)&&(!u.hideOnlyByCustom||r))switch(u.state){case t.Showing:u.state=t.Hidden;a(u.node);break;case t.Shown:u.state=t.Hiding;n?u.hideBubble(i):u.timerId=sb_st(function(){a(u.node);l=(new Date).getTime();u.timerId=sb_st(function(){u.hideBubble(i)},v)},v);break;case t.Hiding:n&&(sb_ct(u.timerId),u.hideBubble(i))}},!this.hideBubbleDelayTimeAfterLeave||n)return f();this.clearHideBubbleItemTimeout();this.hideBubbleItemTimeout=sb_st(f,this.hideBubbleDelayTimeAfterLeave)},n.prototype.clearHideBubbleItemTimeout=function(){this.hideBubbleItemTimeout!==null&&(sb_ct(this.hideBubbleItemTimeout),this.hideBubbleItemTimeout=null)},n.prototype.setFocus=function(n,t,i){var f=this,r,u;n===void 0&&(n=!0);t===void 0&&(t=!1);i===void 0&&(i=!1);i&&this.node?(this.node.setAttribute("tabIndex","-1"),this.node.focus()):n&&AccessibilityHelpers.focusFirstFocusableElementWithin(this.node);r=AccessibilityHelpers.getFocusableElementWithin(this.node);u=AccessibilityHelpers.getFocusableElementWithin(this.node,!0);t||r==null||this.firstChildNode!=null||sj_be(this.node,"focusin",function(n){f.show(!1,!1);sj_sp(n)});t||r==null||r==this.firstChildNode||(this.firstChildNode=r,sj_be(this.firstChildNode,"focusout",function(n){f.hide();sj_sp(n)}));t||u==null||u==r||u==this.lastChildNode||(this.lastChildNode=u,sj_be(this.lastChildNode,"focusout",function(n){f.hide();sj_sp(n)}));sj_evt.fire("infobubble_setFocus_done",this.node)},n.prototype.init=function(n){var t=this;if(this.enableFullWidth&&Lib.CssClass.add(this.node,"fullwidth"),this.enableOverlay&&(this.overlayNode=sj_ce("div",undefined,"infobubble_overlay"),sj_be(this.overlayNode,"click",function(){t.hide(!0)})),sj_be(this.closeNode,"click",function(){t.hide(!0,!0)}),sj_be(this.closeNode,"keydown",function(n){(n.keyCode===13||n.keyCode===32)&&(sj_pd(n),t.hide(!0,!0))}),!this.enableOverlay&&this.node&&typeof sj_be!="undefined"&&(sj_be(this.node,"mouseenter",function(){t.show(!0,t.showBubbleWithNoFadeInWhenHover)}),this.enableClickOutsideToClose&&(sj_be(this.node,"click",function(n){t.clearHideBubbleItemTimeout();sj_sp(n)}),sj_be(_d.body,"click",function(){t.hide(!0);sj_evt.fire("bubble_clickOutsideToClose",t.id)})),this.enableClickInsideToClose&&sj_be(this.node,"click",function(){t.hide(!0)}),this.enableHoverOutsideToClose&&sj_be(this.node,"mouseleave",function(){var n=!Lib.CssClass.contains(t.closeNode,"b_hide");n?t.hide():t.hide(!0)})),n&&sj_evt.bind("onP1",function(){t.hideOnlyByClick=!0;t.show(!1,!1)},!0),typeof Orientation!="undefined")Orientation.onOrientation(function(n){t.onOrientation(n)});sj_evt.bind("infobubble_customshow",function(n){n==null||n.length<=1||t.id!==n[1]||(t.hideOnlyByClick=!0,t.hideOnlyByCustom=n.length>1&&n[2],t.show(!1,!1))},!0);sj_evt.bind("infobubble_customhide",function(n){n==null||n.length<=1||t.id!==n[1]||(t.hide(!0,!1,!0),t.hideOnlyByCustom=!1)},!0)},n.prototype.getRenderedDimensions=function(n){var t=this.node,f=t.style.whiteSpace,i,r,u;return t.style.visibility="hidden",t.style.top="-5000px",n===0?t.style.whiteSpace="nowrap":t.style.width=n+"px",i=!Lib.CssClass.contains(t,"b_hide"),b(t),_d.body.appendChild(t),r=t.offsetHeight,u=t.offsetWidth+1,_d.body.removeChild(t),i||k(t),t.style.width="",t.style.top="",t.style.visibility="",n===0&&(t.style.whiteSpace=f),new p(0,0,r,u)},n.prototype.getBubbleHeight=function(n){return this.getRenderedDimensions(n).height},n.prototype.showBubble=function(n){var i=this,r;if(this.state==t.Showing){if(r=this.placeAround(s[this.itemId].getAnchorLocation()),!r){this.state=t.Hidden;return}this.enableOverlay&&_d.body.appendChild(this.overlayNode);this.locatorNode||_d.body.appendChild(this.node);b(this.node);sb_st(function(){d(i.node,n,i.showBubbleWithNoFadeInWhenHover)},20);this.state=t.Shown;n&&this.disableInitialFocus||sb_st(function(){i.setFocus(!0,i.disableListenFocusEvent,i.setFocusOnInfobubble)},20);sj_evt.fire("infobubble_show_log",this.node);Log.Log("Show","InfoBubble",this.id,!1,"AppNS",this.appns,"K",this.k,"Category","CommonControls");Log.Log("Show","Expansion",this.id,!1,"AppNS",this.appns,"K",this.k,"Category","CommonControls","PartnerInfo",this.partnerInfo)}},n.prototype.hideBubble=function(n){if(n===void 0&&(n=!0),this.state==t.Hiding){a(this.node);k(this.node);this.locatorNode||this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node);this.enableOverlay&&this.overlayNode&&this.overlayNode.parentNode&&this.overlayNode.parentNode.removeChild(this.overlayNode);this.resetBubble();this.state=t.Hidden;var i=_ge(this.itemId);i&&n&&AccessibilityHelpers.focusFirstFocusableElementWithin(i);sj_evt.fire("infobbuble_hide ",this.node);Log.Log("Hide","InfoBubble",this.id,!1,"AppNS",this.appns,"K",this.k,"Category","CommonControls")}},n.prototype.resetBubble=function(){dt(this.node);this.beforeNode!=null&&this.afterNode!=null&&(this.beforeNode.style.left="",this.afterNode.style.left="",this.beforeNode.style.top="",this.afterNode.style.top="")},n.prototype.onOrientation=function(){this.state==t.Shown&&(this.resetBubble(),this.placeAround(s[this.itemId].getAnchorLocation()))},n.prototype.placeAround=function(n){if(this.locatorNode)return this.infoBubblePosition==r.Left||this.infoBubblePosition==r.Right?this.placeInHorizontal(this.locatorNode,n):this.placeInVertical(this.locatorNode,n);var t=ft(),i=ut();if(this.actualWidth=this.getActualWidth(t),this.actualHeight=this.getBubbleHeight(this.actualWidth),this.enableBubbleHeader&&!this.enableFullWidth)return this.placeAroundWithHeader(n,t);if(this.infoBubblePosition==r.Left||this.infoBubblePosition==r.Right)if(this.placeInfoBubbleHorizontal(n.left,n.width,t))this.placeTriangleVertical(n.top,n.height,i);else return!1;else this.placeInfoBubbleVertical(n.top,n.height,i),this.placeTriangleHorizontal(n.left,n.width,t);return!0},n.prototype.placeAroundWithHeader=function(n,t){var u=e(Math.max(0,n.top-(this.actualHeight-n.height)/2)),r=f(n.left+n.width+i);return r+this.actualWidth<t?(this.node.style.top=u+"px",this.node.style.left=r+"px",this.node.style.width=this.actualWidth+"px",Lib.CssClass.add(this.node,"chevron_left"),!0):!1},n.prototype.placeInVertical=function(n,t){var f=h(n),r;return f.top>=t.top+t.height?(g(this.node),f.top-i<t.top+t.height&&(this.node.style.top=i+"px")):(nt(this.node),this.node.style.bottom=f.top+f.height+i>t.top?i+"px":"0"),r=t.width/2-u/2,r+=t.left-f.left,r<0?r=0:r>f.width-u&&(r=f.width-u),this.beforeNode!=null&&this.afterNode!=null&&(this.beforeNode.style.left=r+"px",this.afterNode.style.left=r+"px"),!0},n.prototype.placeInHorizontal=function(n,t){var f=h(n),r;return f.left>=t.left+t.width?(tt(this.node),f.left-i<t.left+t.width&&(this.node.style.left=i+"px")):(it(this.node),this.node.style.right=f.left+f.width+i>t.left?i+"px":"0"),r=t.height/2-u/2,r+=t.top-f.top,r<0?r=0:r>f.height-u&&(r=f.height-u),this.beforeNode!=null&&this.afterNode!=null&&(this.beforeNode.style.top=r+"px",this.afterNode.style.top=r+"px"),!0},n.prototype.getActualWidth=function(n){var t=this.width;return this.enableDynamicWidth&&(t=this.getRenderedDimensions(0).width,t>this.toolTipMaxWidth&&(t=this.toolTipMaxWidth),t=t-2*this.extraWidth),this.enableFullWidth?n-2*this.extraWidth-2*c:(t+2*this.extraWidth)*1.5>n?n/1.5-2*this.extraWidth:t},n.prototype.placeInfoBubbleVertical=function(n,t,u){var f=this.anchorVerticalOffsetPixel>t?t:this.anchorVerticalOffsetPixel,e=u-(n+t)+f,o=n+f;if(this.infoBubblePosition==r.Top){this.actualHeight+2*this.extraWidth+i<o||o>e?this.placeTopInfoBubble(n,f):this.placeBottomInfoBubble(n,t,f);return}this.actualHeight+2*this.extraWidth+i<e||e>o?this.placeBottomInfoBubble(n,t,f):this.placeTopInfoBubble(n,f)},n.prototype.placeInfoBubbleHorizontal=function(n,t,u){var f=this.anchorVerticalOffsetPixel>t?t:this.anchorVerticalOffsetPixel,o=u-(n+t)+f,e=n+f;return this.infoBubblePosition==r.Left&&this.width+2*this.extraWidth+i<e?(this.placeLeftInfoBubble(n,f),!0):this.width+2*this.extraWidth+i<o?(this.placeRightInfoBubble(n,t,f),!0):this.width+2*this.extraWidth+i<e?(this.placeLeftInfoBubble(n,f),!0):!1},n.prototype.placeBottomInfoBubble=function(n,t,r){g(this.node);this.node.style.top=e(n+t+i-r)+"px"},n.prototype.placeTopInfoBubble=function(n,t){nt(this.node);var r=this.getBubbleHeight(this.actualWidth);this.node.style.top=e(n-r-i+t)+"px"},n.prototype.placeRightInfoBubble=function(n,t,r){tt(this.node);this.node.style.left=f(n+t+i-r)+"px"},n.prototype.placeLeftInfoBubble=function(n,t){it(this.node);var r=this.width+2*this.extraWidth;this.node.style.left=f(n-r-i+t)+"px"},n.prototype.placeTriangleHorizontal=function(n,t,i){var r,u,f,h,c,e,s,o;if(this.node.style.width=this.actualWidth+"px",this.enableFullWidth&&this.enableBubbleHeader){rt(this.node);return}if(this.enableUnfixedTriangle){this.placeUnfixedTriangle(n,t,i);return}if(r=n+t/2,u=this.actualWidth/2+this.extraWidth,this.enableCenterAlignToElement){if(f=vt(this.centerAlignBubbleToElementId),f&&(h=f.left,c=f.width,this.placeTriangleHorizontalCenterAlignElement(r,i,h,c,u)))return}else for(e=0,s=this.triangleHorizontalPlacingOrder;e<s.length;e++){if(o=s[e],o==0&&r-u>=0&&r+u<=i){this.placeCenterBubble(n,t,i);return}if(o<0&&n>=u){this.placeLeftBubble(n,t,i);return}if(o>0&&n+t+u<=i){this.placeRightBubble(n,t,i);return}}if(r<i/3){this.placeRightBubble(n,t,i);return}if(r>i/3*2){this.placeLeftBubble(n,t,i);return}this.placeCenterBubble(n,t,i);return},n.prototype.placeTriangleHorizontalCenterAlignElement=function(n,t,i,r,u){for(var f,s,e=i+r/2,o=0,h=this.triangleHorizontalPlacingOrder;o<h.length;o++){if(f=h[o],f==0&&e-u>=0&&e+u<=t)return this.placeCenterBubbleCenterAlignElement(n,e),!0;if(f<0&&(s=i+r,s>=u*2))return this.placeLeftBubbleCenterAlignElement(n,s,t),!0;if(f>0&&i+u*2<=t)return this.placeRightBubbleCenterAlignElement(n,i),!0}return!1},n.prototype.placeTriangleVertical=function(n,t,i){var r,u,f,o,e;if(this.node.style.width=this.enableDynamicWidth?"":this.width+"px",this.enableUnfixedTriangle){this.placeUnfixedTriangle(n,t,i);return}for(r=n+t/2,u=this.actualHeight/2,f=0,o=this.triangleVerticalPlacingOrder;f<o.length;f++){if(e=o[f],e==0&&r-u>=0&&r+u<=i){this.placeMiddleBubble(n,t,i);return}if(e<0&&n>=u){this.placeTopBubble(n,t,i);return}if(e>0&&n+t+u<=i){this.placeBottomBubble(n,t,i);return}}if(r<i/3){this.placeBottomBubble(n,t,i);return}if(r>i/3*2){this.placeTopBubble(n,t,i);return}this.placeMiddleBubble(n,t,i);return},n.prototype.placeUnfixedTriangle=function(n,t,i){var f=n+t/2-c,r=f-u/2;r=Math.max(r,y);r=Math.min(r,i-2*c-u-y);this.beforeNode!=null&&this.afterNode!=null&&(this.beforeNode.style.left=r+"px",this.afterNode.style.left=r+"px")},n.prototype.placeRightBubble=function(n,t){yt(this.node);var i=n+t/2,r=u/2+o;this.node.style.left=f(i-r)+"px"},n.prototype.placeCenterBubble=function(n,t){rt(this.node);var i=n+t/2,r=(this.actualWidth+2*this.extraWidth)/2;this.node.style.left=f(i-r)+"px"},n.prototype.placeLeftBubble=function(n,t,i){pt(this.node);var r=i-(n+t/2),f=u/2+o;this.node.style.right=et(r-f)+"px"},n.prototype.placeRightBubbleCenterAlignElement=function(n,t){var i=n-t-u/2;this.beforeNode!=null&&this.afterNode!=null&&(this.beforeNode.style.left=i+"px",this.afterNode.style.left=i+"px");this.node.style.left=f(t)+"px"},n.prototype.placeCenterBubbleCenterAlignElement=function(n,t){var e=(this.actualWidth+2*this.extraWidth)/2,i=t-e,r=n-i-u/2;this.beforeNode!=null&&this.afterNode!=null&&(this.beforeNode.style.left=r+"px",this.afterNode.style.left=r+"px");this.node.style.left=f(i)+"px"},n.prototype.placeLeftBubbleCenterAlignElement=function(n,t,i){var r=i-t,f=i-n-r-u/2;this.beforeNode!=null&&this.afterNode!=null&&(this.beforeNode.style.right=f+"px",this.afterNode.style.right=f+"px");this.node.style.right=et(r)+"px"},n.prototype.placeBottomBubble=function(n,t){wt(this.node);var i=n+t/2,r=u/2+o;this.node.style.top=e(i-r)+"px"},n.prototype.placeMiddleBubble=function(n,t){bt(this.node);var i=n+t/2,r=this.actualHeight/2;this.node.style.top=e(i-r)+"px"},n.prototype.placeTopBubble=function(n,t,i){kt(this.node);var r=i-(n+t/2),f=u/2+o;this.node.style.bottom=gt(r-f)+"px"},n}(),{initItem:ii,initBubble:ri,setBubbleFocus:ui,isBubbleShowing:ot,closeBubble:fi}}();_w.InfoBubbleInitialized||(sj_evt.fire("infobubble_initBubble",InfoBubble),sj_evt.fire("infobubble_initItem",InfoBubble),_w.InfoBubbleInitialized=!0)