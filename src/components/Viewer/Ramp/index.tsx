import "video.js/dist/video-js.css";
import "@samvera/ramp/dist/ramp.css";

import React from "react";
import dynamic from "next/dynamic";

const RampIIIFPlayer: React.ComponentType<{
  manifestUrl: string;
  children: React.ReactNode[];
  playerID?: string;
}> = dynamic(() => import("@samvera/ramp").then((Ramp) => Ramp.IIIFPlayer), {
  ssr: false,
});

const RampMediaPlayer: React.ComponentType = dynamic(
  () => import("@samvera/ramp").then((Ramp) => Ramp.MediaPlayer),
  {
    ssr: false,
  }
);

const RampTranscript: React.ComponentType<{
  playerID: string;
  manifestUrl: string;
  transcripts?: {
    canvasId: number;
    items: { title: string; url: string }[];
  }[];
}> = dynamic(() => import("@samvera/ramp").then((Ramp) => Ramp.Transcript), {
  ssr: false,
});

interface ViewerRampProps {
  iiifContent: string;
}

const ViewerRamp: React.FC<ViewerRampProps> = ({ iiifContent }) => {
  return (
    <RampIIIFPlayer manifestUrl={iiifContent}>
      <RampMediaPlayer />
      <RampTranscript playerID="canopy-ramp" manifestUrl={iiifContent} />
    </RampIIIFPlayer>
  );
};

export default ViewerRamp;
