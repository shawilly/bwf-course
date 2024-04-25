import DefaultLayout from "@/layouts/default";
import { IGroup } from "@/types/groups";
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
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Group = () => {
  const router = useRouter();
  const { id } = router.query;
  const [group, setGroup] = useState<IGroup>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const { data: groupData } = await axios(
          `${process.env.BWF_API}/groups/${id}`,
        );
        setGroup(groupData);
        setLoading(false);
      } catch (error: any) {
        setError("Failed to fetch group");
        setLoading(false);
      }
    };

    fetchGroup();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error || !group) {
    return <div className="flex items-center justify-center">{error}</div>;
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
            <p>Located in {group.location}</p>
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
