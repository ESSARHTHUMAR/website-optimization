import Filters from '@/components/Filters'
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import { getResources } from '@/sanity/schemas/actions'

const Homepage = async () => {

  const resources = await getResources({
    query: '',
    category: '',
    page: '1',
  })
  

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
        <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
          Header
          <div className='mt-12 felx flex-wrap w-full justify-center gap-16 sm:justify-start'>
            {resources.length > 0 ? (resources.map((resource: any) => (
              <ResourceCard />
            ))) : (
              <p className='body-regular text-white-400'>
                No Resources found.
              </p>
            )}
          </div>
        </section>
      </section>
    </main>
  )
}

export default Homepage