import React from 'react'
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

const getBlogs = async () => {
  return client.fetch(`*[_type == "blog"]`)
};
export default  async function page() {
  const blogs = await getBlogs();

  return (
    <main className= 'p-10'>
    <div className=' font-extrabold text-3xl  flex justify-center items-center'>
      <h1 className='italic'>Sanity Integration</h1>
      </div>
      <div className='flex gap-5'>
        {blogs.map((blog)=>(
          <div key={blog.id} className='border rounded-md shadow-lg p-5'>
            <h1>{blog.Title}</h1>
            <p>{blog.description} </p>
            {/* <Image src={urlFor} 
            width={200} 
            height={200} 
            alt="image" /> */}
          </div>
        ))}
      </div>
      </main>
  )
}   