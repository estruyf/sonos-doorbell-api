import os from 'os';

export class IpService {

  public static get() {
    const interfaces = os.networkInterfaces();
    let endpoints: string[] = [];
    
    for (var name in interfaces) {
      interfaces[name]
        .filter((ipInfo) => ipInfo.internal == false && ipInfo.family == 'IPv4')
        .forEach((ipInfo) => endpoints.push(ipInfo.address));
    }
  
    return endpoints;
  }
}