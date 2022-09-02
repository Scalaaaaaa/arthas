import{_ as s,o as r,c as n,a as e,b as o,w as c,d as i,e as a,r as d}from"./app.a799ec6e.js";const l={},h=i(`<h1 id="start-as-a-java-agent" tabindex="-1"><a class="header-anchor" href="#start-as-a-java-agent" aria-hidden="true">#</a> Start as a Java Agent</h1><p>Usually Arthas dynamic attach the applications on the fly, but from version <code>3.2.0</code> onwards, Arthas supports starting directly as a java agent.</p><p>For example, download the full arthas zip package, decompress it and start it by specifying <code>arthas-agent.jar</code> with the parameter <code>-javaagent</code>.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>java -javaagent:/tmp/test/arthas-agent.jar -jar math-game.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),p=a("The default configuration is in the "),m=e("code",null,"arthas.properties",-1),_=a(" file in the decompression directory. Reference: "),u=a("Arthas Properties"),g=e("p",null,"Reference: https://docs.oracle.com/javase/8/docs/api/java/lang/instrument/package-summary.html",-1);function v(f,j){const t=d("RouterLink");return r(),n("div",null,[h,e("p",null,[p,m,_,o(t,{to:"/en/doc/arthas-properties.html"},{default:c(()=>[u]),_:1})]),g])}const y=s(l,[["render",v],["__file","agent.html.vue"]]);export{y as default};