---
layout: archive
permalink: /code/
title: "Projects"
---

<div class="tiles">
{% for post in site.categories.code %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->