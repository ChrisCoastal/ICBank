import { FC } from 'react';

type SplitContactsTitleProps = {
  splitCount: number;
  splitAmount: number;
};

const SplitContactsTitle: FC<SplitContactsTitleProps> = ({
  splitCount,
  splitAmount,
}) => {
  return (
    <div className="pb-1 pr-2 text-xs font-light opacity-60">
      {`$${splitAmount.toFixed(2)} split with ${splitCount} other${
        splitCount > 1 ? 's' : ''
      }`}
    </div>
  );
};

export default SplitContactsTitle;
