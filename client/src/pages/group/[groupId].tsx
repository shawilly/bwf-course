import DefaultLayout from "@/layouts/default";
import { STATUS_CODE } from "@/src/status_codes";
import { GroupResponse, IGroup } from "@/types/groups";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
  Spinner,
} from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import Error from "next/error";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Group = () => {
  const router = useRouter();
  const { groupId } = router.query;
  const [group, setGroup] = useState<IGroup | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<{
    message: string;
    status: STATUS_CODE;
  } | null>(null);

  useEffect(() => {
    const fetchGroup = async () => {
      if (!groupId) return;

      try {
        const response: { data: GroupResponse } = await axios(
          `/api/group?groupId=${groupId}`,
        );

        setGroup(response.data.group);
        setLoading(false);
      } catch (e) {
        console.log("error", e);
        const { status, message } = e as AxiosError;
        setError({
          status: (status as STATUS_CODE) || STATUS_CODE.SERVER_ERROR_INTERNAL,
          message,
        });
        setLoading(false);
      }
    };

    fetchGroup();
  }, [groupId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner label="Loading..." color="primary" />
      </div>
    );
  }

  if (error || !group) {
    const status = error?.status || 500;
    const message = error?.message || "Something went wrong.";
    return <Error statusCode={status}>{message}</Error>;
  }

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center pt-7">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">{group.name}</p>
              <p className="text-small text-default-500">id: {group.id}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="font-semibold">{group.location}</p>
            <br />
            <p>{group.description}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="https://github.com/nextui-org/nextui">
              Link here to something
            </Link>
          </CardFooter>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default Group;
