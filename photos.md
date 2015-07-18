---
layout: archive
permalink: /photos/
title: "Photos"
---

<div class="tiles">
{% for post in site.categories.photos %}
	{{ post.title }}
{% endfor %}
</div><!-- /.tiles -->