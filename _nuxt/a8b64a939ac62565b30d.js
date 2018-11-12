(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(t,n){t.exports='<section><h1>Matrix Expander Docs</h1>\n<div class="h-1 w-8 mb-6 border-t border-primary"></div>\n<p>Use this tool to convert <a href="https://en.wikipedia.org/wiki/Adjacency_matrix">adjacency matrices</a> into <a href="https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs">edge lists</a>.</p>\n<p>To get started, click the <strong>Start</strong> button on the home page, then upload a JSON, CSV, or XLSX file containing an adjacency matrix. CSV and XLSX matrices should look like this:</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th>Harry</th>\n<th>Hermione</th>\n<th>Ron</th>\n<th>Draco</th>\n<th>Dobby</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Harry</td>\n<td>4</td>\n<td>5</td>\n<td>5</td>\n<td>2</td>\n<td>4</td>\n</tr>\n<tr>\n<td>Hermione</td>\n<td>5</td>\n<td>5</td>\n<td>5</td>\n<td>1</td>\n<td>5</td>\n</tr>\n<tr>\n<td>Ron</td>\n<td>5</td>\n<td>5</td>\n<td>4</td>\n<td>1</td>\n<td>4</td>\n</tr>\n<tr>\n<td>Draco</td>\n<td>1</td>\n<td>1</td>\n<td>1</td>\n<td>5</td>\n<td>1</td>\n</tr>\n<tr>\n<td>Dobby</td>\n<td>5</td>\n<td>5</td>\n<td>5</td>\n<td>1</td>\n<td>3</td>\n</tr>\n</tbody>\n</table>\n<p>And JSON matrices should look like this:</p>\n<pre><code>{\n  &quot;strengths&quot;: {\n    &quot;Harry&quot;: {\n      &quot;Harry&quot;: 4,\n      &quot;Hermione&quot;: 5,\n      &quot;Ron&quot;: 5,\n      &quot;Draco&quot;: 2,\n      &quot;Dobby&quot;: 4\n    },\n    &quot;Hermione&quot;: {\n      &quot;Harry&quot;: 5,\n      &quot;Hermione&quot;: 5,\n      &quot;Ron&quot;: 5,\n      &quot;Draco&quot;: 1,\n      &quot;Dobby&quot;: 5\n    },\n    ...\n  }\n}\n</code></pre>\n\x3c!-- "Ron": {\n  "Harry": 5,\n  "Hermione": 5,\n  "Ron": 4,\n  "Draco": 1,\n  "Dobby": 3\n},\n"Draco": {\n  "Harry": 1,\n  "Hermione": 1,\n  "Ron": 1,\n  "Draco": 5,\n  "Dobby": 1\n},\n"Dobby": {\n  "Harry": 5,\n  "Hermione": 5,\n  "Ron": 5,\n  "Draco": 1,\n  "Dobby": 3\n} --\x3e\n<p>In a JSON matrix file, you can optionally include explicit arrays of sources and targets:</p>\n<pre><code>{\n  &quot;strengths&quot;: {\n    &quot;Harry&quot;: {\n      &quot;Harry&quot;: 4,\n      &quot;Hermione&quot;: 5,\n      &quot;Ron&quot;: 5,\n      &quot;Draco&quot;: 2,\n      &quot;Dobby&quot;: 4\n    },\n    ...\n  },\n  &quot;sources&quot;: [&quot;Harry&quot;, &quot;Hermione&quot;, &quot;Ron&quot;, &quot;Draco&quot;, &quot;Dobby&quot;],\n  &quot;targets&quot;: [&quot;Harry&quot;, &quot;Hermione&quot;, &quot;Ron&quot;, &quot;Draco&quot;, &quot;Dobby&quot;],\n}\n</code></pre>\n<p>Custom <code>sources</code> and <code>targets</code> will override the matrix expander\'s default behavior, which is to extract sources and targets directly from the data. This can be useful if you have the matrix for a large network, but only want to include specific sources and targets in your edge list.</p>\n<p>After uploading, choose whether your matrix represents <strong>directed</strong> or <strong>undirected</strong> connections. Use the <strong>Connection type is...</strong> input to add a custom Type, which will appear in your edge list like so:</p>\n<table>\n<thead>\n<tr>\n<th>From</th>\n<th>To</th>\n<th>Strength</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Ron</td>\n<td>Harry</td>\n<td>5</td>\n<td>Friendship</td>\n</tr>\n<tr>\n<td>Ron</td>\n<td>Dobby</td>\n<td>3</td>\n<td>Friendship</td>\n</tr>\n<tr>\n<td>Draco</td>\n<td>Hermione</td>\n<td>1</td>\n<td>Friendship</td>\n</tr>\n<tr>\n<td>...</td>\n<td>...</td>\n<td>...</td>\n<td>...</td>\n</tr>\n</tbody>\n</table>\n<p>Then, set special instructions for the matrix expander:</p>\n<ul>\n<li>Checking <strong>Include self connections</strong> tells the matrix expander to include connections from a source node to itself, for example, a connection from <strong>Dobby</strong> to <strong>Dobby</strong> with a strength of <strong>3</strong></li>\n<li>Checking <strong>Include zero strengths</strong> tells the matrix expander to include connections with a strength of <strong>0</strong> in the edge list.</li>\n</ul>\n<p>Click <strong>Expand</strong> to expand your matrix. If you need to change a setting or upload a different file, simply change that setting and click <strong>Expand</strong> again.</p>\n<p>Download your edge list as a JSON, CSV, or XLSX, then drag-and-drop the file onto any <a href="https://kumu.io">Kumu</a> map to import and visualize the data.</p>\n</section>\n'},192:function(t,n,o){"use strict";o.r(n);o(28);var e=o(167),r=o.n(e),d={layout:"master",computed:{docs:function(){return r.a}},mounted:function(){var t=this.$el.querySelectorAll("a");console.log(t),t.forEach(function(t){t.target="_blank",t.rel="noopener"})}},a=o(1),i=Object(a.a)(d,function(){var t=this.$createElement,n=this._self._c||t;return n("main",{staticClass:"pt-32 px-4"},[n("section",{staticClass:"markdown container ui-card"},[n("div",{domProps:{innerHTML:this._s(this.docs)}})])])},[],!1,null,null,null);i.options.__file="docs.vue";n.default=i.exports}}]);