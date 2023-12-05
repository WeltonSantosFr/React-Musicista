import './styles.css'
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState, useRef } from 'react'
// @ts-ignore
import { AlphaTabApi, Score, Track } from '@coderline/alphatab'

import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { GiGuitarHead, GiGuitarBassHead, GiDrumKit, GiSaxophone, GiMusicalKeyboard, GiMicrophone } from "react-icons/gi";
import { PiMetronomeBold } from "react-icons/pi";


const Tabs = () => {

  const apiRef = useRef<AlphaTabApi | null>(null);
  const settings = useRef<object | null>(null)

  const [loading, setLoading] = useState(true)
  const [playStatus, setPlayStatus] = useState<string>("stop")
  const [selectTrack, setSelectTrack] = useState<boolean>(false)
  const [tracks, setTracks] = useState<Array<object>>([])
  const [trackToRender, setTrackToRender] = useState<Array<number>>([0])
  const [songFile, setSongFile] = useState(`src/assets/Lamb of God - Hourglass.gp5`)
  const [staveProfile, setStaveProfile] = useState("Tab")
  const [metronome, setMetronome] = useState<boolean>(false)



  useEffect(() => {

    settings.current = {
      core: {
        fontDirectory: 'src/font/',
      },
      display: {
        staveProfile: staveProfile,
        barsPerRow: 4,
        layoutMode: "Page",
        justifyLastSystem: true,
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
    apiRef.current.load(songFile, trackToRender)

    apiRef.current.scoreLoaded.on((score: Score) => {
      setTracks(score.tracks)
      score.tracks.forEach((track: Track) => {
        if (track.index !== trackToRender) {
          apiRef.current.changeTrackVolume(track, 0.5)
        }
      })
    })

    apiRef.current.metronomeVolume = 1.0


  }, [songFile, trackToRender, staveProfile])

  useEffect(() => {
      if (metronome) {
        apiRef.current.metronomeVolume = 1.0
        apiRef.current.updateSettings(settings.current)
      }
      if (!metronome) {
        apiRef.current.metronomeVolume = 0.0
        apiRef.current.updateSettings(settings.current)
      }
  }, [metronome])


  return (
    <div className='flex w-full min-h-full'>

      <div id='alphaTab' className='w-full h-[100vh] bg-darker overflow-y-scroll'></div>



      <div className='at-controls w-14 min-h-full bg-darker'>
        <div className='at-controls-left flex flex-col items-center mt-2 gap-4'>

          <div className='at-player-stop hover:cursor-pointer bg-gray3 w-10 h-10 rounded-full flex items-center justify-center' onClick={() => {
            apiRef.current.stop()
            setPlayStatus("stop")
            document.querySelector('#alphaTab')!.scrollTop = 0;
            
          }}>
            <FaStop className="text-text" />
          </div>
          <div className='at-player-play-pause hover:cursor-pointer bg-gray3 w-10 h-10 rounded-full flex items-center justify-center' onClick={() => {
            if (playStatus === "stop" || playStatus === "pause") {
              apiRef.current.play()
              setPlayStatus("play")
              return
            }
            apiRef.current.pause()
            setPlayStatus("pause")
          }}>
            {playStatus === "stop" || playStatus === "pause" ? <FaPlay className="text-text" /> : <FaPause className="text-text" />}
          </div>
          <div className='at-player-play-pause hover:cursor-pointer bg-gray3 w-10 h-10 rounded-full flex items-center justify-center' onClick={() => setSelectTrack(!selectTrack)}>
            <GiGuitarHead className="text-text" />
          </div>
          {
            metronome ? <div className='at-player-play-pause hover:cursor-pointer bg-gray1 w-10 h-10 rounded-full flex items-center justify-center' onClick={() => setMetronome(!metronome)}>
              <PiMetronomeBold className="text-text" />
            </div>
              :
              <div className='at-player-play-pause hover:cursor-pointer bg-gray3 w-10 h-10 rounded-full flex items-center justify-center' onClick={() => setMetronome(!metronome)}>
                <PiMetronomeBold className="text-text" />
              </div>
          }


        </div>
        {selectTrack ? <div className='w-fit h-fit bg-gray3 fixed top-[200px] right-14 z-50 rounded-md'>
          {tracks ? tracks.map((track: Track) => <div key={track.index} className='text-text p-2 hover:cursor-pointer hover:bg-gray2 flex items-center gap-2' onClick={() => {
            setTrackToRender(() => [track.index])
          }}>
            {track.name.toLowerCase().includes('guitar') ? <GiGuitarHead className="text-text" /> : null}
            {track.name.toLowerCase().includes('bass') ? <GiGuitarBassHead className="text-text" /> : null}
            {track.name.toLowerCase().includes('brass') ? <GiSaxophone className="text-text" /> : null}
            {track.name.toLowerCase().includes('drum') ? <GiDrumKit className="text-text" /> : null}
            {track.name.toLowerCase().includes('synth') ? <GiMusicalKeyboard className="text-text" /> : null}
            {track.name.toLowerCase().includes('vocal') ? <GiMicrophone className="text-text" /> : null}
            <p>{track.name}</p>
          </div>) : null}
        </div> : null}
      </div>

    </div>
  )
}

export default Tabs