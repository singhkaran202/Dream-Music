import './App.css';
import LeftSidebar from './components/SideBar/mainSidebar'
import CenterDash from './components/MainDashboard/main_dashboard'
import RightMusicBar from './components/Songbar/mainSongbar' 
import { MusicProvider } from './components/MusicContext';

function App() {
  return (
    <MusicProvider>
     <div className="App">
      
      <div className='left'>
        <LeftSidebar />
      </div>
      <div className='mainn'>
        <div className='center'>
          <CenterDash />
        </div>
        <div className='right'>
          <RightMusicBar />
        </div>
      </div>        
    </div>
  </MusicProvider>
  );
}

export default App;
