export interface IGroup {
  id: number;
  name: string;
  location: string;
  description?: string;
}

export type GroupResponse = {
  group: IGroup;
};

export type GroupsResponse = {
  groups: IGroup[];
};
