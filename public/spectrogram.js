// Create an instance of WaveSurfer
const ws = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'rgb(200, 0, 200)',
  progressColor: 'rgb(100, 0, 100)',
  url: '/public/sample.mp3',
  sampleRate: 22050,
})

// Initialize the Spectrogram plugin
ws.registerPlugin(
  Spectrogram.create({
    labels: true,
    height: 200,
    splitChannels: true,
  }),
)

// Play on click
ws.once('interaction', () => {
  ws.play()
})
