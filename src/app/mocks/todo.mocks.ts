
export interface Todo {
        task: string;
        status: string;
}

export const TODO: Todo[] = [
	{
		task: 'acheter du pain',
        status: 'todo',
	},
    {
		task: 'appeler la banque',
        status: 'urgent',
	},
    {
		task: 'Ranger la cuisine',
        status: 'inProgress',
	}
];