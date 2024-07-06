import { GridColumnViewModel } from "../../models/grid-column.viewmodel";

export const TeamsCardGrid: GridColumnViewModel[] = [
    {
        headerName: 'Title',
        dataKey: 'title',
        visible: true,
    },
    {
        headerName: 'Number of Users',
        dataKey: 'numberOfUsers',
        visible: true,
    },
  ]