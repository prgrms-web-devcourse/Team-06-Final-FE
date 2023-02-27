import { COLOR } from '@/constants/color';
import styled from '@emotion/styled';
import { BattleMusicInfo } from '../types';

function MusicInfo({ musicName, musicUrl, thumbnailUrl, singer }: BattleMusicInfo) {
  return (
    <BattlePageMusic>
      <BattleMusicInfo>
        <MusicThumbnail src={thumbnailUrl}>
          <MusicPlayIcon value={musicUrl}>
            <audio src={musicUrl} controls loop></audio>
          </MusicPlayIcon>
          <MusicPlusIcon src='/images/plus-music.png' value={musicUrl} />
        </MusicThumbnail>
        <MusicTitle>{musicName}</MusicTitle>
        <MusicSinger>{singer}</MusicSinger>
      </BattleMusicInfo>
    </BattlePageMusic>
  );
}

export default MusicInfo;

const BattlePageMusic = styled.div`
  width: 45%;
  height: 18rem;

  background: ${COLOR.white};

  box-shadow: 0px 0px 1.5rem rgba(158, 158, 158, 0.25);
  border-radius: 1rem;
  position: relative;
`;

const BattleMusicInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  width: 100%;
  top: -3rem;
`;

const MusicThumbnail = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-color: ${(props) => props.src === '' && COLOR.lightGray};

  filter: drop-shadow(0 0 1.5rem rgba(158, 158, 158, 0.25));
  border-radius: 1rem;

  width: 80%;
  height: 12rem;

  position: relative;
  margin-bottom: 2rem;
`;

const MusicTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.9rem;
  text-align: center;

  color: ${COLOR.deepBlue};

  margin-bottom: 1rem;
`;

const MusicPlayIcon = styled.div<{ value: string | undefined }>`
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #cccccc;
  box-sizing: content-box;

  & audio {
    margin-top: -0.75rem;
    margin-left: -0.6rem;
    display: ${(prop) => (prop.value === '' ? 'none' : 'block')};
  }

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MusicPlusIcon = styled.img<{ value: string | undefined }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: ${(prop) => (prop.value === '' ? 'block' : 'none')};
`;

const MusicSinger = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.6rem;

  text-align: center;

  color: ${COLOR.gray};
`;
