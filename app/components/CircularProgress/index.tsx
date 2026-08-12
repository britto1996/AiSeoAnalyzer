import { CircularProgress, Stack, Typography } from "@mui/joy";
import React from "react";

const CircularProgressBar = ({
  title,
  score,
}: {
  title: string;
  score: number;
}) => {
  return (
    <Stack
      direction="row"
      spacing={8}
      sx={{ alignItems: "center", flexWrap: "wrap" }}
    >
      <Stack spacing={2}>
        <CircularProgress size="lg" determinate value={score}>
          <Typography className="font-bold">
            <span className="text-white">{score}%</span>
          </Typography>
        </CircularProgress>
      </Stack>
    </Stack>
  );
};

export default CircularProgressBar;
