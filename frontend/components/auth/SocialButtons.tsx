"use client";

import React from "react";

interface SocialButtonsProps {
  onGoogleClick?: () => void;
  onLinkedInClick?: () => void;
}

export const SocialButtons: React.FC<SocialButtonsProps> = ({
  onGoogleClick,
  onLinkedInClick,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      {/* Google Button */}
      <button
        type="button"
        onClick={onGoogleClick}
        className="flex-1 h-11 flex items-center justify-center gap-2.5 rounded-lg border border-bdr-DEFAULT bg-white text-t-2 text-[14px] font-semibold hover:bg-[#F8FAF9] hover:border-bdr-2 active:scale-[0.98] transition-all duration-200 cursor-pointer"
      >
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]">
          <path
            fill="#EA4335"
            d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3A11.91 11.91 0 0 0 12 0C7.27 0 3.19 2.72 1.24 6.72l4.026 3.045Z"
          />
          <path
            fill="#4285F4"
            d="M23.518 12.3c0-.827-.074-1.623-.21-2.3H12v4.582h6.458a5.52 5.52 0 0 1-2.4 3.627l3.774 2.927c2.207-2.036 3.686-5.036 3.686-8.836Z"
          />
          <path
            fill="#FBBC05"
            d="M5.266 14.235A7.098 7.098 0 0 1 4.91 12c0-.791.135-1.555.356-2.265L1.24 6.69A11.962 11.962 0 0 0 0 12c0 1.92.454 3.737 1.258 5.355l4.008-3.12Z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.958-1.077 7.94-2.918l-3.774-2.927a7.127 7.127 0 0 1-4.166 1.154 7.077 7.077 0 0 1-6.734-4.855L1.258 17.58A11.91 11.91 0 0 0 12 24Z"
          />
        </svg>
        <span>Google</span>
      </button>

      {/* LinkedIn Button */}
      <button
        type="button"
        onClick={onLinkedInClick}
        className="flex-1 h-11 flex items-center justify-center gap-2.5 rounded-lg border border-bdr-DEFAULT bg-white text-t-2 text-[14px] font-semibold hover:bg-[#F8FAF9] hover:border-bdr-2 active:scale-[0.98] transition-all duration-200 cursor-pointer"
      >
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="#0A66C2">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
        <span>LinkedIn</span>
      </button>
    </div>
  );
};

export default SocialButtons;
