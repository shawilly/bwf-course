export interface IGroup {
  id: number;
  name: string;
  location: string;
}

export type GroupsResponse = {
  groups: IGroup[];
};
