import{_ as i,o as c,c as h,a,b as s,w as t,d as l,e,r as d}from"./app.5e87b7e3.js";const _={},u=l(`<h2 id="\u7528\u6237\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u95EE\u9898" aria-hidden="true">#</a> \u7528\u6237\u95EE\u9898 \uFF1A</h2><p>arthas\u53EF\u4EE5\u76D1\u542C\u79C1\u6709\u65B9\u6CD5\u5417</p><hr><h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" aria-hidden="true">#</a> \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2><p>Arthas \u53EF\u4EE5\u76D1\u542C\u79C1\u6709\u65B9\u6CD5\u3002\u6839\u636E \u6211\u4E86\u89E3\u7684\u77E5\u8BC6 \u4E2D\u7684\u5185\u5BB9\uFF0CArthas \u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u8BCA\u65AD\u529F\u80FD\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u65B9\u6CD5\u7684\u8FFD\u8E2A\u3001\u76D1\u89C6\u4E0E\u4FEE\u6539\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u80FD\u591F\u5E2E\u52A9\u60A8\u89C2\u5BDF\u5E94\u7528\u7A0B\u5E8F\u5185\u90E8\u7684\u79C1\u6709\u65B9\u6CD5\u884C\u4E3A\u3002</p><h3 id="\u5982\u4F55\u76D1\u542C\u79C1\u6709\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u76D1\u542C\u79C1\u6709\u65B9\u6CD5" aria-hidden="true">#</a> \u5982\u4F55\u76D1\u542C\u79C1\u6709\u65B9\u6CD5</h3><p>\u867D\u7136 \u6211\u4E86\u89E3\u7684\u77E5\u8BC6 \u4E2D\u6CA1\u6709\u76F4\u63A5\u63D0\u4F9B\u76D1\u542C\u79C1\u6709\u65B9\u6CD5\u7684\u6B65\u9AA4\u8BF4\u660E\uFF0C\u4F46\u57FA\u4E8E Arthas \u7684\u529F\u80FD\uFF0C\u6211\u53EF\u4EE5\u6307\u5BFC\u60A8\u5982\u4F55\u5B9E\u73B0\u8FD9\u4E00\u9700\u6C42\uFF1A</p><ol><li><p><strong>\u542F\u52A8 Arthas</strong>: \u9996\u5148\uFF0C\u60A8\u9700\u8981\u6309\u7167 \u6211\u4E86\u89E3\u7684\u77E5\u8BC6 \u7B2C3\u7BC7\u53C2\u8003\u5185\u5BB9\u4E2D\u4ECB\u7ECD\u7684\u65B9\u6CD5\u4E4B\u4E00\u542F\u52A8 Arthas\u3002\u63A8\u8350\u4F7F\u7528 <code>arthas-boot</code> \u65B9\u5F0F\uFF0C\u7B80\u5355\u5FEB\u6377\u3002\u4F8B\u5982\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u4E0B\u8F7D\u5E76\u542F\u52A8 Arthas\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-O</span> https://arthas.aliyun.com/arthas-boot.jar
<span class="token function">java</span> <span class="token parameter variable">-jar</span> arthas-boot.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u5B9A\u4F4D\u76EE\u6807\u7C7B</strong>: \u8FDB\u5165 Arthas \u4EA4\u4E92\u754C\u9762\u540E\uFF0C\u4F7F\u7528 <code>jad</code> \u547D\u4EE4\u53CD\u7F16\u8BD1\u60A8\u60F3\u8981\u76D1\u542C\u5176\u79C1\u6709\u65B9\u6CD5\u7684\u7C7B\uFF0C\u4EE5\u83B7\u53D6\u8BE5\u7C7B\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u5305\u62EC\u79C1\u6709\u65B9\u6CD5\u540D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jad YourClassName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BF7\u5C06 <code>YourClassName</code> \u66FF\u6362\u4E3A\u60A8\u5B9E\u9645\u8981\u76D1\u542C\u7684\u7C7B\u540D\u3002</p></li><li><p><strong>\u76D1\u542C\u79C1\u6709\u65B9\u6CD5</strong>: \u4F7F\u7528 <code>watch</code> \u547D\u4EE4\u6765\u76D1\u542C\u79C1\u6709\u65B9\u6CD5\u3002<code>watch</code> \u547D\u4EE4\u5141\u8BB8\u60A8\u5728\u65B9\u6CD5\u8C03\u7528\u524D\u540E\u63D2\u5165\u81EA\u5B9A\u4E49\u7684\u4EE3\u7801\u7247\u6BB5\uFF0C\u975E\u5E38\u9002\u5408\u4E8E\u76D1\u89C6\u79C1\u6709\u65B9\u6CD5\u7684\u884C\u4E3A\u3002\u57FA\u672C\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">watch</span> YourClassName methodName <span class="token string">&quot;{params,returnObj -&gt; println(&#39;\u8C03\u7528\u53C2\u6570: &#39; + params + &#39;, \u8FD4\u56DE\u503C: &#39; + returnObj)}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5176\u4E2D\uFF0C<code>methodName</code> \u662F\u60A8\u4ECE\u4E0A\u4E00\u6B65\u9AA4\u83B7\u5F97\u7684\u79C1\u6709\u65B9\u6CD5\u540D\u79F0\uFF0C<code>{params,returnObj -&gt; ...}</code> \u662F\u60A8\u5B9A\u4E49\u7684\u903B\u8F91\u4EE3\u7801\u5757\uFF0C\u7528\u4E8E\u5904\u7406\u65B9\u6CD5\u8C03\u7528\u7684\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u3002</p></li></ol><h3 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h3><ul><li><strong>\u542F\u52A8 Arthas</strong> \u6B65\u9AA4\u786E\u4FDD\u60A8\u80FD\u591F\u4E0E\u76EE\u6807 Java \u5E94\u7528\u7A0B\u5E8F\u5EFA\u7ACB\u8C03\u8BD5\u8FDE\u63A5\u3002</li><li><strong>\u5B9A\u4F4D\u76EE\u6807\u7C7B</strong> \u901A\u8FC7\u53CD\u7F16\u8BD1\u8BA9\u60A8\u53EF\u4EE5\u51C6\u786E\u5730\u4E86\u89E3\u79C1\u6709\u65B9\u6CD5\u7684\u540D\u79F0\u548C\u7B7E\u540D\u3002</li><li><strong>\u76D1\u542C\u79C1\u6709\u65B9\u6CD5</strong> \u662F\u5173\u952E\u6B65\u9AA4\uFF0C\u5229\u7528 <code>watch</code> \u547D\u4EE4\u52A8\u6001\u5730\u63D2\u5165\u76D1\u63A7\u903B\u8F91\uFF0C\u65E0\u9700\u4FEE\u6539\u6E90\u4EE3\u7801\u6216\u91CD\u542F\u5E94\u7528\uFF0C\u5373\u53EF\u5B9E\u73B0\u5B9E\u65F6\u7684\u79C1\u6709\u65B9\u6CD5\u76D1\u63A7\u3002</li></ul>`,10),p=e("\u5982\u679C\u60A8\u5728\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u6216\u8005\u9700\u8981\u66F4\u8BE6\u7EC6\u7684\u5E2E\u52A9\uFF0C\u8BF7\u67E5\u9605 "),m={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn",target:"_blank",rel:"noopener noreferrer"},b=e("Arthas \u5B98\u65B9\u6559\u7A0B"),f=e("\uFF0C\u5176\u4E2D\u5305\u542B\u4E86\u5927\u91CF\u5B9E\u7528\u793A\u4F8B\u548C\u547D\u4EE4\u8BE6\u89E3\u3002"),g=e("---------------"),v=a("h2",{id:"\u53C2\u8003\u94FE\u63A5",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true"},"#"),e(" \u53C2\u8003\u94FE\u63A5 \uFF1A")],-1),x=e("\u4E13\u5BB6\u7ECF\u9A8C\uFF1AArthas \u5B98\u65B9\u6559\u7A0B"),k=e("\u4E13\u5BB6\u7ECF\u9A8C\uFF1AArthas \u4ECB\u7ECD"),A=e("Arthas Install"),j=e("---------------"),N={id:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",tabindex:"-1"},O=a("a",{class:"header-anchor",href:"#\u7B54\u7591\u670D\u52A1\u8BF4\u660E","aria-hidden":"true"},"#",-1),w=e(),y=e("\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"),F=e("\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86"),q=e("\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1"),C=e("\uFF0C\u5728"),I=e("\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C"),B=e("\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : "),E={href:"https://answer.opensource.alibaba.com/docs/intro",target:"_blank",rel:"noopener noreferrer"},L=e("\u5168\u5C40\u4E13\u5BB6\u7B54\u7591"),V=e(" \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898"),J=a("h3",{id:"\u53CD\u9988",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u53CD\u9988","aria-hidden":"true"},"#"),e(" \u53CD\u9988")],-1),Y=e("\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A"),G={href:"https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16096",target:"_blank",rel:"noopener noreferrer"},P=e("\u5DEE\u8BC4"),R=e("\u7ED9\u6211\u4EEC\u53CD\u9988\u3002");function D(H,Q){const n=d("ExternalLinkIcon"),o=d("font"),r=d("RouterLink");return c(),h("div",null,[u,a("p",null,[p,a("a",m,[b,s(n)]),f]),s(o,{color:"#949494"},{default:t(()=>[g]),_:1}),v,a("p",null,[s(r,{to:"/doc/expert/user-question-history11466.html"},{default:t(()=>[x]),_:1})]),a("p",null,[s(r,{to:"/doc/expert/user-question-history11442.html"},{default:t(()=>[k]),_:1})]),a("p",null,[s(r,{to:"/doc/install-detail.html"},{default:t(()=>[A]),_:1})]),s(o,{color:"#949494"},{default:t(()=>[j]),_:1}),a("h2",N,[O,w,s(o,{color:"#FF0000"},{default:t(()=>[y]),_:1})]),a("p",null,[F,s(o,{color:"#FF0000"},{default:t(()=>[q]),_:1}),C,s(o,{color:"#FF0000"},{default:t(()=>[I]),_:1}),B,a("a",E,[L,s(n)]),V]),J,a("p",null,[Y,a("a",G,[P,s(n)]),R])])}const T=i(_,[["render",D],["__file","user-question-history15739.html.vue"]]);export{T as default};
