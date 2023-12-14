import Layout from '@/components/Layout';

function About() {
  return (
    <div className="bg-darkSlate">
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-4">About Page</h1>
        <section>
          <p className="text-black">
            Welcome to our recipe repository! This platform is designed to be a place where you can store and access all your cherished family recipes anytime, anywhere. Whether it's Grandma's secret apple pie recipe or Dad's famous barbecue sauce, this site is here to help you keep your delicious treasures safe and accessible.
          </p>
          <p className="text-black mt-4">
            Browse through your recipes, add new ones, or edit existing ones. We're here to make sure you have your culinary masterpieces at your fingertips whenever inspiration strikes.
          </p>
        </section>
      </main>
    </div>
  );
}

About.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default About;
