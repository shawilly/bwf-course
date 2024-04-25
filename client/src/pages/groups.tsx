import DefaultLayout from "@/layouts/default";
import { IGroup } from "@/types/groups";
import { Button, Spinner } from "@nextui-org/react";
import axios from "axios";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface API_URL {
  API?: string;
}

const getStaticProps: GetStaticProps = (async (_context) => {
  console.log(process.env);
  return { props: { API: process.env.BWF_API } };
}) satisfies GetStaticProps<API_URL>;

const Groups = ({ API }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGroups = async () => {
      console.log(await axios("/api/hello"));
      try {
        const { data: groupData } = await axios(`${API}/groups/`);
        setGroups(groupData);
        setLoading(false);
      } catch (error: any) {
        setError("Failed to fetch groups");
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  const handleButtonClick = (group: IGroup) => {
    // go to group/id
    router.push(`/group/${group.id}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div className="flex items-center justify-center">{error}</div>;
  }

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center">
        {groups.length > 0 ? (
          groups.map((group) => (
            <div key={group.id} className="m-3">
              <Button color="primary" onClick={() => handleButtonClick(group)}>
                {group.name} from {group.location}
              </Button>
            </div>
          ))
        ) : (
          <div>No groups found</div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Groups;
