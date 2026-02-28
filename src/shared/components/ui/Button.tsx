import React, { useRef } from "react";

type ButtonVariant = "primary" | "outline";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}: ButtonProps) => {
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    onClick?.();
  };

  const classes = `button button--${variant} ${className}`;

  return (
    <>
      <button type={type} onMouseDown={handleClick} className={classes}>
      {children}
      <span className="button-arrow">
        <span className="arrow-wrapper">
          <img src="/images/icons/arrow-right.svg" alt="arrow right icon" />
          <img src="/images/icons/arrow-right.svg" alt="arrow right icon" />
        </span>
      </span>
    </button>
      <audio
          ref={audioRef}
          src="/audio/click-sound.mp3"
          preload="auto"
        />
    </>
    
  );
};