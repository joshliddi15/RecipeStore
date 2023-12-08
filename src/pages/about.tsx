 import Layout from '../components/layouts/Layout'
 
function About() {
  return (
    <div className="bg-sandstone">
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <section>
        {/* About content */}
      </section>
    </main>
  </div>
  )
}

About.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default About;