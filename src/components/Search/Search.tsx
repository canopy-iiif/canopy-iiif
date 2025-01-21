import { Button, TextField } from "@radix-ui/themes";
import React, {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import { LocaleString } from "@hooks/useLocale";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { SearchForm } from "@components/Search/Search.styled";
import { useRouter } from "next/router";

const Search = () => {
  const [value, setValue] = useState<string>();
  const router = useRouter();
  const search = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push({
      pathname: "/search",
      query: {
        ...router.query,
        q: value,
      },
    });
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (router) {
      const { q } = router.query;
      if (q && search.current) search.current.value = q as string;
      setValue(q as string);
    }
  }, [router]);

  return (
    <SearchForm onSubmit={handleSubmit} data-testid="search-form">
      <TextField.Root
        onChange={handleSearchChange}
        ref={search}
        size="3"
        style={{ width: "100%" }}
        variant="surface"
        aria-label={LocaleString("searchButton")}
      >
        <TextField.Slot side="left" pl="3">
          <MagnifyingGlassIcon height="20" width="20" />
        </TextField.Slot>
        <TextField.Slot side="right" pr="1" gap="0">
          <Button size="2" type="submit">
            {LocaleString("searchButton")}
          </Button>
        </TextField.Slot>
      </TextField.Root>
    </SearchForm>
  );
};

export default Search;
