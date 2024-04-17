import React,{useState, useEffect} from 'react'
import {Loader, Card, FormField} from '../components'

//this is a functional component that takes in data and title as props and returns a map of the data
const RenderCards = ({data,title}) => {
    if(data?.length>0) {
    return data.map((post)=> <Card key={post.id} {...post}/>)
    }

    return(
        <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>{title}</h2>
    )
}


const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState([null]);
    const [searchText, setSearchText] = useState('');
  return (
    <section className='max-w-7xl m-auto'>
        <div>
            <h1 className='font-bold text-[#222328] text-[30px]'>The Community Showcase</h1>
            <p className='mt-2 text-[#ffffff] text-[16px] max-w-[500px]'>Browse through the images from ENIGMA</p>
        </div>
        <div className='mt-16'>
            <FormField/>
        </div>

        <div className="mt-10">
            {loading ? (
                <div className='flex justify-center items-center'>
                    <Loader/>
                    </div>
                    ):(
                        <>
                        {/* what is this for???? */}
                        {searchText && (
                            <h2 className='font-medium text-[#404041] text-xl mb-3'>
                                Showing results for <span className='text-[#222328]'>{searchText}</span>
                            </h2>
                        )}
                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                            {searchText?(
                                <RenderCards data={[]}
                                title='No results found'
                                />
                            ) : (
                                <RenderCards data={[]}
                                title='No posts yet'
                                />
                            )
                        }
                        </div>
                        </>
            )}
        </div>
    </section>
  )
}

export default Home