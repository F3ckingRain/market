import React from 'react';

import { useOutletContext } from 'react-router-dom';

import { useNavigateWithUtm } from '@/hooks/useNavigateWithUtm';
import { CardItemType } from '@/types/card';

function ProductPage() {
  const navigate = useNavigateWithUtm();

  const params = useOutletContext<CardItemType>();
  console.log(params);
  return (
    <div>
      <button onClick={() => navigate('/')}>BACK</button>
    </div>
  );
}

export default ProductPage;
