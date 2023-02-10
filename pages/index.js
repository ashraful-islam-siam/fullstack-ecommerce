const Home = () => (
  <>
    HeroBanner
    <div>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variantions</p>
    </div>

    <div>
      {['Product 1', 'product 2'].map(product => product)}
    </div>
    Footer
  </>
)

export default Home