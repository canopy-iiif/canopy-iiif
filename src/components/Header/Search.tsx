"use client";

import { DotsHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { IconButton, TextField } from "@radix-ui/themes";

const Search = () => {
  return (
    <>
      <TextField.Root variant="soft">
        <TextField.Slot>
          <MagnifyingGlassIcon height="24" width="24" />
        </TextField.Slot>
        <TextField.Input placeholder="Search" size="3" />
        <TextField.Slot pr="3">
          <IconButton size="2" variant="ghost">
            <DotsHorizontalIcon height="24" width="24" />
          </IconButton>
        </TextField.Slot>
      </TextField.Root>
    </>
  );
};

export default Search;
