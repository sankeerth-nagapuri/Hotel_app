import React from 'react';

const Title = ({ title, subTitle, align = 'center' }) => {
  return (
    <div className={`w-full ${align === 'left' ? 'text-left' : 'text-center'}`}>
      <h2 className="text-4xl font-semibold text-gray-900">{title}</h2>
      <p className="text-base text-gray-500 mt-4 max-w-3xl">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
