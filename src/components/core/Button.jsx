export const Button = ({onSubmit , borderColor=null , textColor=null , isFull=false , bgColor=null ,children}) => {
    return (
        <button onClick={onSubmit} className={`block border-2 cursor-pointer px-4 py-2 rounded-lg font-bold 
        ${borderColor ? `border-${borderColor}` : 'border-gray-300'} 
        ${textColor ? `text-${textColor}` : 'text-gray-400'} 
        ${isFull ? 'w-full' : ''} ${bgColor ? `bg-${bgColor}`: ''}`}>
            {children}
        </button>
      );
}

export const ButtonOutline = ({onSubmit ,children}) => {
    return (
        <button onClick={onSubmit} className='block  cursor-pointer p-2 font-bold text-xl text-gray-500'>
            {children}
        </button>
    )
}
