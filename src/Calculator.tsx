import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');

    const handleKeyPress = (key: string) => {
        if (key === '=') {
            try {
                setInput(eval(input).toString());
            } catch (e) {
                setInput('Error');
            }
        } else if (key === 'C') {
            setInput('');
        } else {
            setInput(input + key);
        }
    };

    return (
        <div>
            <Display input={input} />
            <Keypad onKeyPress={handleKeyPress} />
        </div>
    );
};

export default Calculator;
