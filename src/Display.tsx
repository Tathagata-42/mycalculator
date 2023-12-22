import React from 'react';

interface DisplayProps {
    input: string;
}

const Display: React.FC<DisplayProps> = ({ input }) => {
    return (
        <div>
            {input}
        </div>
    );
};

export default Display;
