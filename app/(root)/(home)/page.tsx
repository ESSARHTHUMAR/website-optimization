import Filters from '@/components/Filters'
import Header from '@/components/Header';
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import { getResources, getResourcesPlaylist } from '@/sanity/schemas/actions'

export const revalidate = 900;

interface Props {
  searchParams: {[key: string]: string | undefined }
}

const Homepage = async ({ searchParams }: Props) => {

  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1',
  })
  
  const resourcesPlaylist = await getResourcesPlaylist(); 
  console.log(resourcesPlaylist);
  

  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center flex-col w-full relative min-h-[274px] rounded-xl bg-banner bg-cover bg-center text-center'>
          <h1 className='sm-heading1 heading2 mb-6 text-center text-white'>
            Javascript Mastery Resources
          </h1>
        </div>
        <SearchForm />
        <Filters />
        

        {(searchParams?.query || searchParams?.category) && (
          <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
          <Header 
            title="Most Popular Resources"
            category={searchParams?.category || ''}
            query={searchParams?.query || ''}
           />
          <div className='mt-12 flex flex-wrap w-full justify-center gap-16 sm:justify-start'>
            {resources?.length > 0 ? (resources?.map((resource: any) => (
              <ResourceCard 
                key={resource._id}
                id={resource._id}
                title={resource.title}
                // category={resource.category}

                downloadLink={resource.downloadLink}
                image={resource.image}
                views={resource.views}
                url={resource._id}
              />
            ))) : (
              <p className='body-regular text-white-400'>
                No Resources found.
              </p>
            )}
          </div>
        </section>
        )}
      </section>

      {resourcesPlaylist.map((item: any) => (
        <section key={item._id} className="flex-center mt-6 w-full flex-col sm:mt-20">
          <h1 className='text-white-800 heading3 self-start'>{item.title}</h1>
          <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
            {item.resources.map((resource: any) => (
              <ResourceCard 
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                views={resource.views}
                downloadLink={resource.downloadLink}
              />
            ))}
          </div>  
        </section>
      ))} 

    </main>
  )
}

export default Homepage