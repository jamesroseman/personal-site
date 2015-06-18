---
layout: archive
permalink: /photos/
title: "Photos"
---

<div class="tiles">
{% for post in site.categories.photos %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->