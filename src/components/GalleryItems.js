
  import React from 'react';
  import { ProGallery } from 'pro-gallery';
  import 'pro-gallery/dist/statics/main.css';

  export function GalleryItems() {

    // Add your images here...
    const items = [
            { // Image item:
                    itemId: 'sample-id',
                    mediaUrl: 'images/image0.jpeg'
            },
            { // Image item:
                itemId: 'sample-id',
                mediaUrl: 'images/image1.jpeg'
        },
            { // Image item:
                itemId: 'sample-id',
                mediaUrl: 'images/image2.jpeg'
        },
        { // Image item:
                itemId: 'sample-id',
                mediaUrl: 'images/image3.jpeg'
        },
        { // Image item:
                itemId: 'sample-id',
                mediaUrl: 'images/image4.jpeg'
        },
        { // Image item:
                itemId: 'sample-id',
                mediaUrl: 'images/image5.jpeg'
        }
    ]


    // The options of the gallery (from the playground current state)
    const options = {
      galleryLayout: 1,
      hoveringBehaviour: 'NEVER_SHOW',
      overlayBackground: 'rgba(8,8,8,0.61)',
    };

    // The size of the gallery container. The images will fit themselves in it
    const container = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    // The eventsListener will notify you anytime something has happened in the gallery.
    const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

    // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
    const scrollingElement = window;

    return (
      <ProGallery
        items={items}
        options={options}
        container={container}
        eventsListener={eventsListener}
        scrollingElement={scrollingElement}
      />
    );
  }
  // Enjoy using your new gallery!
  // For more options, visit https://github.com/wix/pro-gallery
