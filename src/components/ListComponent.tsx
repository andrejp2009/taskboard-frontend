// src/components/ListComponent.tsx
import React from 'react';

const List: React.FC<{ list: any; onAddCard: () => void }> = ({ list, onAddCard }) => {
    return (
        <div style={{ margin: '0 10px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', width: '250px' }}>
            <h3>{list.title}</h3>
            {list.tasks.map((task: any) => (
                <div key={task.id} style={{ marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                </div>
            ))}
            <button onClick={onAddCard}>Add a card</button>
        </div>
    );
};

export default List;
