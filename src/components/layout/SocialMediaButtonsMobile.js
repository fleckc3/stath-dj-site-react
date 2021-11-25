import { Grid } from "@mui/material";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { isMobile } from "react-device-detect";


const SocialMediaButtons = () => {
  const iconSizeDesktop = { height: 75, width: 75};

  return (
    <Grid direction="row" container>
      <Grid item xs={2} textAlign="center">
        <SocialIcon
          bgColor="none"
          fgColor="white"
          style={!isMobile ? iconSizeDesktop : null}
          url="https://open.spotify.com/artist/6RZiysr25NvqsC76k0jcdn"
        />
      </Grid>
      <Grid item xs={2} textAlign="center">
        <SocialIcon
          bgColor="none"
          fgColor="white"
          style={!isMobile ? iconSizeDesktop : null}
          url="https://music.apple.com/us/artist/chris-stath"
          network="itunes"
        />
      </Grid>
      <Grid item xs={2} textAlign="center">
        <SocialIcon
          bgColor="none"
          fgColor="white"
          style={!isMobile ? iconSizeDesktop : null}
          url="https://www.instagram.com/chrisstathmusic"
        />
      </Grid>
      <Grid item xs={2} textAlign="center">
        <SocialIcon
          bgColor="none"
          fgColor="white"
          style={!isMobile ? iconSizeDesktop : null}
          url="https://www.facebook.com/ChrisStathMusic"
        />
      </Grid>
      <Grid item xs={2} textAlign="center">
        <SocialIcon
          bgColor="none"
          fgColor="white"
          style={!isMobile ? iconSizeDesktop : null}
          url="https://soundcloud.com/chrisstathmusic"
        />
      </Grid>
      <Grid item xs={2} textAlign="center">
        <SocialIcon
          bgColor="none"
          fgColor="white"
          style={!isMobile ? iconSizeDesktop : null}
          url="https://www.youtube.com/channel/UCSphXoxsxYp4uK37rVDl6lA"
        />
      </Grid>
    </Grid>
  );
};

export default SocialMediaButtons;
