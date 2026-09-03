import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
// Chromium ships with the container; never let Remotion download its own.
Config.setChromiumOpenGlRenderer("swangle");
