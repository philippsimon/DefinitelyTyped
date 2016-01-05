interface OIPFAVControlElement extends HTMLObjectElement {
  error: number;
  stop: () => void;
  onPlayStateChange: () => void;
  playPosition: number;
  playState: number;
  playTime: number;
  seek: (pos: number) => void;
  play: (speed: number) => void;
}

interface OIPFApplication {}

interface OIPFApplicationCollection {}

interface OIPFApplicationManager extends HTMLObjectElement {
  onLowmemory: () => void;
  onApplicationLoaded: (application: OIPFApplication) => void;
  onApplicationUnloaded: (application: OIPFApplication) => void;
  getApplicationVisualizationMode: () => number;
  getOwnerApplication: (document: Document) => OIPFApplication;
  getChildApplications: (application: OIPFApplication) => OIPFApplicationCollection;
  gc: () => void;
}
