import { ChooseLang } from '../choose-lang/ChoouseLang';
import { FullScreenButton } from '../FullScreenButton/FullScreenButton';
import './NavSettings-styles.scss';

export const NavSettings = () => {
  return (
    <div className="controlls">
      <ChooseLang />
      <FullScreenButton />
    </div>
  );
};
