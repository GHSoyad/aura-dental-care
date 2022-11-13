import React from 'react';

const OfficeInfoCard = ({ info }) => {
    const { title, description, img, bgColor } = info;

    return (
        <div className={`flex items-center gap-5 shadow-xl ${bgColor} text-white p-8 rounded-xl`}>
            <img src={img} alt="" className='max-w-[80px]' />
            <div className="flex flex-col">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default OfficeInfoCard;