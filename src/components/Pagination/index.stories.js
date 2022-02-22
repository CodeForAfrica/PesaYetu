import React, { useState } from "react";

import Pagination from ".";

export default {
  title: "Components/Pagination",
  argTypes: {},
};

function Template({ itemsCount, page: pageProp, size, ...args }) {
  const [page, setPage] = useState(pageProp);
  const handleChangePage = (_, value) => setPage(value);
  const count = Math.ceil(itemsCount / size);
  return (
    <Pagination
      {...args}
      count={count}
      onChangePage={handleChangePage}
      page={page}
    />
  );
}

export const Default = Template.bind({});

Default.args = {
  page: 1,
  size: 9,
  itemsCount: 101,
};
