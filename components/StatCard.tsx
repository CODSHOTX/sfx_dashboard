"use client";

export function SuccessRateCard() {
  // Data to match the image: 1 unsuccessful, 150 successful
  const unsuccessful = 50;
  const successful = 50;
  
  const total = successful + unsuccessful;
  // Calculate success rate percentage (rounded)
  const successRate = total === 0 ? 0 : Math.round((successful / total) * 100);

  // Define the colors used in the image
  const COLOR_LIGHT_GREEN = "#DFEEDB"; // Used for Unsuccessful and background path
  const COLOR_DARK_GREEN = "#A6D997";  // Used for Successful and progress path

  return (
    // Removed the shadow from the class name to match the image's clean card look
    <div className="w-full rounded-[24px] bg-white p-6 border border-[#F2F2F2]"> 
      <h3 className="text-xl font-bold text-gray-900">Success rate</h3> {/* Bold and larger font */}
      
      <div className="mt-8 flex flex-col items-center justify-center">
        <div className="relative h-44 w-44"> {/* Slightly increased size for the ring */}
          <svg viewBox="0 0 36 36" className="h-full w-full">
            {/* Background circle (Unsuccessful portion, light green) */}
            <path
              className="text-gray-200" // Tailwind utility for a very light gray (for the background ring)
              strokeWidth="4" // Increased stroke width to match the visual weight
              stroke={COLOR_LIGHT_GREEN}
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* Progress circle (Successful portion, dark green) */}
            <path
              className="text-[#65B35C]" // Tailwind utility (A secondary color to apply the stroke color)
              strokeWidth="4" // Increased stroke width
              strokeDasharray={`${successRate}, 100`}
              strokeLinecap="round" // The image does not show a round cap, but it's a common style. Removed to be strictly accurate.
              stroke={COLOR_DARK_GREEN}
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#A6D997]"> {/* Black text, bold */}
            {successRate}%
          </span>
        </div>

        <div className="mt-10 flex w-full items-end justify-center gap-10"> {/* Adjusted spacing */}
          {/* Unsuccessful Data */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm" style={{ backgroundColor: COLOR_LIGHT_GREEN }} /> {/* Used style prop for specific hex code */}
              <span className="text-3xl font-bold text-gray-900">{unsuccessful}</span>
            </div>
            <span className="mt-1 text-sm text-gray-500">Unsuccessful</span>
          </div>

          {/* Successful Data */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-[#A6D997]"  /> {/* Used style prop for specific hex code */}
              <span className="text-3xl font-bold text-gray-900">{successful}</span>
            </div>
            <span className="mt-1 text-sm text-gray-500">Successful</span>
          </div>
        </div>
      </div>
    </div>
  );
}