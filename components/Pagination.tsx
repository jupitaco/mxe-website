'use client';

import ReactPaginate from 'react-paginate';

type PageClickEvent = {
  selected: number;
};

interface PaginationProps {
  pageCount: number;
  handlePageClick: (event: PageClickEvent) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  handlePageClick,
}) => {
  return (
    <div>
      <ReactPaginate
        breakLabel='...'
        nextLabel={
          <div className='flex items-center w-full gap-2'>
            <span className=' md:flex'>Next</span>
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        // previousLabel={
        //   <div className='flex items-center w-full gap-2 mr-5'>
        //     <span className=' md:flex'>Previous</span>
        //   </div>
        // }
        renderOnZeroPageCount={undefined}
        containerClassName='paginateContainer  flex items-center justify-center border my-2 rounded-[20px] w-full'
        pageLinkClassName=' paginateText ml-auto w-[36px] h-[36px]  px-7 md:px-[50px]  flex items-center justify-center hover:transform-none '
        previousClassName='hidden'
        // previousClassName='md:!w-[50%]'
        nextClassName='md:ml-5 md:!w-[50%] px-5 nextText'
        // previousLinkClassName='text-[#5D6771] text-sm font-normal capitalize cursor-pointer'
        nextLinkClassName={pageCount - 1 ? 'disabled' : 'cursor-pointer'}
        activeLinkClassName='border rounded-[20px] border-[#0828b1] text-[#0828b1]'
      />
    </div>
  );
};

export default Pagination;
