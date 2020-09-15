import React, { Children } from 'react';
import './style.css'

// Header Buttons (W:230, H:65)
// about Buttons (W:220, H:65)

export const Button = ({ Children }) => {
    return (
        <button className="bg-red-600 my-10 mx-auto text-white custom_styles">
            {Children}
        </button>
    )
}