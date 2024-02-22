import { useEffect, useState } from 'react';

import { ANIMATION_DELAY } from '@/constants/page';

export const useModal = (opened: boolean) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (opened && !mounted) setMounted(true);
    else if (!opened && mounted) {
      setTimeout(() => setMounted(false), ANIMATION_DELAY);
    }
  }, [mounted, opened]);

  return { mounted };
};
