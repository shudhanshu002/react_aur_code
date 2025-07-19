import React, { useState } from 'react';

function Random() {
    const [bgColor, setBgColor] = useState("#000000");

    // Function to reset to default color (black)
    const resetToDefault = () => {
        setBgColor("#000000");
    };

    // Function to generate a random color
    const generateRandomColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setBgColor(randomColor);
    };

    return (
        <div
            className="w-screen h-screen text-white flex justify-center items-start gap-x-6"
            style={{ backgroundColor: bgColor }}
        >
            {/* Button to show the current color */}
            <div className="m-5 bg-slate-600 rounded-lg border-none">
                <button className="p-2">
                    {bgColor}
                </button>
            </div>

            {/* Button to change color */}
            <div className="m-5 bg-blue-700 rounded-lg border-none">
                <button className="p-2" onClick={generateRandomColor}>
                    Change Color
                </button>
            </div>

            {/* Button to reset to default color */}
            <div className="m-5 bg-red-600 rounded-lg border-none">
                <button className="p-2" onClick={() => setBgColor("black")}>
                    Back to Default
                </button>
            </div>
        </div>
    );
}

export default Random;
