
    const style = document.createElement('style');
    style.textContent = `
      *, *::after, *::before {
        box-sizing: border-box;
      }
      
      :root {
        --aqua:  #7FDBFF;
        --blue:  #0074D9;
        --navy:  #001F3F;
        --teal:  #39CCCC;
        --green: #2ECC40;
        --olive: #3D9970;
        --lime:  #01FF70;
        --yellow:  #FFDC00;
        --orange:  #FF851B;
        --red:     #FF4136;
        --fuchsia: #F012BE;
        --purple:  #B10DC9;
        --maroon:  #85144B;
        --white:  #FFFFFF;
        --silver: #DDDDDD;
        --gray:   #AAAAAA;
        --black:  #111111;
      }
      
      html, body {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-color: #111;
        overflow: hidden;
      }

      
      header {
        width: 100%;
        text-align: center;
        padding: 20px 0;
        font-size: 2em;
        color: white;
        text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
      }

      
      footer {
        width: 100%;
        text-align: center;
        padding: 10px 0;
        color: white;
        position: absolute;
        bottom: 10px;
      }

      
      .loader-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0); /* Semi-transparent black background */
        z-index: 9999; /* Ensure it stays on top */
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .stack {
        display: grid;
        grid-template-areas: 'stack';
        justify-items: center;
        align-items: center;
        position: relative;
        z-index: 10000; /* Ensures the loader appears above overlay */
      }
      
      .blobs {
        display: grid;
        grid-template-areas: 'stack';
        position: relative;
        animation: spin infinite 5s linear;
        justify-content: center;
        align-items: center;
      }

      
      .blob {
        --border-radius: 115% 140% 145% 110% / 125% 140% 110% 125%;
        --border-width: 2vmin;  /* Adjusted the border width to make it smaller */
        aspect-ratio: 1;
        display: block;
        grid-area: stack;
        background-size: calc(100% + var(--border-width) * 2);
        background-repeat: no-repeat;
        background-position: center;
        border: var(--border-width) solid transparent;
        border-radius: var(--border-radius, 50%);
        mask-image: linear-gradient(transparent, transparent), linear-gradient(black, white);
        mask-clip: padding-box, border-box;
        mask-composite: intersect;
        mix-blend-mode: screen;
        height: 20vmin;  /* Adjusted size to make the loader smaller */
        filter: blur(0.5vmin);  /* Reduced blur for better visibility */
      }
      
      .blob:nth-child(1) {
        background-color: var(--blue);
        background-image: linear-gradient(var(--blue), var(--teal), var(--blue));
        transform: rotate(30deg) scale(1.03);
      }
      
      .blob:nth-child(2) {
        background-color: var(--red);
        background-image: linear-gradient(var(--red), var(--orange), var(--red));
        transform: rotate(60deg) scale(0.95);
      }
      
      .blob:nth-child(3) {
        background-color: var(--olive);
        background-image: linear-gradient(var(--olive), var(--lime), var(--olive));
        transform: rotate(90deg) scale(0.97);
      }
      
      .blob:nth-child(4) {
        background-color: var(--purple);
        background-image: linear-gradient(var(--purple), var(--maroon), var(--purple));
        transform: rotate(120deg) scale(1.02);
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `;

    document.head.appendChild(style);

  
    const loaderContainer = document.createElement('div');
    loaderContainer.classList.add('loader-overlay');

    const stack = document.createElement('div');
    stack.classList.add('stack');
    loaderContainer.appendChild(stack);

    const blobs = document.createElement('div');
    blobs.classList.add('blobs');

  
    for (let i = 0; i < 4; i++) {
      const blob = document.createElement('span');
      blob.classList.add('blob');
      blobs.appendChild(blob);
    }

    stack.appendChild(blobs);
    document.body.appendChild(loaderContainer);

    
    window.onload = () => {
      
      setTimeout(() => {
        loaderContainer.style.display = 'none'; 
      }, 5000); 
    };
  



