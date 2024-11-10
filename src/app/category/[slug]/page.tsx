import React from 'react';
import CategoryDetail from '../../../component/category/CategoryDetail'

const page = ({params}) => {
  const {slug} = params; 

  console.log({slug})
  return (
    <div>
      <CategoryDetail myslug={slug}/>
    </div>
  );
};

export default page;
