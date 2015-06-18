---
layout: archive
permalink: /stories/
title: "Short Stories"
---

<div class="tiles">
{% for post in site.categories.stories %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->