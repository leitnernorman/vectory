import React from 'react';
import '../../App.css';
import SlideRender from '../Slide';
import {BrowserView, MobileView} from 'react-device-detect';
import { GalleryItems } from '../GalleryItems';
import {isMobile} from 'react-device-detect';
import Footer
 from '../Footer';
function Gallery() {
   
  if(isMobile){
    return(
      <>
      <GalleryItems />
      <Footer />
      </>
    );
  }else{
    return (
      <>
      <BrowserView>
        <SlideRender />
        <Footer />
      </BrowserView>
      <MobileView>
        <GalleryItems />
        <Footer />
      </MobileView>
      </>
    );
  }
}
export default Gallery;