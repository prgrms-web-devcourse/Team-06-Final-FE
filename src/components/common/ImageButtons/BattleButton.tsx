import styled from '@emotion/styled';

import { COLOR } from '@/constants/color';

interface Props {
  size: number;
  battleAbility: boolean;
  onClick?(): void;
}

function Battle({ size, battleAbility, onClick }: Props) {
  return (
    <BattleContainer onClick={onClick} size={size} battleAbility={battleAbility}>
      <img src={`/images/fire-icon${battleAbility ? '' : '-gray'}.svg`} alt='img' />
      <div>{battleAbility ? '대결신청' : '대결불가'}</div>
    </BattleContainer>
  );
}

export default Battle;

interface StyleProp {
  size: number;
  battleAbility: boolean;
}

const BattleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: ${({ size }: StyleProp) => `${size}rem;`};
    filter: ${({ battleAbility }: StyleProp) => (battleAbility ? `grayscale(0%)` : `grayscale(100%)`)};
  }

  & > div {
    text-align: center;
    color: ${({ battleAbility }: StyleProp) => (battleAbility ? COLOR.white : COLOR.gray)};
    font-size: 1rem;
    padding-top: 0.3rem;
  }
`;
