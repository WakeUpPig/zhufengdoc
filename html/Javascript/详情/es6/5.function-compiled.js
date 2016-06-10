<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>珠峰JS全栈</title>
        
    <link rel="stylesheet" type="text/css" href="../../../../static/css/main.css">
</head>
<body>
<div class="navbar navbar-line">
    <div class="container">
        <div class="logo">
            
                珠峰JS全栈
            
        </div>
        <input type="checkbox" id="idoc_nav" />
        <div class="menu_tree">
        <ul><li><a href="../../../../index.html">index</a></li><li><a href="#"><span></span>git&github</a><ul><li><a href="../../../../index.html">git入门</a></li><li><a href="#"><span></span>详情</a><ul><li><a href="../../../../index.html">git安装</a></li></ul></li></ul></li><li><a href="#"><span></span>html&css</a><ul></ul></li><li><a href="#"><span></span>Javascript</a><ul><li><a href="../../../../index.html">入门</a></li><li><a href="#"><span></span>详情</a><ul><li><a href="../../../../index.html">ES6</a></li></ul></li></ul></li><li><a href="#"><span></span>node.js</a><ul></ul></li><li><a href="#"><span></span>前端工程化</a><ul></ul></li><li><a href="#"><span></span>前端框架</a><ul></ul></li><li><a href="#"><span></span>数据库</a><ul></ul></li><li><a href="#"><span></span>编辑器</a><ul></ul></li></ul>    
        </div>
        
        

        <section class="idoc_nav_btn">
            <label for="idoc_nav"><span></span></label>
        </section>
    </div>
    
</div>




<div class="container">

    <div class="page-toc">
        <ul></ul>
    </div>
    
    <div class="content markdown-body">
        <p>/<em>let desc  = function(name=&apos;zfpx&apos;,age=8){
    console.log(<code>${name} is ${age} years old!</code>);
}
desc(&apos;zfpx2&apos;);</em>/</p>
<p>/<em>let print = function(a,b,c){
    console.log(a,b,c);
}
print([1,2,3]);
print(...[1,2,3]);</em>/</p>
<p>/<em>let rest = function(a,...b){
    console.log(a,b);
}
rest(1,2,3);</em>/</p>
<p>/*
let destruct = function({name,age}){
    console.log(name,age);
}
destruct({name:&apos;zfpx&apos;,age:6});</p>
<p>*/</p>
<p>/<em>var desc = function descname(){}
console.log(desc.name);</em>/</p>
<p>[1, 2, 3].forEach(val =&gt; console.log(val));</p>
<p>var person = {
    name: &apos;zfpx&apos;,
    getName: function () {
        -setTimeout(function () {
            console.log(this);
        }, 1000);
        +setTimeout(() =&gt; console.log(this), 1000);
    }
};
person.getName();</p>
<p>//# sourceMappingURL=5.function-compiled.js.map</p>

        <div class="copyright">Powered by <a href="https://github.com/jaywcjlove/idoc" target="_blank">idoc</a>. Dependence <a href="https://nodejs.org">Node.js</a> run.</div>
    </div>

</div>


</body>
</html>
