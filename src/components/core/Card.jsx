export const Card = ({children}) => {
    return ( 
        <div className="shadow-sm border-2 col-span-1  bg-white rounded-md p-6 transition-shadow duration-200 ease-out hover:shadow-xl">
            {children}
        </div>
      );
}
 
