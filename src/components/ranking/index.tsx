import styled from '@emotion/styled';
import { useQueries } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { COLOR } from '@/constants/color';

import NoContent from '../common/NoContent';
import MusicListSkeleton from '../common/skeleton/MusicListSkeleton';
import { getMyRanking, getUserRanking } from './api';
import RankingCard from './RankingCard';
import { Ranking } from './types';

interface Props {
  isLimit: boolean;
}

function Ranking({ isLimit }: Props) {
  const router = useRouter();
  const { pathname } = router;

  const [{ data: userRanking, isLoading: isLoadingUserRanking }, { data: myRanking, isLoading: isLoadingMyRanking }] =
    useQueries({
      queries: [
        { queryKey: ['userRanking'], queryFn: () => getUserRanking(isLimit) },
        { queryKey: ['myRanking'], queryFn: getMyRanking },
      ],
    });

  if (isLoadingUserRanking && isLoadingMyRanking) {
    return (
      <>
        <MusicListSkeleton />
        <MusicListSkeleton />
        <MusicListSkeleton />
      </>
    );
  }

  return (
    <RankingContainer className={pathname === '/' ? 'full' : undefined}>
      {userRanking?.ranking.length ? (
        userRanking.ranking.map((user: Ranking) => {
          const isMyRanking = myRanking?.nickname === user.memberNickname && myRanking?.ranking === user.memberRanking;

          return <RankingCard user={user} key={user.memberId} isMyRanking={isMyRanking} />;
        })
      ) : (
        <Empty pathname={pathname}>
          <NoContent text='등록된 유저가 없습니다' isImage width={6} />
        </Empty>
      )}
    </RankingContainer>
  );
}

export default Ranking;

const RankingContainer = styled.div`
  width: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 2rem;

  &.full {
    position: relative;
    left: -2rem;
    width: 100%;
    margin-bottom: 10rem;
    min-height: 30rem;
  }
`;

const Empty = styled.div<{ pathname: string }>`
  text-align: center;
  position: relative;
  top: ${(props) => (props.pathname === '/' ? '50%' : '7.5rem')};
  transform: translateY(-50%);
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  color: ${COLOR.gray};
`;
