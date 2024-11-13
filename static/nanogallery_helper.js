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
