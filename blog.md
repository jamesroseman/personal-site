---
layout: archive
permalink: /blog/
title: "Latest Posts"
---

<div class="tiles">
<p class="duzwurk">{% site.categories.blog.first.content %}</p>
{% for post in site.categories.blog %}
	{% include post-list.html %}
{% endfor %}
</div><!-- /.tiles -->