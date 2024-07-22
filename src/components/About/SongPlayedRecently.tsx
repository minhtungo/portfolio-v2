import Typography from '@/components/ui/typography';
import { getRecentlyPlayedSongs } from '@/lib/song';
import { Song } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const SongPlayedRecently = async () => {
  const songs = (await getRecentlyPlayedSongs()) as Song[];

  return (
    songs && (
      <div className='flex items-center gap-1.5 w-full overflow-x-auto'>
        {songs?.map((song) => (
          <Link
            className='group relative shrink-0 text-primary-foreground/80 shadow-sm hover:text-primary-foreground transition-all rounded-lg overflow-hidden'
            href={song?.url}
            key={song?.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={song?.thumbnail}
              alt={song?.title}
              width={271}
              height={271}
              className='object-cover brightness-[.45] group-hover:brightness-[.7] duration-300 ease-in-out rounded-lg group-hover:scale-105'
            />
            <div className='absolute inset-x-0 bottom-4 ml-4 flex items-center space-x-3'>
              <div className='w-[236px] break-words text-sm text-ellipsis overflow-hidden'>
                <div className='font-bold'>{song?.title}</div>
                <span className='font-medium'>{song?.artist}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
  );
};
export default SongPlayedRecently;
