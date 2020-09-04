// console.log('connection confirmed');
document.querySelectorAll('.item').forEach(album => {
    album.addEventListener('click', getAlbum)
})

function getAlbum() {
    //  TEST CONFIGURATION:
    console.log('album clicked');
    let extractedSearchTerms = '';
    title = this.querySelector('img').src;
    const url = new URL(title);
    let space = '+';
    console.log(title);
    console.log(url.pathname.split("/")[2].split(".png")[0]);
    extractedSearchTerms = url.pathname.split("/")[2].split(".png")[0];
    for (let i = 0; i < extractedSearchTerms.length; i++) {
        if (extractedSearchTerms.charAt(i) == '-') {
            console.log('found hyphen');
            // console.log(extractedSearchTerms.charAt(i));
            space = extractedSearchTerms.charAt(i);
            console.log(space);
            console.log(extractedSearchTerms.charAt(i))
        }
    }
    console.log(extractedSearchTerms);
    // console.log(typeof title);
}

function fetchFromSpotify() {

}
