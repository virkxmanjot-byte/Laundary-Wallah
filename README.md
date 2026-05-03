# Laundry Wallah

This is a landing page for a laundry service called Laundry Wallah. I made this project to practice CSS layout concepts like display, float, position, and overflow along with viewport units.

## What I learned

**display: inline-block** — I used this for the navbar. The logo, nav links, and username button all sit on one line because of inline-block. I also used vertical-align: middle to keep them properly aligned in the center.

**float** — The hero section has two divs side by side. The left div has the heading, description, and button, and the right div has the image. I used float: left and float: right to place them next to each other.

**position** — I used position: relative on the right div and position: absolute on the image inside it so the image stays properly placed within that div.

**overflow: hidden** — I used this on html and body to stop the page from scrolling. Also used it on individual divs so content does not spill outside.

**Viewport units (vw / vh)** — Instead of fixed px values, I used vw for widths and vh for heights. This way the whole page fits inside the browser window without any scrolling.

## How to run

Download all files and keep them in the same folder like this:

```
project/
  index.html
  style.css
  main.jpeg
  logo.png
```

Then just open index.html in any browser.
