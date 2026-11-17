# shreyansh012.github.io

The portfolio site for Shreyansh Arora. It is plain static files. There is no server code, no build step, no framework and no script from another site. It uses system fonts only. It has no analytics.

AI-assisted, with tests and review gates.

## Run it on your computer

Open a terminal in this folder and run:

```
python -m http.server
```

Then open the address that the command prints, in your browser. Stop it with Ctrl+C.

Use the server. Do not open `index.html` by double-clicking it. The page asks for `/style.css` from the site root, and that only works through a server.

## What is in the folder

- `index.html`: the home page.
- `style.css`: all styles. Dark theme by default, with a light theme.
- `site.js`: the theme switch and the status board button. The page still reads fine without it.
- `notes/pipelines-that-lie.html`: a placeholder page. Replace the text between the `ESSAY:START` and `ESSAY:END` comments with the essay.
- The not-found page: the page GitHub Pages shows for a missing address.
- `robots.txt`: lets search engines read the site.

## Mark a demo as ready

Each demo card in `index.html` has a chip that reads `in progress`. The demo names are plain text for now, because the repositories are not public yet. When a repository is public, turn its name into a link: `<a href="https://github.com/shreyansh012/NAME">NAME</a>`. Check that the link opens. Then change the chip text to `ready` and add a `demo` chip to that card.

## Publish

GitHub Pages serves this folder from the default branch of the `shreyansh012.github.io` repository. Run your own checks first. Then push.

## Checks to run by hand

- Open the site at phone width. The page must not scroll sideways.
- Use only the keyboard. Every link and button must show a focus ring.
- Run Lighthouse in the browser. The target is 90 or more in every category.
- Switch the theme and reload. The choice must stay.
