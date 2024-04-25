import { STATUS_CODE } from "@/status_codes";
import { GroupResponse, IGroup } from "@/types/groups";
import { NextApiError } from "@/types/next-api";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GroupResponse | NextApiError>,
) {
  // id works as a query parameter when the server supports it
  const { id: _id } = req.query;

  try {
    // const { data } = await axios(`${process.env.BWF_API}/group`);
    const exampleGroup: IGroup = {
      id: 1,
      name: "Example Group",
      location: "Example Location",
      description: "Example Description",
    };

    res.status(200 as STATUS_CODE.SUCCESS_OK).json({ group: exampleGroup });
  } catch (error) {
    res.status(500 as STATUS_CODE.SERVER_ERROR_BAD_GATEWAY).send({
      message: `Failed to reach server: ${(error as Error).message} (status ${(error as Error).name})`,
    });
  }
}
