+++
title = "Test Gallary"
description = "A test gallery to see how they work"
date = 2024-10-21T01:21:00Z
draft = false

[taxonomies]
tags = []
[extra]
keywords = ""
+++

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/photoswipe.css">

This is a test of a gallery under the gallery section of this site.

# Half Frame Test Shots

These are a couple test shots with my Agat 18K to use as examples for this test

<script type="module">
import PhotoSwipeLightbox from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/photoswipe-lightbox.esm.js';
import PhotoSwipe from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/photoswipe.esm.js'
const lightbox_a = new PhotoSwipeLightbox({
  gallery: '#gallery_a',
  children: 'a',
  showHideAnimationType: 'zoom',
  pswpModule: PhotoSwipe
});
const lightbox_b = new PhotoSwipeLightbox({
  gallery: '#gallery_b',
  children: 'a',
  showHideAnimationType: 'zoom',
  pswpModule: PhotoSwipe
});
lightbox_a.init();
lightbox_b.init();
</script>

<div class="pswp-gallery" id="gallery_a" style="grid-gap: 10px;display: grid;grid-template-columns: 1fr 1fr;position: relative;width: 100%">
    <a href="./img/IMG_0248.JPG"
        data-pswp-width="4000" 
        data-pswp-height="2822"
        target="_blank">
        <img src="./img/IMG_0248.JPG" alt="" />
    </a>
    <a href="./img/IMG_0247.JPG"
        data-pswp-width="4000" 
        data-pswp-height="2827"
        target="_blank">
        <img src="./img/IMG_0247.JPG" alt=""/>
    </a>
</div>

# Rollei 35 LED Test Shots

These are a couple of test shots from my Rollei 35 LED 

<div class="pswp-gallery" id="gallery_b" style="grid-gap: 10px;display: grid;grid-template-columns: 1fr 1fr;position: relative;width: 100%">
    <a href="./img/IMG_0252.JPG"
        data-pswp-width="6000" 
        data-pswp-height="4000"
        target="_blank">
        <img src="./img/IMG_0252.JPG" alt="" />
    </a>
    <a href="./img/IMG_0253.JPG"
        data-pswp-width="6000" 
        data-pswp-height="4000"
        target="_blank">
        <img src="./img/IMG_0253.JPG" alt=""/>
    </a>
</div>
