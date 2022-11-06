import { VideoContainer } from "./styles";
import video1 from "../../assets/video.mp4";

export function Video() {
  return (
    <VideoContainer>
      <video width="750" height="500" controls>
        <source src={video1} type="video/mp4" />
      </video>
    </VideoContainer>
  );
}
