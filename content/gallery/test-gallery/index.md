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
    function createNanogalleryDiv(images) {
    // Create the main div element
    const galleryDiv = document.createElement('div');
    galleryDiv.id = 'gallery';
    galleryDiv.setAttribute('data-nanogallery2', JSON.stringify({
        thumbnailWidth: 'auto',
        thumbnailHeight: '500',
        thumbnailLabel: {
            position: 'overImageOnBottom',
        },
        thumbnailAlignment: 'center',
        thumbnailOpenImage: true,
    }));

    // Create anchor elements for each image and append to the gallery div
    images.forEach((imagePath) => {
        const anchor = document.createElement('a');
        anchor.href = imagePath;
        anchor.setAttribute('data-ngthumb', imagePath);
        galleryDiv.appendChild(anchor);
    });

    return galleryDiv;
}
</script>

This is a test of a gallery under the gallery section of this site.

# Half Frame Test Shots

These are a couple test shots with my Agat 18K to use as examples for this test

<!-- <div id="test-gallery1">
    <script>
        const images1 = ['./img/IMG_0248.JPG', './img/IMG_0247.jpg'];
        const gallery1 = createNanogalleryDiv(images1);
        document.getElementById('test-gallery1').appendChild(gallery1);
    </script>
</div> -->

<div ID="test1" data-nanogallery2='{
    "thumbnailWidth": "auto",
    "thumbnailHeight": "500",
    "thumbnailLabel": {
        "position": "overImageOnBottom"
    },
    "thumbnailAlignment": "center",
    "thumbnailOpenImage": true
}'>
    <a href="./img/IMG_0248.JPG" data-ngthumb="./img/IMG_0248.JPG"></a>
    <a href="./img/IMG_0247.jpg" data-ngthumb="./img/IMG_0247.jpg"></a>
</div>

# Rollei 35 LED Test Shots

These are a couple of test shots from my Rollei 35 LED 

<!-- <div id="test-gallery2">
    <script>
        const images2 = ['./img/IMG_0252.JPG', './img/IMG_0253.JPG'];
        const gallery2 = createNanogalleryDiv(images2);
        document.getElementById('test-gallery2').appendChild(gallery2);
    </script>
</div> -->

<div ID="test2" data-nanogallery2='{
    "thumbnailWidth": "auto",
    "thumbnailHeight": "500",
    "thumbnailLabel": {
        "position": "overImageOnBottom"
    },
    "thumbnailAlignment": "center",
    "thumbnailOpenImage": true
}'>
    <a href="./img/IMG_0252.JPG" data-ngthumb="./img/IMG_0252.JPG"></a>
    <a href="./img/IMG_0253.jpg" data-ngthumb="./img/IMG_0253.jpg"></a>
</div>
