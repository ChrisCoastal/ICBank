import { FC } from 'react';

type SplitContactsTitleProps = {
  splitCount: number;
};

const SplitContactsTitle: FC<SplitContactsTitleProps> = ({ splitCount }) => {
  return (
    <div className="pb-1 pr-2 text-xs font-light opacity-60">
      {`Split with ${splitCount} other${splitCount > 1 ? 's' : ''}`}
    </div>
  );
};

export default SplitContactsTitle;
