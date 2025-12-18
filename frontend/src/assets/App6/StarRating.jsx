import React, { useState } from "react";

export default function StarRating({ initialRating = 0, totalStars = 5, size = 24, onChange }) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);
  const displayRating = hover ?? rating;

  const handleClick = (value) => {
    setRating(value);
    onChange?.(value);
  };

  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, i) => {
        const starIndex = i + 1;
        let fill = 0;
        if (displayRating >= starIndex) fill = 100;
        else if (displayRating + 0.5 >= starIndex) fill = 50;

        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className="cursor-pointer transition-transform hover:scale-110"
            onMouseEnter={() => setHover(starIndex)}
            onMouseLeave={() => setHover(null)}
            onClick={() => handleClick(starIndex)}
          >
            <defs>
              <linearGradient id={`starGrad-${i}`}>
                <stop offset={`${fill}%`} stopColor="gold" />
                <stop offset={`${fill}%`} stopColor="#ddd" />
              </linearGradient>
            </defs>
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 
                 2 9.24l5.46 4.73L5.82 21z"
              fill={`url(#starGrad-${i})`}
            />
          </svg>
        );
      })}
    </div>
  );
}
