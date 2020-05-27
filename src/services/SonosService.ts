import { Sonos } from 'sonos';
import { Group, Track } from "../models";

export class SonosService {

  public static async ring(ip: string, port: string | number, device: Group, debug: boolean = false) {
    const officeSonos = new Sonos(device.host, device.port, null);

    const crntTrack: Track = await officeSonos.currentTrack();
    const crntState: string = await officeSonos.getCurrentState();
    const crntVolume: string = await officeSonos.getVolume();
    if (debug) {
      console.log(device.Name, crntTrack, crntState, crntVolume);
    }

    // Do not run when television is playing on the speaker
    if (!crntTrack.uri.startsWith(`x-sonos-htastream`)) {
      await officeSonos.setVolume(40);
      await officeSonos.play(`http://${ip}:${port}/clips/doorbell.mp3`);
      if (debug) {
        console.log(`${device.Name}: Rang doorbell`);
      }
      await officeSonos.setVolume(crntVolume);
    }
    
    if (crntTrack && 
        crntTrack.uri && 
        !crntTrack.uri.startsWith(`http://${ip}`) && // Don't play a local stream
        !crntTrack.uri.startsWith(`x-sonos-htastream`) && // Watching television
        crntState && 
        crntState === "playing") {
      // Wait for the doorbell sound to finish
      setTimeout(async () => {
        await officeSonos.play();
        if (debug) {
          console.log(`${device.Name}: Resume playback`);
        }
      }, 5000);
    }
  }
}