# Unruly Lab Screens
Video playback for Unruly Lab Screens

### Technical requirements

The current site is set to display on a 1080 x 1920 touch screen, using the most recent version of Chrome.

### Technical Setup

Open <code>index.html</code> in a Chrome browser.

The code is fairly simple. 

It uses: 

- HTML5 boilerplate for HTML markup, CSS normalize, and JS plugins (<code>index.html</code>)
- JavaScript for controlling video playback (<code>js/main.js</code>)
- CSS for transition effects (<code>css/custom.css</code>)
- VideoJS for presenting HTML5 video (http://www.videojs.com/)

### Creating more "screens"

To create the code for multiple screens, duplicate this project's containing folder and rename the folder (e.g. "screen02").

Replace any media files in the <code>video/</code> folder, being careful to stick to the naming convention.

Update the HTML in the <code>index.html</code> file to include any extra video files (or to remove any).

### Adding / Removing media

If you wish to add or remove answer video files (say you wish to have 3 answer videos instead of the default 6), you will need to update the code in <code>index.html</code> to reflect that.

To *remove* a video, remove the entire <code>&lt;video&rt;</code> element.

To *add* a video, it's easy if you copy and paste an existing <code>&lt;video&rt;</code> element, updating the *id* and *src* attributes to reflect the new media.

For example, if you wish to create a seventh video, copy a <code>&lt;video&rt;</code> element, and then update the html:

<pre><code>
&lt;video id="answer07" class="video-js vjs-default-skin video"  preload="auto" width="1080" height="1920" data-setup='{}'&rt;
    &lt;source src="video/answer07.mp4" type='video/mp4' /&rt;
&lt;/video&rt;
</pre></code>