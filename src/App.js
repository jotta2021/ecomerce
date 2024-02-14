import React from 'react';
import Home from './pages/home';

import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
register();
function App() {
  return (
    <div className="App">
<Home/>
    </div>
  );
}

export default App;
