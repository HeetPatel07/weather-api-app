var InsightsFetcher;(function(n){function h(n,t,i,r,u){return AsyncFetcher.fetch(c(n,t),i,function(n){l(n,t);typeof r!="undefined"&&r&&r(n)},function(n){typeof u!="undefined"&&u?u(n):typeof r!="undefined"&&r&&r(n)})}function c(n,h){var c,y,a,k,l,p,d;switch(h){case t.SingleAsync:c=o;break;case t.Batch:c=e;break;default:c=f}c||(i=_w.IIConfig,c=u(h));c=c.replace(/%SFX%/,String(++s));var v=c.indexOf("?"),w="",b=c;v>0&&(w=c.substr(0,v),b=c.substr(v));y=parseQueryParamsFromQuery(b);for(a in n)k=h==t.Batch?a+"s":a,l=n[a],l!==null&&(typeof l=="undefined"&&(l=""),y[k]=encodeURIComponent(l));return c=w+"?"+queryParamsToString(y),r&&n&&(p=h==t.Batch?n.mid?n.mid.split(",")[0]:"":n.mid,c=h!=t.Batch&&(d=r.qsv("insightsbag"))?r.stb(c,d+(n.iss?"_"+n.iss:"")):h==t.SingleAsync?r.atb(c,"InsightsSingleAsync_"+p):r.atb(c,(h==t.Batch?"InsightsBatchMock_":"InsightsMock_")+p)),c}function u(n){var r;switch(n){case t.SingleAsync:r=i&&i.saut?i.saut:"";break;case t.Batch:r=i&&i.baut?i.baut:"";break;default:r=i&&i.aut?i.aut:""}return addCommonPersistedParams(r)}function l(n,i){var r={};r.Name=i==t.Batch?"imageinsightsbatch":"imageinsights";r.T="CI.Error";r.TS=sb_gt();r.AppNS=_G.P;r.URL=n;r.Text="InsightsFetchError";pInstr.icd(r)}var t;(function(n){n[n.Default=0]="Default";n[n.Batch=1]="Batch";n[n.SingleAsync=2]="SingleAsync"})(t=n.ImageRequestMode||(n.ImageRequestMode={}));var r=typeof MMTestUtils!="undefined"?MMTestUtils:null,i=_w.IIConfig,f=u(t.Default),e=u(t.Batch),o=u(t.SingleAsync),s=0;n.fetch=h})(InsightsFetcher||(InsightsFetcher={}))