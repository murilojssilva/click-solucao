import { VideoContainer } from "./styles";
import video1 from "../../assets/videos/video.mp4";

export function Video() {
  return (
    <VideoContainer>
      <video width="100%" height="auto" controls>
        <source src={video1} type="video/mp4" />
      </video>
    </VideoContainer>
  );
}
