export const Button = ({onSubmit ,children}) => {
    return (
        <button onClick={onSubmit} className='block border-2 cursor-pointer border-gray-300 px-4 py-2 rounded-lg font-bold text-gray-400'>
            {children}
        </button>
      );
}
 
export const ButtonOutline = ({onSubmit ,children}) => {
    return (
        <button onClick={onSubmit} className='block  cursor-pointer p-2 font-bold text-primar text-xl text-gray-500'>
            {children}
        </button>
    )
}
