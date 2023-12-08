import Layout from '../components/layouts/Layout';

function Artisans () {
  return (
      <div className="bg-sandstone">
        <main className="p-8">
          <h1 className="text-4xl font-bold mb-4">Artisans Page</h1>
          <section className="grid grid-cols-3 gap-4">
            {/* Display artisan profiles */}
          </section>
        </main>
      </div>
  );
  }

Artisans.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
};

export default Artisans;
