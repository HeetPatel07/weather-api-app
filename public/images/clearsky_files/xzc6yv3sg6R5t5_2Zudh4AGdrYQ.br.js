var ImageFeedUtils;(function(n){function e(){return"".concat(f).concat(w).concat(b).concat(k)}function o(n){while(n&&!n.classList.contains(i.ImageItemWrapperClass))n=n.parentElement;return n}function s(n){var t;if((t=v(n))!==null&&t!==void 0)return t.getAttribute("m")}function v(n){if(n!==null&&n!==void 0)return n.querySelector(".iusc")}function d(n){return t?t[n]:undefined}function g(){return t?t.form:undefined}function nt(t){var i,r;return!t||t.length===0?t:(i=n.currentForm(),!i||i.length===0)?t:(r=/([?&][Ff][Oo][Rr][Mm]=)[^&]*/,r.test(t)?t.replace(r,"$1"+i):t+(t.indexOf("?")===-1?"?":"&")+"form="+i)}function tt(n){var t=null,i=[];return(n=o(n),!n)?i:(t=s(n),t&&i.push(t),i)}function it(n){for(var i,r=[],t=0;t<n.length;t++)i=s(n[t]),i&&r.push(i);return r}function rt(){var e={ck:"id"},u=null,o=_ge(i.DetailPageMainImageWindowId),f=[],n={},r,s;if(!o)return[];if(u=o.getAttribute("data-m"),u!=null)try{n=JSON.parse(u)}catch(h){return f}for(r in e)t.hasOwnProperty(r)&&(s=e[r],n[s]=t[r]);return n&&f.push(JSON.stringify(n)),f}function ut(n){var t="",i;return n=o(n),n&&n.parentElement&&(i=n.parentElement.classList,i.contains("fdsimf")?t="ssi":i.contains("clst-rndrd")&&(t="clstr")),t?"&imgType="+t:""}function y(n,t,r){var h,u,s,o;if((!f||a)&&(t.length>0||i.EmptyPayloadEvents.indexOf(n)!==-1)){if(n===i.SeenEvent&&typeof mmLog=="function"&&mmLog('{"T":"CI.Seen","Name":"FeedPage","Count":'+t.length+',"TS":'+sb_gt()+"}"),h=ut(r),u=sj_gx(),typeof sj_cook=="undefined")return;s="SID";o=sj_cook.get("_SS",s)||sj_cook.get(s,s);h+=o?"&sid=".concat(o):"";u.open("POST","/images/feed/feedback?IG=".concat(_G.IG,"&IID=FEEDBACK&SFX=").concat(i.sfx++,"&event=").concat(n).concat(e()).concat(h),!0);o&&u.setRequestHeader("f-sid",o);u.setRequestHeader("Content-type","application/json");n===i.FreClickFeedbackEvent&&(u.onreadystatechange=function(){u.status==200&&u.readyState==4&&(sb_st(function(){sj_evt.fire(i.FreClickFeedbackSuccessEvent)},3e3),sb_st(function(){var n=_qs(".expandButton",_d);n.classList.remove("active");n.classList.add("frcldng","loading")},2e3))});u.timeout=i.Xhr_TimeOut;u.send("[".concat(t.join(","),"]"));(n=="Like"||n=="save")&&sj_evt.fire("fetchSimilarImages",t[0],r,n)}}function ft(n){var t;try{t=JSON.parse(n)}catch(i){return null}return t}function et(n){var t=_ge(i.ImageFeedContainerId),r=t===null||t===void 0?void 0:t.getAttribute(i.FeedRefreshUrlAttribute);u(n,r)}function u(n,t,r,f){var s,h,o;(r===void 0&&(r=null),f===void 0&&(f=0),s=_ge(i.ImageFeedContainerId),!s||f>=i.MaxRetryCount)||(h=t,h)&&(f++,o=sj_gx(),o.open("get","".concat(h,"&IG=").concat(_G.IG,"&SFX=").concat(i.sfx++).concat(e()),!0),o.onreadystatechange=function(){o.status==200&&o.readyState==4&&(s.textContent="",o.responseText&&sj_appHTML(s,o.responseText),_qs(i.DenseGridContainerSelector,s)?sj_evt.fire("Feed.Refresh"):(y(n,[]),u(n,t,r,f)),r===null||r===void 0?void 0:r(o.responseText))},o.onerror=function(){u(n,t,r,f)},o.timeout=i.Xhr_TimeOut,o.send())}var r=typeof pMMUtils!="undefined"?pMMUtils:null,i=FeedConstants,t=parseQueryParams(),h=t?t.fbflight:t,c=t?t.sf:t,l=t?t.recoflight:t,w=h?"&fbflight=".concat(h):"",f="",a=!1,b=c?"&sf=".concat(c):"",k=l?"&recoflight=".concat(l):"",p;_ge(i.DebugElementId)&&t&&(f=t.anid?"&testhooks=1&isuserauth=1&anid=".concat(t.anid):"",a=t.fbh=="1");n.getOverrideQueryParams=e;n.getImageItemWrapper=o;n.getMetaData=s;n.getElementWithMetadata=v;n.getUrlParamByKey=d;n.currentForm=g;n.urlWithCurrentForm=nt;n.processElement=tt;n.processElements=it;n.processDetailPageMainElement=rt;n.processRequest=y;n.tryParseJson=ft;n.refreshWithRetry=et;n.refreshWithUrl=u;n.convertTopicNameToURLPath=function(n){var t=n.trim().toLowerCase().replace(/'/g,"").replace(/\s+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/-+/g,"-").replace(/^-+|-+$/g,"");return encodeURIComponent(t)};p=function(){var n=document.referrer;if(!n||n.length===0)return!1;var t=n.indexOf("bing.com")>-1,i=n.indexOf("bing-int.com")>-1,r=n.indexOf("localhost")>-1;return t||i||r};n.close=function(){var n,u=(n=r===null||r===void 0?void 0:r.qsv)===null||n===void 0?void 0:n.call(r,i.BackUrlName),f;u?window.location.href=u:p()?history.length>1?(history.length!==2||history.state||window.close(),history.back()):window.close():(f=t.form||"IRPFED",window.location.href="/images/feed?FORM=".concat(f))}})(ImageFeedUtils||(ImageFeedUtils={}))