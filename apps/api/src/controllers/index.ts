import { type ApiPath } from "@ctypes/api";
import healthController from "./health";

const apiPaths: ApiPath[] = [
  {
    path: "/health",
    handler: healthController,
  },
];

export default apiPaths;
