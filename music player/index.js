document.addEventListener("DOMContentLoaded", function() {
    const iconButtons = document.querySelectorAll('.fas.fa-heart');
    const artistElements = document.querySelectorAll('.artistt');
    const artElements = document.querySelectorAll('.art');
    const imgElements = document.querySelectorAll('.image');
    const favv = document.getElementById('faa');
    const fav = [];
    const play=document.querySelector('.play')
    const imgg=document.querySelector('.imgplay');
    const textt=document.querySelector('.textplay')
    const pl=document.getElementById('akku');


    iconButtons.forEach((element, index) => {
        element.addEventListener('click', function() {
            if (element.style.color === 'red') {
                element.style.color = 'white';
                removefav(index);
            } else {
                element.style.color = 'red';
                const a = artistElements[index].textContent;
                const b = artElements[index].textContent;
                const imageUrl = imgElements[index].src;
                addtofav(a, b, imageUrl, index);
            }
        });
    });
    play.addEventListener('click',function()
    {
        const aa=imgg.src;
        const bb=textt.textContent;
        newplay(aa,bb)
    })
    function newplay(aa, bb) {
        const ak = document.createElement('div');
        ak.style.color = 'white';
        ak.style.position = 'fixed';
        ak.style.bottom = '1%';
        ak.style.textAlign = 'center';
        ak.style.width = '40%';
        ak.style.padding = '50px';
        ak.style.marginLeft="200px"
        
        // Create and append the image element
        const imageEl = document.createElement('img');
        imageEl.src = aa;
        imageEl.style.width = '80px'; // Adjust the size as needed
        imageEl.style.height = 'auto';
        imageEl.style.padding = '10px';
        ak.appendChild(imageEl);
    
        // Create and append the text content
        const textEl = document.createElement('p');
        textEl.textContent = bb;
        ak.appendChild(textEl);
    
        // Create and append the play/pause button
        const playPauseButton = document.createElement('button');
        playPauseButton.textContent = 'Play/Pause';
        playPauseButton.style.backgroundColor='pink';
        playPauseButton.addEventListener('click', function() {
            // Handle play/pause logic here
            // For demonstration purposes, let's toggle the text content
            textEl.textContent = textEl.textContent === bb ? 'Paused' : bb;
        });
        ak.appendChild(playPauseButton);
    const stop=document.createElement('button');
    stop.style.backgroundColor='pink';
    stop.textContent='Stop';
    stop.addEventListener('click',function()
    {
        ak.style.visibility='hidden'
    })
    ak.appendChild(stop);
        // Append the entire container to the specified parent element
        pl.appendChild(ak);
    }
    

    function addtofav(a, b, imageUrl, index) {
        const favoriteItem = document.createElement('div');
        favoriteItem.textContent = `${a} - ${b}`;
        favoriteItem.style.color='white';

        // Create and append the image element
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.style.width = '80px'; // Adjust the size as needed
        imageElement.style.height = 'auto'; // Maintain aspect ratio
        favoriteItem.appendChild(imageElement);

        // Add padding to the favoriteItem div
        favoriteItem.style.padding = '10px';

        favv.appendChild(favoriteItem);
        fav.push({ artist: a, art: b, imageUrl: imageUrl, index: index });
    }

    function removefav(index) {
        const indexToRemove = fav.findIndex(item => item.index === index);
        if (indexToRemove !== -1) {
            fav.splice(indexToRemove, 1);
            updatefav();
        }
    }

    function updatefav() {
        favv.innerHTML = '';
        fav.forEach(item => {
            const favoriteItem = document.createElement('div');
            favoriteItem.textContent = `${item.artist} - ${item.art}`;
            favoriteItem.style.color='white';
            // Check if the imageUrl is present before appending the image
            if (item.imageUrl) {
                const imageElement = document.createElement('img');
                imageElement.src = item.imageUrl;
                imageElement.style.width = '80px'; // Adjust the size as needed
                imageElement.style.height = 'auto'; // Maintain aspect ratio
                favoriteItem.appendChild(imageElement);
            }

            // Add padding to the favoriteItem div
            favoriteItem.style.padding = '30px';
            favoriteItem.style.marginBottom='30px';

            favv.appendChild(favoriteItem);
        });
    }
});
