import DefaultLayout from "@/layouts/default";
import { STATUS_CODE } from "@/status_codes";
import { GroupsResponse, IGroup } from "@/types/groups";
import { Button, Spinner } from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import { motion } from "framer-motion";
import Error from "next/error";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Groups = () => {
  const router = useRouter();
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<{
    message: string;
    status: STATUS_CODE;
  } | null>(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response: { data: GroupsResponse } = await axios("/api/groups");

        setGroups(response.data.groups);
        setLoading(false);
      } catch (e) {
        const { status, message } = e as AxiosError;
        setError({
          status: (status as STATUS_CODE) || STATUS_CODE.SERVER_ERROR_INTERNAL,
          message,
        });
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  const handleButtonClick = (group: IGroup) => {
    router.push(`/group/${group.id}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner label="Loading..." color="primary" />
      </div>
    );
  }

  if (error) {
    return <Error statusCode={error.status}>{error.message}</Error>;
  }

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center">
        {groups.length > 0 ? (
          groups.map((group, i) => (
            <motion.div
              key={group.id}
              className="m-3"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 * (i / 1.2) }}
            >
              <Button color="primary" onClick={() => handleButtonClick(group)}>
                {group.name} from {group.location}
              </Button>
            </motion.div>
          ))
        ) : (
          <div>No groups found</div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Groups;
