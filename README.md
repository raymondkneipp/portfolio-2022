<div id="top"></div>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/raymondkneipp/portfolio-2022">
    <img src="public/logo-outline.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Portfolio 2022</h3>

  <p align="center">
		My portfolio website showcasing my pinned repositories.
    <br />
    <a href="https://github.com/raymondkneipp/portfolio-2022"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://raymondkneipp2022.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/raymondkneipp/portfolio-2022/issues">Report Bug</a>
    ·
    <a href="https://github.com/raymondkneipp/portfolio-2022/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Portfolio Screen Shot][product-screenshot]](https://raymondkneipp2022.vercel.app/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Astro](https://astro.build/)
- [React.js](https://reactjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons)
- [EmailJS](https://www.emailjs.com/)
- [react-copy-to-clipboard](https://www.npmjs.com/package/react-copy-to-clipboard)
- [Headless UI](https://headlessui.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/raymondkneipp/portfolio-2022.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Get a free EmailJS API Key at [https://www.emailjs.com/](https://www.emailjs.com/)
4. Add an email service [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
5. Set `PUBLIC_EMAILJS_SERVICE` to given Service ID in `.env`
6. Set `PUBLIC_EMAILJS_PUBLIC_KEY` to public key [https://dashboard.emailjs.com/admin/account](https://dashboard.emailjs.com/admin/account)
7. Create two email templates. One for the contact form and the other for a coupon.
8. Set the template ID for each in `.env`
9. Create a GitHub Personal Access Token with access to `repos` [https://github.com/settings/tokens](https://github.com/settings/tokens)
10. Change **line 9** in `/src/components/Portfolio.astro` from

```
user(login: "raymondkneipp") {
```

to

```
user(login: "YOUR_GITHUB_USERNAME") {
```

> The query returns your pinned repositories.

11. Start local server
    ```sh
    npm run dev
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Marketing Page -> https://primer.tailwindui.com/
- [ ] Testimonials
- [ ] About page -> https://www.namchee.dev/about/
- [ ] Blog post share buttons

## Blog Post Ideas

- [ ] Impove SEO

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Raymond Kneipp - [@rfkquery](https://twitter.com/rfkquery) - hello@raymondkneipp.com

Project Link: [https://github.com/raymondkneipp/portfolio-2022](https://github.com/raymondkneipp/portfolio-2022)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/raymondkneipp/portfolio.svg?style=for-the-badge
[contributors-url]: https://github.com/raymondkneipp/portfolio/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/raymondkneipp/portfolio.svg?style=for-the-badge
[forks-url]: https://github.com/raymondkneipp/portfolio/network/members
[stars-shield]: https://img.shields.io/github/stars/raymondkneipp/portfolio.svg?style=for-the-badge
[stars-url]: https://github.com/raymondkneipp/portfolio/stargazers
[issues-shield]: https://img.shields.io/github/issues/raymondkneipp/portfolio.svg?style=for-the-badge
[issues-url]: https://github.com/raymondkneipp/portfolio/issues
[license-shield]: https://img.shields.io/github/license/raymondkneipp/portfolio.svg?style=for-the-badge
[license-url]: https://github.com/raymondkneipp/portfolio/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/raymondkneipp
[product-screenshot]: public/screenshot.png
