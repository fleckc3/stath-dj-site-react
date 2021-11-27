import BackgroundVideo from "../../components/background-video/BackgroundVideo";
import MusicVideoContent from "../../components/common/MusicVideoContent";
import Testimonial from "../../components/common/Testimonial";

function LandingPage({ animate }) {
  return (
    <>
      <BackgroundVideo animate={animate} />
      <MusicVideoContent />
      <Testimonial />
    </>
  );
}

export default LandingPage;
