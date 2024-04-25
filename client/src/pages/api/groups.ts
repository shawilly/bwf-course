import { STATUS_CODE } from "@/status_codes";
import { GroupsResponse } from "@/types/groups";
import { NextApiError } from "@/types/next-api";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<GroupsResponse | NextApiError>,
) {
  try {
    const { data } = await axios(`${process.env.BWF_API}/groups/`);

    res.status(200 as STATUS_CODE.SUCCESS_OK).json({ groups: data });
  } catch (error) {
    res.status(500 as STATUS_CODE.SERVER_ERROR_BAD_GATEWAY).send({
      message: `Failed to reach server: ${(error as Error).message} (status ${(error as Error).name})`,
    });
  }
}
