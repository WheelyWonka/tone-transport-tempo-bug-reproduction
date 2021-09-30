import { Component } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();

  constructor() {
    Tone.Transport.bpm.value = 120;
    Tone.Transport.scheduleRepeat(() => this.sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"], 4), "8n");
  }

  play(): void { 
    Tone.Transport.start()
  }

  stop(): void { 
    Tone.Transport.stop()
  }
}
