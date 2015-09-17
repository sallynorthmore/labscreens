# Unruly Lab Screens
Video playback for Unruly Lab Screens

### Technical requirements

The current site is set to display on a 1080 x 1920 touch screen, using the most recent version of Chrome.

### Technical Setup

Open <pre><code>index.html</code></pre> in a Chrome browser.

The code is fairly simple. 

It uses: 

- HTML5 boilerplate for HTML markup, CSS normalize, and JS plugins (<pre><code>index.html</code></pre>)
- JavaScript for controlling video playback (<pre><code>js/main.js</code></pre>)
- CSS for transition effects (<pre><code>css/custom.css</code></pre>)
- VideoJS for presenting HTML5 video (http://www.videojs.com/)

### Creating more "screens"

To create the code for multiple screens, duplicate this project's containing folder and rename the folder (e.g. "screen02").

Replace any media files in the <pre><code>video/</code></pre> folder, being careful to stick to the naming convention.

Update the HTML in the <pre><code>index.html</code></pre> file to include any extra video files (or to remove any).

### Adding / Removing media

If you wish to add or remove video files (say you wish to have 3 answer videos instead of 6), you will need to update the code in <pre><code>index.html</code></pre> and <pre><code>js/main.js</code></pre> to reflect that.