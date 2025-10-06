import Image from "next/image";

const Home = () => (
  <section>
    <h1>Welcome to Home</h1>
    <p>This is the home page.</p>
    <Image
      // src="/test.png"
      src="https://picsum.photos/seed/picsum/300/300"
      alt="test"
      width={300}
      height={300}
      sizes="(max-width: 768px) 100vw, 50vw"
      priority
      placeholder="blur"
    />
  </section>
);

export default Home;
