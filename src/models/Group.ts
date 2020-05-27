export interface Group {
  Coordinator: string;
  ID: string;
  ZoneGroupMember: ZoneGroupMember[];
  Name: string;
  host: string;
  port: number;
  CoordinatorDevice: Function;
}

export interface ZoneGroupMember {
  UUID: string;
  Location: string;
  ZoneName: string;
  Icon: string;
  Configuration: string;
  SoftwareVersion: string;
  SWGen: string;
  MinCompatibleVersion: string;
  LegacyCompatibleVersion: string;
  BootSeq: string;
  TVConfigurationError: string;
  HdmiCecAvailable: string;
  WirelessMode: string;
  WirelessLeafOnly: string;
  HasConfiguredSSID: string;
  ChannelFreq: string;
  BehindWifiExtender: string;
  WifiEnabled: string;
  Orientation: string;
  RoomCalibrationState: string;
  SecureRegState: string;
  VoiceConfigState: string;
  MicEnabled: string;
  AirPlayEnabled: string;
  IdleState: string;
  MoreInfo: string;
}