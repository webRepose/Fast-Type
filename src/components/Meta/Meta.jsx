import { Helmet, HelmetProvider } from 'react-helmet-async';

const Meta = ({description, title, keywords, canon}) => {
    return (
        <HelmetProvider>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}></meta>
            <link rel="canonical" href={`https://fast-type-red.vercel.app/${canon}`} />
            <meta name="author" content="https://fast-type-red.vercel.app/"></meta>
            <meta name="keywords" content={keywords}></meta>
            <meta name="apple-mobile-web-app-title" content={title}></meta>
            <meta name="apple-mobile-web-app-capable" content="yes"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:title" content={title}></meta>
            <meta property="og:description" content={description}></meta>
            <meta property="og:image" content="../../../../public/img/logo.png"></meta>
            <meta property="og:url" content="https://fast-type-red.vercel.app/"></meta>
        </Helmet>
    </HelmetProvider>
    );
};

export default Meta;