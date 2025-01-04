const appName = "Mots à Moi";

export const SEO: SEOProps = {
  home: {
    title: `${appName} | Non Lus`,
  },
  allWords: {
    title: `${appName} | Tous mes mots`,
  },
  wordsSearch: {
    title: `${appName} | Recherche`,
  },
  login: {
    title: `${appName} | Connexion`,
  },
  page404: {
    title: `${appName} | 404 - Not Found`,
  },
  page500: {
    title: `${appName} | 500 - Not Found`,
  },
};

interface ObjectSEO {
  title: string;
}

interface SEOProps {
  home: ObjectSEO;
  allWords: ObjectSEO;
  wordsSearch: ObjectSEO;
  login: ObjectSEO;
  page404: ObjectSEO;
  page500: ObjectSEO;
}
