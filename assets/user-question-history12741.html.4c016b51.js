import{_ as i,o as c,c as l,b as t,w as s,a as o,d as h,e,r as a}from"./app.5e87b7e3.js";const _={},p=h(`<h2 id="\u7528\u6237\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u95EE\u9898" aria-hidden="true">#</a> \u7528\u6237\u95EE\u9898 \uFF1A</h2><p>\u5982\u4F55\u4F7F\u7528arthas\u67E5\u770B\u7CFB\u7EDF\u54EA\u4E2A\u5730\u65B9\u5185\u5B58\u5360\u7528\u8FC7\u5927</p><hr><h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" aria-hidden="true">#</a> \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2><p>\u8981\u4F7F\u7528Arthas\u67E5\u770B\u7CFB\u7EDF\u4E2D\u54EA\u4E2A\u5730\u65B9\u7684\u5185\u5B58\u5360\u7528\u8FC7\u5927\uFF0C\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u6392\u67E5\uFF1A</p><ol><li><p><strong>\u521D\u6B65\u68C0\u67E5JVM\u5185\u5B58\u72B6\u6001\uFF1A</strong> \u9996\u5148\uFF0C\u4F7F\u7528Arthas\u7684<code>memory</code>\u547D\u4EE4\u6765\u89C2\u5BDFJVM\u5404\u5185\u5B58\u533A\u57DF\u7684\u4F7F\u7528\u60C5\u51B5\u3002\u8FD9\u4F1A\u63D0\u4F9B\u4E00\u4E2A\u6574\u4F53\u89C6\u56FE\uFF0C\u5E2E\u52A9\u4F60\u8BC6\u522B\u54EA\u4E9B\u533A\u57DF\u7684\u5185\u5B58\u4F7F\u7528\u5F02\u5E38\u589E\u9AD8\u3002\u6267\u884C\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ memory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5206\u6790\u8F93\u51FA\u7ED3\u679C\uFF0C\u6CE8\u610F<code>usage</code>\u5217\uFF0C\u7279\u522B\u662F\u90A3\u4E9B\u5229\u7528\u7387\u9AD8\u6216\u6301\u7EED\u589E\u957F\u7684\u533A\u57DF\uFF0C\u5982<code>heap</code>\u3001<code>g1_old_gen</code>\u7B49\uFF0C\u8FD9\u4E9B\u53EF\u80FD\u662F\u5185\u5B58\u6CC4\u6F0F\u7684\u8FF9\u8C61\u3002</p></li><li><p><strong>\u5B9A\u4F4D\u5185\u5B58\u6CC4\u6F0F\u7684\u5177\u4F53\u4F4D\u7F6E\uFF1A</strong></p><ul><li><strong>\u591A\u6B21\u8FD0\u884Cmemory\u547D\u4EE4\uFF1A</strong> \u901A\u8FC7\u8FDE\u7EED\u591A\u6B21\u6267\u884C<code>memory</code>\u547D\u4EE4\u5E76\u8BB0\u5F55\u7ED3\u679C\uFF0C\u89C2\u5BDF\u7279\u5B9A\u533A\u57DF\u7684\u5185\u5B58\u4F7F\u7528\u662F\u5426\u6301\u7EED\u4E0A\u5347\uFF0C\u4EE5\u6B64\u6765\u5B9A\u4F4D\u6F5C\u5728\u7684\u5185\u5B58\u6CC4\u6F0F\u6E90\u3002</li><li><strong>\u4F7F\u7528heapdump\u8FDB\u884C\u6DF1\u5165\u5206\u6790\uFF1A</strong> \u5F53\u53D1\u73B0\u53EF\u7591\u5185\u5B58\u533A\u57DF\u540E\uFF0C\u4F7F\u7528<code>heapdump</code>\u547D\u4EE4\u751F\u6210\u5806\u7684\u5FEB\u7167\u6587\u4EF6\uFF0C\u4EE5\u4FBF\u8FDB\u4E00\u6B65\u5206\u6790\u3002\u4F8B\u5982\uFF1A<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[arthas@58205]$ heapdump arthas-output/dump.hprof
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>\u7136\u540E\uFF0C\u5229\u7528Eclipse Memory Analyzer (MAT)\u7B49\u5DE5\u5177\u6253\u5F00<code>.hprof</code>\u6587\u4EF6\uFF0C\u5206\u6790\u5BF9\u8C61\u7684\u5206\u914D\u3001\u5F15\u7528\u94FE\u548C\u5185\u5B58\u5360\u7528\u60C5\u51B5\uFF0C\u627E\u51FA\u5185\u5B58\u6CC4\u6F0F\u7684\u5177\u4F53\u5BF9\u8C61\u3002</li></ul></li><li><p><strong>\u5206\u6790heapdump\u6587\u4EF6\uFF1A</strong> \u5728MAT\u4E2D\uFF0C\u5173\u6CE8\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u9762\u6765\u5B9A\u4F4D\u5185\u5B58\u6CC4\u6F0F\uFF1A</p><ul><li><strong>\u67E5\u627E\u5927\u5BF9\u8C61\u548C\u9891\u7E41\u589E\u957F\u7684\u5BF9\u8C61\u96C6\u5408\u3002</strong></li><li><strong>\u4F7F\u7528\u201CLeak Suspects\u201D\u62A5\u544A\u81EA\u52A8\u5206\u6790\u6F5C\u5728\u6CC4\u6F0F\u3002</strong></li><li><strong>\u68C0\u67E5\u5BF9\u8C61\u4FDD\u7559\u96C6\u5927\u5C0F\uFF0C\u4E86\u89E3\u54EA\u4E9B\u5BF9\u8C61\u963B\u6B62\u4E86\u5783\u573E\u56DE\u6536\u3002</strong></li></ul></li><li><p><strong>\u7ED3\u5408profiler meminfo\uFF08\u5982\u679C\u9700\u8981\uFF09\uFF1A</strong> \u5982\u679C\u6000\u7591\u662FArthas\u81EA\u8EAB\u6216\u5176profiler\u529F\u80FD\u5BFC\u81F4\u7684\u989D\u5916\u5185\u5B58\u5360\u7528\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>profiler meminfo</code>\u547D\u4EE4\u6765\u67E5\u770BArthas\u5185\u90E8\u7EC4\u4EF6\u7684\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\uFF0C\u4F46\u8FD9\u901A\u5E38\u4E0D\u662F\u6392\u67E5\u5E94\u7528\u5185\u5B58\u6CC4\u6F0F\u7684\u4E3B\u8981\u6B65\u9AA4\u3002</p></li></ol><p>\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u4F60\u53EF\u4EE5\u9010\u6B65\u5B9A\u4F4D\u5E76\u8BCA\u65AD\u51FA\u7CFB\u7EDF\u4E2D\u5185\u5B58\u5360\u7528\u8FC7\u5927\u7684\u5177\u4F53\u539F\u56E0\uFF0C\u5E76\u9488\u5BF9\u6027\u5730\u8FDB\u884C\u4F18\u5316\u6216\u4FEE\u590D\u3002\u8BB0\u4F4F\uFF0C\u89E3\u51B3\u95EE\u9898\u7684\u5173\u952E\u5728\u4E8E\u6301\u7EED\u89C2\u5BDF\u5185\u5B58\u4F7F\u7528\u8D8B\u52BF\u5E76\u7EC6\u81F4\u5206\u6790heapdump\u4FE1\u606F\u3002</p>`,7),u=e("---------------"),m=o("h2",{id:"\u53C2\u8003\u94FE\u63A5",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true"},"#"),e(" \u53C2\u8003\u94FE\u63A5 \uFF1A")],-1),f=e("\u4E13\u5BB6\u7ECF\u9A8C\uFF1AArthas \u6392\u67E5\u5185\u5B58\u6CC4\u9732\u7684\u65B9\u6CD5"),g=e("profiler"),x=e("\u4E13\u5BB6\u7ECF\u9A8C\uFF1AArthas \u4ECB\u7ECD"),b=e("---------------"),v={id:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",tabindex:"-1"},y=o("a",{class:"header-anchor",href:"#\u7B54\u7591\u670D\u52A1\u8BF4\u660E","aria-hidden":"true"},"#",-1),k=e(),A=e("\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"),F=e("\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86"),V=e("\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1"),E=e("\uFF0C\u5728"),L=e("\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C"),M=e("\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : "),B={href:"https://answer.opensource.alibaba.com/docs/intro",target:"_blank",rel:"noopener noreferrer"},I=e("\u5168\u5C40\u4E13\u5BB6\u7B54\u7591"),J=e(" \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898"),N=o("h3",{id:"\u53CD\u9988",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u53CD\u9988","aria-hidden":"true"},"#"),e(" \u53CD\u9988")],-1),O=e("\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A"),q={href:"https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16066",target:"_blank",rel:"noopener noreferrer"},w=e("\u5DEE\u8BC4"),T=e("\u7ED9\u6211\u4EEC\u53CD\u9988\u3002");function C(G,P){const r=a("font"),n=a("RouterLink"),d=a("ExternalLinkIcon");return c(),l("div",null,[p,t(r,{color:"#949494"},{default:s(()=>[u]),_:1}),m,o("p",null,[t(n,{to:"/doc/expert/user-question-history12455.html"},{default:s(()=>[f]),_:1})]),o("p",null,[t(n,{to:"/doc/profiler.html"},{default:s(()=>[g]),_:1})]),o("p",null,[t(n,{to:"/doc/expert/user-question-history11442.html"},{default:s(()=>[x]),_:1})]),t(r,{color:"#949494"},{default:s(()=>[b]),_:1}),o("h2",v,[y,k,t(r,{color:"#FF0000"},{default:s(()=>[A]),_:1})]),o("p",null,[F,t(r,{color:"#FF0000"},{default:s(()=>[V]),_:1}),E,t(r,{color:"#FF0000"},{default:s(()=>[L]),_:1}),M,o("a",B,[I,t(d)]),J]),N,o("p",null,[O,o("a",q,[w,t(d)]),T])])}const S=i(_,[["render",C],["__file","user-question-history12741.html.vue"]]);export{S as default};
