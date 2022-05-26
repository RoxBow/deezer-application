import type { FC } from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useApp } from '@components/AppProvider/App.context';

type SearchProps = Readonly<{
  value: string;
  onChange: (term: string) => void;
}>;

const Search: FC<SearchProps> = ({ value, onChange }) => {
  const { isLoading } = useApp();

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="On verra"
        variant="flushed"
        size="md"
        autoFocus
      />

      {isLoading && (
        <InputRightElement>
          <Spinner size="sm" />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default Search;
