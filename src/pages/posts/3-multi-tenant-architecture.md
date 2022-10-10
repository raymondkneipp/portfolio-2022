---
layout: ../../layouts/BlogPost.astro
author: Raymond Kneipp
avatar: /me.png
date: 10-10-2022
title: What is Multi-Tenant Architecture?
description: Multi-tenant architecture is a software architecture where multiple instances of code run on a single server to serve multiple tenants.
image: /3.png
---

## Picture This

Imagine you are creating a website for a group in an organization. The group is just one entity with thousands of others, all with different locations and contact information. Each group needs an individual web presence. You could create a website and offer it to one entity, then copy that site and use it as a template for another. Copy the codebase, go through each page and alter the writing to match the new group, then deploy the site and hope it builds, then buy a domain for the new group and set up the DNS to point to the new site, then offer it to the new group, then wait for their feedback, then make alterations, then... The process is a lot of work for what? $15 a month? This example is a perfect opportunity to incorporate multi-tenant architecture.

## The Solution

Multi-tenant architecture or multitenancy is a software architecture where multiple instances of code run on a single server to serve multiple tenants. Multitenancy allows numerous users to use a single application or database. In the example above, each group or tenant needs a website with data about that group. Implementing multitenancy allows each tenant to have their website that they can change to their needs, and you only need to program one website.

![Multi-Tenant Architecture](/3.png)

Each tenant needs access to a dashboard to change the copy on their website. You need to be able to take the data and dynamically build a webpage with that data. Multitenancy solves the problem of having to hand-code numerous different websites. Imagine trying to add a new feature or an update to all those websites. With multitenancy, you only have to update a single codebase, and every site will reflect those changes.

## How to Implement The Solution

I have created a basic [multi-tenant demo on GitHub](https://github.com/raymondkneipp/multi-tenant-via-subdomain). If you are familiar with JavaScript, go ahead and clone the repo and use `README.md` to get it running.

## How I am Using Multi-Tenant Architecture

While looking for another freelancing project, I came across an American Legion Website. I saw that many other legions were using the same outdated template. I wanted to make a new website for them, so I built a template that could be duplicated and reused for every legion that agreed to have a new website. I quickly realized that this would not scale well. I would have to spend hours upon hours setting up every new website. And if I wanted to provide a new feature? I would have had to edit each website one by one.

I had no idea how to implement this. I didn't even know what to search for on Google. Then, I stumbled upon a [podcast by Syntax](https://syntax.fm/show/448/potluck-multi-tenant-apps-js-sprinkles-kids-coding-server-error-handling) that taught me the lingo "multi-tenant-app." Once I saw the title, I knew it was what I needed.

After months of creating demos and learning a whole new tech stack, I was able to create [alpost](https://alpost.org).
