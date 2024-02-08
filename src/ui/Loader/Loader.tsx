import React, { FC, memo, useEffect, useState } from 'react';

import styles from './Loader.module.scss';

import LoaderModel from '@/models/LoaderModel/LoaderModel';

interface LoaderProps {
  text: string;
  active: boolean;
}

export const Preloader: FC<LoaderProps> = memo(({ text, active }) => {
  const [dots, setDots] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (dots.length > 2) return setDots('');

      return setDots(dot => `${dot}.`);
    }, 500);

    return () => clearInterval(interval);
  }, [dots]);

  return (
    active && (
      <div className={styles.container}>
        <div className={styles.loader}>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className={styles.text}>{`${text}${dots}`}</span>
      </div>
    )
  );
});

const Loader = memo(() => {
  const { loaderState } = LoaderModel();

  const { active, text } = loaderState;

  return <Preloader text={text} active={active} />;
});

export default Loader;
