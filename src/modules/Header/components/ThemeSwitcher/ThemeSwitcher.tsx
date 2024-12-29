import { useContext } from 'react';
import { ThemeContext } from '../../../../contex/Theme';
import { Theme } from '../../../../utils/constants';

import styles from './ThemeSwitcher.module.scss';
import cn from 'classnames';

interface Props {
  className?: string;
}

export const ThemeSwitcher: React.FC<Props> = ({ className }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const isLightTheme = theme === Theme.LIGTH;

  return (
    <div className={cn(styles['theme-switcher'], className)}>
      <button
        className={cn(
          styles['theme-switcher__btn'],
          isLightTheme
            ? styles['theme-switcher__btn--dark']
            : styles['theme-switcher__btn--light'],
        )}
        onClick={() =>
          setTheme((prevTheme: Theme) =>
            prevTheme === Theme.LIGTH ? Theme.DARK : Theme.LIGTH,
          )
        }
        aria-label="Switch theme"
      />
    </div>
  );
};
