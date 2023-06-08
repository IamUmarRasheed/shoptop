import React, {  FC } from 'react'
;
const Wrapper:FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="max-w-[1200px] mx-auto my-10 ">
      {children}
    </div>
  );
}
export default Wrapper