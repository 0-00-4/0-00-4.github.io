var html =
'<meta content="width=device-width,initial-scale=1"name=viewport><meta charset=UTF-8><title>/>_</title><link href=css/style.css rel=stylesheet><ol class=console-box><li><span class=monokai-lightgrey>&lt;!-- Тестовый прототип --></span><li><span class=monokai-white>&lt;<span class=monokai-red>p</span>>Первый Переход&lt;/<span class=monokai-red>p</span>></span><li><span class=monokai-white>&lt;<span class=monokai-red>p</span>>Второй Переход&lt;/<span class=monokai-red>p</span>></span><li><span class=monokai-white>&lt;<span class=monokai-red>p</span> <span class=monokai-green>прилагательное</span>=<span class=monokai-yellow>"Глагол"</span>>Имя Существительное&lt;/<span class=monokai-red>p</span>></span><li><span></span><li><span class=monokai-white>&lt;<span class=monokai-red>script</span>></span><li><ul><li><span class=monokai-white><span class=monokai-teal>jQuery.fn</span>.<span class=monokai-green>exists</span> <span class=monokai-red>=</span> <span class=monokai-teal>function</span>(){</span></ul><li><ul><li><ul><li><span class=monokai-white><span class=monokai-red>return</span> this.<span class=monokai-teal>length</span> <span class=monokai-red>></span> <span class=monokai-violet>0</span>;</span></ul></ul><li><ul><li><span class=monokai-white>}</span></ul><li><ul><li><span class=monokai-white><span class=monokai-red>if</span> (<span class=monokai-red>$</span>(<span class=monokai-yellow>".santa"</span>).exists()){</span></ul><li><ul><li><ul><li><span class=monokai-white>console.<span class=monokai-teal>log</span>(<span class=monokai-yellow>"Santa exists!"</span>);</span></ul></ul><li><ul><li><span class=monokai-white>}</span></ul><li><span class=monokai-white>&lt;/<span class=monokai-red>script</span>></span></ol>'; 
document.getElementsByTagName('html')[0].innerHTML = html;
