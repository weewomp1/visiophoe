import './App.css';
import Title from './svgs/Title.svg'
import search from './svgs/search.svg'
import search0 from './svgs/search0.svg'
import cloud from './svgs/cloud.svg'
import drum from './svgs/drum.svg'
import waveform from './svgs/waveform.svg'
import playButton from './svgs/playButton.svg'
import previousButton from './svgs/previousButton.svg'
import nextButton from './svgs/nextButton.svg'
import tagBackground from './svgs/tagBackground.svg'

function App() {
  return (

    //main, searchBarWrapper, search0, searchBarInput,
    //mainContent, tagsWrapper, tracks, tag, track, trackInfoWrapper, waveWrapper, controls
    <div className="App">
      <div className="container">
        <div className="navigation">
          <img src={Title} className='title'/>

          <div className="searchWrapper">
            <img src={search} alt="" />
            <h3>Search</h3>
          </div>

          <div className="cloudWrapper">
            <img src={cloud} alt="" />
            <h3>upload</h3>
          </div>
        </div>
        <div className="main">
          <div className="searchBarWrapper">
            <img src={search0} alt="" className='search0'/>
            <input type="text" className='searchBarInput'/>
          </div>
          <div className="mainContent">
            <div className="tagsWrapper">
              <div className="tag">
              Intrument
              </div>
              <div className="tag">
              Key
              </div>
              <div className="tag">
              bpm
              </div>
            </div>
            <div className="tracks">
            <div className="tracklist">
            
              <div className="track">
                <img src={drum} alt="" className='trackIcon'/>

                <div className="trackInfoWrapper">
                  <h3>Kick</h3>
                  <h3>420</h3>
                </div>
                    
                <div className="waveWrapper">
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                </div>

                <div className="trackInfoWrapper0">
                  <h3 className='info_key'>C maj</h3>
                  <h3 className='info_bpm'>118</h3>
                </div>
              </div>
              <div className="track">
                <img src={drum} alt="" className='trackIcon'/>

                <div className="trackInfoWrapper">
                  <h3>Kick</h3>
                  <h3>420</h3>
                </div>
                    
                <div className="waveWrapper">
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                </div>

                <div className="trackInfoWrapper0">
                  <h3 className='info_key'>C maj</h3>
                  <h3 className='info_bpm'>118</h3>
                </div>
              </div>
              <div className="track">
                <img src={drum} alt="" className='trackIcon'/>

                <div className="trackInfoWrapper">
                  <h3>Kick</h3>
                  <h3>420</h3>
                </div>
                    
                <div className="waveWrapper">
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                </div>

                <div className="trackInfoWrapper0">
                  <h3 className='info_key'>C maj</h3>
                  <h3 className='info_bpm'>118</h3>
                </div>
              </div>
              <div className="track">
                <img src={drum} alt="" className='trackIcon'/>

                <div className="trackInfoWrapper">
                  <h3>Kick</h3>
                  <h3>420</h3>
                </div>
                    
                <div className="waveWrapper">
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                </div>

                <div className="trackInfoWrapper0">
                  <h3 className='info_key'>C maj</h3>
                  <h3 className='info_bpm'>118</h3>
                </div>
              </div>
              <div className="track">
                <img src={drum} alt="" className='trackIcon'/>

                <div className="trackInfoWrapper">
                  <h3>Kick</h3>
                  <h3>420</h3>
                </div>
                    
                <div className="waveWrapper">
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                </div>

                <div className="trackInfoWrapper0">
                  <h3 className='info_key'>C maj</h3>
                  <h3 className='info_bpm'>118</h3>
                </div>
              </div>
              <div className="track">
                <img src={drum} alt="" className='trackIcon'/>

                <div className="trackInfoWrapper">
                  <h3>Kick</h3>
                  <h3>420</h3>
                </div>
                    
                <div className="waveWrapper">
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                </div>

                <div className="trackInfoWrapper0">
                  <h3 className='info_key'>C maj</h3>
                  <h3 className='info_bpm'>118</h3>
                </div>
              </div>
              <div className="track">
                <img src={drum} alt="" className='trackIcon'/>

                <div className="trackInfoWrapper">
                  <h3>Kick</h3>
                  <h3>420</h3>
                </div>
                    
                <div className="waveWrapper">
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                </div>

                <div className="trackInfoWrapper0">
                  <h3 className='info_key'>C maj</h3>
                  <h3 className='info_bpm'>118</h3>
                </div>
              </div>
              <div className="track">
                <img src={drum} alt="" className='trackIcon'/>

                <div className="trackInfoWrapper">
                  <h3>Kick</h3>
                  <h3>420</h3>
                </div>
                    
                <div className="waveWrapper">
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                </div>

                <div className="trackInfoWrapper0">
                  <h3 className='info_key'>C maj</h3>
                  <h3 className='info_bpm'>118</h3>
                </div>
              </div>
              <div className="track">
                <img src={drum} alt="" className='trackIcon'/>

                <div className="trackInfoWrapper">
                  <h3>Kick</h3>
                  <h3>420</h3>
                </div>
                    
                <div className="waveWrapper">
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                </div>

                <div className="trackInfoWrapper0">
                  <h3 className='info_key'>C maj</h3>
                  <h3 className='info_bpm'>118</h3>
                </div>
              </div>
              <div className="track">
                <img src={drum} alt="" className='trackIcon'/>

                <div className="trackInfoWrapper">
                  <h3>Kick</h3>
                  <h3>420</h3>
                </div>
                    
                <div className="waveWrapper">
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                </div>

                <div className="trackInfoWrapper0">
                  <h3 className='info_key'>C maj</h3>
                  <h3 className='info_bpm'>118</h3>
                </div>
              </div>
              <div className="track">
                <img src={drum} alt="" className='trackIcon'/>

                <div className="trackInfoWrapper">
                  <h3>Kick</h3>
                  <h3>420</h3>
                </div>
                    
                <div className="waveWrapper">
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                </div>

                <div className="trackInfoWrapper0">
                  <h3 className='info_key'>C maj</h3>
                  <h3 className='info_bpm'>118</h3>
                </div>
              </div>
              <div className="track">
                <img src={drum} alt="" className='trackIcon'/>

                <div className="trackInfoWrapper">
                  <h3>Kick</h3>
                  <h3>420</h3>
                </div>
                    
                <div className="waveWrapper">
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                </div>

                <div className="trackInfoWrapper0">
                  <h3 className='info_key'>C maj</h3>
                  <h3 className='info_bpm'>118</h3>
                </div>
              </div>
              <div className="track">
                <img src={drum} alt="" className='trackIcon'/>

                <div className="trackInfoWrapper">
                  <h3>Kick</h3>
                  <h3>420</h3>
                </div>
                    
                <div className="waveWrapper">
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                </div>

                <div className="trackInfoWrapper0">
                  <h3 className='info_key'>C maj</h3>
                  <h3 className='info_bpm'>118</h3>
                </div>
              </div>
              <div className="track">
                <img src={drum} alt="" className='trackIcon'/>

                <div className="trackInfoWrapper">
                  <h3>Kick</h3>
                  <h3>420</h3>
                </div>
                    
                <div className="waveWrapper">
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                  <img src={waveform} alt="" />
                </div>

                <div className="trackInfoWrapper0">
                  <h3 className='info_key'>C maj</h3>
                  <h3 className='info_bpm'>118</h3>
                </div>
              </div>


            

            <div className="controlsWrapper">
              <div className="controls">
                <img src={previousButton} alt="" />
                <img src={playButton} alt="" />
                <img src={nextButton} alt="" />
              </div>
            </div>
            
            
          </div>
            </div>
          </div>
        </div>
        <div className="misc">
          
        </div>
      </div>
    </div>
  );
}

export default App;
