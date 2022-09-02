import{_ as c,o as i,c as l,a as n,b as a,w as r,e as s,d as p,r as e}from"./app.a799ec6e.js";const u={},d=n("h1",{id:"arthas-spring-boot-starter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#arthas-spring-boot-starter","aria-hidden":"true"},"#"),s(" Arthas Spring Boot Starter")],-1),k=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,"Support spring boot 2")],-1),g=s("Latest Version: "),v={href:"https://search.maven.org/search?q=arthas-spring-boot-starter",target:"_blank",rel:"noopener noreferrer"},h=s("View"),m=p(`<p>Add maven dependency:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.taobao.arthas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>arthas-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${arthas.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the application is started, spring will start arthas and attach its own process.</p><h2 id="configuration-properties" tabindex="-1"><a class="header-anchor" href="#configuration-properties" aria-hidden="true">#</a> Configuration properties</h2><p>For example, by configuring the tunnel server for remote management.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arthas.agent-id=hsehdfsfghhwertyfad
arthas.tunnel-server=ws://47.75.156.201:7777/ws
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),b=s("All supported configuration: "),f={href:"https://github.com/alibaba/arthas/blob/master/arthas-spring-boot-starter/src/main/java/com/alibaba/arthas/spring/ArthasProperties.java",target:"_blank",rel:"noopener noreferrer"},_=s("Reference"),w=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("By default, arthas-spring-boot-starter will disable the "),n("code",null,"stop"),s(" command.")])],-1),y=s("Reference: "),x=s("Arthas Properties"),q=n("h2",{id:"view-endpoint-information",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#view-endpoint-information","aria-hidden":"true"},"#"),s(" View Endpoint Information")],-1),I={class:"custom-container tip"},A=n("p",{class:"custom-container-title"},"TIP",-1),S=s("Need to configure spring boot to expose endpoint: "),j={href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready-endpoints",target:"_blank",rel:"noopener noreferrer"},N=s("Reference"),B=s("."),M=p(`<p>Assuming the endpoint port is 8080, it can be viewed via the following url.</p><p>http://localhost:8080/actuator/arthas</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;arthasConfigMap&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;agent-id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hsehdfsfghhwertyfad&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;tunnel-server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ws://47.75.156.201:7777/ws&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="non-spring-boot-application-usage" tabindex="-1"><a class="header-anchor" href="#non-spring-boot-application-usage" aria-hidden="true">#</a> Non-spring boot application usage</h2><p>Non-Spring Boot applications can be used in the following ways.</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.taobao.arthas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>arthas-agent-attach<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${arthas.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.taobao.arthas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>arthas-packaging<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${arthas.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>arthas<span class="token punctuation">.</span>agent<span class="token punctuation">.</span>attach<span class="token punctuation">.</span></span><span class="token class-name">ArthasAgent</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArthasAttachExample</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ArthasAgent</span><span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also configure properties:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> configMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        configMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;arthas.appName&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        configMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;arthas.tunnelServer&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ws://127.0.0.1:7777/ws&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ArthasAgent</span><span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>configMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Note that the configuration must be <code>camel case</code>, which is different from the <code>-</code> style of spring boot. Only the spring boot application supports both <code>camel case</code> and <code>-</code> style configuration.</p></div>`,10);function V(R,E){const t=e("ExternalLinkIcon"),o=e("RouterLink");return i(),l("div",null,[d,k,n("p",null,[g,n("a",v,[h,a(t)])]),m,n("p",null,[b,n("a",f,[_,a(t)])]),w,n("p",null,[y,a(o,{to:"/en/doc/arthas-properties.html"},{default:r(()=>[x]),_:1})]),q,n("div",I,[A,n("p",null,[S,n("a",j,[N,a(t)]),B])]),M])}const P=c(u,[["render",V],["__file","spring-boot-starter.html.vue"]]);export{P as default};