/**
 * GET /info → Retrieves application and runtime information.
 * Returns a JSON object containing:
 * - name: Application name
 * - version: Application version
 * - node: Node.js version
 * - uptime: Application uptime in seconds
 */

import { Router } from "express";
import { getPackageInfo, getRuntimeInfo } from "../../utils/appInfo.js";

const router = Router();

/**
 * Handles GET requests for application info.
 * Merges package and runtime information and responds with it.
 */
router.get("/info", (_req, res) => {
  try {
    const packageInfo = getPackageInfo();
    const runtimeInfo = getRuntimeInfo();
    const info = { ...packageInfo, ...runtimeInfo };

    res.status(200).json(info);
  } catch (error) {
    console.error("Error retrieving application info:", error);
    res.status(500).json({ error: "Failed to retrieve application info." });
  }
});

export default router;