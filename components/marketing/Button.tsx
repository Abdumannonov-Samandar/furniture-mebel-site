import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, type = 'button' }: ButtonProps) => {
    return (
      <button 
        type={type} 
        className="bg-[#B88E2F] gap-2 text-[#FFFFFF] font-[700] text-[16px] leading-6 py-[25px] px-[70px] hover:bg-[#a07a28] transition">
        {children}
      </button>
    );
  };
  
  export default Button;