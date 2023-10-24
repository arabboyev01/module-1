import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate, useParams } from 'react-router-dom';
import type { FC } from 'react';
import { PaginationProps } from '../../types';

const CustomPagination: FC<PaginationProps> = ({ count }) => {
  const navigate = useNavigate();
  const { page } = useParams();
  const integerPageNumber: number = parseInt(page as string);
  const handlePaginationClick = (newPage: number) => navigate(`/${newPage}`);
  if (count === 1) return <div></div>;

  return (
    <Stack spacing={2}>
      <Pagination
        onChange={(_, index: number) => handlePaginationClick(index)}
        count={count}
        page={integerPageNumber}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};

export default CustomPagination;
