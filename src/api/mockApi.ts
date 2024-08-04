export const getBoardById = async (id: string) => {
    // Фиктивные данные для тестирования
    return {
        id,
        name: 'Sample Board',
        lists: [
            {
                id: '1',
                title: 'To Do',
                tasks: [
                    { id: '1', title: 'Sample Task 1', description: 'Description for task 1' },
                    { id: '2', title: 'Sample Task 2', description: 'Description for task 2' }
                ]
            },
            {
                id: '2',
                title: 'In Progress',
                tasks: [
                    { id: '3', title: 'Sample Task 3', description: 'Description for task 3' }
                ]
            },
            {
                id: '3',
                title: 'Done',
                tasks: []
            }
        ]
    };
};
