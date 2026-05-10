---
permalink: /blog/
title: "Blog"
layout: default
author_profile: true
---

<style>
.blog-index {
  margin-top: 1.2em;
}

.blog-intro {
  color: #666;
  font-size: 0.95em;
  margin-bottom: 1.8em;
}

.blog-card {
  padding: 1.1em 0 1.2em 0;
  border-bottom: 1px solid #e5e5e5;
}

.blog-card:first-of-type {
  border-top: 1px solid #e5e5e5;
}

.blog-card-title {
  margin: 0 0 0.25em 0;
  font-size: 1.15em;
  line-height: 1.35;
}

.blog-card-title a {
  text-decoration: none;
  color: #2b6dad;
}

.blog-card-title a:hover {
  text-decoration: underline;
}

.blog-card-meta {
  font-size: 0.82em;
  color: #888;
  margin-bottom: 0.5em;
}

.blog-card-excerpt {
  font-size: 0.95em;
  color: #444;
  line-height: 1.65;
  margin-bottom: 0.5em;
}

.blog-tag {
  display: inline-block;
  margin-right: 0.35em;
  padding: 0.12em 0.55em;
  font-size: 0.75em;
  color: #666;
  border: 1px solid #ddd;
  border-radius: 3px;
  background: #fafafa;
}
</style>

# Blog

<div class="blog-intro">
OI & Research notes.
</div>

<div class="blog-index">
{% for post in site.posts %}
  <article class="blog-card">
    <h2 class="blog-card-title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>

    <div class="blog-card-meta">
      {{ post.date | date: "%Y-%m-%d" }}
    </div>

    <div class="blog-card-excerpt">
      {{ post.excerpt | strip_html | truncate: 180 }}
    </div>

    {% if post.tags %}
      <div>
      {% for tag in post.tags %}
        <span class="blog-tag">{{ tag }}</span>
      {% endfor %}
      </div>
    {% endif %}
  </article>
{% endfor %}
</div>
