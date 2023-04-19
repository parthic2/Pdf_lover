import { Icon } from "@iconify/react";
import { Stack, IconButton } from "@mui/material";
import { Box } from "@mui/system";

const SocialAuth = () => {
  return (
    <>
      <Box height={15} />
      <Stack direction="row" spacing={2}>
        <IconButton
          sx={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            padding: "0.5675rem",
            flex: 1,
          }}
        >
          <Icon icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
        </IconButton>
        <IconButton
          sx={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            padding: "0.5675rem",
            flex: 1,
          }}
        >
          <Icon
            icon="eva:facebook-fill"
            color="#1877F2"
            width={22}
            height={22}
          />
        </IconButton>
      </Stack>
    </>
  );
};

export default SocialAuth;
