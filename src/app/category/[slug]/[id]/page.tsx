import React from 'react'
import CategoryInfo from '@/component/category/CategoryInfo'

const page = ({params}) => {
    const {id}=params;
  return (
    <div>
<CategoryInfo myid={id}/>
    </div>
  )
}

export default page