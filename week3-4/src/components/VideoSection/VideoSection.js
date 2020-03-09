import React from 'react';
import './VideoSection.css';
import Link from '../Link/Link';

// import {BrowserRouter} from 'react-router-dom';
// import { Link } from 'react-router-dom';



const VideoSection = (props) => {

  // const redirectPage = () => {
  //   <BrowserRouter>
  //       <Link to="https://www.youtube.com/user/PokemonOficialES" />
  //   </BrowserRouter>
  
    return <div id="videoSection" className="bg-gray">

    <div className="row">
      <div className="column-5">
        <div className="video-wrapper">
          <iframe className="iframe-video"  src="https://www.youtube.com/embed/Kwpp4mCCSa0"></iframe>
      </div>
    </div>  
      <div className="column-5">
    <div className="text-video">
  <h2>Checkout the Official Pokemon Youtube Channel</h2>
    {/* <button class="button" onclick="location.href='https://www.youtube.com/user/PokemonOficialES'">View More</button> */}
  <Link href={"https://www.youtube.com/user/PokemonOficialES"} label="View More" ></Link>
</div>

</div>
     
      
    </div>
    </div>
}

export default VideoSection;