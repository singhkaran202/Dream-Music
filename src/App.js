import './App.css';
import LeftSidebar from './components/SideBar/mainSidebar'
import CenterDash from './components/MainDashboard/main_dashboard'
import RightMusicBar from './components/Songbar/mainSongbar' 
import { MusicProvider } from './components/MusicContext';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button className="mobile-menu-btn" onClick={onClick}>
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}


function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };





  return (
    <MusicProvider>
     <div className="App">
     <MobileMenuButton 
          isOpen={isMobileMenuOpen} 
          onClick={toggleMobileMenu} 
        />
        <div className={`left ${isMobileMenuOpen ? 'active' : ''}`}>
          <LeftSidebar />
        </div>
        <div 
          className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />






{/*       
      <div className='left'>
        <LeftSidebar />
      </div> */}
      <div className='mainn'>
        <div className='center'>
          <CenterDash />
        </div>
        <div className='right'>
          <RightMusicBar className="rt" />
        </div>
      </div>        
    </div>
  </MusicProvider>
  );
}
export default App;
