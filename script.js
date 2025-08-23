
    var images = ['https://iili.io/26nUJFS.jpg'];


    var currentIndex = 0;
    var totalClicks = 0;

    function randomizeImage() {
    let root = document.documentElement;
    root.style.setProperty('--image', 'url(' + images[currentIndex] + ')');
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    var puzzleItems = document.querySelectorAll('#puzz i');
    for (var i = 0; i < puzzleItems.length; i++) {
        puzzleItems[i].style.left = Math.random() * (window.innerWidth - 300) + 'px';
        puzzleItems[i].style.top = Math.random() * (window.innerHeight - 300) + 'px';
    }
    }

    randomizeImage();

    function reloadPuzzle() {
    var doneItems = document.querySelectorAll('.done');
    doneItems.forEach(function (element) {
        element.classList.toggle('done');
    });
    var droppedItems = document.querySelectorAll('.dropped');
    droppedItems.forEach(function (element) {
        element.classList.toggle('dropped');
    });
    var allDoneElement = document.querySelector('.allDone');
    allDoneElement.style = '';
    allDoneElement.classList.toggle('allDone');
    }

    
    var puzzleItemsMobile = document.querySelectorAll('#puzz i');
    puzzleItemsMobile.forEach(function (element) {
    element.addEventListener('mousedown', function () {
        totalClicks++;
        document.querySelector('#clicks').innerHTML = totalClicks;
    });
    element.addEventListener('click', function () {
        if (document.querySelector('.clicked')) {
        document.querySelector('.clicked').classList.toggle('clicked');
        element.classList.toggle('clicked');
        } else {
        element.classList.toggle('clicked');
        }
    });
    });

    var puzzleItemsDesktop = document.querySelectorAll('#puz i');
    puzzleItemsDesktop.forEach(function (element) {
    element.addEventListener('click', function () {
        if (document.querySelector('.clicked')) {
        var clickedElement = document.querySelector('.clicked');
        if (clickedElement.classList.contains(element.classList)) {
            element.classList.add('dropped');
            clickedElement.classList.add('done');
            clickedElement.classList.toggle('clicked');

            if (document.querySelectorAll('.dropped').length == 9) {
            document.querySelector('#puz').classList.add('allDone');
            document.querySelector('#puz').style.border = 'none';
            document.querySelector('#puz').style.animation = 'allDone 1s linear forwards';

            setTimeout(function () {
                reloadPuzzle();
                randomizeImage();
            }, 1500);
            }
        }
        }
    });
    });

    function allowDrop(ev) {
    ev.preventDefault();
    }

    function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.className);
    }

    function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    if (ev.target.className == data) {
        ev.target.classList.add('dropped');
        document.querySelector('.' + data + "[draggable='true']").classList.add('done');

        if (document.querySelectorAll('.dropped').length == 9) {
        document.querySelector('#puz').classList.add('allDone');
        document.querySelector('#puz').style.border = 'none';
        document.querySelector('#puz').style.animation = 'allDone 1s linear forwards';

        setTimeout(function () {
            reloadPuzzle();
            randomizeImage();
        }, 5050);
        }
    }
    }

    document.addEventListener("DOMContentLoaded", () => {
        const header = document.createElement("header");
        header.style.backgroundColor = "#222";
        header.style.color = "#fff";
        header.style.textAlign = "center";
        header.style.padding = "30px 0";
        header.style.fontFamily = "Pacifico";
        header.style.letterSpacing = "8px";
        header.style.fontWeight = "bold";
        header.style.position = "relative";

        const title = document.createElement("h1");
        title.textContent = "PUZZLE GAME";
        title.style.margin = "0";
        title.style.textTransform = "uppercase";
        title.style.color = "#fff";

        title.style.fontSize = "36px";
        title.style.textShadow =
            "0 0 10px #ff5733, 0 0 20px #ff5733, 0 0 30px #ff5733, 0 0 40px #ff5733";
        title.style.animation = "glow 1.5s ease-in-out infinite alternate";

        const style = document.createElement("style");
        style.textContent = `
        @keyframes glow {
            0% {
            text-shadow: 0 0 10px #ff5733, 0 0 20px #ff5733, 0 0 30px #ff5733, 0 0 40px #ff5733;
            }
            100% {
            text-shadow: 0 0 20px #ff5733, 0 0 30px #ff5733, 0 0 40px #ff5733, 0 0 50px #ff5733;
            }
        }
    
        
        @media (max-width: 768px) {
            h1 {
            font-size: 28px; /* Smaller font size for mobile */
            }
        }
    
        
        @media (max-width: 480px) {
            h1 {
            font-size: 24px; /* Even smaller font size for very small screens */
            }
        }
    
        
        @media (min-width: 1024px) {
            h1 {
            font-size: 42px; /* Larger font size for larger desktops */
            }
        }
        `;

        document.head.appendChild(style);

        header.appendChild(title);

        document.body.insertBefore(header, document.body.firstChild);

        const footer = document.createElement("footer");
        footer.style.backgroundColor = "#111";
        footer.style.color = "#fff";
        footer.style.textAlign = "center";
        footer.style.padding = "20px";
        footer.style.position = "fixed";
        footer.style.bottom = "0";
        footer.style.width = "100%";
        footer.style.fontFamily = "Arial, sans-serif";
        footer.style.fontSize = "16px";

        const footerContent = document.createElement("div");
        footerContent.style.maxWidth = "1200px";
        footerContent.style.margin = "0 auto";

        const developerText = document.createElement("p");
        developerText.textContent = "Developer Vaibhav Sarkar";
        developerText.style.fontWeight = "bold";
        developerText.style.color = "blue";
        developerText.style.fontFamily = "Pacifico";
        developerText.style.letterSpacing = "5px";

        developerText.style.fontSize = "30px";

        const fullStackText = document.createElement("p");
        fullStackText.textContent = "Insta - _.im_vaibhav";
        fullStackText.style.fontSize = "14px";
        fullStackText.style.color = "#ccc";
        fullStackText.style.lineHeight="0.2rem";
        fullStackText.style.fontFamily = "Pacifico";
        fullStackText.style.letterSpacing = "5px";
        fullStackText.style.fontSize = "30px";
        
        footerContent.appendChild(developerText);
        footerContent.appendChild(fullStackText);

        footer.appendChild(footerContent);

        document.body.appendChild(footer);

        const bodyHeight = document.body.scrollHeight;
        const windowHeight = window.innerHeight;

        if (bodyHeight < windowHeight) {
            footer.style.position = "absolute";
            footer.style.bottom = "0";
        }
    });

