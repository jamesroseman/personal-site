---
layout: archive
permalink: /blog/
title: "Latest Posts"
---

<div class="tiles">
{% site.categories.blog.first %}
{% for post in site.categories.blog %}
	{% include post-list.html %}
{% endfor %}
</div><!-- /.tiles -->