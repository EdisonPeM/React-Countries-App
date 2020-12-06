import { useMemo } from 'react';

import generalData from '../data/custom.geo.json';

function useGeoData(code) {
  const memoData = useMemo(() => {
    const { features } = generalData;
    const feature = features.find(f => f.properties.adm0_a3 === code);
    return feature;
  }, [code]);

  return memoData;
}

export default useGeoData;
