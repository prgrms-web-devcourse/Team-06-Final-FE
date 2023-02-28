import { useRouter } from 'next/router';

import Select from '@/components/battle/select';
import Header from '@/components/common/Header';

function Short() {
  const router = useRouter();
  return (
    <>
      <Header
        title='진행중인 대결'
        subButtonType='image'
        subButtonValue={'/images/go-to-list-icon.svg'}
        onClickSubButton={() => router.push(`/post/battle/list`)}
      />
      <Select />
    </>
  );
}

export default Short;
