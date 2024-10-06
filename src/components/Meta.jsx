import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = ({ description, title, keywords, canon }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <link rel="canonical" href={`https://fasttyping.vercel.app/${canon}`} />
        <meta name="keywords" content={keywords}></meta>
        <meta name="apple-mobile-web-app-title" content={title}></meta>
        <meta property="og:title" content={title}></meta>
        <meta property="og:description" content={description}></meta>
      </Helmet>
    </HelmetProvider>
  );
};

export default Meta;
