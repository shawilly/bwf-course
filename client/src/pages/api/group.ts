import { STATUS_CODE } from "@/status_codes";
import { GroupResponse, IGroup } from "@/types/groups";
import { NextApiError } from "@/types/next-api";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GroupResponse | NextApiError>,
) {
  const { groupId } = req.query;

  try {
    const group: IGroup = (
      await axios(`${process.env.BWF_API}/groups/${groupId}/`)
    ).data;

    res.status(200 as STATUS_CODE.SUCCESS_OK).json({ group });
  } catch (error) {
    res.status(500 as STATUS_CODE.SERVER_ERROR_BAD_GATEWAY).send({
      message: `Failed to reach server: ${(error as Error).message} (status ${(error as Error).name})`,
    });
  }
}
