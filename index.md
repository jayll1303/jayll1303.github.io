---
layout: default
title: Home
---

<h2>Latest posts</h2>
<ul class="posts">
  {% for post in site.posts %}
    <li>
      <span>{{ post.date | date: "%Y-%m-%d" }}</span>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      {% if post.categories and post.categories.size > 0 %}
        <small>in {{ post.categories | array_to_sentence_string }}</small>
      {% endif %}
    </li>
  {% endfor %}
  {% if site.posts == empty %}
    <li>No posts yet.</li>
  {% endif %}
  
</ul>

<h2>Categories</h2>
<ul>
  {% assign sorted = site.categories | sort %}
  {% for category in sorted %}
    {% assign name = category[0] %}
    <li><a href="#{{ name | slugify }}">{{ name }}</a> ({{ category[1].size }})</li>
  {% endfor %}
</ul>

<hr />

{% for category in sorted %}
  {% assign name = category[0] %}
  <h3 id="{{ name | slugify }}">{{ name }}</h3>
  <ul>
    {% for post in category[1] %}
      <li>
        <span>{{ post.date | date: "%Y-%m-%d" }}</span>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}

