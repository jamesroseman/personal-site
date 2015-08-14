---
layout: archive
permalink: /blog/
title: "Latest Posts"
---

<div class="tiles">
{% for post in site.categories.blog %}
	{% include post-list.html %}
{% endfor %}
<hr />
{% for post in site.categories.blog %}
	<h3>{{post.title}}</h3>

	<p>{{ post.excerpt }}</p>

	<p><a href="{{site.url}}{{post.url}}">Read more...</a></p>
{% endfor %}
</div><!-- /.tiles -->