import React from 'react'
import CategoryInfo from '@/component/category/CategoryInfo'

const page = ({params}) => {
    const {id}=params;
    console.log("my id is",id);
    console.log("ok great");
  return (
    <div>
<CategoryInfo myid={id}/>
    </div>
  )
}

export default page