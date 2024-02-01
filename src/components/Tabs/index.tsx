import './styles.css'
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState, useRef } from 'react'
// @ts-ignore
import { AlphaTabApi, Score, Track, Voice, Beat, Stave, Bar } from '@coderline/alphatab'

import { FaPlay, FaPause, FaBackward, FaHourglass, FaVolumeUp, FaVolumeMute, FaPrint } from "react-icons/fa";
import { GiGuitarHead, GiGuitarBassHead, GiDrumKit, GiSaxophone, GiMusicalKeyboard, GiMicrophone } from "react-icons/gi";
import { PiMetronomeBold } from "react-icons/pi";
import { TiArrowLoop } from "react-icons/ti";
import Header from '../Header';
import TabsSideBar from '../TabsSideBar';
import { useSelector } from 'react-redux';

const Tabs = () => {

  const apiRef = useRef<AlphaTabApi | null>(null);
  const settings = useRef<object | null>(null)

  // const [loading, setLoading] = useState(true)
  const [playStatus, setPlayStatus] = useState<string>("stop")
  const [selectTrack, setSelectTrack] = useState<boolean>(false)
  const [tracks, setTracks] = useState<Array<Track>>([])
  const [trackToRender, setTrackToRender] = useState<Array<number>>([0])
  const songFileState = useSelector((state: any) => state.music.songFile)
  const [staveProfile, setStaveProfile] = useState("Tab")
  const [metronome, setMetronome] = useState<boolean>(false)
  const [songTimeMinutes, setSongTimeMinutes] = useState<number>(0)
  const [songTimeSeconds, setSongTimeSeconds] = useState<number>(0)
  const [songDurationMinutes, setSongDurationMinutes] = useState<number>(0)
  const [songDurationSeconds, setSongDurationSeconds] = useState<number>(0)
  const [score, setScore] = useState<Score>({})
  const [countIn, setCountIn] = useState<boolean>(false)
  const [loop, setLoop] = useState<boolean>(false)

  useEffect(() => {
    
    settings.current = {
      core: {
        fontDirectory: 'src/font/',
      },
      display: {
        staveProfile: staveProfile,
        barsPerRow: 2,
        layoutMode: "Page",
        justifyLastSystem: false,
        scale: 1.1,
        resources: {
          barSeparatorColor: '#C6C6C6',
          mainGlyphColor: "#C6C6C6",
          scoreInfoColor: "#C6C6C6",
          secondaryGlyphColor: "#C6C6C6",
        }
      },
      player: {
        enablePlayer: true,
        enableElementHighlighting: false,
        enableUserInteraction: true,
        enableAnimatedBeatCursor: true,
        enableCursor: true,
        soundFont: 'https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/soundfont/sonivox.sf2',
        scrollElement: document.querySelector('#alphaTab'),
        scrollMode: 'OffScreen',
        scrollSpeed: 300,
        scrollOffsetY: -10,
      },
      notation: {
        elements: {
          scoreTitle: true,
          scoreWordsAndMusic: true,
          effectTempo: true,
          guitarTuning: true
        },
        extendBendArrowsOnTiedNotes: true,
        extendLineEffectsToBeatEnd: true,
        rhythmMode: "ShowWithBars",
        smallGraceTabNotes: true,
      },
      importer: {
        beatTextAsLyrics: true,
      }
    }

    if (apiRef.current !== null) {
      apiRef.current.destroy()
    }

    apiRef.current = new AlphaTabApi(document.querySelector('#alphaTab'), settings.current)
    if(songFileState) {
      const arrayBuffer = new Uint8Array(songFileState.data.data)
      apiRef.current.load(arrayBuffer)
      apiRef.current.scoreLoaded.on((score:any) => {console.log(score)}) 
    }
  }, [trackToRender, staveProfile, songFileState])

  useEffect(() => {
    if (metronome) {
      apiRef.current.metronomeVolume = 1.0
      apiRef.current.updateSettings(settings.current)
    }
    if (!metronome) {
      apiRef.current.metronomeVolume = 0.0
      apiRef.current.updateSettings(settings.current)
    }
    if (countIn) {
      apiRef.current.countInVolume = 1.0
    }
    if (!countIn) {
      apiRef.current.countInVolume = 0.0
    }
    if (loop) {
      apiRef.current.isLooping = true
    }
    if (!loop) {
      apiRef.current.isLooping = false
    }
  }, [metronome, countIn, loop])


  useEffect(() => {
    apiRef.current.scoreLoaded.on((score: Score) => {
      console.log(score)
      
      setTracks(score.tracks)
      setScore(score)
      
      let songLength = 0

      score.tracks[3].staves.forEach((stave: Stave) => {

        stave.bars.forEach((bar: Bar) => {

          bar.voices.forEach((voice: Voice) => {
            voice.beats.forEach((beat: Beat) => {
              const totalBeats = 1 / beat.duration
              songLength += totalBeats
            })
          })
        })
      })
      setSongDurationMinutes(Math.floor(songLength / 60))
      setSongDurationSeconds(Math.ceil(songLength % 60))
    })

  }, [])

  const updateTimePosition = () => {
    if (apiRef.current) {
      const timeInSeconds = Number(apiRef.current.timePosition / 1000)
      const minutes = Number(Math.floor(timeInSeconds / 60))
      const seconds = Math.floor(timeInSeconds % 60)


      setSongTimeMinutes(minutes)
      setSongTimeSeconds(seconds)
    }
  }

  useEffect(() => {
    const intervalId = setInterval(updateTimePosition, 500)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className='flex flex-col w-full h-screen items-center'>
      {/* having to put the header here is not good at all, but was the only way i could make the styles work */}
      <Header />

      <div className='w-full h-full flex'>
      
      <TabsSideBar/>
      <div id='alphaTab' className='w-full h-full bg-darker overflow-y-scroll z-0'></div>
      </div>
      <div className='at-controls h-14 w-full z-10'>
        <div className='at-controls-left h-full flex items-center justify-start gap-4 bg-gray2'>

          <div title='Back' className='at-player-stop hover:cursor-pointer bg-gray3 hover:bg-gray1  w-10 h-10 rounded-full flex items-center justify-center ml-2' onClick={() => {
            apiRef.current.stop()
            setPlayStatus("stop")
            document.querySelector('#alphaTab')!.scrollTop = 0;

          }}>
            <FaBackward className="text-text" />
          </div>
          {playStatus === "stop" || playStatus == "pause" ?
            <div className='at-player-play-pause hover:cursor-pointer bg-gray3 hover:bg-gray1  w-10 h-10 rounded-full flex items-center justify-center'
              title='Play/Pause'
              onClick={() => {
                apiRef.current.play()
                setPlayStatus("play")
              }}
            >
              <FaPlay className="text-text" />
            </div> :
            <div className='at-player-play-pause hover:cursor-pointer bg-text hover:bg-gray1  w-10 h-10 rounded-full flex items-center justify-center'
              title='Play/Pause'
              onClick={() => {
                apiRef.current.pause()
                setPlayStatus("pause")
              }}
            >
              <FaPause className="text-gray3" />
            </div>
          }
          {!selectTrack ? <div className='at-player-play-pause hover:cursor-pointer bg-gray3 hover:bg-gray1  w-10 h-10 rounded-full flex items-center justify-center'
            title='Track Selector/Controls'
            onClick={() => {
              setSelectTrack(!selectTrack)
              document.getElementById("volume-controller")?.classList.toggle("-translate-x-full")
            }}>
            <GiGuitarHead className="text-text" />
          </div> :
            <div className='at-player-play-pause hover:cursor-pointer bg-text hover:bg-gray1  w-10 h-10 rounded-full flex items-center justify-center'
              title='Track Selector/Controls'
              onClick={() => {
                setSelectTrack(!selectTrack)
                document.getElementById("volume-controller")?.classList.toggle("-translate-x-full")
              }}>
              <GiGuitarHead className="text-gray3" />
            </div>

          }
          <div id='volume-controller' className='w-fit h-fit absolute left-0 bottom-12 bg-gray3  z-10 rounded-r-md cursor-default flex flex-col justify-evenly items-center -translate-x-full duration-500 ease-out transition-all indent-0'>
            {tracks ? tracks.map((track: Track) => <div key={track.index} className='text-text p-2 w-full flex items-center gap-2 justify-between'>
              {track.name.toLowerCase().includes('guitar') ? <GiGuitarHead className="text-text" /> : null}
              {track.name.toLowerCase().includes('bass') ? <GiGuitarBassHead className="text-text" /> : null}
              {track.name.toLowerCase().includes('brass') ? <GiSaxophone className="text-text" /> : null}
              {track.name.toLowerCase().includes('drum') ? <GiDrumKit className="text-text" /> : null}
              {track.name.toLowerCase().includes('synth') ? <GiMusicalKeyboard className="text-text" /> : null}
              {track.name.toLowerCase().includes('vocal') ? <GiMicrophone className="text-text" /> : null}
              <p onClick={() => {
                setTrackToRender(() => [track.index])
              }} className='cursor-pointer font-semibold'>{track.name}</p>
              <div className='flex items-center gap-2'>

                <div className="slider-container" title='Track Volume'>
                  <input id="slider" className="slider" type="range" min="0" max="1" step="0.01" value={track.playbackInfo.volume / 16} onChange={(e) => {
                    apiRef.current.changeTrackVolume(track, e.target.value)

                    const updatedTracks = [...tracks]
                    updatedTracks[track.index].playbackInfo.volume = Number(e.target.value) * 16
                    setTracks(updatedTracks)

                  }} />
                </div>
                <div className='flex flex-col gap-1 w-10'>
                  {tracks[track.index].playbackInfo.isMute ? <button title='Mute' className='w-7 h-7 bg-[#D9D9D9] hover:bg-gray1  rounded-md text-[#000] font-medium flex justify-center items-center' onClick={() => {
                    apiRef.current.changeTrackMute([apiRef.current.score.tracks[track.index]], !tracks[track.index].playbackInfo.isMute)
                    const updatedTracks = [...tracks]
                    updatedTracks[track.index].playbackInfo.isMute = !tracks[track.index].playbackInfo.isMute
                    setTracks(updatedTracks)
                  }
                  }>
                    {
                      tracks[track.index].playbackInfo.isMute == false ?
                        <FaVolumeUp /> :
                        <FaVolumeMute />
                    }
                  </button> : <button title='Mute' className='w-7 h-7 bg-[#D9D9D9] hover:bg-gray1  rounded-md text-[#000] font-medium flex justify-center items-center' onClick={() => {
                    apiRef.current.changeTrackMute([apiRef.current.score.tracks[track.index]], !tracks[track.index].playbackInfo.isMute)
                    const updatedTracks = [...tracks]
                    updatedTracks[track.index].playbackInfo.isMute = !tracks[track.index].playbackInfo.isMute
                    setTracks(updatedTracks)
                  }
                  }>
                    {
                      tracks[track.index].playbackInfo.isMute == false ?
                        <FaVolumeUp className="text-gray3" /> :
                        <FaVolumeMute className="text-gray3" />
                    }
                  </button>}
                  {tracks[track.index].playbackInfo.isSolo ? <button title='Solo' className='w-7 h-7 bg-[#50d436] hover:bg-gray1  rounded-md text-[#000] font-medium' onClick={() => {
                    apiRef.current.changeTrackSolo([apiRef.current.score.tracks[track.index]], !tracks[track.index].playbackInfo.isSolo)
                    const updatedTracks = [...tracks]
                    updatedTracks[track.index].playbackInfo.isSolo = !tracks[track.index].playbackInfo.isSolo
                    setTracks(updatedTracks)
                  }
                  }>S</button>
                    :
                    <button title='Solo' className='w-7 h-7 bg-[#D9D9D9] hover:bg-gray1  rounded-md text-[#000] font-medium' onClick={() => {
                      apiRef.current.changeTrackSolo([apiRef.current.score.tracks[track.index]], !tracks[track.index].playbackInfo.isSolo)
                      const updatedTracks = [...tracks]
                      updatedTracks[track.index].playbackInfo.isSolo = !tracks[track.index].playbackInfo.isSolo
                      setTracks(updatedTracks)
                    }
                    }>S</button>}
                </div>
              </div>
            </div>) : null}
          </div>


          {
            metronome ? <div title='Metronome' className='at-player-play-pause hover:cursor-pointer bg-text hover:bg-gray1  w-10 h-10 rounded-full flex items-center justify-center' onClick={() => setMetronome(!metronome)}>
              <PiMetronomeBold className="text-gray3" />
            </div>
              :
              <div title='Metronome' className='at-player-play-pause hover:cursor-pointer bg-gray3 hover:bg-gray1  w-10 h-10 rounded-full flex items-center justify-center' onClick={() => setMetronome(!metronome)}>
                <PiMetronomeBold className="text-text" />
              </div>
          }

          <div title="Band Name/Song Title" className='w-fit h-full font-normal flex justify-center items-center text-text'>
            <p>{score.artist + " - " + score.title}</p>
          </div>


          <div title='Current Time/Song Duration' className='w-fit h-full flex justify-center items-center font-semibold text-text'>
            <p>{
              songTimeMinutes +
              ":" + songTimeSeconds + "/" + songDurationMinutes + ":" + songDurationSeconds
            }</p>
          </div>

          {countIn ? <div className='w-10 h-10 rounded-full flex items-center justify-center bg-text hover:bg-gray1  hover:cursor-pointer' title='Count In' onClick={() => setCountIn(!countIn)}>
            <FaHourglass className="text-gray3" />
          </div>
            :
            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-gray3 hover:bg-gray1  hover:cursor-pointer' title='Count In' onClick={() => setCountIn(!countIn)}>
              <FaHourglass className="text-text" />
            </div>
          }

          {loop ? <div className='w-10 h-10 rounded-full flex items-center justify-center bg-text hover:bg-gray1  hover:cursor-pointer' title='Loop' onClick={() => setLoop(!loop)}>
            <TiArrowLoop className="text-gray3" />
          </div>
            :
            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-gray3 hover:bg-gray1  hover:cursor-pointer' title='Loop' onClick={() => setLoop(!loop)}>
              <TiArrowLoop className="text-text" />
            </div>}

          <div className='w-10 h-10 rounded-full flex items-center justify-center bg-gray3 hover:bg-gray1  hover:cursor-pointer' title='Print' onClick={() => apiRef.current.print()}>
            <FaPrint className="text-text" />
          </div>

          {/* <div className='w-10 h-10 rounded-full flex items-center justify-center bg-gray3 hover:cursor-pointer' title='Download' onClick={() => {
            const exporter = new AlphaTabApi.exporter.Gp7Exporter()
            const data = exporter.export(apiRef.current.score, apiRef.current.settings)

            const a = document.createElement('a')
            a.download = apiRef.current.score.title.lenght > 0 ? apiRef.current.score.title + '.gp' : 'Untitled.gp';
            a.href = URL.createObjectURL(new Blob[data])
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)

          }}>
            <FaDownload className="text-text" />
          </div> */}
            
            
            <select title='Stave Profile' name='Stave Profile' className='h-10 w-fit rounded-md bg-gray3 text-text text-center flex items-center justify-center outline-none' onChange={(e) => { setStaveProfile(e.target.value) }}>
              <option>Tab</option>
              <option>Score</option>
              <option>ScoreTab</option>
              <option>TabMixed</option>
            </select>
            
          


        </div>

      </div>
      


    </div>
  )
}

export default Tabs