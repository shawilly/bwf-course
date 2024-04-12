"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [groups, setGroups] = useState<Record<string, any>[]>();

  useEffect(() => {
    const fetchGroups = async () => {
      setTimeout(async () => {
        try {
          const { data: groupData } = await axios(
            "http://127.0.0.1:8000/api/groups/",
          );
          setGroups(groupData);
        } catch (error) {
          throw error as Error;
        }
      }, 2000);
    };

    fetchGroups();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {groups
        ? groups.map((group) => (
            <div key={group.name} className="m-3 bg-red-100 text-black">
              {group.name}
              {" from "}
              {group.location}
            </div>
          ))
        : null}
    </div>
  );
};
