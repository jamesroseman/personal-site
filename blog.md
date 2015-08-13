---
layout: archive
permalink: /blog/
title: "Latest Posts"
---

<h2>{{site.categories.blog.first.title}}</h2>

<p>{{ site.categories.blog.first.excerpt }}</p>

<p><a href="/{{site.categories.blog.first.url}}">Read more...</a></p>

<div class="tiles">
{% for post in site.categories.blog %}
	{% include post-list.html %}
{% endfor %}
</div><!-- /.tiles -->