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

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/nanogallery2@3/dist/css/nanogallery2.min.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/nanogallery2@3/dist/jquery.nanogallery2.min.js"></script>

<script>
    function addNanoGallery(div_id){
        const galleryDiv = document.getElementById(div_id);
        galleryDiv.setAttribute('data-nanogallery2', JSON.stringify({
            thumbnailWidth: '400',
            thumbnailHeight: 'auto',
            thumbnailBorderHorizontal: "0",
            thumbnailBorderVertical: "0",
            thumbnailAlignment: "center",
            thumbnailGutterWidth: "6",
            itemsBaseURL: "./img/"
        }));
    }
</script>

This is a test of a gallery under the gallery section of this site.

# Half Frame Test Shots

These are a couple test shots with my Agat 18K to use as examples for this test

<div ID="test1">
    <a href="IMG_0248.JPG" data-ngthumb="IMG_0248.JPG"></a>
    <a href="IMG_0247.jpg" data-ngthumb="IMG_0247.jpg"></a>
</div>

# Rollei 35 LED Test Shots

These are a couple of test shots from my Rollei 35 LED 

<div ID="test2">
    <a href="IMG_0252.JPG" data-ngthumb="IMG_0252.JPG"></a>
    <a href="IMG_0253.jpg" data-ngthumb="IMG_0253.jpg"></a>
</div>

<script>
    addNanoGallery("test1");
    addNanoGallery("test2");
</script>
