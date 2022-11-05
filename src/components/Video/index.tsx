import { VideoContainer } from "./styles";

export function Video() {
  return (
    <VideoContainer>
      <video width="750" height="500" controls>
        <source src="./src/assets/video.mp4" type="video/mp4" />
      </video>
    </VideoContainer>
  );
}
