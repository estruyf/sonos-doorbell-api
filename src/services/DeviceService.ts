import { Sonos, DeviceDiscovery } from 'sonos';
import { Group } from '../models';

export class DeviceService {

  public static getAll(): Promise<Group[]> {
    return new Promise<Group[]>(resolve => {
      DeviceDiscovery().once('DeviceAvailable', async (device) => {
        const sonos = new Sonos(device.host, device.port, null);
        const groups = await sonos.getAllGroups();
        resolve(groups);
      });
    })
  }
}