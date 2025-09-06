const About = () => {
  return (
      <Head>
        {/* Add all your meta tags here */}
        <meta
          name="google-site-verification"
          content="Qw2MRfXNWiiOKsUL4-q9z7cm17nXRU6LCgQCe9ZDrjE"
        />
        <title>Contact - Aleksandar Urosevic</title>
        <meta name="description" content="Personal homepage of Aleksandar Urosevic" />
        <meta name="author" content="Aleksandar Urosevic" />
        <link rel="canonical" href="https://urosevic.vercel.app/" />
        <meta http-equiv="content-language" content="en" />
        <meta name="robots" content="index, follow" />
      </Head>
    
    <div>
       <h1 className="text-4xl font-bold mb-6">Reaching out to me</h1>
      <p>I'd love to hear from you! You can send me an e-mail at: </p>
      <a href="mailto:urosevic@students.uni-mainz.de" className="text-blue-500 underline">
      urosevic@students.uni-mainz.de
      </a>
    </div>
  );
};

export default About;


