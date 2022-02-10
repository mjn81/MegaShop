export const Button = ({onSubmit , borderColor , textColor , isFull=false , bgColor=null ,children}) => {
    return (
        <button onClick={onSubmit} className={`block border-2 
        border-${borderColor ? borderColor : 'gray-800'} cursor-pointer  px-4 py-2 rounded-lg font-bold 
        text-${textColor ? textColor : 'gray-400'} 
        ${isFull ? 'w-full' : ''} bg-${bgColor ? bgColor : ''}`}>
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
