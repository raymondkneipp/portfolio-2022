---
layout: ../../layouts/BlogPost.astro
author: Raymond Kneipp
avatar: /me.png
date: 07-04-2022
title: Welcome to my New Astro Blog!
description: What is Astro, and why did I create a website with it? No more JavaScript?! In this post, I talk about how I built my new site with Astro and when you should use it.
image: /1.png
---

Welcome to my new blog made with [Astro](https://astro.build). This blog is where I will teach, rant, or share anything related to web development or other topics I see fit. The goal of this blog is to document my programming journey and teach others in the process.

[Astro](https://astro.build) is a static site builder that ships zero JavaScript to the end-user, drastically reducing load times and unused code. And the best part? You can choose your favorite framework or even mix and match!

```astro
---
const name = 'Astro';
---

<h1>Hello {name}</h1>
```

> Hello Astro

Astro supports React, Svelte, Vue, Solid, Preact, Alpine, Lit, and even Vanilla JS. Let's get started and install Astro locally.

## Installation

```bash
npm create astro@latest
```

Then you will be asked to provide a location and name for the project, followed by picking a template. We will go with "Just the basics." Next, type "Y" to install the npm packages. After that, you will have the opportunity to initialize a git repository.

## Basics of Astro

Navigate to your new project and open up a text editor.

```
my-astro-site
├── astro.config.mjs
├── package-lock.json
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   └── Card.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── tsconfig.json
```

Run Astro with `npm run dev` and visit `http://localhost:3000/`. You should see "Welcome to Astro."

`astro.config.mjs` customizes how Astro works and is where you would add integrations. Let's add [Tailwind CSS](https://tailwindcss.com/).

### Quick Installation

```bash
npx astro add tailwind
```

### Manual Installation

```bash
npm install @astrojs/tailwind
```

Then add Tailwind CSS to your Astro configuration file.

**astro.config.mjs**

```javascript
import tailwind from '@astrojs/tailwind';

export default {
	integrations: [tailwind()],
};
```

## Using Tailwind CSS

After installing the integration, restart the server by pressing `CTRL-C` and running `npm run dev`.

Let's delete everything in `src/pages/index.astro` and replace it with the following code.

```astro
---
const name = 'ASTRO';
---

<div class='bg-blue-800 min-h-screen flex flex-col items-center justify-center'>
	<h1 class='text-fuchsia-300 font-black text-9xl text-center'>
		{name} IN THE OCEAN
	</h1>
</div>
```

The code between the three dashes will run at build time to generate the HTML.

## Let's Add React!

Install the integration:

```bash
npm install --save-dev @astrojs/react
```

And add it to your Astro configuration file like so.

```javascript
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
});
```

Lastly restart the server.

### First React Component With Astro

Create a new file in `src/components` called `Button.tsx`. Oh yeah, TypeScript will work by default. Copy the following code into the new file.

```jsx
import React from 'react';

type Props = {
	children: string,
};

const Button: React.FC = ({ children }) => {
	return (
		<button
			className="text-4xl bg-fuchsia-300 text-blue-800 font-black p-6 mt-12"
			onClick={() =>
				window.open(
					'https://www.youtube.com/watch?v=MEg-oqI9qmw&ab_channel=MaskedWolf'
				)
			}
		>
			{children}
		</button>
	);
};

export default Button;
```

Now let's add the new component to our `index.astro` page.

```astro
---
import Button from '../components/Button';
const name = 'ASTRO';
---

<div class='bg-blue-800 min-h-screen flex flex-col items-center justify-center'>
	<h1 class='text-fuchsia-300 font-black text-9xl text-center'>
		{name} IN THE OCEAN
	</h1>

	<Button>Click Me</Button>
</div>
```

Now, if you visit the site and click on the button, it doesn't work.

## The End.

I'm just kidding. So the button shows up, but the `onClick` event is not firing. Astro does not send the JavaScript associated with the event. To tell Astro to load the JavaScript, you need to tell Astro by using a "client" directive.

`client:load` will load the JavaScript as soon as possible.

`client:idle` will load after `client:load`.

`client:visible` will load when the component is in the viewport.

`client:media="(max-width: 50em)"` will load if the viewport width is smaller than `50em`.

## Making Things Work

Let's add the `client:load` directive to our button.

```astro
<Button client:load>Click Me</Button>
```

Now clicking the button should open a new tab.

## Thoughts

What we discussed is just the surface of Astro and its capabilities. I enjoyed using Astro to build my new site as it diminished my load times. I believe if you are making a static site, then Astro is the way to go. I hope you learned something new and found this post helpful!
